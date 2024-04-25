"use client";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { useState } from "react";
import Logs from "./components/Logs";
import Nav from "./components/Nav";
import Output from "./components/Output";
import Pattern from "./components/Pattern";
import Sidebar from "./components/Sidebar";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

export default function Home() {
  const [logs, setLogs] = useState(null);
  const [pattern, setPattern] = useState(null);
  const [output, setOutput] = useState(null);

  return (
    <>
      <div class="min-h-[75vh] flex pb-3  ">
        <div className="w-[70vw] h-[inherit] border-b-2 pb-3 border-r-2 border-solid border-[#CBD5E1] ">
          <Nav />
          <Logs logs={logs} setLogs={setLogs} />
          <Pattern
            pattern={pattern}
            setPattern={setPattern}
            logs={logs}
            setOutput={setOutput}
          />
        </div>
        <Sidebar
          logs={logs}
          setOutput={setOutput}
          setPattern={setPattern}
          pattern={pattern}
        />
      </div>
      <Output output={output} setOutput={setOutput} />
    </>
  );
}
