import React, { useEffect, useState } from 'react';
import './Welcome.css';
import sideImage from './video-call-via-laptop-5635872-4696937.png'
import PuffLoader from "react-spinners/PuffLoader";
import { Link } from 'react-router-dom';
import useWebTitle from '../../hooks/useWebTitle/useWebTitle';
import Pointer from '../../comps/Pointer/Pointer';

const Welcome = () => {
    useWebTitle('Welcome Sir')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])
    return (
        <div>
            {loading ?
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
                    <div className='row mt-8 d-flex justify-content-center align-items-center'>
                        <div className='col-lg-6 col-sm-12 text-white' >
                            <div className='welcome-text' data-aos="fade-up-right" data-aos-duration="1500">
                                <p className='text-start'>Hey there i am very lucky to serve my portfolio..</p>
                                <h1 className='welcome_title p-5'>
                                    Welcome
                                </h1>
                                <p className='text-end'>I am Sazeduzzaman...</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-6' data-aos="fade-up-left" data-aos-duration="1500">
                            <div className='welcome text d-flex justify-content-center align-items-center'>
                                <img className='img-fluid' src={sideImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6' data-aos="fade-up-right" data-aos-duration="1500">
                            <div className='text-start mt-5 mb-5'>
                                <Link to={'/'} style={{ textDecoration: 'none' }}><button className='bn33'>Home</button></Link>
                            </div>

                        </div>
                        <div className='col-lg-6' data-aos="fade-up-left" data-aos-duration="1500">
                            <div className='text-end mt-5 mb-5'>
                                <Link to={'/about'} style={{ textDecoration: 'none' }}><button className='bn33'>Next Page</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Welcome; 