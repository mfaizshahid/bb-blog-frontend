import Image from "next/image";

interface DashboardProps {
  title: string;
  count: number;
  imageSrc: string;
}

export default function DashboardCard({
  title,
  count,
  imageSrc,
}: DashboardProps) {
  return (
    <div className="w-full bg-white p-4 border border-gray-500 rounded">
      <Image className="w-full p-1 h-20" src={imageSrc} alt={title} width={200} height={200} />
      <h1>{title}</h1>
      <p className="text-xl">{count}</p>
    </div>
  );
}
