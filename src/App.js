import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";

import MainPage from "./components/pages/MainPage";
import CharactersPage from "./components/pages/CharactersPage";
import CharacterPage from "./components/pages/CharacterPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <header className="header">
            <div className="container">HEADER</div>
          </header>
          <main className="main">
            <div className="container">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="characters" element={<CharactersPage />} />
                <Route path="character/:char_id" element={<CharacterPage />} />
              </Routes>
            </div>
          </main>
          <footer className="footer">
            <div className="container">FOOTER</div>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
