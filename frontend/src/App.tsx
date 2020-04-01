import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from 'mdbreact';
import Content from './layouts/home';
import Waves from './components/waves';
import headerImg from './resources/header-img.png';
import { ToastProvider } from 'react-toast-notifications';

const App = () => {

    function goToDocumentation(): void {
        window.open("https://github.com/JanezSedeljsak/vsae/blob/master/README.md", "_blank")
    }

    return (
        <>
            <Waves />
            <MDBContainer>
                <MDBBreadcrumb light className='header'>
                    <img src={headerImg} style={{ height: 60, marginRight: 40 }} alt="VSAE" />
                    <MDBBreadcrumbItem icon='file' onClick={goToDocumentation}>
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

export default () => (
    <ToastProvider>
      <App />
    </ToastProvider>
);
