import { Fragment } from 'react';



const Layout = (props : any) => {
    return (
        <Fragment>
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
