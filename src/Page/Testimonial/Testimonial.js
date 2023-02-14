import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import PuffLoader from "react-spinners/PuffLoader";
import useWebTitle from '../../hooks/useWebTitle/useWebTitle';
import Pointer from '../../comps/Pointer/Pointer';

const Testimonial = () => {
    useWebTitle('My Colleague Say')
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
                            <h2 data-aos="fade-up-right" data-aos-duration="1500"><span class="upper-text">Testimonial</span> <span class="title-bg">Testimonial</span></h2>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col d-flex justify-content-center align-items-center'>
                                    <h4 className='text-center text-white' data-aos="fade-up-right" data-aos-duration="1500"><TypeAnimation
                                        sequence={[
                                            'Coming Soon...', // Types 'One'
                                            1000, // Waits 1s
                                            'Back Home...', // Deletes 'One' and types 'Two'
                                            2000, // Waits 2s
                                            'Page Coming Soon...', // Types 'Three' without deleting 'Two'
                                        ]}
                                        wrapper="div"
                                        cursor={true}
                                        repeat={Infinity}
                                        style={{ fontSize: '1em' }}
                                    /></h4>
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
                                        <Link to={'/contact'} style={{ textDecoration: 'none' }}><button className='bn33'>Next Page</button></Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
            }
        </div>
    );
};

export default Testimonial;