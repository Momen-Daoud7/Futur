import { Menu } from "lucide-react"
import { Sheet, SheetContent,SheetTrigger} from "@/components/ui/sheet"
import Sidebar from "./Sidebar"

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 ">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
export default MobileSidebar