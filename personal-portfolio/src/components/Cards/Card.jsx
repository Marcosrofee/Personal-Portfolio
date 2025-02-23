//COMPONENTS
import Button from '../../components/Buttons/Button.jsx'

//ASSETS
import Testes from '../../assets/Testes.svg'

function Card(){
    return(
       <div className="Projects">
         
      
          <div className="card">
              <img src={Testes} width={400} alt="Denim Jeans" />
                  <h1>Projetos</h1>
                     <p className="price">
                          Sou mais do que um apaixonado por Front-End. Minha experiência com design de interface me torna extremamente criterioso com
                            alinhamentos, margens, cores e muitos outros recursos em CSS. Hoje trabalho com projetos em um mundo inteiro. Codificando no meu
                               escritório em casa, em um tranquilo interior de São Paulo, Brasil.</p>
                   <Button buttonStyle="primary">Saiba mais</Button> 
          

        </div>
      </div>
     )
}
export default Card;