import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MultilanguageDirection from './components/MultilanguageDirection';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <div className="p-5 bg-image" style={{ backgroundImage: `url(/fietslabyrint-background-1.png)`, height: '400px', backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} />
        <div className="mx-5">
          <div className="card mb-5 mx-md-5 bg-light bg-opacity-25 shadow-lg" style={{ marginTop: "-25px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(20px)" }}>
            <div className="my-5 py-5">
              <div className="container">
                <MultilanguageDirection></MultilanguageDirection>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
