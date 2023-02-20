import './App.css';
import './styles/Meme.css'
import './styles/Header.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Meme from './components/Meme';
import Header from './components/Header';



const URL = "https://api.imgflip.com/get_memes"

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {

    axios.get(URL)
      .then((response) => {
        setError(null)
        setIsLoaded(true)
        setItems(response.data.data.memes)
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  function close() {
    setSelectedItem(null)
  }

  if (selectedItem != null) {
    return <Meme
      title={selectedItem.name}
      image={selectedItem.url}
      close={close}
    />
  }
  else if (error) {
    return <p>{error.message}</p>
  }
  else if (!isLoaded) {
    return <p>Loading...</p>
  }
  else {
    return (
      <div>
        <Header />
        {items?.map(item => (
          <div key={item.name} onClick={e => setSelectedItem(item)}>
            <img src={item.url} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
