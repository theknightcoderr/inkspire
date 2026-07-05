import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen">

     <Navbar />

      <section className="flex flex-col items-center justify-center text-center mt-32">

        <h2 className="text-6xl font-bold">
          Share your stories with the world 
        </h2>

        <p className="mt-6 text-xl max-w-2xl text-gray-600">
          Discover stories, ideas and knowledge from
          writers around the world.
        </p>

        <button className="mt-10 px-8 py-4 bg-blue text-white rounded-xl hover:scale-105 transition">
          Start writing
        </button>

      </section>

    </main>
  );
}
