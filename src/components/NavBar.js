




import {Link } from 'react-router-dom'
const NavBar = ()=>{
  return(
       <nav className="nav-sty">
       <Link className="lik-styl"  to="/">About</Link>
       <Link className="lik-styl"  to="/Stores">Stores</Link>
       <Link className="lik-styl"  to="/products">Products</Link>
       <Link  className="lik-styl" to="/Settings">Settings</Link>

       </nav>
  )
}
export default NavBar
