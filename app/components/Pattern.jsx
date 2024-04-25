import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { loadWASM } from "onigasm";
import { useEffect, useRef } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

export default function Pattern({ pattern, setPattern, logs, setOutput }) {
  const patternEditor = useRef();
  const patternWrapper = useRef();
  const patternEditorWillUnmount = () => {
    patternEditor.current.display.wrapper.remove();
    patternWrapper.current ? (patternWrapper.current.hydrated = false) : null;
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
  useEffect(() => {
    loadWASM("/onigasm.wasm").then(() => {
      console.log("WASM loaded");
    });
  }, []);
  return (
    <>
      <div className="flex gap-4 px-5 mt-4">
        <span>Grok Pattern</span>
        <span onClick={() => navigator.clipboard.writeText(pattern)}>Copy</span>
        <span onClick={handleTransform}>Load</span>
        <span onClick={() => setPattern(null)}>Delete</span>
      </div>
      <section className="px-5 mt-4 ">
        <ControlledEditor
          value={pattern}
          ref={patternWrapper}
          options={{
            mode: "xml",
            lineNumbers: true,
            theme: "material",
          }}
          onChange={(editor, data, value) => { }}
          onBeforeChange={(editor, data, value) => {
            setPattern(value);
          }}
          editorDidMount={(e) => (patternEditor.current = e)}
          editorWillUnmount={patternEditorWillUnmount}
        />
      </section>
    </>
  );
}
