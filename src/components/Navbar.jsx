import './Common.css';
import { FaBookOpen } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <FaBookOpen className='icons' />
                <h1>EducationPlaner</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="user-account">
                <a href="#"><RxHamburgerMenu className='icons hidden'/></a>
                <a href="#"><CiUser className='icons'/></a>
            </div>
        </nav>
    )
}

export default Navbar;