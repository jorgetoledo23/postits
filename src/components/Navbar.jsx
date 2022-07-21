import ReactSwitch from 'react-switch'
import React from 'react';
export default function Navbar({ }){
    const theme = React.useContext('ThemeContext');
    return <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Post Its App</a>
                <div className="d-flex">
                    <div className='m-2'>
                        Dark Mode
                    </div>
                    <div className='m-2'>
                        <ReactSwitch onChange={() => { return false} } checked={false}/>
                    </div>
                    
                </div>
            </div>
        </nav>

}