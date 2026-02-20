import { useI18n } from '../context/I18nContext';
import { useGame } from '../context/GameContext';

const TOOLBAR_LEVELS = {
  1: ['bold', 'italic', 'heading'],
  2: ['bulletList', 'orderedList'],
  3: ['table'],
  4: ['color', 'textAlign'],
  5: ['underline', 'horizontalRule'],
  6: [],
};

function getEnabledTools(levelId) {
  const tools = new Set();
  for (let i = 1; i <= levelId; i++) {
    for (const tool of (TOOLBAR_LEVELS[i] || [])) {
      tools.add(tool);
    }
  }
  return tools;
}

const TOOL_BUTTONS = [
  { id: 'bold', label: 'B', title: 'toolbar.bold', style: { fontWeight: 'bold' }, action: (e) => e.chain().focus().toggleBold().run(), isActive: (e) => e.isActive('bold') },
  { id: 'italic', label: 'I', title: 'toolbar.italic', style: { fontStyle: 'italic' }, action: (e) => e.chain().focus().toggleItalic().run(), isActive: (e) => e.isActive('italic') },
  { id: 'underline', label: 'U', title: 'toolbar.underline', style: { textDecoration: 'underline' }, action: (e) => e.chain().focus().toggleUnderline().run(), isActive: (e) => e.isActive('underline') },
  { id: 'heading', label: 'H1', title: 'toolbar.heading1', action: (e) => e.chain().focus().toggleHeading({ level: 1 }).run(), isActive: (e) => e.isActive('heading', { level: 1 }) },
  { id: 'heading', label: 'H2', title: 'toolbar.heading2', subId: 'h2', action: (e) => e.chain().focus().toggleHeading({ level: 2 }).run(), isActive: (e) => e.isActive('heading', { level: 2 }) },
  { id: 'bulletList', label: '•', title: 'toolbar.bulletList', action: (e) => e.chain().focus().toggleBulletList().run(), isActive: (e) => e.isActive('bulletList') },
  { id: 'orderedList', label: '1.', title: 'toolbar.orderedList', action: (e) => e.chain().focus().toggleOrderedList().run(), isActive: (e) => e.isActive('orderedList') },
  { id: 'table', label: '⊞', title: 'toolbar.table', action: (e) => e.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(), isActive: () => false },
  { id: 'textAlign', label: '≡←', title: 'toolbar.alignLeft', subId: 'left', action: (e) => e.chain().focus().setTextAlign('left').run(), isActive: (e) => e.isActive({ textAlign: 'left' }) },
  { id: 'textAlign', label: '≡↔', title: 'toolbar.alignCenter', subId: 'center', action: (e) => e.chain().focus().setTextAlign('center').run(), isActive: (e) => e.isActive({ textAlign: 'center' }) },
  { id: 'textAlign', label: '≡→', title: 'toolbar.alignRight', subId: 'right', action: (e) => e.chain().focus().setTextAlign('right').run(), isActive: (e) => e.isActive({ textAlign: 'right' }) },
  { id: 'color', label: 'A', title: 'toolbar.colorRed', subId: 'red', style: { color: '#e74c3c', fontWeight: 'bold' }, action: (e) => e.chain().focus().setColor('#e74c3c').run(), isActive: () => false },
  { id: 'color', label: 'A', title: 'toolbar.colorBlue', subId: 'blue', style: { color: '#003366', fontWeight: 'bold' }, action: (e) => e.chain().focus().setColor('#003366').run(), isActive: () => false },
  { id: 'color', label: 'A', title: 'toolbar.colorGreen', subId: 'green', style: { color: '#27ae60', fontWeight: 'bold' }, action: (e) => e.chain().focus().setColor('#27ae60').run(), isActive: () => false },
  { id: 'horizontalRule', label: '―', title: 'toolbar.horizontalRule', action: (e) => e.chain().focus().setHorizontalRule().run(), isActive: () => false },
];

export default function WordToolbar({ editor, exercise }) {
  const { t } = useI18n();
  const { notifyFormatApply } = useGame();

  if (!editor) return null;

  const enabledTools = exercise.enabledTools
    ? new Set(exercise.enabledTools)
    : getEnabledTools(exercise.levelId);

  const visibleButtons = TOOL_BUTTONS.filter((btn) => enabledTools.has(btn.id));

  return (
    <div className="word-toolbar">
      {visibleButtons.map((btn) => {
        const key = btn.subId ? `${btn.id}-${btn.subId}` : btn.id;
        const active = btn.isActive(editor);
        return (
          <button
            key={key}
            className={`word-toolbar__btn ${active ? 'word-toolbar__btn--active' : ''}`}
            onClick={() => {
              btn.action(editor);
              notifyFormatApply();
            }}
            title={t(btn.title)}
            style={btn.style}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
}

export { getEnabledTools, TOOLBAR_LEVELS };
