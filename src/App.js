import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <Router>
     <Header />
     <Main />
     <footer />
    </Router>
  );
}

export default App;
