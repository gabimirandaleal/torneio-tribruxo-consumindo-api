import Routes from "./Routes"
import imgfundo from "./assets/img/hogwarts.jpg"


function App() {
 
  return (
    <div className="App">
      <div className="container">
            <img className="app-img" src={imgfundo} alt=""/>
            <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
