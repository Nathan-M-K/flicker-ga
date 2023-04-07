import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './SearchPage'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1>Flickr</h1>
      <Routes>
        <Route path="/" element={<SearchPage />}>
          <Route index element={<p>Enter a search to begin</p>} />
          <Route
            path="/search/:queryText"
            element={<p>Search results will come here</p>}
          />
        </Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
