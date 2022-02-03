import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import CharactersPage from "./components/pages/CharactersPage";
import CharacterPage from "./components/pages/CharacterPage";
import NotFound from "./components/pages/NotFound";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import "./assets/styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <main className="main">
            <div className="container">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="characters" element={<CharactersPage />} />
                <Route path="character/:id" element={<CharacterPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
