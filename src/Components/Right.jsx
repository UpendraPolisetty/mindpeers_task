import React from 'react'

const Right = () => {
    return (
        <div className='container'>
            <div className='part1'>
                <div>
                    <div className='search'>
                    <i class="fal fa-search"></i>
                        <input type="search" placeholder='search'/>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <h1>Meeting</h1>
                    </div>
                    <div>
                        <p>Aug3,2021 - Aug7,2021</p>
                        <a href="/">Icon</a>
                    </div>
                </div>
                <div className='date flex'>
                    <div className='box'>
                        <div>
                            <center>
                            <p>Mon</p>
                            <p>3</p>
                            </center>
                        </div>
                        <p>9:00 AM</p>
                        <p>2:00 PM</p>
                        <p>4:00 PM</p>
                    </div>
                    <div className='box'>
                        <div>
                            <center>
                            <p>Mon</p>
                            <p>3</p>
                            </center>
                        </div>
                        <p>9:00 AM</p>
                        <p>2:00 PM</p>
                        <p>4:00 PM</p>
                    </div>
                    <div className='box'>
                        <div>
                            <center>
                            <p>Mon</p>
                            <p>3</p>
                            </center>
                        </div>
                        <p>9:00 AM</p>
                        <p>2:00 PM</p>
                        <p>4:00 PM</p>
                    </div>
                    <div className='box'>
                        <div>
                        <center>
                            <p>Mon</p>
                            <p>3</p>
                            </center>
                        </div>
                        <p>9:00 AM</p>
                        <p>2:00 PM</p>
                        <p>4:00 PM</p>
                    </div>
                    <div className='box'>
                        <div>
                        <center>
                            <p>Mon</p>
                            <p>3</p>
                            </center>
                        </div>
                        <p>9:00 AM</p>
                        <p>2:00 PM</p>
                        <p>4:00 PM</p>
                    </div>
                </div>
            </div>
            <div className='part2'>
                <div className='flex between'>
                    <div>
                        <h1>Files</h1>
                    </div>
                    <div>
                        <p>View all</p>
                        <a href="/">Icon</a>
                    </div>
                </div>
                <div className='blocks'>
                <div className='div1 flex'>
                    <span><i className="fas fa-palette"></i></span>
                    <div>
                      <h2>User flow.flg</h2>
                      <p>Aug5,2021 at 9:50AM</p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className='div1 flex'>
                    <span><i class="fas fa-bezier-curve"></i></span>
                    <div>
                       <h2>Design system.flg</h2>
                       <p>Aug5,2021 at 9:20AM</p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className='div1 flex'>
                    <span><i class="fas fa-layer-group"></i></span>
                    <div>
                       <h2>Animation.json</h2>
                        <p>Aug5,2021 at 9:05AM</p>
                    </div>
                    <img src="" alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Right
