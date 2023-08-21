import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="flex flex-col border-2 border-red-400">
        <div className="flex flex-col items-center justify-center h-48 p-20">
          {/* <p className="mb-2 text-2xl font-bold font-inter md:pt-10 lg:text-2xl xl:text-2xl">
            About Me
          </p> */}
          <h1 className="m-4 text-xl">
            I thrive on turning ideas into reality through coding. With a solid
            foundation in Computer Information Systems and a creative touch from
            my Liberal Arts background, I&rsquo;m committed to developing
            elegant and functional software solutions that solve real-world
            problems.
          </h1>
          <Link href="/">Back</Link>
        </div>
      </div>
    </>
  );
}
