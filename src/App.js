import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Features, Footer, Header, Page, Started } from "./components";
import { ScrollProvider } from "./components/GlobalState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
    <ScrollProvider>
      <Header />
      <Page />
      <Features />
      <Footer />
    </ScrollProvider>
  );
};

export default App;
