import Storycard from "@/components/Storycard";

const stories = [
  {
    image: "/images/edinburgh-cafe.png",
    category: "Poetry",
    title: "The Morning We Forgot to Hurry",
    preview:
      "There are cities that teach you to run, and others that gently convince you to slow down.",
    author: "Arman",
    readingTime: "4 min",
  },
  {
    image: "/images/edinburgh-cafe.png",
    category: "Life",
    title: "Letters I Never Sent",
    preview:
      "Some words live in drawers longer than they live in memory, waiting for a courage that arrives late.",
    author: "Maya",
    readingTime: "6 min",
  },
  {
    image: "/images/edinburgh-cafe.png",
    category: "Travel",
    title: "A Train Through the Rain",
    preview:
      "The window blurred the world outside, but inside the carriage, strangers became temporary confidants.",
    author: "Leo",
    readingTime: "5 min",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#2D2A26]">
      <section className="mt-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">Every story deserves a home</h1>
        <p className="mt-4 text-gray-600">
          Stories have always brought strangers together.
        </p>

        <h2 className="mt-8">This week&apos;s Reflection</h2>

        <p className="mt-4 text-gray-600">
          &ldquo;There is no greater agony than bearing an untold story inside
          you.&rdquo;
        </p>

        <p className="mt-4 text-gray-600">- Maya Angelou</p>

        <p className="mt-4">Turn the page and let your story unfold.</p>

        <p className="mt-4">↓</p>
      </section>

      <section className="mt-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">Where Every Story Finds a Home</h1>

        <p className="mt-4">──────── ✦ ────────</p>

        <p className="mt-4 text-gray-600">
          Some stories are spoken aloud. Others are quietly carried in hearts,
          journals, letters, and unfinished pages. Every story, whether joyful or
          heartbreaking, becomes a part of the person who lives it.
        </p>
        <p className="mt-4 text-gray-600">
          Inkspire exists as a bridge for those stories—a place where words can
          find a home and people can find one another through them. Not to
          judge, not to compete, but simply to remind us that every voice has
          value.
        </p>

        <p className="mt-4 text-gray-600">
          Whether you arrive with a poem, a memory, a lesson, or a chapter of
          your life that has never been shared before, there will always be a
          place for it here. Welcome home.
        </p>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-16 pt-16 sm:grid-cols-2 md:grid-cols-3">
        {stories.map((story) => (
          <Storycard key={story.title} {...story} />
        ))}
      </div>
    </main>
  );
}
