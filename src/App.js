import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";

import FooterSection from "./Components/FooterSection";
import Explore from "./Components/Explore";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Explore></Explore>
      <AboutUs></AboutUs>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
