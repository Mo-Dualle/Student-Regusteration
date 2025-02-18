import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav';
import Main from './Main';

function Dashboard() {
    const [toggle, setToggle] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [collapsed, setCollapsed] = useState(false);

    const Toggle = () => {
        if (!isMobile) {
            setCollapsed(!collapsed);
        } else {
            setToggle(!toggle);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='container-fluid bg-dark min-vh-100'>
            <div className='row'>
                <div 
                    className={`transition-all ${toggle && !isMobile ? (collapsed ? 'col-1 p-0' : 'col-md-2 col-sm-3 col-4') : 'd-none'} bg-white min-vh-100`} 
                    style={{ transition: 'all 0.3s ease' }}>
                    <Sidebar collapsed={collapsed} />
                </div>

                <div className={`transition-all ${toggle && !isMobile ? (collapsed ? 'col-11' : 'col-md-10 col-sm-9 col-8') : 'col-12'}`} style={{ transition: 'all 0.3s ease' }}>
                    <Nav Toggle={Toggle} />
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
