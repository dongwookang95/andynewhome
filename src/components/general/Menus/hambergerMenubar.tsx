import { push as Menu } from 'react-burger-menu'


// const MenuBarItem = ({title, classProps}:{title : string, classProps : string})=>{
//   return (
//     <ul className={`mx-4 cursor-pointer ${classProps}`}>
//       <li>{title}</li></ul>
//   )
// }
    
    
    
  
const MenuBar = () => {

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
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
      background: '#373a47',
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
  // return (
  //   <Menu styles={styles} right>
  //     {["Home","About","Blog","Contact","Project"].map((item, index) =>(
  //       <MenuBarItem key={index} title={item} classProps="my-2 text-lg"/>
  //     ))}
  //   </Menu>
  // )
  return(
  <Menu styles={styles}>
  <a id="home" className="menu-item" href="/">Home</a>
  <a id="about" className="menu-item" href="/about">About</a>
  <a id="contact" className="menu-item" href="/contact">Contact</a>
</Menu>
)
}

export default MenuBar;

