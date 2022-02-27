import mainLogo from './asset/logo2.png';
import MenuBar from './Menus/menubar';


const Header = () => {
  return (
    <div className = "w-full flex mb-4 ">
      <div className="w-1/3 h-12 justify-center items-center">
        <img src={mainLogo} className="w-32 cursor-pointer " alt="logoImage"/>
      </div>
      <div className="w-1/3 h-12">
        
      </div>
      <div className="w-1/3 h-12">
      <MenuBar/>
      </div>
    </div>
  );
};

export default Header;
