'use client'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import { useState } from 'react'
import Logs from './components/Logs'
import Nav from './components/Nav'
import Output from './components/Output'
import Pattern from './components/Pattern'
import Sidebar from './components/Sidebar'
require('codemirror/mode/xml/xml')
require('codemirror/mode/javascript/javascript')

export default function Home() {
	const [logs, setLogs] = useState(null)
	const [pattern, setPattern] = useState(null)
	const [output, setOutput] = useState(null)
	return (
		<div className="max-h-screen">
			<Nav />
			<div className="flex">
				<div className="flex flex-col border-r w-[70vw] basis-2/3">
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
		</div>
	)
}
