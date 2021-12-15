function PfCard(props){
    return(
        <div className="card">
            <a href={props.item.link}>
                <img src={props.item.coverImg} className="card-image" alt="project-img"/>
            </a>
            <a href={props.item.link} className="card-text">
                <p className="card-title">{props.item.title}</p>
                <p className="card-description"> {props.item.description}</p>
            </a>
        </div>
    )
}

export default PfCard