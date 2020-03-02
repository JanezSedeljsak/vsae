import React, { useState } from "react";
import Home from "./layouts/home.tsx";
import Waves from "./components/waves.tsx";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

export default () => {
    const [layoutIndex, setLayoutIndex] = useState('home');
    const layouts : Object = {
        home: <Home change={setLayoutIndex} />
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
