import { NavLink } from 'react-router-dom';
import aboutImage from './asset/about.png';
import blogImage from './asset/blog.png';
import contactImage from './asset/contact.png';
import projectImage from './asset/project.png';
import classes from './home.module.css';

const Home = () => {
    return (
        <div className={classes.MainMenuContainer}>
            <ul className={classes.MainMenuItemsContainer}>
                <li className={classes.MainMenuItems}>
                    <NavLink to='/about'>
                        <img src={aboutImage} alt='about' />
                    </NavLink>
                </li>
                <li className={classes.blankSection} />
                <li className={classes.MainMenuItems}>
                    <NavLink to='/blog'>
                        <img src={blogImage} alt='blog' />
                    </NavLink>
                </li>
                <li className={classes.blankSection} />
                <li className={classes.MainMenuItems}>
                    <NavLink to='/contact'>
                        <img src={contactImage} alt='contact' />
                    </NavLink>
                </li>
                <li className={classes.blankSection} />
                <li className={classes.MainMenuItems}>
                    <NavLink to='/project'>
                        <img src={projectImage} alt='project' />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Home;