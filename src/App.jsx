import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import AboutMe from "./components/AboutMe";
import Repositories from './components/Repositories'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Certifications from './components/Certfications'

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Inicio></Inicio>
      <AboutMe></AboutMe>
      <Certifications></Certifications>
      <Repositories></Repositories>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}
