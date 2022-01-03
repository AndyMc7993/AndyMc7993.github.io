import React from "react"
import '../App.css'

export default function Contact() {
    return(
        <footer className="contact" id="contact1">
            <div className="footer-contact">
                <h3 className="footer-h3"> Want to learn <br /><span id="footer-more">more</span> ? </h3>
                <div className="footer-links">
                    <a href="mailto:andymcinnes7993@gmail.com">email me</a>
                    <a href='https://docs.google.com/document/d/1sN7jkWfwrPU6uZ5zpkWamcfanwiQ5izP_ojiKpqPjpo/edit?usp=sharing'>my CV</a>
                    <a href="https://github.com/AndyMc7993">my github</a>
                    <a href="https://linkedin.com/in/andy-mcinnes-06b54919b">my linkedin</a>
                </div>
                
            </div>
            
            <p>Created by Andy McInnes 🤟🏼 Glasgow, 2021</p>
        </footer>
    )
}