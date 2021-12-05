import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Container, GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
          <AboutMe />
          
          <Projects />
          
          <ContactMe />
      </Container>
      <Footer />
    </>
  );
}

export default App;
