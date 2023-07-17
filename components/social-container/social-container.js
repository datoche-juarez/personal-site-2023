import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const SocialContainer = () => {
  return (
    <div className="social-container">
      <div className="bg-orange-400 ">
        <ul className="flex flex-row justify-start">
          <li className="px-2 m-2 text-white">
            <Link
              href="https://www.facebook.com/daniel.atochejuarez"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li className="px-2 m-2 text-white">
            <Link
              href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li className="px-2 m-2 text-white">
            <Link
              href="https://github.com/datoche-juarez"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </li>
          <li className="px-2 m-2 text-white">
            <Link
              href="https://wa.me/13136752860"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaWhatsapp />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialContainer;
