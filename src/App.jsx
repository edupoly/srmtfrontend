import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className="mybox">
      <h1>Front End Appliction Hello World</h1>
      <ul>
        <li>
          <Link to="/students">Student</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
