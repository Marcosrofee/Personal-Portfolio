import Header from "../../components/Header/Header"
import NavBar from "../../components/NavBars/NavBar"
import Projects from "../Projects/Projects"
import About from "../About/About"

 function Home(){
     return(
         <div>
            <NavBar/>
            <Header/>
            <Projects/>
            <About/>
         </div>
    ) 
}
export default Home