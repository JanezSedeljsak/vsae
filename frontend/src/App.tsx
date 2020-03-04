import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from 'mdbreact';
import Content from './layouts/home';
import Waves from './components/waves';
import headerImg from './resources/header-img.png';

export default () => {

    return (
        <>
            <Waves />
            <MDBContainer>
                <MDBBreadcrumb light className='header'>
                    <img src={headerImg} style={{ height: 60, marginRight: 40 }} alt="VSAE" />
                    <MDBBreadcrumbItem icon='home'>
                        Domov
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem icon='file'>
                        Dokumentacija
                    </MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBContainer>
            <div className='content'>
                <Content />
            </div>
        </>
    );
}
