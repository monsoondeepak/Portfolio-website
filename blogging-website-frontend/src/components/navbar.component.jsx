import { Link } from "react-router-dom";
import { assets } from "../assets/assets"
import { useState } from "react";

const Navbar2 =()=>{
  const [serachBoxVisibility, setSearchBoxVisibility] = useState(false)   
  return(
    <nav className="navbar2 mt-12 z-0">
      <Link to="/" className="flex-none w-10">
      <img className="img2 " src={assets.Blog_log} />
      </Link>
      <div className={"absolute w-full left-0 top-full mt-[-30px] border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:mt-0.5 md:inset-0 md:p-0 md:w-auto md:show " + (serachBoxVisibility ? "show" : "hide" )}>
  
        <input type="text" placeholder="Search" className="w-full md:w-auto bg-[#b7b7c73d] p-2 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"/>

        <i class="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
      </div>
      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button className="md:hidden bg-[#b7b7c73d] w-9 h-9 rounded-full flex items-center justify-center" onClick={()=> setSearchBoxVisibility(currentVal=> !currentVal)}>
          <i className="fi fi-rr-search text-2xl"></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar2;