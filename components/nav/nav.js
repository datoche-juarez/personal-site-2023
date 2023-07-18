"use client";

import Link from "next/link";
import { useState } from "react";
import DAJLogo from "../../assets/DajLogo3.png";
import Image from "next/image";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-dark-gray-800">
        <div className="justify-between mx-4 lg:max-w-full md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-2 md:py-3 md:block">
              <a href="/">
                <div className="my-2">
                  <Image src={DAJLogo} alt="DAJ logo" height="60" />
                </div>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-dark-gray-500 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-dark-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-dark-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex flex-col text-center justify-self-center items-center py-3 md:block md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="font-light text-white hover:text-dark-gray-300">
                  <Link href="/">HOME</Link>
                </li>
                <li className="font-light text-white hover:text-dark-gray-300">
                  <Link href="/about">ABOUT</Link>
                </li>
                <li className="font-light text-white hover:text-dark-gray-300">
                  <Link href="/projects">PROJECTS</Link>
                </li>
                <li className="font-light text-white hover:text-dark-gray-300">
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
