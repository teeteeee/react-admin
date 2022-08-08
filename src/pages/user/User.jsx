import "./user.css"
import { LocationSearching, PermIdentity } from '@mui/icons-material';
import { CalendarToday, MailOutline, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function User() {
  return (
    <div className="user"> 
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">create</button>
            </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src="https://i.pinimg.com/236x/e3/39/5f/e3395f27923fcac367b284acf288c10b.jpg" alt="" className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Joan Roy</span>
                <span className="userShowUserTitle">Software Engineer</span>
   
              </div>
            </div>
            <div className="userShowButtom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon"/>
                <span className="userShowInfoTitle">Roy99</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon"/>
                <span className="userShowInfoTitle">12/06/1999</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
   
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>
                <span className="userShowInfoTitle">+23456788</span>
              </div><div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">Roy99@gmail.com</span>
              </div><div className="userShowInfo">
                <LocationSearching className="userShowIcon"/>
                <span className="userShowInfoTitle">Lagos NG</span>
              </div>
              
            </div>
          </div>
          <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input 
                  type="text" 
                  placeholder="Roy99" 
                  className="userUpdateInput" 
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input 
                  type="text" 
                  placeholder="Joan Roy" 
                  className="userUpdateInput" 
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input 
                  type="text" 
                  placeholder="Roy99@gmail.com" 
                  className="userUpdateInput" 
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input 
                  type="text" 
                  placeholder="+23456788" 
                  className="userUpdateInput" 
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Adress</label>
                  <input 
                  type="text" 
                  placeholder="Lagos NG" 
                  className="userUpdateInput" 
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src="https://i.pinimg.com/236x/e3/39/5f/e3395f27923fcac367b284acf288c10b.jpg" alt="" className="userUpdateImg" />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>        
            
        </div>
    </div>
  )
}
