import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-slate-900 shadow-lg'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-2xl flext flex-wrap'>
            <span className='text-slate-500'>Isabel</span>
            <span className='text-slate-300'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 rounded p-2 flex items-center'>
          <input type='text' placeholder='Search Here....'
           className='bg-transparent focus:outline-none w-24 sm:w-60'/>
           <FaSearch className="text-slate-400"/>
        </form>

        <ul className="flex gap-4">
          <Link to='/'>
          <li className="hidden sm:inline text-slate-400 hover:underline">Home</li>
          </Link>

          <Link to='/About'>
          <li className="hidden sm:inline text-slate-400 hover:underline">About</li>
          </Link>

          <Link to='/Sign-In'>
          <li className=" sm:inline text-slate-400 hover:underline">Sign-In</li>
          </Link>
          
        </ul>
        </div>
    </header>

  )
}
