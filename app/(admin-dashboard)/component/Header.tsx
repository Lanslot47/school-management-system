import { IoNotificationsOutline } from "react-icons/io5"
import Section from "./Section"
const Header = () => {
    return (
        <div className=" w-[79.9vw] p-2">
            <header className="bg-white">
                <nav className="shadow-sm flex justify-between p-3 bg-white rounded-xl">
                    <h1>Dashboard</h1>
                    <div className="flex items-center gap-3">
                        <a><IoNotificationsOutline className="cursor-pointer " size={25} /></a>
                        <a className="h-10 font-semibold w-10 flex  rounded-full bg-gray-300 items-center p-2 cursor-pointer">AD</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header