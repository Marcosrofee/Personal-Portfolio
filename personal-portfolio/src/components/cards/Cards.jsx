import './Cards.css'
//ASSETS
import DNC from '../../assets/dnc.svg'
import CCXP from '../../assets/ccxp2.svg'
import PROJ from '../../assets/project.svg'
import LAND from '../../assets/landing.svg'


import PropTypes from 'prop-types';
 

const Cards = () =>{
    return(
    
 <div>
     <div className='cards'>
         <div className="card">
             <img src={CCXP} alt="" />
             <h2>CCXP22</h2>
             <p>Projeto LandingPage de desenvolvimento web,Sou um apaixonado por tecnologia
                 e soluções inovadoras.Como Product Manager, eu tenho o compromisso de resolver 
                 problemascomplexos e trazer resultados excepcionais para os negócios.Meus projetos
                  já geraram milhões de reais em receita anualestou sempre em busca
                   de novos desafios para superar. <br />
             </p>
         <a href="https://vercel.com/marcos-rogerios-projects-2b1f9264/ccxp-25/EUYh3JaCEVkB8Hfo5UF5S5MteSyk">         
            <button id="btn" className="mt" >Saiba mais</button>
         </a>   
         </div>
         <div className="card">
             <img src={DNC} alt="" />
             <h2>Bye Car</h2>
             <p>Projeto LandingPage de desenvolvimento web,Sou um apaixonado por tecnologia
                 e soluções inovadoras.Como Product Manager, eu tenho o compromisso de resolver 
                 problemascomplexos e trazer resultados excepcionais para os negócios.Meus projetos
                  já geraram milhões de reais em receita anualestou sempre em busca
                   de novos desafios para superar. <br />
             </p>
             <a href="https://vercel.com/marcos-rogerios-projects-2b1f9264/landing-page-bye-car/BtSu6CrovxDVeaTAArWw3DAXrs7Y">
                <button className="mt">Saiba mais</button>
             </a>
            
         </div>
    </div>
        <div className="cards">
        <div className="card">
             <img src={PROJ} id='portfolio' alt="" />
             <h2>Portfólio</h2>
             <p>Projeto LandingPage de desenvolvimento web,Sou um apaixonado por tecnologia
                 e soluções inovadoras.Meus projetos
                  já geraram milhões de reais em receita anualestou sempre em busca
                   de novos desafios para superar. <br />
             </p>
             <a href="https://portfolio-bdb96yy8w-marcos-rogerios-projects-2b1f9264.vercel.app/">
                  <button className="mt" >Saiba mais</button>
             </a>
            
         </div>
         <div className="card">
             <img  src={LAND} id="tecn" alt="" />
             <h2>Tecnologia</h2>
             <p>Projeto LandingPage de desenvolvimento web,Sou um apaixonado por tecnologia
                 e soluções inovadoras.Como Product Manager, eu tenho o compromisso de resolver 
                 problemascomplexos e trazer resultados excepcionais para os negócios.Meus projetos
                  já geraram milhões de reais em receita anualestou sempre em busca
                   de novos desafios para superar. <br /></p>
           <a href="">
            <button>Saiba mais</button>
           </a>
            
         </div>

        </div>
        





</div>
     

        
    )
}

Cards.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Cards;

