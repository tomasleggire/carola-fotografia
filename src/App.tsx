import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import Gallery from "./screens/Gallery/Gallery";
import CommentDivider from "./components/CommentDivider/CommentDivider";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Gallery />
      <CommentDivider comment="Crea recuerdos para toda la vida" />
    </>
  );
}

export default App;
