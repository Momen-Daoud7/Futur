'use client'

import {Layout,Compass, List, BarChart} from "lucide-react"
import {usePathname} from "next/navigation"
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

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacher = pathname?.includes("teacher");

    // Render routes conditionaly
    const routes = isTeacher ? teacherRoutes : guestRoutes
  return (
    <div className="flex flex-col w-full">
        {routes.map((route,key) => (
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