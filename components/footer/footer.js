import Link from "next/link";
import dayjs from "dayjs";

const Footer = () => {
  return (
    <div className="flex flex-row px-4 bg-dark-gray">
      <div className="self-center w-full p-2 bg-orange-800">
        <div className="bg-blue-400 ">
          <ul className="flex flex-row justify-start">
            <li className="px-2 text-white">
              <Link href="/">HOME</Link>
            </li>
            <li className="px-2 text-white">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="px-2 text-white">
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li className="px-2 text-white">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="bg-red-300">
          <p className="pt-2 text-sm text-dark-gray-400">
            © Daniel Atoche-Juarez {dayjs().year()}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-20 bg-green-500">
        <p>Insert logo here</p>
      </div>
    </div>
  );
};

export default Footer;
