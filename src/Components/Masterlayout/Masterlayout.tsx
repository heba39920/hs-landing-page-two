import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"



const Masterlayout = () => {
  return (
    <div className="bg-[var(--main-color)] text-white">

   
    <div className="w-[calc(100%-50px)] md:w-[calc(100%-90px)] mx-auto pt-15 ">
        <NavBar/>
        <Outlet/>  
    </div> 
    </div>
  )
}

export default Masterlayout
