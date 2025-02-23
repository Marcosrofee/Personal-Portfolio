import Card from "../../components/Cards/Card";
import "./Projects.css";

function Projects(){
    return(
       <div className="Projects">
          <h1>Projetos</h1>
          <div className="cardA" >
             <Card/>
             <Card/>
          </div>
          <div className="cardA">
             <Card/>
             <Card/>
          </div>
      </div>
     )
}
export default Projects;