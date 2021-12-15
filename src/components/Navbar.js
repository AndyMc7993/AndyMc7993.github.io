import React from "react"
import '../App.css'
import signature from "../images/Signature.svg"
import { MdOutlineEmail } from 'react-icons/md'
import { MdOutlineMenu } from 'react-icons/md'
import { MdClose } from "react-icons/md"

export default function Navbar() {

    function showNav(){
        const mq = window.matchMedia( "(max-width: 1049px)" )
        if (mq.matches){
            document.getElementById('ham-btn').style.display = 'none'
            document.getElementById('close-btn').style.display = 'block'
            document.getElementById('nav-links').style.display = 'flex'
        }
    }
        
    function hideNav(){
        const mq = window.matchMedia( "(max-width: 1049px)" )
        if (mq.matches){
            document.getElementById('close-btn').style.display = 'none'
            document.getElementById('ham-btn').style.display = 'block'
            document.getElementById('nav-links').style.display = 'none'
        }
    }


    return(
        <header className="nav-bar">
            <div className="condensed-nav">
                <button className="hamburger" id="ham-btn" onClick={showNav} >
                        <MdOutlineMenu className="hamburger-icon"/>
                        
                </button>
                <button className="close" id="close-btn" onClick={hideNav}>
                    <MdClose className="close-icon"/>
                </button>
                <img id="sign" src={signature} alt="Andy's signature"/>
            </div>

            <div id="nav-links">
                    <a id="link1" onClick={hideNav} href="#skills">skills</a>
                    <a id="link2" onClick={hideNav} href="#projects">projects</a>
                    <a id="link3" onClick={hideNav} href="#background">background</a>
                    <a id="link4" onClick={hideNav} href="#contact1"> 
                        <MdOutlineEmail id="mail-logo" color='#F04FEA' />  
                        contact me
                    </a>
            </div>
        </header>
    )
}