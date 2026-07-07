import Image from "next/image";

interface StoryCardProps {
  image: string;
  category: string;
  title: string;
  preview: string;
  author: string;
  readingTime: string;
}
export default function StoryCard({
  image,
  category,
  title,
  preview,
  author,
  readingTime,


}   









: StoryCardProps) {
  const categoryStyles = {
    Poetry: "...",
   Life: "...",
   Travel: "...",
   Fiction: "...",
  };












  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Image
      src={image}
      alt={title}
        width={200}
        height={200}
      className="w-full h-56 object-cover transition duration-500 hover:scale-105"
      />
     
      <div className="p-6">
  







        
      <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-700">
  {category}
</span>

<h3 className="mt-3 text-2xl font-semibold leading-tight">
  {title}
</h3>

<p className="mt-3 text-gray-600 leading-relaxed">
  {preview}
</p>
<p className="mt-5 text-sm text-gray-500">
  {author} • {readingTime}
</p>
      </div>
    </article>
  );
}
