import { NavLink } from 'react-router-dom';
import { MDBRipple } from 'mdb-react-ui-kit';
import aboutImage from './asset/about.png';
import blogImage from './asset/blog.png';
import contactImage from './asset/contact.png';
import projectImage from './asset/project.png';
import classes from './home.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import WebFont from 'webfontloader';
import { Tooltip } from 'react-bootstrap';

WebFont.load({
    google:{
        families: ['Cabin', 'sans-serif;']
    }
})


const Home = () => {
    return (
        <div className={classes.MainMenuContainer}>
            <ul className={classes.MainMenuItemsContainer}>

                <li className={classes.MainMenuItems}>
                    <NavLink to='/about'>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click if you want to know more about me!</Tooltip>}>
                            <span className="d-inline-block">
                                <MDBRipple className='bg-image hover-zoom' style={{ maxWidth: '22rem' }}>
                                    <img src={aboutImage} alt='about' className='w-100' />
                                    <div className={classes.itemDescription}> <b> ABOUT </b></div>
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                    </a>
                                </MDBRipple>
                            </span>
                        </OverlayTrigger>
                    </NavLink>
                </li>

                <li className={classes.blankSection} />
                <li className={classes.MainMenuItems}>
                    <NavLink to='/blog'>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click if you want to check out my articles!</Tooltip>}>
                            <span className="d-inline-block">
                                <MDBRipple className='bg-image hover-zoom' style={{ maxWidth: '22rem' }}>
                                    <img src={blogImage} alt='blog' />
                                    <div className={classes.itemDescription}> <b> BLOG </b></div>
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                    </a>
                                </MDBRipple>
                            </span>
                        </OverlayTrigger>
                    </NavLink>
                </li>
                <li className={classes.blankSection} />
                <li className={classes.MainMenuItems}>
                    <NavLink to='/contact'>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click if you want to contact me!</Tooltip>}>
                            <span className="d-inline-block">
                                <MDBRipple className='bg-image hover-zoom' style={{ maxWidth: '22rem' }}>
                                    <img src={contactImage} alt='contact' />
                                    <div className={classes.itemDescription}> <b> CONTACT </b></div>
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                    </a>
                                </MDBRipple>
                            </span>
                        </OverlayTrigger>
                    </NavLink>
                </li>
                <li className={classes.blankSection} />
                <li className={classes.MainMenuItems}>
                    <NavLink to='/project'>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click if you want to know more about my project!</Tooltip>}>
                            <span className="d-inline-block">
                                <MDBRipple className='bg-image hover-zoom' style={{ maxWidth: '22rem' }}>
                                    <img src={projectImage} alt='project' />
                                    <div className={classes.itemDescription}> <b> PROJECT </b></div>
                                    <a href='#!'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                    </a>
                                </MDBRipple>
                            </span>
                        </OverlayTrigger>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Home;