import Logo from "./Logo"
import SidebarRoutes from "./SidebarRoutes"

const Sidebar = () => {
  return (
    <div className="h-full shadow-sm  border-r flex flex-col overflow-y-auto ">
        <div className="p-6">
            <Logo />
        </div>
        <div className="w-full flex flex-col">
            <SidebarRoutes />
        </div>
    </div>
  )
}
export default Sidebar