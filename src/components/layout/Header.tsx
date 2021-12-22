import { NavLink } from 'react-router-dom';
import MenuBar from '../menu/menubar';
import classes from './Header.module.css';

const Header = () => {



  return (
    <div className={classes.headerContainer}>
      <NavLink to='/'>
        <button className={classes.mainButton}> DONGWOO </button>
      </NavLink>
      <div>
      <MenuBar/>
      </div>
    </div>
  );
};

export default Header;
