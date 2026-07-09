import Navbar from "@/components/Navbar";
import Storycard from "@/components/Storycard";

const stories = [
  {
    image: "/images/edinburgh-cafe.png",
    category: "Poetry",
    title: "The Morning We Forgot to Hurry",
    preview:
      "There are cities that teach you to run, and others that gently convince you to slow down.",
    author: "Arman",
    readingTime: "4 min read",
  },
  {
    image: "/images/edinburgh-cafe.png",
    category: "Life",
    title: "Letters I Never Sent",
    preview:
      "Some words stay folded in drawers for years before they finally find a reader.",
    author: "Maya",
    readingTime: "6 min read",
  },
  {
    image: "/images/edinburgh-cafe.png",
    category: "Travel",
    title: "A Train Through the Rain",
    preview:
      "Some journeys are remembered not because of the destination, but because of the people met along the way.",
    author: "Leo",
    readingTime: "5 min read",
  },
];

export default function Home() {
  return (
    <main className="bg-[#F8F6F1] text-[#2D2A26]">
      {/* ================= HERO ================= */}

      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-8 pt-20 pb-56">
          <div className="max-w-2xl pt-28 text-white">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#E7C16A]">
              Welcome to Inkspire
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Every Story
              <br />
              Deserves
              <br />
              <span className="text-[#E7C16A]">A Home.</span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-white/90">
              A warm place where writers share memories, poems, journals,
              reflections and stories that deserve to be remembered.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-full bg-[#D4A24C] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#C69338]">
                Start Reading
              </button>

              <button className="rounded-full border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black">
                Write a Story
              </button>
            </div>

            {/* Reflection */}

            <div className="mt-16">
              <h3 className="font-semibold text-[#E7C16A]">
                This Week's Reflection
              </h3>

              <p className="mt-4 max-w-xl italic text-white/90">
                "There is no greater agony than bearing an untold story inside
                you."
              </p>

              <p className="mt-3 text-lg">— Maya Angelou</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">
          ↓
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      {/* ================= ABOUT ================= */}

      <section className="relative z-20 -mt-20 px-8 pb-24">

<div className="mx-auto max-w-5xl rounded-[40px] bg-[#FCFAF5] px-12 py-20 shadow-2xl">

  <div className="text-center">

    <p className="text-sm uppercase tracking-[0.4em] text-[#D4A24C]">
      Our Story
    </p>

    <h2 className="mt-4 text-5xl font-bold text-[#2D2A26]">
      Where Every Story
      <br />
      Finds a Home
    </h2>

    <div className="mt-6 flex items-center justify-center gap-4">
      <div className="h-[2px] w-20 bg-[#D4A24C]" />
      <span className="text-[#D4A24C]">✦</span>
      <div className="h-[2px] w-20 bg-[#D4A24C]" />
    </div>

    <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
      Some stories are spoken aloud. Others are quietly carried in hearts,
      journals, letters, and unfinished pages. Every story becomes a part of
      the person who lives it.
    </p>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
      Inkspire exists as a bridge for those stories—a place where words find
      a home and people discover one another through them.
    </p>

    <p className="mt-10 text-2xl italic text-[#D4A24C]">
      Because every story deserves a home.
    </p>

  </div>

</div>

</section>
      {/* ================= FEATURED STORIES ================= */}

      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold">
            Featured Stories
          </h2>

          <p className="mt-4 text-[#D4A24C]">
            Discover what our community is writing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <Storycard key={story.title} {...story} />
          ))}
        </div>
      </section>
    </main>
  );
}