import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center w-full py-20 mx-auto bg-red-200 h-fit sm:justify-start">
      <div className="flex items-center sm:float-none">
        <div className="flex flex-row items-center mr-5 bg-blue-200 w-fit h-fit">
        <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
