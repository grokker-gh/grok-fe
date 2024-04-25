import { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useRef } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
export default function Sidebar({ logs, setOutput }) {
  const [pattern, setPattern] = useState(null);
  const patternEditor = useRef();
  const patternWrapper = useRef();
  const patternEditorWillUnmount = () => {
    patternEditor.current.display.wrapper.remove();
    patternWrapper.current ? (patternWrapper.current.hydrated = false) : null;
  };
  const generate = () => {
    fetch("https://grokker-backend-prod-3jkweieu6a-el.a.run.app/grok", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: logs,
      }),
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          setPattern(data.pattern);
        });
      })
      .catch((err) => console.log(err));
  };
  const handleTransform = async () => {
    fetch(
      `https://grokker-backend-prod-3jkweieu6a-el.a.run.app/parse?pattern=${pattern}&log_line=${logs}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOutput(data);
      })
      .catch((err) => setOutput(err));
  };
  return (
    <div className="w-[30vw] text-center h-[inherit] border-b-2 pb-3 px-4 ">
      <p className="px-5 mt-4 mx-auto">Pattern Recommendation</p>
      <button
        onClick={generate}
        className="bg-[#F3F4F6] text-[#64748B] px-5 py-2 mt-4 mx-auto rounded-lg cursor-pointer disabled:bg-[#CBD5E1] disabled:cursor-not-allowed"
        disabled={logs === null || logs.length === 0}
      >
        Generate Grok Pattern
      </button>
      <section className="px-5 mt-4 ">
        <ControlledEditor
          value={pattern}
          ref={patternWrapper}
          options={{
            mode: "xml",
            lineNumbers: true,
            theme: "material",
            readOnly: true,
          }}
          onChange={(editor, data, value) => {}}
          onBeforeChange={(editor, data, value) => {
            setPattern(value);
          }}
          editorDidMount={(e) => (patternEditor.current = e)}
          editorWillUnmount={patternEditorWillUnmount}
        />
      </section>
      <button
        className="bg-[#F3F4F6] text-[#64748B] px-5 py-2 mt-4 mx-auto rounded-lg cursor-pointer disabled:bg-[#CBD5E1] disabled:cursor-not-allowed"
        disabled={pattern === null}
        onClick={handleTransform}
      >
        Apply Pattern
      </button>
    </div>
  );
}