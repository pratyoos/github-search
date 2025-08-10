import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Search />
      </main>
      <Footer />
    </div>
  );
}

export default App;
