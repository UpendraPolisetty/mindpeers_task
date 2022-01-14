import React from 'react'

const Middle = () => {
    return (
        <div className="container" >
            <div className='part1'>
               <div className='schedule flex between'>
                   <div className='h1'>
                       <h1>Schedule</h1>
                   </div>
                    <div>
                       <span>Aug 5, 2021</span>
                       <span>ICON  </span>
                    </div>
                </div>
            <div className='menuBar flex between'>
                <li>
                    <a href="">Recent Added</a>
                </li>
                <li>
                    <a href="">In Progress</a>
                </li>
                <li>
                    <a href="">In Review</a>
                </li>
                <li>
                    <a href="">Completed</a>
                </li>
            </div>
            <div className='blocks'>
                <div className='div flex'>
                    <span><i className="fas fa-palette"></i></span>
                    <div>
                      <h2>Illustration Templates</h2>
                      <p>9:00 AM - 4:00PM</p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className='div flex'>
                    <span><i class="fas fa-bezier-curve"></i></span>
                    <div>
                       <h2>UI Design</h2>
                       <p>4:00PM - 5:00PM</p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className='div flex'>
                    <span><i class="fas fa-layer-group"></i></span>
                    <div>
                       <h2>UX Design</h2>
                        <p> 5:00PM - 6:00PM</p>
                    </div>
                    <img src="" alt="" />
                </div>

            </div>
            </div>
            <div className='part2'>
                <div className='Progress flex between'>
                    <div>
                        <h1 className='h1'>Project Progress</h1>
                    </div>
                    <div>
                        <span><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </div>
                <div className='bar'>
                    <div className='head flex between'>
                        <h2>Illustration Templates</h2>
                        <div>
                        <a><i class="fas fa-download"></i></a>
                        <a><i class="fas fa-edit"></i></a>
                        </div>
                    </div>
                    <div className='flex between'>
                        <div>
                            <img className='img1' src="progress.png" alt="" />
                        </div>
                        <div>
                            <div>
                              <h1>Cartoon Illustration</h1>
                              <p>Modern storytelling</p>
                            </div>
                            <div>
                              <h1>Abstract Pattern</h1>
                               <p>Geometric Shapes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle
