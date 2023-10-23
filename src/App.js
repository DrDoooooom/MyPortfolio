import Navbar from "./components/navBar/navBar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import ContactMe from "./components/contact/contactme";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
      <Works />
      <ContactMe/>
      <Footer/>
    </div>
  );
}
export default App;
