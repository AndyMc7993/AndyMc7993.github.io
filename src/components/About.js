import React from "react"
import '../App.css'
import pic from '../images/AMC-pic.png'

export default function About() {
    return(
        <section className="about">
            
                <div className="about-txt">
                    <h1 ><span className="hi">hi,</span>  i'm <br />
                    andy <span className="underline">mcinnes</span></h1>
                    <p className="about-p">I'm a junior front end dev looking for my next role:  <br />  see what I've been working on below!</p>
                </div>
                <img src={pic}/>

        </section>
    )
}