import { useState, useEffect } from 'react';
import '../styles/Home.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [probability, setProbability] = useState('');

  useEffect(() => {
    if (name) {
      const URL = `https://api.genderize.io?name=${name}`;
      axios.get(URL)
        .then((response) => {
          setGender(response.data.gender);
          setProbability(response.data.probability);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      setGender('');
      setProbability('');
    }
  }, [name]);


  return (
    <div>
      <h1>Analyze the name</h1>
        <label>
          Enter a first name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <div>
          <p>Gender: {gender}</p>
          <p>Probability: {probability}</p>
        </div>
    </div>
  );
}

export default App;
