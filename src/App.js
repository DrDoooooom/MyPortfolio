import Navbar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Works from "./components/works/works";
import Intro from "./components/intro/intro";
import ContactMe from "./components/contact/contactme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Works />
      <ContactMe/>
      <Footer/>
    </div>
  );
}
export default App;
