
import './App.css'
import Cards from './components/Card.jsx'
import SpongeBob from './assets/spongebob.png'
import Patrick from './assets/patrick.png'
import Squiward from './assets/squidward.png'


const App = () => {

  const cardPairs = [
    {name: "SpongeBob SquarePants", image: SpongeBob , question_image:""},
    {name: "Patrick Star", image: Patrick, question_image:"" },
    {name: "Squidward", image:Squiward, question_image:""},
    {name: "Mr.Krabs", image:Squiward, question_image:""},
    {name: "Plankton", image:Squiward, question_image:""},
    {name: "Sandy Cheeks", image:Squiward, question_image:""},
    {name: "Gary", image:Squiward, question_image:""},
    {name: "King Neptune", image:Squiward, question_image:""},
    {name: "Pearl Krabs", image:Squiward, question_image:""},
    {name: "Mrs. Puff", image:Squiward, question_image:""},
    {name: "Larry the Lobster", image:Squiward, question_image:""},
    {name: "Karen", image:Squiward, question_image:""},
    {name: "Mermaid Man", image:Squiward, question_image:""},
    {name: "Barnacle Boy", image:Squiward, question_image:""}
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
