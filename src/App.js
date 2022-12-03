import { useState, useEffect } from 'react';

import './App.css';
import ArticleList from './components/ArticleList.component';

function App() {
  // articles
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
        'method': 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Token 24b975f03c5a5ef923b42c74c8d333d47606b33c'
        }

      })
    .then(response => response.json())
    .then(response => setArticles(response))
    .catch(error => console.log(error));

  }, []) // [] one time call

  return (
    <div className="App">
      <h1 style={{marginBottom:'60px'}}>Blog App</h1>
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App;