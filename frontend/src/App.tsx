import React, { useState } from 'react';
import Home from './layouts/home';
import Waves from './components/waves';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from 'mdbreact';
import headerImg from './resources/header-img.png';

export default () => {
    const [layoutIndex, setLayoutIndex] = useState('home');
    const changeLayout = (layoutName : string) : void => setLayoutIndex(layoutName);

    const layouts : any = {
        home: <Home />
    }

    return (
        <>
            <Waves />
            <MDBContainer>
                <MDBBreadcrumb light className='header'>
                    <img src={headerImg} style={{ height: 60, marginRight: 40 }} />
                    <MDBBreadcrumbItem icon='home'>
                        Domov
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem icon='file'>
                        Dokumentacija
                    </MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBContainer>
            <div className='content'>
                {layouts[layoutIndex]}
            </div>
        </>
    );
}
