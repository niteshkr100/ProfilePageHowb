import './App.css'
import { VscGraph } from "react-icons/vsc";
import { IoBodyOutline } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { CiMusicNote1 } from "react-icons/ci";
import { FaRegCircleStop } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { ImPencil } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import Siderbar from './Siderbar';
import { IoIosCloseCircle } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';


const Profile = () => {

//sidebar function
  function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
 }  
// closebutton
function closeSidebar(){
  const closebar = document.querySelector(".sidebar");
  closebar.style.display = "none";
}

const login=()=>{
  return<LoginPage/>
}

  return (
    <div className="profile-page">
   
   <div className='sidebar'>
   <IoIosCloseCircle onClick={closeSidebar} className='close'/>
   <div className='howbeeLogo howbeenone'>
        <div className='circle'></div>
        <div>
           How<span className='beeyellow'>Bee</span>
        </div>
      </div>
    <hr />
      <div className="menuLogo">
        MENU
      </div>
  
      <div className='design'>
        <ul>
          <li><VscGraph className='logoSize'/> Dashboard</li>
          <li><IoBodyOutline className='logoSize'/>Posture Routine</li>
          <li><HiComputerDesktop className='logoSize'/>Classroom</li>
          <li><IoCalendarOutline className='logoSize'/>Calendar</li>
          <li><CiMusicNote1 className='logoSize'/>Music</li>
          <li><FaRegCircleStop className='logoSize'/>Recordings</li>
          <li><IoWalletOutline className='logoSize'/>Earnings</li>
          <li><IoSettingsOutline className='logoSize'/>
          Settings</li>
        </ul>
       
        </div>

        <div className='bMenu'>
          <ul>
          <li><BiSupport className='logoSize'/>Help and support</li>
          <li onClick={login}><IoExitOutline  className='logoSize'/><Link to="/login">login</Link>
          </li>
          </ul>  
         </div>
   </div>
    {/*  */}
     <div className="menu">
     
      <div className='howbeeLogo'>
        <div className='circle'></div>
        <div>
           How<span className='beeyellow'>Bee</span>
        </div>
      </div>

      <div className="menuLogo">
        MENU
      </div>
  
      <div className='design'>
        <ul>
          <li><VscGraph className='logoSize'/> Dashboard</li>
          <li><IoBodyOutline className='logoSize'/>Posture Routine</li>
          <li><HiComputerDesktop className='logoSize'/>Classroom</li>
          <li><IoCalendarOutline className='logoSize'/>Calendar</li>
          <li><CiMusicNote1 className='logoSize'/>Music</li>
          <li><FaRegCircleStop className='logoSize'/>Recordings</li>
          <li><IoWalletOutline className='logoSize'/>Earnings</li>
          <li><IoSettingsOutline className='logoSize'/>
          Settings</li>
        </ul>
       
        </div>

        <div className='bottomMenu'>
          <ul>
          <li><BiSupport className='logoSize'/>Help and support</li>
          <li onClick={login}><IoExitOutline  className='logoSize'/><Link to="/login" className='lin'>login</Link></li>
          </ul>
        </div>


      </div>


    <div className="profile">
    <IoReorderThree className='humberg' onClick={showSidebar}/> 
      {/* head */}
        <div className="ph">
        <div className="profile-header">
        <ImPencil className='pencil' />
        <h2>Profile</h2>
        </div>
        
         <div>
         <IoIosNotifications className='logoSize bell' />
         </div>
        
     
        </div>

 
        <div className='pro'>
        
        {/*  section1*/}
          <div className='photodetail'>
              {/* photo */}
               <div className='photo'>
               </div>
               {/*about  */}
                <div>
                   <p className='about'>About</p>
                  <textarea name="" id="" className='tarea' placeholder='Hii, I am a FullStack Developer at HowBee.'></textarea>
                </div>
               {/* pricing */}
                <div>
                <p className='about'>Price</p>
                <div className="pricing">
                  <table>
                    <tbody>
                      <tr>
                        <td>Thrice a week</td>
                        <td>$__</td>
                      </tr>
                      <tr>
                        <td>Twice a week</td>
                        <td>$__</td>
                      </tr>
                      <tr>
                        <td>Monday to Friday</td>
                        <td>$__</td>
                      </tr>
                      <tr>
                        <td>Elderly Batch</td>
                        <td>$__</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                
             </div>


        {/* section2 */}
          <div className="profile-details">
          <div className="profile-field">
            <label>Name</label>
            <input type="text" value="Mehrab Bozorgi" />
          </div>
          <div className="profile-field">
            <label>Email</label>
            <input type="email" value="Mehrabbozorgi.business@gmail.com"  />
          </div>
          <div className="profile-field">
            <label>Contact Number</label>
            <input type="text" value="58077.79"  />
          </div>
          <div className='boxg'>
          <div className="profile-field fifth-field ">
            <label>Gender</label>
            <select name="gender" id="">
              <option value="male">male</option>
              <option value="female">female</option>
             </select>
          </div>
          <div className="profile-field fifth-field">
            <label>Date of Birth</label>
            <input type="text" value="Bozorgi"  />
          </div>
          </div>
          <div className="profile-field ">
            <label>User ID</label>
            <input type="text" value="33062 Zboncak isle"  />
          </div>
          <div className="profile-field">
            <label>Password</label>
            <input type="password" value="sbdfbnd65sfdvb s"  />
          </div>
          <div className="profile-field">
            <label>Class Categories</label>
            <textarea type="text" value="Yoga for flexibility, elderly, beginner level."  className='classc'/>
          </div>
          <div className="profile-field">
            <label>Available Timings</label>
            <textarea type="text" value="7-10 AM, 4-7 PM" className='time' />
          </div>
        </div>
        </div>

        
        
        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
