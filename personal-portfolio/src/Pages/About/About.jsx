import "./About.css";
//ASSETS//
import Linha from '../../assets/Linha.svg' 
import Git from '../../assets/GitHub.svg'
import Lin from '../../assets/Linkedin.svg'
import Fig from '../../assets/Figma.svg'

function About(){
    return(
       <div >
       
          <h3>Sobre Min</h3>
          <div> 
             <div className="span">
                <span>2018</span>  
                <span>2019</span>  
                <span>2020</span>  
                <span>2021</span>  
             </div>
                <img width={1000} src={Linha} className="About-img" alt="Linha do Tempo" />
          </div>
        
          <div className="spans">
                <span>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.</span>  
                <span>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.</span>  
                <span>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.</span>  
                <span>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.</span>  
          </div>
       <footer>
          <div className="footer-text">
              <h5>Meu contato: <br /> 14 997561971 </h5>
          
              <h5> Email: <br /> marcroger61@gmail.com </h5>
          <div className="footer-img">
             <a href="https://github.com/Marcosrofee">  <img src={Git} width={40} alt=""  />  </a>
             <a href="https://www.linkedin.com/in/marcos-rogerio-b34b4b219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZhBbM1cnRUulzvWH7GHWzQ%3D%3D"> <img src={Lin} width={40}  alt=""  />    </a>
             <a href="https://www.figma.com/files/team/1012217658664074556/user/1012217653781994010?fuid=1012217653781994010"> <img src={Fig} width={40}  alt=""  />  </a>   
          </div>
             
            </div>
            
       </footer>

         
       </div>
     )
}
export default About;