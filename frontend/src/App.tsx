import React, { useState } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from 'mdbreact';
import ExpressionForm from './layouts/home';
import Waves from './components/waves';
import BinaryTree from './layouts/binarytree';
import headerImg from './resources/header-img.png';

export default () => {
    const [layoutIndex, setLayoutIndex] = useState('home');
    const changeLayout = (layoutName : string) : void => setLayoutIndex(layoutName);

    const layouts : any = {
        home: <ExpressionForm />
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
                <ExpressionForm />
                <BinaryTree />
            </div>
        </>
    );
}
