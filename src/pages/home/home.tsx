import classes from "./home.module.css"
import Footer from "../../footer/footer"
import HomeDes from "./homeDes"
import { Flex } from "../../components/layout/flex"

const Home = () => {
    return (
        <div className={classes.homeContainer}>

            <Flex>
            <HomeDes/>
            </Flex>
            <Flex>
            <Footer/>
            </Flex>
        </div>
    )
}

export default Home
