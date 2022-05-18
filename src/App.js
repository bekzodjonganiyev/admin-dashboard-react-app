import Sidebar from "./Components/Sidebar/Sidebar"
import Main from "./Components/Main/Main"
import "./Assets/style.scss"


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
          <Main />
      </div>
    </div>
  );
}

export default App;
