import Image from "next/image"
import Logo1 from "@/public/logo.svg"
import Link from "next/link"
function Navbar() {
  return (
  <nav>
    <div className="container flex justify-between items-center py-4">
      <div className="nav-brand">
        <Link href="/">
          <Image src={Logo1} alt="Eventry" />
        </Link>
      </div>

      <ul className="flex gap-4 text-[#9C9C9C]">
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </nav>  )
}

export default Navbar
