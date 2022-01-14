import React, { useState } from 'react'

const Middle = () => {
  
    return (
        <div className="container middle" >
            <div className='part1'>
               <div className='schedule flex between'>
                   <div className='h1'>
                       <h1>Schedule</h1>
                   </div>
                    <div className='flex aligncenter '>
                       <h2 className='date_aug'>Aug 5, 2021</h2>
                       <h2><i class="fas fa-angle-down"></i>  </h2>
                    </div>
                </div>
            <div className='menuBar flex between'>
                <li>
                    <a className="recent_active" href="">Recent Added</a>
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
                <div className='div flex aligncenter middle_box'>
                    <span><i className="fas fa-palette"></i></span>
                    <div className='blocks_div'>
                      <h2>Illustration Templates</h2>
                      <p>9:00 AM - 4:00PM</p>
                    </div>
                    <div className='photos_div'>
                        <img className='photo_one' src="/Media/photo1.jpeg" alt="photo1" />
                        <img className='photo_one photo_two' src="/Media/photo2.jpg" alt="photo2" />
                        <img className='photo_one photo_three' src="/Media/photo3.jpeg" alt="photo3" />
                    </div>
                </div>
                <div className='div flex aligncenter middle_box'>
                    <span><i class="fas fa-bezier-curve"></i></span>
                    <div className='blocks_div'>
                       <h2>UI Design</h2>
                       <p>4:00PM - 5:00PM</p>
                    </div>
                    <div className='photos_div'>
                        <img className='photo_one' src="/Media/photo1.jpeg" alt="photo1" />
                        <img className='photo_one photo_two' src="/Media/photo2.jpg" alt="photo2" />
                    </div>
                </div>
                <div className='div flex aligncenter middle_box'>
                    <span><i class="fas fa-layer-group"></i></span>
                    <div className='blocks_div'>
                       <h2>UX Design</h2>
                        <p> 5:00PM - 6:00PM</p>
                    </div>
                    <div className='photos_div'>
                        <img className='photo_one' src="/Media/photo1.jpeg" alt="photo1" />
                        <img className='photo_one photo_two' src="/Media/photo2.jpg" alt="photo2" />
                        <img className='photo_one photo_three' src="/Media/photo3.jpeg" alt="photo3" />
                    </div>
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
                    <div className='flex between '>
                        <div className='progress_bar'>
                            <div className="outer flex center aligncenter">
                                <div className="inner">
                                    <div className="number_one flex center aligncenter">35%</div>
                                    <div className="number_two flex center aligncenter">65%</div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>
                        </div>
                        <div>
                            <div className='progress_bar_data'>
                                <div className='flex aligncenter'>
                                    <div className="progress_bar_dot"></div>
                                    <h2>Cartoon Illustration</h2>
                                </div>
                              <p>Modern storytelling</p>
                            </div>
                            <div className='progress_bar_data'>
                                <div className='flex aligncenter'>
                                    <div className="progress_bar_dot"></div>
                                    <h2>Abstract Pattern</h2>
                                </div>
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
