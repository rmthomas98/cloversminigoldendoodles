import { Route, Switch } from "react-router-dom";
import useScrollPosition from "@react-hook/window-scroll";
import Front from "./Front";
import AboutFront from "./AboutFront";
import ContactFront from "./ContactFront";
import Footer from "./Footer";
import Clover from "./Clover";
import Boaz from "./Boaz";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import Dogview from "./DogView";
import Nav from "./Nav";
import ScrollTop from "./ScrollTop";
import Puppies from "./Puppies";

const App = () => {
  const scrollY = useScrollPosition(60);

  return (
    <div className="App">
      <Nav scrollY={scrollY} />
      <ScrollTop scrollY={scrollY} />
      <Switch>
        <Route path="/" exact>
          <div style={{ background: "#f2f7fd" }}>
            <Front />
            <Dogview />
            <AboutFront />
            <ContactFront />
            <Footer />
          </div>
        </Route>
        <Route path="/clover" exact>
          <div>
            <Clover />
            <ContactFront />
            <Footer />
          </div>
        </Route>
        <Route path="/boaz" exact>
          <div>
            <Boaz />
            <ContactFront />
            <Footer />
          </div>
        </Route>
        <Route path="/puppies" exact>
          <Puppies />
          <ContactFront />
          <Footer />
        </Route>
        <Route path="/gallery" exact>
          <div>
            <Gallery />
            <Footer />
          </div>
        </Route>
        <Route path="/about" exact>
          <div>
            <About />
            <ContactFront />
            <Footer />
          </div>
        </Route>
        <Route path="/contact" exact>
          <div>
            <Contact />
            <Footer />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
