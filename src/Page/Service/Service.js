import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Skill.css';
import PuffLoader from "react-spinners/PuffLoader";
import useWebTitle from '../../hooks/useWebTitle/useWebTitle';
import Pointer from '../../comps/Pointer/Pointer';

const Service = () => {
    useWebTitle('My Skills')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])

    const skills = [
        { id: 1, skills: 'HTML' },
        { id: 2, skills: 'CSS' },
        { id: 3, skills: 'Bootstrap' },
        { id: 4, skills: 'Tailwind' },
        { id: 5, skills: 'DaisyUi' },
        { id: 6, skills: 'Material Ui' },
        { id: 7, skills: 'JavaScript' },
        { id: 8, skills: 'React.js' },
        { id: 9, skills: 'Firebase' },
        { id: 10, skills: 'MongoDB' },
        { id: 11, skills: 'Node.js' },
        { id: 12, skills: 'Express.js' },
    ]
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
                    <div className='container'>
                        <Pointer></Pointer>
                        <div class="page-title p-5 pb-0 mb-0">
                            <h2 data-aos="fade-up-right" data-aos-duration="1500"><span class="upper-text">Skill</span> <span class="title-bg">Skills</span></h2>
                        </div>
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-8 mt-5">
                                <h5 className='pb-5 upper-text text-sm-center ' data-aos="fade-up-right" data-aos-duration="1500">I love to work with...</h5>
                                <div class="pexagon-menu clear" data-aos="fade-up-left" data-aos-duration="1500">
                                    {skills.map(skill => <div class="pexagon-item">
                                        <div class="pex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="pex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="pex-content">
                                            <span class="pex-content-inner">
                                                <span class="icon">
                                                    <i class="fa fa-life-ring"></i>
                                                </span>
                                                <span class="title">{skill.skills}</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col justify-content-center align-items-center'>
                                <div className='text-center mt-5 mb-5'>
                                    <Link to={'/'} style={{ textDecoration: 'none' }}><button className='bn33'>Home</button></Link>
                                </div>
                            </div>
                            <div className='col justify-content-center align-items-center d-sm-none d-md-block'>
                                <div className='text-center mt-5 mb-5'>
                                    <Link to={'/resume'} style={{ textDecoration: 'none' }}><button className='bn33'>Next Page</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Service;