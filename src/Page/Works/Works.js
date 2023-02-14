import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WebDevelopment from './WebDevelopment/WebDevelopment';
import PuffLoader from "react-spinners/PuffLoader";
import useWebTitle from '../../hooks/useWebTitle/useWebTitle';
import Pointer from '../../comps/Pointer/Pointer';

const Works = () => {
    useWebTitle('My All Work');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 3000)
    }, [])
    return (
        <div className=''>
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
                            <h2 data-aos="fade-up-right" data-aos-duration="1500"><span class="upper-text">Projects</span> <span class="title-bg">Projects</span></h2>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col' data-aos="fade-up-right" data-aos-duration="1500">
                                    <h4 className='text-center text-white p-3'>Web Development...</h4>
                                    <WebDevelopment></WebDevelopment>
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
                                        <Link to={'/testimonial'} style={{ textDecoration: 'none' }}><button className='bn33'>Next Page</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }




        </div>
    );
};

export default Works;