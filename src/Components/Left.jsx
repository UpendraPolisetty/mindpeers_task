import React from 'react'

const Left = () => {
    return (
        <nav>
            <div className='containerleft flex column between'>
                <div className='logo'>
                    <a href="/">
                        <img src="foreground.png" alt="" />
                    </a>
                </div>
                <div className='pages'>
                    <li><a href="/">
                    <i className="fad fa-user-circle"></i>
                       <span>Profile</span>
                        </a>
                    </li>
                    <li>
                       <i className="fad fa-user"></i>
                        <a href="/">
                       <span className='color'>Schedule</span>
                        </a>
                    </li>
                    <li><a href="/">
                       <i class="fad fa-user"></i>
                       <span>Overview</span>
                        </a>
                    </li>
                    <li><a href="/">
                       <i class="fad fa-user"></i>
                       <span>Chat</span>
                        </a>
                    </li>
                    <li><a href="/">
                       <i class="fad fa-user"></i>
                       <span>Settings</span>
                        </a>
                    </li>
                </div>
                <div className='logout'>
                    <a href="">
                        Logout
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Left
