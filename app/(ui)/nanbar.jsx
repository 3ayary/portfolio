import Link from "next/link";
import ArrowButton from "../(components)/ArrowButton";

const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between  w-full h-16 bg-slate-800 text-white px-10 shadow-md sticky top-0 z-10">
      <div className="flex flex-row gap-2 items-center">
          <Link href="#" className="text-lg hover:text-gray-300">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
          </Link>
      
      </div>

      <div className="flex flex-row items-center">
        <nav className="flex space-x-4">

          <Link href="#projects" className="text-lg hover:text-gray-300">
            <ArrowButton text="Projects" />
          </Link>

          <Link href="#about" className="text-lg hover:text-gray-300">
            <ArrowButton text="About" />
          </Link>

          <Link href="#contact" className="text-lg hover:text-gray-300">
            <ArrowButton text="Contact" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
