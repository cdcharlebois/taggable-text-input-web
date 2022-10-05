/**
 * Here are some links to useful docs:
 * - React-Quill repo: https://github.com/zenoamaro/react-quill
 * - Simple usage of React-Quill: https://www.simplenextjs.com/posts/react-quill
 * - 
 */

import React, { createElement, useState } from "react";
import ReactDom from "react-dom";
import ReactQuill from "react-quill";
import "quill-mention";
// tbd which of the following is the working one :)
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "../ui/TaggableTextInputWeb.css";

async function suggestPeople(searchTerm) {
    const allPeople = [
        {
            id: 1,
            value: "Fredrik Sundqvist"
        },
        {
            id: 2,
            value: "Patrik Sjölin"
        }
    ];
    return allPeople.filter(person => person.value.includes(searchTerm));
}

const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote", "mention"],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link", "image", "video"],
        ["clean"]
    ],
    // clipboard: {
    //     // toggle to add extra line breaks when pasting HTML:
    //     matchVisual: false
    // },
    mention: {
        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
        mentionDenotationChars: ["@"],
        source: async (searchTerm, renderList, mentionChar) => {
            const matches = await suggestPeople(searchTerm);
            renderList(matches, searchTerm);
        }
    }
};

const Editor = () => {
    const [value, setValue] = useState("");
    return <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />;
};

export default Editor;
