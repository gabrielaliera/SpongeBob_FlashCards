
import './App.css'
import Cards from './components/Card.jsx'
import SpongeBob from './assets/spongebob.png'
import Patrick from './assets/patrick.png'
import Squiward from './assets/squidward.png'


const App = () => {

  const cardPairs = [
    {name: "SpongeBob SquarePants", image: SpongeBob , question_image:""},
    {name: "Patrick Star", image: Patrick, question_image:"" },
    {name: "Squidward", image:Squiward, question_image:""}
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
