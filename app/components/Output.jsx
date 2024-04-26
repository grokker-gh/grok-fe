import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import ReactJson from "react-json-view";
import { ChipButton } from "./ChipButton";
import Title from "./title";
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
        <Title text="Structured Data (Output)" />
        <ChipButton label="Copy" onClick={() => navigator.clipboard.writeText(JSON.stringify(output))} />
      </div>
      <section className="px-5 mt-4 ">
        <div className="bg-[#F3F4F6] text-[#64748B] min-h-[200px] px-5 py-2 mt-4 mx-auto rounded-lg">
          {output && <ReactJson src={output} />}
        </div>
      </section>
    </div>
  );
}
