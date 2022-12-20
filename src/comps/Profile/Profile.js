import React from 'react';
import ProfileImage from './updated(1).jpg';
import { } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Social from '../Social/Social/Social';
import { TypeAnimation } from 'react-type-animation';



const Profile = () => {
    return (
        <div className='row mt-5'>
            <div className='col-lg-5 col-sm-12'>
                <div className='d-flex justify-content-end align-items-center profile-sm'>
                    <img className='profile_image rounded' src={ProfileImage} alt="" />
                </div>
            </div>
            <div className='col-lg-7 col-sm-12 '>
                <div className=' profile-sm d-flex justify-content-start align-items-center'>
                    <div className=' text-white infos' >
                        <h2 className='text-white '>Sazeduzzaman
                            <span>
                                <TypeAnimation
                                    sequence={[
                                        'Front-End Developer', // Types 'One'
                                        1000, // Waits 1s
                                        'Web Developer', // Deletes 'One' and types 'Two'
                                        2000, // Waits 2s
                                        'Full Stack Developer', // Types 'Three' without deleting 'Two'
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '13px' }}
                                />
                            </span>
                        </h2>

                        <p className='about-text' style={{ textAlign: 'justify' }}>Hey There, I am Sazeduzzaman Web Application Developer armed with proficient knowledge of the entire web development life cycle and react expertise.</p>
                        <div className='contact-in mb-4 '>
                            <Social></Social>
                        </div>
                        <div>
                            <Link class="bn33" to={'/contact'} style={{ textDecoration: 'none' }}>Hire Me</Link>
                            <a class="bn33 ms-2" style={{ textDecoration: 'none' }} role="button" href="https://drive.google.com/file/d/1td1OFDqJd7pR-QnArsy9qQuBEDf4JAtt/view?usp=share_link" target="_blank" rel="noreferrer">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;