import { push as Menu } from 'react-burger-menu'


const MenuBar = () => {
  var styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '30px',
      height: '24px',
      right: '36px',
      top: '20px'
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: 'none',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <Menu styles={styles} right>
      <a id="home" className="menu-item" href="/">Home</a><br />
      <a id="about" className="menu-item" href="/about">About</a><br />
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  )
}

export default MenuBar;


