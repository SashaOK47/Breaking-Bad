import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="characters" element={<CharactersPage />} />
          <Route path="character/:id" element={<CharacterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
