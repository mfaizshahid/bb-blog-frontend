import type { Metadata } from "next";
import { HomeIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";

import SidebarLink from "@/components/sidebar/SidebarLink";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("in");
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-2/12 bg-white border-r-2 border-gray-100 p-5">
        <h1 className="text-2xl font-bold text-gray-600">Sidebar</h1>
        {/* Sidebar links */}
        <div className="mt-8">
          <SidebarLink
            icon={<HomeIcon width={22} height={22} />}
            title="Home"
            href="/user/dashboard"
          />
           <SidebarLink
            icon={<BookOpenIcon width={22} height={22} />}
            title="Blogs"
            href="/user/blogs"
          />
           <SidebarLink
            icon={<PencilIcon width={22} height={22} />}
            title="Write Blog"
            href="/user/write-blog"
          />
           <SidebarLink
            icon={<Cog8ToothIcon width={22} height={22} />}
            title="Settings"
            href="/user/settings"
          />
        </div>
      </div>
      {/* COntent */}
      <div className="w-10/12 bg-green-100">
        {/* Navbar */}
        <div className="bg-blue-100">
          <h1>Navbar</h1>
        </div>
        <div className="bg-white h-full">{children}</div>
      </div>
    </div>
  );
}

// User can click a button and then the user will log out
//step 1 create button
//step 2 button triggers function that erases jwt token from localstorage, user object gets cleared from state
//step 3 redirect to login
