"use client";

import { UserButton } from "@clerk/nextjs";
import {usePathname,useRouter} from "next/navigation"
import Link from "next/link"
import { Button } from "./ui/button";
import {  LogOut } from "lucide-react";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter()
  console.log(pathname)

  const isTeacherPage = pathname?.startsWith("/teacher")
  const isPlayerPage = pathname?.startsWith("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default NavbarRoutes;