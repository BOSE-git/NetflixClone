import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer(){
    return(
        <div className="container-footer">
            <div className="list">
                <ul>
                    <li><FacebookIcon /><InstagramIcon /><TwitterIcon /><YouTubeIcon /></li>
                    <li>Audio Descriptions</li>
                    <li>Investor Relations</li>
                    <li>Legal Notices</li>
                    <li><button>Service Code</button></li>
                </ul>
            </div>
            <div className="list">
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                </ul>
            </div>
            <div className="list">
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div className="list">
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;