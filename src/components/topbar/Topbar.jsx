import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';


export default function Topbar() {
  return (
    <div>
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">TeeTee</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone/>                    
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>                    
                    <span className="topIconBadge">2</span>            
                    </div>                
                    <div className="topbarIconContainer">
                    <Settings/>                               
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQun9BWWFWd1xiVhtouKBPKLdtJKvfYk0UppisLGd31cY9xUOlkX9EEbGcYy2xiIn2jwuo&usqp=CAU" alt="tt" className="topAvatar" />
                
                </div>
            </div>
        </div>
        
    </div>
  )
}
