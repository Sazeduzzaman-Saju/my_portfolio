import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../../comps/Profile/updated(1).jpg';
import './About.css';
import PuffLoader from "react-spinners/PuffLoader";
import { TypeAnimation } from 'react-type-animation';
import useWebTitle from '../../hooks/useWebTitle/useWebTitle';
import Social from '../../comps/Social/Social/Social';
import Pointer from '../../comps/Pointer/Pointer';

const About = () => {
    useWebTitle('About Me')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])
    return (

        <div>
            {
                loading ?
                    <div className='container'>
                        <div className='row'>
                            <div className='col d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                                <PuffLoader color={'#4568dc'} loading={loading} size={150} />
                            </div>
                        </div>
                    </div>
                    :

                    <div className='container' >
                        <Pointer></Pointer>
                        <div class="">
                            <div class="page-title p-5">
                                <h2 data-aos="fade-up-right" data-aos-duration="1500"><span class="upper-text">About</span> <span class="title-bg">About</span></h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col mt-5'>
                                <div className='d-flex justify-content-center align-items-center' data-aos="fade-up-right" data-aos-duration="1500">
                                    <img className=' profile_image rounded' src={ProfileImage} alt="" />
                                </div>
                                <div data-aos="fade-up-right" data-aos-duration="1500">
                                    <h1 className='text-center upper-text text-uppercase mt-3'>Sazeduzzaman Saju</h1>
                                    <p className='text-center text-white'><TypeAnimation
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
                                        style={{ fontSize: '1em' }}
                                    /></p>
                                    <p className='about-text-info mx-auto text-white mt-3' style={{ textAlign: 'justify' }}>Have excellent technical skills, communication skill, and goal-focused professional offering 1 years of experience in Computer industry.I am motivated and enthusiastic by new challenges and tasks and take excellent approach to achieve success in all projects. I like to work in a complex projects which have scope for learning and challenge.My training and experience in the field of computer programming and web design.</p>
                                    <p className=' about-text-info mx-auto text-white mt-3' style={{ textAlign: 'justify' }}>Dear I know HTML, CSS, Bootstrap, Tailwind CSS, Javascript, and React.js, React-bootstrap, React-router, dotenv, Daisy-UI familiar with Material Ui, Express.js, Firebase, MongoDB, and JWT also using tools vs-code, git, netlify, vertical, chrome dev tools. To obtain a position with the opportunity to utilize my technical, skills, talent, creativity, and sincerity, for the better achievement of the organization. I consider myself a quick learner, self-motivated, responsible,disciplined-oriented person who can work under pressure.</p>
                                    <div className='contact-in d-flex justify-content-center'>
                                        <Social></Social>
                                    </div>
                                </div>
                                <div className=' mb-4 d-flex justify-content-center'>
                                    <Link to={'/contact'}><button className='bn33'>Hire Me</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='text-start mt-5 mb-5'>
                                    <Link to={'/'} style={{ textDecoration: 'none' }}><button className='bn33'>Home</button></Link>
                                </div>

                            </div>
                            <div className='col-lg-6'>

                                <div className='text-end mt-5 mb-5'><span className='m-3 text-white'></span>
                                    <Link to={'/services'} style={{ textDecoration: 'none' }}><button className='bn33'>Next Page</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default About;