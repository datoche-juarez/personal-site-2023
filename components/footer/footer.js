import Link from "next/link";
import dayjs from "dayjs";
import SocialContainer from "../social-container/social-container";

const Footer = () => {
  return (
    <div className="flex flex-col-reverse max-w-full px-4 py-10 max-h-fit bg-dark-gray md:flex-row">
      <div className="self-center w-full p-2 bg-orange-800">
        <div className="flex flex-col items-center p-2 bg-blue-400 md:items-start">
          <ul className="flex flex-col justify-center text-center xs:flex-row xs:justify-start xs:text-left">
            <li className="px-1 text-sm text-white sm:text-base sm:px-2">
              <Link href="/">HOME</Link>
            </li>
            <li className="px-1 text-sm text-white sm:px-2 sm:text-base">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="px-1 text-sm text-white sm:px-2 sm:text-base">
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li className="px-1 text-sm text-white sm:px-2 sm:text-base">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center h-auto min-h-full p-2 bg-red-300 md:items-start">
          <p className="text-sm text-center text-dark-gray-400 xs:text-left">
            © Daniel Atoche-Juarez {dayjs().year()}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center self-center justify-center w-full p-4 bg-green-500 border-4 border-purple-600 max-h-fit md:items-end">
        <SocialContainer />
      </div>
    </div>
  );
};

export default Footer;
