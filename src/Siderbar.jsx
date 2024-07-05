
import './App.css'
import { IoClose } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";

const Siderbar = () => {
    
 function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
 }         
 function closeSidebar(){
    const closebar = document.querySelector(".sidebar");
    closebar.style.display = "none";
 }

  return (
    <div>
      <div className="siderbar">
      <div onClick={closeSidebar}>
      <a href="#" class="cross"><IoClose className='logoSize'/>
      </a>
      </div> 
           
        
      </div>

    </div>
  )
}

export default Siderbar
