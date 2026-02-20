import { useI18n } from '../context/I18nContext';

const TERMS = [
  { de: 'Absatz', en: 'Paragraph', desc: 'Ein Textblock, getrennt durch Enter' },
  { de: 'Schriftart', en: 'Font', desc: 'Das Aussehen der Buchstaben (z.B. Arial)' },
  { de: 'Fett', en: 'Bold', desc: 'Text dicker machen (Strg+B)' },
  { de: 'Kursiv', en: 'Italic', desc: 'Text schraeg stellen (Strg+I)' },
  { de: 'Unterstrichen', en: 'Underline', desc: 'Linie unter dem Text (Strg+U)' },
  { de: 'Ueberschrift', en: 'Heading', desc: 'Grosser Text fuer Titel und Abschnitte' },
  { de: 'Aufzaehlung', en: 'Bullet List', desc: 'Liste mit Punkten oder Nummern' },
  { de: 'Tabelle', en: 'Table', desc: 'Daten in Zeilen und Spalten ordnen' },
  { de: 'Ausrichtung', en: 'Alignment', desc: 'Text links, zentriert oder rechts' },
  { de: 'Einrueckung', en: 'Indent', desc: 'Text weiter nach rechts ruecken' },
];

export default function Glossary() {
  const { t } = useI18n();

  return (
    <div className="glossary">
      <h1 className="glossary__title">{t('glossary.title')}</h1>
      <table className="glossary__table">
        <thead>
          <tr>
            <th>{t('glossary.german')}</th>
            <th>{t('glossary.english')}</th>
            <th>{t('glossary.description')}</th>
          </tr>
        </thead>
        <tbody>
          {TERMS.map((term) => (
            <tr key={term.de}>
              <td><strong>{term.de}</strong></td>
              <td>{term.en}</td>
              <td>{term.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
