import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import AboutMe from "./components/AboutMe";
import Repositories from './components/Repositories'
import Form from './components/Form'

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Inicio></Inicio>
      <AboutMe></AboutMe>
      <Repositories></Repositories>
      <Form></Form>
    </div>
  );
}
