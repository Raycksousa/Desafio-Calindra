import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Work from "./components/Work/Work";
import Rodape from "./components/rodape/rodape"
import "./app.css"




function App() {

  return (
    <div className="app">
        <div className="sections">
          <Topbar/>
          <Intro/>
          <Work/>
          <Rodape/>
        </div>

    </div>
  );
}

export default App;
