import { Link } from "react-router-dom"
import "./Nav.scss"
import { useContext } from "react"
import { MainContext } from "../context/MainProvider"


function Nav() {
    const {basket}=useContext(MainContext)
    
  return (
    <div className="nav">
        <div className="basliq">
            <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png" alt="" />
        </div>

        <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/Basket"}>Basket {basket.length}</Link>
        <Link to={"/WishList"}>WishList</Link>
        <Link to={"/Add"}>Add</Link>
        <Link to={"/Admin"}>Admin</Link>

        </div>

        <div className="icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-x-twitter"></i>
        </div>
        <div className="menu">
        <i className="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default Nav