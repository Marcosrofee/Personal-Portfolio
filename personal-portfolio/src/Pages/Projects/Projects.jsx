
import NavBar from  '../../components/NavBars/NavBar'
import Cards from '../../components/cards/Cards';
import About from "../About/About"

function Projects(){
    return(
      <div className="pro">
         <NavBar/>
         <h1>Projetos</h1>
          <div className="cards">
             <Cards />
          </div>
          <div className="mt-10">
            <About/>
          </div>
            
          
          
          
          
      </div>
      
    )
}
export default Projects;   