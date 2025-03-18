
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";

const TextEditer = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle,
            Color,
            Link,
            Image,
            Table.configure({
                resizable: true, // Allow table resizing
            }),
            TableRow,
            TableCell,
            TableHeader,
        ],
        content: "<p>Start writing...</p>",
    });

    if (!editor) return null;


    return (
        <div className="w-full mx-auto my-6 p-4 border rounded-lg shadow-lg bg-white">
            {/* Toolbar */}
            <div className="flex gap-2 p-2 border-b bg-gray-100">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-2 rounded-md ${editor.isActive("bold") ? "bg-gray-300" : "bg-white"}`}
                >
                    <b>B</b>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-2 rounded-md ${editor.isActive("italic") ? "bg-gray-300" : "bg-white"}`}
                >
                    <i>I</i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className="p-2 rounded-md bg-white"
                >
                    <u>U</u>
                </button>
                <button
                    onClick={() => editor.chain().focus().setColor("#ffcc00").run()}
                    className="p-2 rounded-md bg-yellow-300"
                ></button>
                <button
                    onClick={() => {
                        const url = prompt("Enter the image URL:");
                        if (url) editor.chain().focus().setImage({ src: url }).run();
                    }}
                    className="p-2 rounded-md bg-white"
                >
                    🖼️
                </button>
                <button
                    onClick={() => {
                        editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run();
                    }}
                    className="p-2 rounded-md bg-white"
                >
                    📊 Add Table
                </button>
            </div>

            {/* Text Editor Content */}
            <EditorContent editor={editor} className="p-4 min-h-[200px] border" />
        </div>
    )
}

export default TextEditer