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
      <CommentDivider comment="Crea recuerdos para toda la vida" />
      <Gallery />
    </>
  );
}

export default App;
