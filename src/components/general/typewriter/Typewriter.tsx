import { useEffect, useRef } from "react";
import Typed from "typed.js";


const Typewriter = ({text, className} : {text:string[], className:any}) => {
    const el:any = useRef();

    useEffect(() => {
        const typed = new Typed(el.current,{
            strings : text,
            startDelay : 300,
            typeSpeed : 200,
            backSpeed : 50,
            backDelay : 200,
            smartBackspace : true,
            loop: false,
            showCursor: false,
            cursorChar: '_'
        })
        return () =>{
            typed.destroy();
        };
    }, []);

    return (
        <p className = {`${className}`} ref={el}></p>
    )
}

export default Typewriter;