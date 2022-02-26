import { useRef, useState } from "react";
import { getEnabledCategories } from "trace_events";

// need advise about any type

const Subscribe = () => {
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    
    const emailInputRef = useRef<any>(null);
    // const subscribeHander=(event:any) =>
    //     fetch('https://us-central1-dongwookang-b49a4.cloudfunctions.net/app/entries',{
    //     method:'GET',
    // }).then((res)=>{
    //     if(res.ok){
            
    //     }else{
    //         return res.json().then((data) => {
    //             let errorMessage = 'Could not retrive data!'
    //             throw new Error(errorMessage);
    //         })
    //     }
    // })
    // const enteredEmail = emailInputRef.current.value;
    const submitHandler= async(event:any)=>{
        await fetch(`https://us-central1-dongwookang-b49a4.cloudfunctions.net/app/entries:${emailInputRef}`,{
            method:'GET',
        }).then((res)=>{
            if(res.ok){
                console.log("this call was okay")
            }else{
                console.log("THis call was not okay")
            }
        })
    }
    
    return(
        <div>
            <p className="flex flex-col md:mx-10">Join my newsletter</p>
            <form className="flex flex-row justify-center md:justify-start" onSubmit={submitHandler}>
                <input className="text-black"type="text" placeholder="name@email.com" required ref={emailInputRef}/>
                <button className="bg-[#333232] py-2 px-5 rounded-r-md" >Join</button>
            </form>
        </div>
    )
    //1. Need to get data input and set as a current state
    //2. 
}

export default Subscribe;