import logo from "../images/logo.svg"
import { Pagelinks , Sociallinks} from "./Data";

const Navbar = () => {
  return (
    <>
     <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
    
        <ul className="nav-links" id="nav-links">
          
          {Pagelinks.map((pe)=>{
          const{href, page} = pe
          return(
            <li>
              <a href={href} className="nav-link" >{page} </a>
            </li>
          )},)}

        </ul>

        <ul className="nav-icons">
          {Sociallinks.map((se)=>{
            const {href, className} = se
            return(<li>
              <a href={href} target="_blank" className="nav-icon">
                <i className={className}></i>
              </a>
            </li>
            )},)}
        </ul>
      </div>
    </nav>
    </>
  )
};

export default Navbar;