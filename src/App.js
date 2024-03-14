import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import styles from "./scss/components/App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      <BackToTop />
    </div>
  );
}

export default App;
