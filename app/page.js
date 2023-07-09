import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Home page placeholder...</h1>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
}
