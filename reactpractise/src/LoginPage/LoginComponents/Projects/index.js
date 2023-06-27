import "./index.css"
import {Link} from "react-router-dom"

const Projects = () => {
    return(
        <div>
            <h1 className = "para-3">Projects</h1>
            <ul className = "container-2">  
                <li>
                <Link to = "/featuredProjects" className = "para-1">Featured Projects</Link>
                </li>
                <li>
                <Link to = "/newprojects" className = "para-1">New Projects</Link>
                </li>
                
            </ul>
        </div>
    )
}

export default Projects