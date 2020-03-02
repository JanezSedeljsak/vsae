import React, { useState } from "react";
import Home from "./layouts/home";
import Waves from "./components/waves";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

function App() {
    const [layoutIndex, setLayoutIndex] = useState('home');
    const layouts = {
        home: <Home/>
    }
    return (
        <>
            <Waves />
            <MDBContainer style={{ zIndex: 10 }}>
                <MDBBreadcrumb light className="header">
                    <MDBBreadcrumbItem iconRegular icon="star">
                        Home
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem iconRegular icon="star">
                        Library
                    </MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBContainer>
            <div className="content">
                {layouts[layoutIndex]}
            </div>
        </>
    );
}

export default App;
