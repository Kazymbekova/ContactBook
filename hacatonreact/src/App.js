import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import MainRoutes from "./routes/MainRoutes"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer />
    </div>
  );
}

export default App;
