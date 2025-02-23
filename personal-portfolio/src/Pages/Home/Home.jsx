import Header from "../../components/Header/Header"
import NavBar from "../../components/NavBars/NavBar"
import Projects from "../Projects/Projects"


 function Home(){
     return(
         <div>
            <NavBar/>
            <Header/>
            <Projects/>
         </div>
    ) 
}
export default Home