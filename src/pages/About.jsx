import '../css/About.css'
import Davih from '../images/davih.jpg'
import Filipe from '../images/Filipe.jpeg'
import Matheus from '../images/matheus.png'
import Gabriela from '../images/Gabriela.jpeg'
import Rian from '../images/Rian.jpeg'
import Rafael from '../images/Rafael.jpeg'

function About() {

  return (
    <main className="mainAbout">

      <div className="divAbout">
        <h1 className="titleAbout">NOSSA HISTÓRIA</h1>
        <br />
        <h3 className="textAbout">

          <p>Há alguns anos, um grupo de amigos se reunia frequentemente para cozinhar juntos. Eles compartilhavam receitas simples e saborosas que preparavam em casa no dia a dia. Cada um tinha suas especialidades, mas todos compartilhavam o amor pela comida caseira e bem feita.</p>

          <p>Um dia, um dos amigos, chamado Filipe, teve a ideia de criar um site de receitas com as receitas que eles criavam e testavam juntos. Eles poderiam compartilhar suas receitas com outras pessoas que também estavam procurando inspiração para cozinhar no dia a dia.</p>

          <p>Todos ficaram animados com a ideia e se juntaram a Filipe para criar a empresa "Receitas Dia a Dia". Eles queriam criar um site simples e fácil de usar, que oferecesse receitas práticas e acessíveis para pessoas ocupadas que queriam cozinhar refeições saudáveis e deliciosas.</p>

          <p>No início, eles trabalharam duro para criar receitas novas e testá-las várias vezes antes de publicá-las no site. Com o tempo, a empresa cresceu e se tornou um grande sucesso. As pessoas adoravam o site por oferecer receitas simples, com ingredientes fáceis de encontrar e que podiam ser preparadas em pouco tempo.</p>

          <p>O sucesso da empresa levou a novas oportunidades, como livros de receitas e colaborações com marcas de alimentos. Mas, para os amigos fundadores, o mais importante era continuar compartilhando suas receitas e inspirando as pessoas a cozinhar em casa.</p>

          <p>Hoje, a empresa "Receitas Dia a Dia" é um dos principais sites de receitas do mundo, com milhões de seguidores e fãs em todo o planeta. E tudo começou com um grupo de amigos que compartilhava o amor pela comida caseira e bem feita.</p>

        </h3>
        <br />
        <h1 className="teamAbout">NOSSA EQUIPE</h1>
        <br />
        <div className="containerTeamAbout">

          <div className="equipe">

            <img src={Davih} className="imgIndiv"></img>

            <br />
            <h3 className="nameIndivdual">Davih Mello</h3>
            <a href='https://github.com/DavihMello' target="_blank" className="aSocial">GitHub</a>
            <br />
            <br />
            <a href='https://www.linkedin.com/in/davih-de-melo-b4b187147/' target="_blank" className="aSocial">LinkedIn</a>
          </div>



          <div className="equipe">

            <img src={Matheus} className="imgIndiv" />

            <br />
            <h3 className="nameIndivdual">Matheus Fortunato</h3>
            <a href='https://github.com/FortunaProg' target="_blank" className="aSocial">GitHub</a>
            <br />
            <br />
            <a href='https://www.linkedin.com/in/matheus-fortunato-da-silva-b4669a180/' target="_blank" className="aSocial">LinkedIn</a>
          </div>



          <div className="equipe">

            <img src={Filipe} className="imgIndiv" />

            <br />
            <h3 className="nameIndivdual">Filipe Rodrigues</h3>
            <a href='https://github.com/Lype3d' target="_blank" className="aSocial">GitHub</a>
            <br />
            <br />
            <a href='https://www.linkedin.com/in/filipe-rodrigues-a07692121' target="_blank" className="aSocial">LinkedIn</a>
          </div>



          <div className="equipe">

            <img src={Gabriela} className="imgIndiv" />

            <br />
            <h3 className="nameIndivdual">Gabriela Rocha</h3>
            <a href='http://github.com/gabirc26' target="_blank" className="aSocial">GitHub</a>
            <br />
            <br />
            <a href='https://www.linkedin.com/in/gabrielarochaconrado' target="_blank" className="aSocial">LinkedIn</a>
          </div>

          <div className="equipe">

            <img src={Rian} className="imgIndiv" />

            <br />
            <h3 className="nameIndivdual">Rian Cardoso</h3>
            <a href='https://github.com/Klaus7067' target="_blank" className="aSocial">GitHub</a>
            <br />
            <br />
            <a href='https://www.linkedin.com/in/rian-cardoso-desenvolvedor-ti' target="_blank" className="aSocial">LinkedIn</a>
          </div>

          <div className="equipe">

            <img src={Rafael} className="imgIndiv" />

            <br />
            <h3 className="nameIndivdual">Rafael Valentim</h3>
            <a href='https://github.com/eurafaelvalemtim' target="_blank" className="aSocial">GitHub</a>
            <br />
            <br />
            <a href='https://www.linkedin.com/in/rafaelvalentimeu' target="_blank" className="aSocial">LinkedIn</a>
          </div>



        </div>


      </div>


    </main>
  )

}



export default About;