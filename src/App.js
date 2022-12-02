import { useState, useEffect } from 'react';

import './App.css';

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
      <h1>Blog App</h1>
      {
        articles.map((article) => {
          return <div key={article.id}>
            <h2 >{article.title}</h2>
            <p>{article.description}</p>
            <p>Author: {article.created_user.email }</p>
            <p>Created At: {article.created_at }</p>


          </div> 
        }) 
      }
    </div>
  );
}

export default App;