import ethImage from './asset/ethereum.png';
import reactImage from './asset/atomsymbol.png';
import typescriptImage from './asset/typescript.png';
import SCImage from './asset/smartcontracts.png';



const ImageSlider = () => {

    const imageStyle = "w-full flex md:w-64 my-30 px-8 py-8";
    return(
        <div className = 'justify-items-center grid grid-cols-4 h-52'>
            <img className = {imageStyle} src={ethImage} alt="ethereum" />
            <img className = {imageStyle} src={SCImage} alt="smartcontract" />
            <img className = {imageStyle} src={typescriptImage} alt="typescript" />
            <img className = {imageStyle} src={reactImage} alt="react" />
        </div>
    )
}

export default ImageSlider;