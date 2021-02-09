// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWorks from "./pages/OurWorks";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
// Import Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Components
import Nav from "./components/Nav";
//Route
import { Switch, Route, useLocation } from "react-router-dom";
// Import motion
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWorks />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
