import "./styles/main.scss";
import "./App.css";
import Navbar from "./components/navbar";
import Container from "./components/maincontainer";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
