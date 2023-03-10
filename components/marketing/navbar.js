import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="flex m-auto justify-between items-center p-4 border-b-2 shadow-sm bg-blue-600 text-white">
        <Link href="/">
          <h1 className="font-bold text-2xl">eTournaments</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-2 md:p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2 md:p-4">
            <Link href="/#about">About</Link>
          </li>
          <li className="p-2 md:p-4">
            <Link href="/#pricing">Pricing</Link>
          </li>
          <li className="p-2 md:p-4">
            <Link href="/#team">Team</Link>
          </li>
          <li className="p-2 md:p-4">
            <Link href="/signup">Sign Up</Link>
          </li>
          <li className="p-2 md:p-4">
            <Link href="/login">Log In</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="sm:hidden block z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Nav */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-blue-600 text-center ease-out duration-300"
              : "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-blue-600 text-center ease-out duration-300"
          }
        >
          <ul className="border rounded-lg">
            <li className="py-4 px-24 text-4xl hover:bg-white hover:text-blue-600 border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="py-4 px-8 text-4xl hover:bg-white hover:text-blue-600 border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="py-4 px-8 text-4xl hover:bg-white hover:text-blue-600 border-b">
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li className="py-4 px-8 text-4xl hover:bg-white hover:text-blue-600 border-b">
              <Link href="/#team">Team</Link>
            </li>
            <li className="py-4 px-8 text-4xl hover:bg-white hover:text-blue-600 border-b">
              <Link href="/">Sign Up</Link>
            </li>
            <li className="py-4 px-8 text-4xl hover:bg-white hover:text-blue-600 border-b">
              <Link href="/login">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
