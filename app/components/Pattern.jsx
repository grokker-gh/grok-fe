import Clipboard from '@/public/clipboard.svg'
import Trash from '@/public/trash-can.svg'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/elegant.css'
import { useRef } from 'react'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { ChipButton } from './ChipButton'
import Title from './title'
require('codemirror/mode/xml/xml')
require('codemirror/mode/javascript/javascript')

export default function Pattern({ pattern, setPattern, logs, setOutput }) {
	const patternEditor = useRef()
	const patternWrapper = useRef()
	const patternEditorWillUnmount = () => {
		patternEditor.current.display.wrapper.remove()
		patternWrapper.current
			? (patternWrapper.current.hydrated = false)
			: null
	}
	const handleTransform = async () => {
		fetch(
			`https://grokker-backend-prod-3jkweieu6a-el.a.run.app/parse?pattern=${pattern}&log_line=${logs}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setOutput(data)
			})
			.catch((err) => setOutput(err))
	}
	return (
		<div className="h-[30vh] overflow-hidden">
			<div className="flex gap-6 px-5 mt-4">
				<Title text="Grok Pattern" />

				<div className="flex gap-4">
					<ChipButton
						icon={Clipboard}
						label="Copy"
						onClick={() => navigator.clipboard.writeText(pattern)}
					/>
					{/* <ChipButton label="Load" onClick={handleTransform} /> */}
					<ChipButton
						label="Delete"
						icon={Trash}
						onClick={() => setPattern(null)}
					/>
				</div>

				<ChipButton
					label="Apply"
					onClick={handleTransform}
					className="bg-[#61CFAD] text-white"
				/>
			</div>
			<section className="px-5 mt-4">
				<ControlledEditor
					value={pattern}
					ref={patternWrapper}
					options={{
						mode: 'xml',
						lineNumbers: true,
						theme: 'elegant'
					}}
					onChange={(editor, data, value) => {}}
					onBeforeChange={(editor, data, value) => {
						setPattern(value)
					}}
					editorDidMount={(e) => (patternEditor.current = e)}
					editorWillUnmount={patternEditorWillUnmount}
				/>
			</section>
		</div>
	)
}
