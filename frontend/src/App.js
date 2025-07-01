import LoginSignup from "./components/LoginSignup/LoginSignup";
import {BrowserRouter as Router, Routes,Route} from 'react-router'
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element ={<LoginSignup/>}/>
        <Route path="/login-user" element ={<h1 >Welcome user!!</h1>}/>
        <Route path="/login-admin" element ={<h1>Welcome Admin</h1>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
