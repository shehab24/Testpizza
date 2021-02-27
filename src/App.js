import './App.css';
import { Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import Home from './Home';
import What_we from './What_we';
import Footer from "./Footer";
import Service from "./Service";
import Contact from "./Contact";


function App() {
  return (
    <>
  <Navbar/>
<Switch>
  <Route exact  path="/Testpizza" component={Home} />
  <Route exact  path="/Testpizza/about" component={What_we} />
  <Route exact  path="/Testpizza/service" component={Service} />
  <Route exact  path="/Testpizza/contact" component={Contact} />
</Switch>
<Footer/>
    </>
  );
}

export default App;
