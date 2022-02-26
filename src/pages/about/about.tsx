import { MDBRipple } from 'mdb-react-ui-kit';



const About = () => {
    return (
        // <div>
        //     This is about page
        // </div>

        <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' style={{ maxWidth: '24rem' }}>
            <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.jpg' className='w-100' alt='about' />
            <a href='#!'>
                <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
            </a>
        </MDBRipple>
    )
}

export default About;