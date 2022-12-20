import React, { useEffect, useState } from 'react';
import './Contact.css'
import PuffLoader from "react-spinners/PuffLoader";
import useWebTitle from '../../hooks/useWebTitle/useWebTitle';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Social from '../../comps/Social/Social/Social';
import Pointer from '../../comps/Pointer/Pointer';


const Contact = () => {
    useWebTitle('Contact Me')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(name, email, message)

        const bookings = {
            name,
            email,
            message
        }

        fetch('https://my-portfolio-server-xi.vercel.app/contact', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        }).then(res => res.json())
            .then(data => {
                form.reset();
                if (data.acknowledged) {
                    toast.success('Message Send');
                }
                else {
                    toast.danger(data.message)
                }
            })
    }
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
                            <h2 data-aos="fade-up-right" data-aos-duration="1500"><span class="upper-text">Contact</span> <span class="title-bg">Contact</span></h2>
                        </div>
                        <div class="background">
                            <div class="container">
                                <div class="screen">
                                    <div class="screen-header" >
                                        <div class="screen-header-left">
                                            <div class="screen-header-button close"></div>
                                            <div class="screen-header-button maximize"></div>
                                            <div class="screen-header-button minimize"></div>
                                        </div>
                                        <div class="screen-header-right">
                                            <div class="screen-header-ellipsis"></div>
                                            <div class="screen-header-ellipsis"></div>
                                            <div class="screen-header-ellipsis"></div>
                                        </div>
                                    </div>
                                    <div class="screen-body">
                                        <div class="screen-body-item left" data-aos="fade-up-right" data-aos-duration="1500">
                                            <div>
                                                <img className='img-fluid' src="https://cdn3d.iconscout.com/3d/premium/thumb/man-giving-feedback-4922306-4100691.png" alt="" />
                                            </div>
                                            <div class="app-contact">
                                                <div className='contact-in fs-6 ms-3'>
                                                    <Social></Social>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="screen-body-item" data-aos="fade-up-left" data-aos-duration="1500">
                                            <h3 className='pb-3 text-white'>Contact Me</h3>
                                            <form class="app-form" onSubmit={handleSubmit}
                                            >
                                                <div class="app-form-group">
                                                    <input name='name' class="app-form-control" placeholder="NAME" />
                                                </div>
                                                <div class="app-form-group">
                                                    <input name='email' class="app-form-control" placeholder="EMAIL" />
                                                </div>
                                                <div class="app-form-group message">
                                                    <input name='message' class="app-form-control" placeholder="MESSAGE" />
                                                </div>
                                                <div class="app-form-group buttons d-flex justify-content-center align-items-center">
                                                    <input class="bn33" type="submit"
                                                        value="Send"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6' data-aos="fade-up-right" data-aos-duration="100">
                                    <div className='text-start mt-5 mb-5'>

                                    </div>

                                </div>
                                <div className='col-lg-6' data-aos="fade-up-left" data-aos-duration="3000">
                                    <div className='text-end mt-5 mb-5'><span className='m-3 text-white'></span>
                                        <Link to={'/'} style={{ textDecoration: 'none' }}><button className='bn33'>Back Home</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
};

export default Contact;