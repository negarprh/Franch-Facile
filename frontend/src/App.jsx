import React, { useEffect, useState } from "react";
import Sidebar from "./componentMain/Sidebar/Sidebar";
import Main from "./componentMain/Main/Main";
import './index.css';


function App() {


    return (
        <>
            <div className="layout">
                <Sidebar />
                <Main />
            </div>
        </>

    )
}

export default App;
