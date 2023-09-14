import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { PiMagnifyingGlassLight } from 'react-icons/pi'
import logo from '../../assets/logo.png'
import './Navbar.css'

function Navbar() {
    return (
        //sticky nav with hoverable dropdown buttons
        <header className='sticky-nav'>
            <nav className='nav'>
                <NavLink to='/' className='logo'><img src={logo} /></NavLink>
                <div className='buscador'>
                    <input placeholder='Buscador'></input>
                    <button ><PiMagnifyingGlassLight className='search' /></button>
                </div>
                <div className='menu'>
                    <div class="dropdown">
                        <button class="dropbtn">About ▼</button>
                        <div class="dropdown-content">
                            <NavLink
                                to="/About"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#80808060" : "",
                                    };
                                }}
                            >
                                Preguntas Frecuentes
                            </NavLink>
                            <NavLink
                                to="/Contact"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#80808060" : "",
                                    };
                                }}
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Categorias ▼</button>
                        <div class="dropdown-content">
                            <NavLink
                                to="/Collares"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#80808060" : "",
                                    };
                                }}
                            >
                                Collares
                            </NavLink>
                            <NavLink
                                to="/Arneses"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#80808060" : "",
                                    };
                                }}
                            >
                                Arneses
                            </NavLink>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Dropdown ▼</button>
                        <div class="dropdown-content">
                            <a href="#">Navlink 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                </div>
                <div className='user-cart'>
                    <div class="dropdown">
                        <button class="dropbtn"> <AiOutlineUser className='user' /></button>
                        <div class="dropdown-content">
                            <NavLink
                                to="/Login"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#80808060" : "",
                                    };
                                }}
                            >
                                Ya tengo cuenta
                            </NavLink>
                            <NavLink
                                to="/Registrate"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#80808060" : "",
                                    };
                                }}
                            >
                                Registrate
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to="/Carrito"
                        style={({ isActive }) => {
                            return {
                                color: "white",
                                backgroundColor: isActive ? "grey" : "",
                            };
                        }}>
                        <BiCart className='cart' />
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;