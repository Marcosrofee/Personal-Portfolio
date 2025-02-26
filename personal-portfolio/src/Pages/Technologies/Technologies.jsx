import "./Technologies.css";
import NavBar from "../../components/NavBars/NavBar"

//ASSETS
import ts from '../../assets/ts.svg'
import js from '../../assets/js.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import hook from '../../assets/hooks.svg'
import Header from "../../components/Header/Header";
import Git from '../../assets/GitHub.svg'
import Lin from '../../assets/Linkedin.svg'
import Fig from '../../assets/Figma.svg'




function Technologies(){
     return(
        <div>
         <NavBar/>
         <Header/>
         <div className="tecn" >
            <img src={js} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={hook} alt="" />
            <img src={ts} className="ts" alt="" />
         </div>
         <div className="Footer">
             <div className="footer-text">
                          <h5>Meu contato: <br /> 14 997561971 </h5>
                      
                          <h5> Email: <br /> marcroger61@gmail.com </h5>
                      <div className="footer-img">
                         <a href="https://github.com/Marcosrofee">  <img src={Git} width={40} alt=""  />  </a>
                         <a href="https://www.linkedin.com/in/marcos-rogerio-b34b4b219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZhBbM1cnRUulzvWH7GHWzQ%3D%3D"> <img src={Lin} width={40}  alt=""  />    </a>
                         <a href="https://www.figma.com/files/team/1012217658664074556/user/1012217653781994010?fuid=1012217653781994010"> <img src={Fig} width={40}  alt=""  />  </a>   
                      </div>
                         
                        </div>
         </div>
        </div>
     )
}
export default Technologies;