import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/NoPage">View Missing page</Link>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;