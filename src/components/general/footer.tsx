import Subscribe from "../Subscribe/subscribe"

const Footer = () => {
    const footerBlock = "flex flex-col md:mx-10"
    const footerTitle = "font-bold"
    const footerElement = "text-left md:text-left pt-10"
    

    return(
        <div className="pt-10  lg:ml-96">
            <div className="flex w-full md:justify-end justify-right text-white md:flex-row flex-col">
                <div className={`${footerBlock}`}>
                    <div className={`${footerElement} text-slate-500 hover:text-stone-400`}> 
                    © 2021 Dongwoo Kang, Andy.
                    </div>
                </div>
                <div className={`${footerBlock}`}>
                    <Subscribe/>
                    {/* <p className={`${footerTitle}`}>Join my newsletter</p>
                    <form className="flex flex-row justify-center md:justify-start">
                        <input type="text" placeholder="name@email.com" className="text-black rounded-l-md" />
                        <button className="bg-[#333232] py-2 px-5 rounded-r-md">Join</button>
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;