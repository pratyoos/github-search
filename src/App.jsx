import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center">
        <Search />
      </main>
      <Footer />
    </div>
  );
}

export default App;