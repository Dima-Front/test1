import React from 'react';
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";

function App() {
    return (
        <div>
            <Header/>
            <div className='page-body' >
                <Aside/>
                <Main/>
            </div>

        </div>
    );
}

export default App;
