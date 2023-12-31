
import { useState } from "react";
import { RiCloseFill, RiFileCopyLine, RiHome3Fill, RiMore2Fill, RiPieChartLine, RiWalletLine } from "react-icons/ri";
export const SideBar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
  <>
    <div
    className={`bg-primary-900 h-full text-white fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all duration-300 z-50 ${showMenu? 'bottom-0':'-bottom-full'}`}
    >
      {/* profile  */}
        <div className="flex flex-col items-center py-6 gap-1 h-[30vh] ">
            <img src="https://img.freepik.com/foto-gratis/anciano-sonriente-gafas_23-2148740051.jpg"
            className="w-20 h-20  object-cover rounded-full ring-2 ring-gray-300" />

            <h1 className="text-xl font-bold">Franklin S.</h1>
            <p className="bg-primary-100 py-1 px-3 rounded-full ">Pro Level</p>
        </div>
     <div className="bg-primary-300 p-8 rounded-tr-[80px] h-[70vh]  overflow-y-auto flex flex-col justify-between gap-8">
         {/* nav  */}
         <nav className="flex flex-col gap-6">
        <a href="#" className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
          <RiHome3Fill/> Home
        </a>
        <a href="#" className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
          <RiFileCopyLine/> Projects
        </a>
        <a href="#" className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
          <RiWalletLine/> Invoices
        </a>
        <a href="#" className="flex items-center gap-4 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
          <RiPieChartLine/> Reports
        </a>
      </nav>

      <div className="bg-primary-900/50  p-4 rounded-xl">
        <p className="text-gray-400">Having troubles?</p>
        <a href="#">Contact us</a>
      </div>
     </div>
        </div>

    <button
    onClick={() => setShowMenu(!showMenu)}
    className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50">
      {
        showMenu ?<RiCloseFill/> : <RiMore2Fill/>
      }
    
    </button>

  </>
  )
}
