// import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projetopen from "./components/projetopen/Projetopen";
import Qualification from "./components/qualification/Qualification";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Skills />
        <Qualification />
        <Projetopen />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
