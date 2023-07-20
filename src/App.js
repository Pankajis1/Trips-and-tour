import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";


function App () {
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
    {/* <script src="./js/app.js"></script> */}
    </>
  );
}

export default App;
