import Image from "next/image";

  interface StoryCardProps {
    title: string;
    preview: string;
  }


  export default function StoryCard({ title, preview }: StoryCardProps) {
  return (
    <article className="overflow-hidden rounded-lg shadow-md bg-white">
      <Image
        src="/images/edinburgh-cafe.png"
        alt="A cozy morning café overlooking Edinburgh"
        width={200}
        height={200}
       className="w-full h-56 object-cover"
      />
      
      <div className="p-6">
      <h3>{title}</h3>

<p>{preview}</p>
      </div>
    </article>
  );
}
