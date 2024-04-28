import Logo from '@/public/logo.svg'
import Image from 'next/image'
export default function Nav() {
	return (
		<div className="flex items-center justify-between px-6 py-3 border-b-2 h-[10vh]">
			<Image src={Logo} width={100} height={70} alt="logo" />
			<span className="text-gray-400 text-sm">
				Project sponsored by{' '}
				<span className="text-gray-500 ">Dyte.io</span>
			</span>
		</div>
	)
}
