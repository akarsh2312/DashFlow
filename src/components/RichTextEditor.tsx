import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import { Box, Button, HStack } from '@chakra-ui/react';
import { Bold, Italic, Underline as UnderlineIcon, List } from 'lucide-react';

const RichTextEditor = ({ content, onChange }: { content: string; onChange: (html: string) => void }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false, // Disable the built-in bulletList to use our custom configuration
      }),
      Underline,
      BulletList.configure({
        keepMarks: true,
        keepAttributes: false,
      }),
      ListItem,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" p={4}>
      <HStack spacing={2} mb={4}>
        <Button
          size="sm"
          colorScheme={editor.isActive('bold') ? 'blue' : 'gray'}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </Button>
        <Button
          size="sm"
          colorScheme={editor.isActive('italic') ? 'blue' : 'gray'}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </Button>
        <Button
          size="sm"
          colorScheme={editor.isActive('underline') ? 'blue' : 'gray'}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon size={16} />
        </Button>
        <Button
          size="sm"
          colorScheme={editor.isActive('bulletList') ? 'blue' : 'gray'}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </Button>
      </HStack>
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        p={2}
        minH="200px"
        className="prose max-w-none"
        sx={{
          '& ul': {
            listStyleType: 'disc',
            paddingLeft: '1.5rem',
            marginY: '0.5rem',
          },
          '& li': {
            marginY: '0.25rem',
          },
        }}
      >
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
};

export default RichTextEditor;