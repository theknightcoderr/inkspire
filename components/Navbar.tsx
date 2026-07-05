import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b">
      <h1 className="text-3xl font-bold">Inkspire</h1>

      <ul className="flex gap-8 text-lg ">
        <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
        <li><Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link></li>
        <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
        <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
        <li><Link href="/write" className="hover:text-blue-600 transition">Write</Link></li>
      </ul>
    </nav>
  );
}