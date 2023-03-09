
import './App.css'
import Cards from './components/Card.jsx'
import SpongeBob from './assets/spongebob.png'
import Patrick from './assets/patrick.png'
import Squiward from './assets/squidward.png'
import Krabs from './assets/mr_krabs.png'
import Plankton from './assets/plankton.jpeg'
import Sandy from './assets/sandy.png'
import Gary from './assets/gary.jpeg'
import King from './assets/King_neptune.jpeg'
import Pearl from './assets/pearl.png'
import Puff from './assets/mrs_puff.png'
import Larry from './assets/larry.png'
import Karen from './assets/karen.jpeg'
import Mermaid from './assets/mermaid.jpeg'
import Boy from './assets/barnacle_boy.png'


const App = () => {

  const cardPairs = [
    {name: "SpongeBob SquarePants", image: SpongeBob , question_image:"", diffculty:"easy"},
    {name: "Patrick Star", image: Patrick, question_image:"", diffculty:"easy" },
    {name: "Squidward", image:Squiward, question_image:"", diffculty:"easy"},
    {name: "Mr.Krabs", image:Krabs, question_image:"", diffculty:"easy"},
    {name: "Plankton", image:Plankton, question_image:"", diffculty:"medium"},
    {name: "Sandy Cheeks", image:Sandy, question_image:"",diffculty:"medium"},
    {name: "Gary", image:Gary, question_image:"", diffculty:"medium"},
    {name: "King Neptune", image:King, question_image:"", diffculty:"hard"},
    {name: "Pearl Krabs", image:Pearl, question_image:"",  diffculty:"hard"},
    {name: "Mrs. Puff", image:Puff, question_image:"",  diffculty:"hard"},
    {name: "Larry the Lobster", image:Larry, question_image:"",  diffculty:"hard"},
    {name: "Karen", image:Karen, question_image:"",  diffculty:"hard"},
    {name: "Mermaid Man", image:Mermaid, question_image:"",  diffculty:"hard"},
    {name: "Barnacle Boy", image:Boy, question_image:"", diffculty:"hard"}
  ]

  return (
    <div className="App">
      <div className="header">
        <h1>SpongeBob Trivia</h1>
        <h2>Can you correctly name the following characters?</h2>
      </div>
      <Cards cards={cardPairs}/>
    </div>
  )
}

export default App
