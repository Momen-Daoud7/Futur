'use client'

import {Layout,Compass} from "lucide-react"
import SidebarItem from "./SidebarItem";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
        {guestRoutes.map((route,key) => (
            <SidebarItem
                key={key}
                icon={route.icon}
                label={route.label}
                href={route.href}
            />
        ))}
    </div>
  )
}
export default SidebarRoutes