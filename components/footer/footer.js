import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-blue-400">
      <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        <li className="text-white">
          <Link href="/">HOME</Link>
        </li>
        <li className="text-white">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className="text-white">
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li className="text-white">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
