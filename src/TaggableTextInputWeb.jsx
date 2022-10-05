import React, { createElement, useState } from "react";
import ReactDom from "react-dom";
import ReactQuill from "react-quill";
// import { usePopper } from "react-popper";
import  Editor from "./components/Editor";


import "./ui/TaggableTextInputWeb.css";

export function TaggableTextInputWeb() {
   return <Editor/>;
}
 