import React from "react"
import '../App.css'
import Pfdata from "./Pfdata"
import PfCard from "./PfCard"


export default function Projects() {

    const projItems = Pfdata.map(item => {
        return <PfCard
                item={item}
                />
    })

    return(
        <section className="projects" id="projects">
            <h3>My Projects:</h3>
    
                <container className="project-cards">
                    {projItems}
                </container>
        
        </section>
    )
}