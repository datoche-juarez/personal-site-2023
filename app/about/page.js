import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="px-4 bg-red-200 border-2 border-blue-500">
        <div className="flex flex-col items-center justify-center text-left border-2 border-green-400 ">
          <p className="w-full mb-2 ml-4 text-2xl font-bold text-left font-inter md:pt-10 lg:text-2xl xl:text-2xl">
            About Me
          </p>
          <h1 className="m-4 text-xl">
            I thrive on turning ideas into reality through coding. With a solid
            foundation in Computer Information Systems and a creative touch from
            my Liberal Arts background, I&rsquo;m committed to developing
            elegant and functional software solutions that solve real-world
            problems.
          </h1>
        </div>
        <div>
          <Link href="/">Back</Link>
        </div>
      </div>
    </>
  );
}
