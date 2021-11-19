import { NavLink } from 'react-router-dom';


const MenuContainer = () => {
    return (
        <div id='main-menu-selector'>
            <li>
                <NavLink to='/about'>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to='/blog'>
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to='/project'>
                    Project
                </NavLink>
            </li>
        </div>
    )
};


export default MenuContainer;