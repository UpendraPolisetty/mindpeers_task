import React, { useState } from 'react';

const Left = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(true)
    }

    const handleCross = () => {
        setMenu(false)
    }

    return (
        <nav className='left'>
            <i onClick={handleMenu} className="fas fa-bars hamberger_menu"></i>
            <i onClick={handleCross} className={`fas fa-times  cross ${menu === true ? "crossDisplay" : "cross"}`}></i>
            <div className={`containerleft ${menu === true ? "container_left_display" : "containerleft"}`}>
                <div className='logo'>
                    <a href="/">
                        <img src="foreground.png" alt="" />
                    </a>
                </div>
                <div className='pages'>
                    <li className='left_nav_li flex aligncenter'>
                        <i className="fas fa-user-alt left_icons"></i>
                        <h2>Profile</h2>
                    </li>
                    <li className='left_nav_li flex aligncenter'>
                        <i className="fas fa-calendar-week left_icons"></i>
                        <h2>Schedule</h2>
                    </li>
                    <li className='left_nav_li flex aligncenter'>
                        <i className="fas fa-user-alt left_icons"></i>
                        <h2>Overview</h2>
                    </li>
                    <li className='left_nav_li flex aligncenter'>
                        <i className="fas fa-chart-bar left_icons"></i>   
                        <h2>Chat</h2>
                    </li>
                    <li className='left_nav_li flex aligncenter'>
                        <i className="fas fa-cog left_icons"></i>                       
                        <h2>Settings</h2>
                    </li>                   
                </div>
                <div className='logout'>
                    <a href="#">
                    <i class="fas fa-sign-out-alt left_icons"></i>
                        Logout
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Left
