import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { PictureInPicture } from "lucide-react";
import { PlusIcon } from "lucide-react";
import { SheetIcon } from "lucide-react";
import { PlusSquareIcon } from "lucide-react";
import { UserIcon } from "lucide-react";
const SideBar = () => {
    const list = [
        { id: 1, title: 'Dashboard', url: '/admin', icon: <LayoutDashboard /> },
        { id: 2, title: 'Profile', url: 'admin/profile', icon: <UserIcon /> },
        { id: 3, title: 'Add Student', url: 'admin/addStudent', icon: <PlusIcon /> },
        { id: 4, title: 'Result', url: 'admin/result', icon: <SheetIcon /> },
        { id: 5, title: 'Add Staff', url: 'admin/addStaff', icon: <PlusSquareIcon /> }
    ]
    return (
        <div className=" h-screen w-64 bg-gradient-to-b via-white to-green-200 rounded-r-xl shadow-xl p-6">
            <h1 className="text-2xl font-extrabold text-green-600 text-center mb-4">Zit</h1>
            <div className="hidden md:flex flex-col space-y-2">
                {
                    list.map((item) => (

                        <Link key={item.id} href={item.url} className="flex items-center px-4 py-3 gap-4 rounded-lg  hover:text-white hover:bg-green-600 duration-200 transition-all ease-in-out">
                            <span className="font-medium text-sm flex items-center gap-3" >
                                <p>{item.icon}</p>
                                {item.title}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}
export default SideBar;