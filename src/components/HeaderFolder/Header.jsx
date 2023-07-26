import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './Header.css';

function Header(){

    const [menu, setMenu] = useState(false);

    function handleMouseOver(){
        setMenu(menu ? false : true);
    }

    return (
        <nav className='navbar'>
            <div className="left-nav">
                <div className="logo"><img src="/logo.png" alt="Netflix" /></div>
                <div className="list-div">
                    <ul className={menu ? "active" : ""}
                            style={{
                            top: menu ? "65px" : "-350px",
                            transition: 'top 0.5s ease, opacity 0.5s ease'
                            }}>
                        <div className="arrow-bar">
                        </div>
                        <div className="arrow">
                            <ArrowDropUpIcon style ={{color: 'white'}} />
                        </div>
                        <li>Home</li>
                        <li>Tv Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                    </ul>
                </div>
                <div className="popmenu" onClick={handleMouseOver}>
                    Browse
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div className="right-nav">
            <ul>
                <li className='srchIcon'><SearchIcon fontSize='large' /></li>
                <li className='Children-li'>Children</li>
                <li><NotificationsNoneOutlinedIcon fontSize='medium' /></li>
                <li><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Profile Pic" className="profile" /></li>
            </ul>
            
            </div>
        </nav>
    );
}

export default Header;