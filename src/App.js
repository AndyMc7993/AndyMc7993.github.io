import './App.css'
import Navbar from "./components/Navbar"
import About from "./components/About"
import MainSkills from "./components/MainSkills"
import Projects from "./components/Projects"
import Background from "./components/Background"
import OtherSkills from "./components/OtherSkills"
import Contact from "./components/Contact"

export default function App() {
  return (
    <main id="app">
      <Navbar />
      <About />
      <MainSkills />
      <Projects />
      <Background />
      <OtherSkills />
      <Contact />
    </main>
  );
}
