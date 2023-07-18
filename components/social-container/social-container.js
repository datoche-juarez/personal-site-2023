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
      <div className="bg-dark-gray-50">
        {/* <ul className="flex flex-col justify-start xs:flex-row xs:justify-start"> */}
        <ul className="flex flex-wrap justify-center xs:flex-row xs:justify-center">
          <li className="flex items-center justify-center w-12 h-12 px-2 m-2 text-3xl text-white rounded-full shadow-xl drop-shadow-xl bg-facebook-blue hover:bg-facebook-blue-400">
            <Link
              href="https://www.facebook.com/daniel.atochejuarez"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li className="flex items-center justify-center w-12 h-12 px-2 m-2 text-3xl text-white rounded-full shadow-xl drop-shadow-xl bg-linkedin-blue hover:bg-linkedin-blue-500">
            <Link
              href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li className="flex items-center justify-center w-12 h-12 px-2 m-2 text-3xl text-white rounded-full shadow-xl drop-shadow-xl bg-github-black hover:bg-github-black-600">
            <Link
              href="https://github.com/datoche-juarez"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </li>
          <li className="flex items-center justify-center w-12 h-12 px-2 m-2 text-3xl text-white rounded-full shadow-xl drop-shadow-xl bg-whatsapp-green hover:bg-whatsapp-green-400">
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
