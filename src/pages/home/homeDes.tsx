import classes from './homeDes.module.css'


const HomeDes = () => {
    return (
        <div className={classes.MainContainer}>
            <div className={classes.wrapper}>
                <div className={classes.firstword}>Decentrailzation</div>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.secondword}>Decentrailzed Finance</div>
                <div className={classes.thirdword}>Web 3.0</div>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.fourthword}>Blockchain Developer</div>
            </div>
        </div>
    )
}

export default HomeDes