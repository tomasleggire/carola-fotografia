import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import IntroductionSection from "./screens/IntroductionSection/IntroductionSection";
import CommentDivider from "./components/CommentDivider/CommentDivider";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <IntroductionSection />
      <CommentDivider comment="Un recuerdo perfecto de momentos inolvidables" />
    </>
  );
}

export default App;
