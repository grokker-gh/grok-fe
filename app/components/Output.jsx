import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import ReactJson from "react-json-view";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

export default function Output({ output, setOutput }) {
  //   const resultEditor = useRef();
  //   const resultWrapper = useRef();
  //   const resultEditorWillUnmount = () => {
  //     resultEditor.current.display.wrapper.remove();
  //     resultWrapper.current.hydrated = false;
  //   };
  return (
    <div className="h-[25vh] ">
      <div className="flex gap-4 px-5 mt-4">
        <span>Structured Data (Output)</span>
        <span
          onClick={() => navigator.clipboard.writeText(JSON.stringify(output))}
        >
          Copy
        </span>
      </div>
      <section className="px-5 mt-4 ">
        {/* <ControlledEditor
          value={output}
          ref={resultWrapper}
          options={{
            mode: "json",
            lineNumbers: true,
            theme: "material",
          }}
          onChange={(editor, data, value) => {}}
          onBeforeChange={(editor, data, value) => {
            setOutput(value);
          }}
          editorDidMount={(e) => (resultEditor.current = e)}
          editorWillUnmount={resultEditorWillUnmount}
        /> */}
        <div className="bg-[#F3F4F6] text-[#64748B] min-h-[200px] px-5 py-2 mt-4 mx-auto rounded-lg">
          {output && <ReactJson src={output} />}
        </div>
      </section>
    </div>
  );
}
