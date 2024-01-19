import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Features, Footer, Header, Page, Started } from "./components";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/started" element={<Started />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <Page />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
