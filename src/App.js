import Navbar from "./componenets/navbar/Navbar";
import './App.css';
import Intro from "./componenets/intro/intro";
import Aboutme from "./componenets/aboutme/aboutme";
import Services from "./componenets/service-section/serviecs";
import Portfolio from "./componenets/portfolio/portfolio";
import Blog from "./componenets/blog/blog";
import Contact from "./componenets/contact/contact";
import Footer from "./componenets/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Aboutme />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
