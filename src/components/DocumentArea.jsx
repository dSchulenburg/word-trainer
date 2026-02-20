import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Placeholder from '@tiptap/extension-placeholder';
import WordToolbar from './WordToolbar';
import { useGame } from '../context/GameContext';
import { useI18n } from '../context/I18nContext';

export default function DocumentArea({ exercise, onDocChange }) {
  const { notifyTextWrite } = useGame();
  const { t } = useI18n();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Table.configure({ resizable: false }),
      TableRow,
      TableCell,
      TableHeader,
      TextStyle,
      Color,
      Placeholder.configure({
        placeholder: t('editor.placeholder'),
      }),
    ],
    content: exercise.initialContent || { type: 'doc', content: [{ type: 'paragraph' }] },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      notifyTextWrite();
      if (onDocChange) onDocChange(json);
    },
  });

  useEffect(() => {
    if (editor && exercise.initialContent) {
      editor.commands.setContent(exercise.initialContent);
    }
  }, [exercise.id]);

  useEffect(() => {
    return () => {
      if (editor) editor.destroy();
    };
  }, [editor]);

  return (
    <div className="document-area">
      <WordToolbar editor={editor} exercise={exercise} />
      <div className="document-area__paper">
        <EditorContent editor={editor} className="document-area__editor" />
      </div>
    </div>
  );
}
