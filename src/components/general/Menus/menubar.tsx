const Menubar = () => {

    const menuStyle = 'w-1/3 h-12 font-Spartan font-medium text-2xl'
    return(
        <div className='flex mb-4 text-white '>
            <a className={menuStyle} href="/about">about</a>
            <a className={menuStyle} href="/project">project</a>
            <a className={menuStyle} href="/contact">contact</a>
        </div>
    )
}

export default Menubar;