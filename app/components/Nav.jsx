import Image from "next/image";
import Logo from "@/public/logo.svg";
export default function Nav() {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b-2">
      <Image src={Logo} width={100} height={70} alt="logo" />
      <span className="text-[#94A3B8]">
        Project sponsored by <span className="text-[#64748B]">Dyte.io</span>
      </span>
    </div>
  );
}
