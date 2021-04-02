import axios from "axios";
import { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [example, setExample] = useState("Loading...");


  useEffect(() => {
    axios.get('https://fir-example-862f9-default-rtdb.firebaseio.com/example.json')
      .then(response => {
        setExample(response.data);
      });
  }, []);


  return (
    <div className="App">
      <input type="text" onClick={(event) => { console.log(event.target.value) }} />
      {example}
    </div>
  );
}

export default App;