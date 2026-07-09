import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        {/* Logo */}
        <Link href="/">
          <h1 className="cursor-pointer text-3xl font-bold tracking-wide text-white">
            INKSPIRE
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-10 text-lg font-medium text-white">
          <li>
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[#E8D9A8]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/blogs"
              className="transition-colors duration-300 hover:text-[#E8D9A8]"
            >
              Explore
            </Link>
          </li>

          <li>
            <Link
              href="/categories"
              className="transition-colors duration-300 hover:text-[#E8D9A8]"
            >
              Categories
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="transition-colors duration-300 hover:text-[#E8D9A8]"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Write Button */}
        <Link
          href="/write"
          className="rounded-full border border-white px-6 py-2 text-white transition-all duration-300 hover:bg-white hover:text-[#2D2A26]"
        >
          Write
        </Link>

      </div>
    </nav>
  );
}