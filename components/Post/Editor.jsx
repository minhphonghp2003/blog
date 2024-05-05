"use client"
import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs';
import { Tools } from './tools';
function Editor({ data }) {
    const ejInstance = useRef();
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                ejInstance.current = editor;
            },

            readOnly: true,
            tools: Tools,
            data: data

        });
    };

    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
            return () => {
                ejInstance?.current?.destroy();
                ejInstance.current = null;
            };

        }

    }, [])
    return (
        <div id="editorjs"></div>
    )
}

export default Editor