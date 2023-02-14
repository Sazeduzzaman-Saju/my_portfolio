import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyResume from './ResumePdf';
import PuffLoader from "react-spinners/PuffLoader";
import useWebTitle from '../../hooks/useWebTitle/useWebTitle';
import CoverLetter from './CoverLetter';
import Pointer from '../../comps/Pointer/Pointer';

const Resume = () => {
    useWebTitle('My Resume')
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
                    <div>
                        <Pointer></Pointer>
                        <div class="page-title p-5 ">
                            <h2 data-aos="fade-up-right" data-aos-duration="1500"><span class="upper-text" >Resume</span> <span class="title-bg">Resume</span></h2>
                        </div>
                        <div className='container'>
                            <h5 className='upper-text' data-aos="fade-up-right" data-aos-duration="1500">Please check my Resume & Cover Letter to know more about me..</h5>
                            <div className='row mt-5' >
                                <div className='col-lg-6' data-aos="fade-up-right" data-aos-duration="2000">
                                    <MyResume />
                                </div>
                                <div className='col-lg-6' data-aos="fade-up-left" data-aos-duration="3000">
                                    <CoverLetter></CoverLetter>
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
                                    <Link to={'/works'} style={{ textDecoration: 'none' }}><button className='bn33'>Next Page</button></Link>
                                </div>
                            </div>
                        </div>


                    </div>
            }
        </div>

    );
};

export default Resume;