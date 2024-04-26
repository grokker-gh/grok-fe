import Clipboard from "@/public/clipboard.svg";
import Trash from "@/public/trash-can.svg";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/elegant.css";
import { useRef } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { ChipButton } from "./ChipButton";
import Title from "./title";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

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
        <Title text="Logs" />
        <ChipButton icon={Clipboard} label="Copy" onClick={() => navigator.clipboard.writeText(JSON.stringify(output))} />
        <ChipButton label="Delete" icon={Trash} onClick={() => setLogs(null)} />
      </div>
      <section className="px-5 mt-4">
        <ControlledEditor
          value={logs}
          ref={wrapper}
          options={{
            mode: "xml",
            lineNumbers: true,
            theme: "elegant",
          }}
          onChange={(editor, data, value) => { }}
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
