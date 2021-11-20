import { NavLink } from 'react-router-dom';
import { MDBRipple } from 'mdb-react-ui-kit';
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
                    <MDBRipple className='bg-image hover-zoom' style={{ maxWidth: '22rem'}}>
                       <img src={aboutImage} alt='about' className='w-100' />
                            <a href='#!'>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </a>
                        </MDBRipple>
                    </NavLink>

                </li>

                <li className={classes.blankSection} />
                <li className={classes.MainMenuItems}>
                    <NavLink to='/blog'>
                    <MDBRipple className='bg-image hover-zoom' style={{ maxWidth: '22rem'}}>
                        <img src={blogImage} alt='blog' />
                        <a href='#!'>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </a>
                        </MDBRipple>
                    </NavLink>
                </li>
                <li className={classes.blankSection} />
                <li className={classes.MainMenuItems}>
                    <NavLink to='/contact'>
                    <MDBRipple className='bg-image hover-zoom' style={{ maxWidth: '22rem'}}>

                        <img src={contactImage} alt='contact' />
                        <a href='#!'>

                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </a>
                        </MDBRipple>
                    </NavLink>
                </li>
                <li className={classes.blankSection} />
                <li className={classes.MainMenuItems}>
                    <NavLink to='/project'>
                    <MDBRipple className='bg-image hover-zoom' style={{ maxWidth: '22rem'}}>

                        <img src={projectImage} alt='project' />
                        <a href='#!'>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </a>
                        </MDBRipple>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Home;