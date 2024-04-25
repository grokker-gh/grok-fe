import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
import { useEffect, useRef } from "react";
import { useState } from "react";
export default function Logs({ logs, setLogs }) {
  const editor = useRef();
  const wrapper = useRef();
  const editorWillUnmount = () => {
    editor.current.display.wrapper.remove();
    wrapper.current ? (wrapper.current.hydrated = false) : null;
  };
  return (
    <>
      <div className="flex gap-4 px-5 mt-4">
        <span>Sample Data</span>
        <span onClick={() => navigator.clipboard.writeText(logs)}>Copy</span>
        <span onClick={() => setLogs(null)}>Delete</span>
      </div>
      <section className="px-5 mt-4 ">
        <ControlledEditor
          value={logs}
          ref={wrapper}
          options={{
            mode: "xml",
            lineNumbers: true,
            theme: "material",
          }}
          onChange={(editor, data, value) => {}}
          onBeforeChange={(editor, data, value) => {
            setLogs(value);
          }}
          editorDidMount={(e) => (editor.current = e)}
          editorWillUnmount={editorWillUnmount}
        />
      </section>
    </>
  );
}
