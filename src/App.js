import React from "react";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Header from "./components/Header";
// import Contact from "./components/Contact";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/About" component={About} />
//         <Route path="/Skills" component={Skills} />
//         <Route path="/Projects" component={Projects} />
//         <Route path="/Contact" component={Contact} />
//       </Switch>
//     </BrowserRouter>
//   );
// };

// export default App;
