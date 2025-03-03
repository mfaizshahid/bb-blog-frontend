import Link from "next/link";

interface SidebarLinkProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

export default function SidebarLink(props: SidebarLinkProps) {
  return (
    <Link
      href={props.href}
      className="flex items-center p-2 space-x-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 hover:rounded-md hover:font-semibold"
    >
      {props.icon}
      <span className="leading-none">{props.title}</span>
    </Link>
  );
}
