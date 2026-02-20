/**
 * Validate a TipTap document against exercise validations.
 * Returns { passed: boolean, results: [...], errors: number }
 */
export function validateExercise(validations, editorJSON) {
  const results = [];
  let errors = 0;

  for (const v of validations) {
    const result = validateSingle(v, editorJSON);
    results.push(result);
    if (!result.passed) errors++;
  }

  return { passed: errors === 0, results, errors };
}

function getTextContent(doc) {
  if (!doc || !doc.content) return '';
  let text = '';
  for (const node of doc.content) {
    text += getNodeText(node);
  }
  return text;
}

function getNodeText(node) {
  if (node.type === 'text') return node.text || '';
  if (!node.content) return '';
  let text = '';
  for (const child of node.content) {
    text += getNodeText(child);
  }
  return text;
}

function findNodes(doc, nodeType) {
  const found = [];
  function walk(node) {
    if (node.type === nodeType) found.push(node);
    if (node.content) node.content.forEach(walk);
  }
  if (doc) walk(doc);
  return found;
}

function findTextWithMark(doc, markType, textMatch) {
  const results = [];
  function walk(node) {
    if (node.type === 'text' && node.marks) {
      const hasMark = node.marks.some((m) => m.type === markType);
      if (hasMark) {
        if (!textMatch || (node.text && node.text.toLowerCase().includes(textMatch.toLowerCase()))) {
          results.push(node);
        }
      }
    }
    if (node.content) node.content.forEach(walk);
  }
  if (doc) walk(doc);
  return results;
}

function getListItems(doc, listType) {
  const lists = findNodes(doc, listType);
  const items = [];
  for (const list of lists) {
    if (list.content) {
      for (const item of list.content) {
        if (item.type === 'listItem') items.push(item);
      }
    }
  }
  return items;
}

function getTableRows(doc) {
  const tables = findNodes(doc, 'table');
  if (tables.length === 0) return [];
  const rows = [];
  for (const table of tables) {
    if (table.content) {
      for (const row of table.content) {
        if (row.type === 'tableRow') rows.push(row);
      }
    }
  }
  return rows;
}

function getTableCell(doc, rowIdx, colIdx) {
  const rows = getTableRows(doc);
  if (rowIdx >= rows.length) return null;
  const row = rows[rowIdx];
  if (!row.content) return null;
  const cells = row.content.filter((c) => c.type === 'tableCell' || c.type === 'tableHeader');
  if (colIdx >= cells.length) return null;
  return cells[colIdx];
}

function getParagraphs(doc) {
  return findNodes(doc, 'paragraph');
}

function validateSingle(v, doc) {
  const { type, stepIndex } = v;

  switch (type) {
    case 'textContent': {
      const text = getTextContent(doc);
      const passed = text.toLowerCase().includes(v.expected.toLowerCase());
      return { type, stepIndex, passed };
    }

    case 'hasMark': {
      const results = findTextWithMark(doc, v.mark, v.textMatch);
      return { type, stepIndex, passed: results.length > 0 };
    }

    case 'hasNode': {
      const nodes = findNodes(doc, v.nodeType);
      if (v.attrs) {
        const matching = nodes.filter((n) => {
          if (!n.attrs) return false;
          return Object.entries(v.attrs).every(([k, val]) => n.attrs[k] === val);
        });
        return { type, stepIndex, passed: matching.length > 0 };
      }
      return { type, stepIndex, passed: nodes.length > 0 };
    }

    case 'hasTable': {
      const rows = getTableRows(doc);
      const minRows = v.minRows || 1;
      const minCols = v.minCols || 1;
      if (rows.length < minRows) return { type, stepIndex, passed: false };
      const firstRowCols = rows[0]?.content?.filter(
        (c) => c.type === 'tableCell' || c.type === 'tableHeader'
      ).length || 0;
      return { type, stepIndex, passed: firstRowCols >= minCols };
    }

    case 'textAlign': {
      const paragraphs = getParagraphs(doc);
      const idx = v.paragraphIndex || 0;
      if (idx >= paragraphs.length) return { type, stepIndex, passed: false };
      const p = paragraphs[idx];
      const align = p.attrs?.textAlign || 'left';
      return { type, stepIndex, passed: align === v.expected };
    }

    case 'hasList': {
      const listType = v.listType || 'bulletList';
      const items = getListItems(doc, listType);
      const minItems = v.minItems || 1;
      return { type, stepIndex, passed: items.length >= minItems };
    }

    case 'listItemContent': {
      const listType = v.listType || 'bulletList';
      const items = getListItems(doc, listType);
      const idx = v.itemIndex || 0;
      if (idx >= items.length) return { type, stepIndex, passed: false };
      const itemText = getNodeText(items[idx]).toLowerCase();
      return { type, stepIndex, passed: itemText.includes(v.expected.toLowerCase()) };
    }

    case 'paragraphCount': {
      const paragraphs = getParagraphs(doc);
      const nonEmpty = paragraphs.filter((p) => getNodeText(p).trim().length > 0);
      return { type, stepIndex, passed: nonEmpty.length >= v.expected };
    }

    case 'cellContent': {
      const cell = getTableCell(doc, v.row, v.col);
      if (!cell) return { type, stepIndex, passed: false };
      const cellText = getNodeText(cell).toLowerCase().trim();
      return { type, stepIndex, passed: cellText.includes(v.expected.toLowerCase()) };
    }

    case 'hasUnderline': {
      const results = findTextWithMark(doc, 'underline', v.textMatch);
      return { type, stepIndex, passed: results.length > 0 };
    }

    default:
      return { type, stepIndex, passed: false, error: `Unknown validation type: ${type}` };
  }
}

/**
 * Check which steps are completed based on validations
 */
export function getCompletedSteps(validations, doc) {
  const stepMap = new Map();
  for (const v of validations) {
    const result = validateSingle(v, doc);
    const idx = v.stepIndex;
    if (!stepMap.has(idx)) stepMap.set(idx, true);
    if (!result.passed) stepMap.set(idx, false);
  }
  return stepMap;
}
