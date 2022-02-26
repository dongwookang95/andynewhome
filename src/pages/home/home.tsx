import Footer from "../../components/general/footer";
import { useState } from "react"
import Typewriter from "../../components/general/typewriter/Typewriter";
import Header from "../../components/general/Header";
import Imgslider from "../../components/general/imgslider";

const Home = () => {
    const gridStyle = "flex justify-center items-center px-8 py-8 border-white-700/50 border-4"
    const [catchPhrase,setCatchPhrases] =  useState(['Ethereum','Chainlink','Hardhat','Solidity','Typescript','React','I am a Fullstack developer'])

    return (
        <div className="gradient-bg-welcome">
            <Header/>
            <Imgslider/>
            <div className="w-full md:h-96 flex justify-center text-white flex-col md:flex-row ">
                <div className="flex justify-center items-center w-full px-8 py-8">
                <div className="grid grid-cols-2 gap-4 h-32">
                    <div className="text-6xl font-extrabold text-white col-span-2">Decentrailzation</div>
                    <div className="text-4xl font-extrabold text-white">Decentrailzed Finance</div>
                    <div className="text-4xl font-extrabold text-white">Web 3.0</div>
                    <div className="text-2xl font-extrabold text-white">Blockchain Developer</div>
                </div>
                </div>
                <div className="flex w-full md:h-full h-96 px-8 py-8 ">
                    <Typewriter text={catchPhrase} className="m-auto md:w-96 text-6xl text-right md:text-left"/>
                </div>
            </div>
            
        <div>
        <Footer/>
        </div>
        </div>
    )
}

export default Home