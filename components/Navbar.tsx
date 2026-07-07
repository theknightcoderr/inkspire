import Link from "next/link";






    export default function Navbar() {
      return (

        <nav className="flex items-center justify-between px-10 py-5 border-b bg-[#00A86B]">
          <div>
        <h1 className="text-3xl font-bold">INKSPIRE</h1>
        <p>────────────────────────
</p>
<p>Every story deserves a home</p></div>
<ul className="flex gap-8 list-none">
        <li><Link href="/" className="text-2xl hover:text-yellow-400 transition">Home</Link></li>
        <li><Link href="/blogs" className="text-2xl hover:text-yellow-400 transition">Explore</Link></li>
        <li><Link href="/about" className="text-2xl hover:text-yellow-400 transition">Categories</Link></li>
        <li><Link href="/contact" className="text-2xl hover:text-yellow-400 transition">About</Link></li>
        </ul>
        <div className="border-2 border-solid ...">
       <button className="hover:text-blue-600 transition border-style-solid ml-6 mr-6 mt-2 mb-2">Write</button>
       </div>

    
        </nav>
      );
    }





















      <ul className="flex gap-8 text-lg ">
        
     
      </ul>
   
  