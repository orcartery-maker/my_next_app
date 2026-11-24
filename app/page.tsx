import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Hello, my name is Gerald</h1>
      <p className="mb-4">Im from Pandan and Im 20 years old.</p>
      <Link href="/projects" className="underline">See my projects</Link>
    </main>
  );
}