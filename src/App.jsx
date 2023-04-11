import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Inicio></Inicio>
    </div>
  );
}

export default App;
