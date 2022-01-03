import React from "react";
import { DiPython } from 'react-icons/di'
import { DiNpm } from 'react-icons/di'
import { DiMongodb } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { DiJava } from 'react-icons/di'
import { FaNode } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'

export default function OtherSkills() {
    return(
        <div class="other-skills">
            <h3>I also have some novice skills in the following:</h3>
            <div class="other-skills-icons">
                <div className="skill">
                    <DiPython className="icon"/>
                    <p>Python</p>
                </div>
                <div className="skill">
                    <FaPhp className="icon"/>
                    <p>PHP</p>
                </div>
                <div className="skill">
                    <DiNpm className="icon"/>
                    <p>NPM</p>
                </div>
                <div className="skill">
                    <DiMongodb className="icon"/>
                    <p>Mongodb</p>
                </div>
                <div className="skill">
                    <FiFigma className="icon"/>
                    <p>Figma</p>
                </div>
            </div>

            <h3 classname="future-skills-h3">...and here are some other skills I'm looking to develop soon:</h3>
            <div class="future-skills-icons">
                <div className="skill">
                    <DiJava className="icon"/>
                    <p>Java</p>
                </div>
                <div className="skill">
                    <FaNode className="icon"/>
                    <p>Node.js</p>
                </div>
                <div className="skill">
                    <DiMysql className="icon"/>
                    <p>MySQL</p>
                </div>
            </div>
        
        </div>
    )
}