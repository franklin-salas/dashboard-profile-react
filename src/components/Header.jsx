
import { RiSearch2Line } from "react-icons/ri"

export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold">Good morning, <span className="text-primary-100">frank</span></h1>
        <form className="w-full md:w-auto">
            <div className="relative">
                <RiSearch2Line className=" absolute top-1/2 -translate-y-1/2 left-2"/>
                <input type="text" className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full"
                placeholder="Search for projects" />
            </div>
        </form>
    </header>
  )
}
