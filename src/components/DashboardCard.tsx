interface DashboardProps {
  title: string;
  count: number;
}

export default function DashboardCard({ title, count }: DashboardProps) {
  return (
    <div className="w-full bg-white p-4 border border-gray-500 rounded">
      <h1>{title}</h1>
      <p className="text-xl">{count}</p>
    </div>
  );
}
