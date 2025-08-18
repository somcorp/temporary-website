import Image from "next/image";

export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="">
      <div className="flex flex-col gap-15 flex-1 max-w-[600px] w-full">
        <h2 className="text-5xl">{title}</h2>
        <p className="text-md">{description}</p>
      </div>
      <div>
        <Image src="/teste.jpeg" alt={title} width={800} height={500} />
      </div>
    </div>
  );
}
