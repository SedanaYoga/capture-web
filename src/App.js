// Import Pages
import AboutUs from "./pages/AboutUs";
// Import Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Components
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
