import React from "react";
import { AnimatePresence } from "framer-motion";
import "./scss/app.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
