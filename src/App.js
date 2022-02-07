import {useState, useEffect} from "react"
import './App.css';

const URL = "https://api.jokes.one/jod";

function App() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  useEffect(()=>{
    fetch(URL)
      .then(response => response.json())
      .then(
        (response) => {
          const joke = response.contents.jokes[0].joke;
          setTitle(joke.title)
          setText(joke.text)
        }, (error) => {
          alert(error)
        }
      )
  },[])

  return (
    <div>
      <h1>Joke of the day</h1>
      <h3>{title}</h3>
      <h3>{text}</h3>
    </div>
  );
}

export default App;
