import Image from "next/image";

export default function Storycard() {
  return (
    <article className="rounded-lg shadow-md overflow-hidden bg-white">
      <Image
        src="/images/edinburgh-cafe.png"
        alt="A cozy morning café overlooking Edinburgh"
        width={800}
        height={500}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">Story Title</h3>
        <p className="mt-2 text-gray-600">Story preview...</p>
      </div>
    </article>
  );
}
