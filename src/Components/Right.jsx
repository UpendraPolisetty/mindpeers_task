import React from 'react'

const Right = () => {
    return (
        <div className='container'>
            <div className='part1'>
                <div className='flex between aligncenter mobile_input'>
                    <div className='search'>
                        <i class="fas fa-search"></i>
                        <input type="search" placeholder='Search'/>
                    </div>
                    <img className='photo_one photo_input' src="/Media/input_photo.png" alt="photo1" />
                </div>
                <div className='meeting flex between'>
                   <div className='h1'> 
                       <h1>Meeting</h1>
                   </div>
                    <div className='flex aligncenter '>
                       <h2 className='date_aug'>Aug 3 2021 - Aug 5, 2021</h2>
                       <h2><i class="fas fa-angle-down"></i>  </h2>
                    </div>
                </div>
                <div className='date flex between'>
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
                        <p>-</p>
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
                    <div className='box '>
                        <div>
                        <center>
                            <p>Mon</p>
                            <p>3</p>
                            </center>
                        </div>
                        <p>9:00 AM</p>
                        <p>-</p>
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
            <div className='part2 right_part2'>
                <div className='flex between right_bottom'>
                    <div>
                        <h1 className='files'>Files</h1>
                    </div>
                    <div className='flex'>
                        <p>View all</p>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
                <div className='blocks'>
                <div className='div1  flex aligncenter '>
                    <span className='part2_color'><i class="fas fa-soap"></i></span>
                    <div className='blocks_div'>
                      <h2>User flow.flg</h2>
                      <p>Aug5,2021 at 9:50AM</p>
                    </div>
                    <div className='flex right_part_two_box photos_div'>
                        <h2>0.6KB</h2>
                        <a><i class="fas fa-download"></i></a>

                    </div>
                </div>
                <div className='div1  flex aligncenter '>
                    <span className='part2_color'><i class="fas fa-soap"></i></span>
                    <div className='blocks_div'>
                       <h2>Design system.flg</h2>
                       <p>Aug5,2021 at 9:20AM</p>
                    </div>
                    <div className='flex right_part_two_box photos_div'>
                        <h2>0.6KB</h2>
                        <a><i class="fas fa-download"></i></a>

                    </div>
                </div>
                <div className='div1  flex aligncenter '>
                    <span className='part2_color'><i class="fas fa-file-code"></i></span>
                    <div className='blocks_div'>
                       <h2>Animation.json</h2>
                        <p>Aug5,2021 at 9:05AM</p>
                    </div>
                    <div className='flex right_part_two_box photos_div'>
                        <h2>0.6KB</h2>
                        <a><i class="fas fa-download"></i></a>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Right
