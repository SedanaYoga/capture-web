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
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
