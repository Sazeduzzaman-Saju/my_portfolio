import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { } from "react-icons/fa";
import Profile from '../../comps/Profile/Profile';
import PuffLoader from "react-spinners/PuffLoader";
import useWebTitle from '../../hooks/useWebTitle/useWebTitle';
import Particales from '../../comps/Particle/Particle';
import Pointer from '../../comps/Pointer/Pointer';


const Main = () => {
    useWebTitle('Sazeduzzaman | Home')
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
                    <div class="">
                        <Pointer></Pointer>
                        <div class="pt-table desktop-768 p-0">
                            <div class="pt-tablecell page-home relative p-0">
                                <Particales></Particales>
                                <div class="container ">
                                    <Profile></Profile>
                                    <div class="row ">
                                        <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 mt-5">
                                            <div class="hexagon-menu clear" >
                                                <div class="hexagon-item" >
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to={'/welcome'} class="hex-content">
                                                        <span class="hex-content-inner">
                                                            <span class="icon">
                                                                <i class="fa fa-universal-access"></i>
                                                            </span>
                                                            <span class="title">Welcome</span>
                                                        </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                                    </Link>
                                                </div>
                                                <div class="hexagon-item">
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to={'/about'} class="hex-content">
                                                        <span class="hex-content-inner">
                                                            <span class="icon">
                                                                <i class="fa fa-bullseye"></i>
                                                            </span>
                                                            <span class="title">About</span>
                                                        </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                                    </Link>
                                                </div>
                                                <div class="hexagon-item">
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to={'/services'} class="hex-content">
                                                        <span class="hex-content-inner">
                                                            <span class="icon">
                                                                <i class="fa fa-braille"></i>
                                                            </span>
                                                            <span class="title">Skills</span>
                                                        </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                                    </Link>
                                                </div>
                                                <div class="hexagon-item">
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to={'/resume'} class="hex-content">
                                                        <span class="hex-content-inner">
                                                            <span class="icon">
                                                                <i class="fa fa-id-badge"></i>
                                                            </span>
                                                            <span class="title">Resume</span>
                                                        </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                                    </Link>
                                                </div>
                                                <div class="hexagon-item">
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to={'/works'} class="hex-content">
                                                        <span class="hex-content-inner">
                                                            <span class="icon">
                                                                <i class="fa fa-life-ring"></i>
                                                            </span>
                                                            <span class="title">Works</span>
                                                        </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                                    </Link>
                                                </div>
                                                <div class="hexagon-item">
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to={'/testimonial'} class="hex-content">
                                                        <span class="hex-content-inner">
                                                            <span class="icon">
                                                                <i class="fa fa-clipboard"></i>
                                                            </span>
                                                            <span class="title">Testimonials</span>
                                                        </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                                    </Link>
                                                </div>
                                                <div class="hexagon-item">
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div class="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to={'/contact'} class="hex-content">
                                                        <span class="hex-content-inner">
                                                            <span class="icon">
                                                                <i class="fa fa-map-signs"></i>
                                                            </span>
                                                            <span class="title">Contact</span>
                                                        </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div >
    );
};

export default Main;