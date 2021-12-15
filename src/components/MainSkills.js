import React, { useState } from "react";
import { DiCss3Full, DiGit, DiGithubBadge, DiHtml5, DiJsBadge, DiLinux, DiReact, DiWindows } from 'react-icons/di';
import { MdLock } from 'react-icons/md';

const iconStyle = {color: 'blue', fontSize: '50px'};



export default function MainSkills() {
    return(
        <section class="mainskills" id="skills">
            <h3>Core Skills:</h3>

            <div class="mainskills-icons">
                <div className="grid-item">
                    <DiHtml5 style={iconStyle} title="HTML5"/>
                    <p>HTML5</p>
                </div>
                <div className="grid-item">
                    <DiCss3Full  style={iconStyle} title="CSS3"/>
                    <p>CSS3</p>
                </div>
                <div className="grid-item">
                    <DiJsBadge style={iconStyle} title="JS"/>
                    <p>JS</p>
                </div>
                <div className="grid-item">
                    <DiReact style={iconStyle} title="React"/>
                    <p>React</p>
                </div>
                <div className="grid-item">
                    <DiGit style={iconStyle} title="Git"/>
                    <p>Git</p>
                </div>
                <div className="grid-item">
                    <DiGithubBadge style={iconStyle} title="Github"/>
                    <p>Github</p>
                </div>
                <div className="grid-item">
                    <DiLinux style={iconStyle} title="Linux Admin"/>
                    <p>Linux Admin</p>
                </div>
                <div className="grid-item">
                    <MdLock style={iconStyle} title="SSL Admin"/>
                    <p>SSL Admin</p>
                </div>
                <div className="grid-item">
                    <DiWindows style={iconStyle} title="Windows Admin"/>
                    <p>Windows Admin</p>
                </div>
            </div>
        
        </section>
        
    )
}