// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWorks from "./pages/OurWorks";
import ContactUs from "./pages/ContactUs";
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
        <Route path="/work">
          <OurWorks />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
