import React, { useState } from 'react';
import Home from './layouts/home';
import Waves from './components/waves';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from 'mdbreact';

export default () => {
    const [layoutIndex, setLayoutIndex] = useState('home');
    const changeLayout = (layoutName : string) : void => setLayoutIndex(layoutName);

    const layouts : any = {
        home: <Home change={changeLayout} />
    }

    return (
        <>
            <Waves />
            <MDBContainer style={{ zIndex: 10 }}>
                <MDBBreadcrumb light className='header'>
                    <MDBBreadcrumbItem iconRegular icon='star'>
                        Home
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem iconRegular icon='star'>
                        Library
                    </MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBContainer>
            <div className='content'>
                {layouts[layoutIndex]}
            </div>
        </>
    );
}
