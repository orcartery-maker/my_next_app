import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, my name is gerald and I am single </h1>
      <p>Im from Pandan and Im 20 years old.</p>
      <Link href="/projects">See my projects</Link>
    </main>
  );
}