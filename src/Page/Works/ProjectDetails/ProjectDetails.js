import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProfileImage from '../../../comps/Profile/updated(1).jpg';
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Pointer from '../../../comps/Pointer/Pointer';


const ProjectDetails = () => {
    const projectData = useLoaderData();
    // const [category, client_link, description, img, live_link, server_link, title] = projectData;
    return (
        <div>
            <Pointer></Pointer>
            <div class="page-title p-5 ">
                <h2><span class="upper-text">{projectData.title}</span> <span class="title-bg">Projects</span></h2>
            </div>
            <div className='container'>
                <div className='row mb-5'>
                    <div className='col-lg-7'>
                        <div className='text-white'>
                            <h1>{projectData.title}</h1>
                            <p>{projectData.description}</p>
                            <br />
                            <h4>Used In This Project</h4>
                            <div className='d-flex justify-content-start align-items-center'>
                                <img className='img-fluid' src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png" alt="html" style={{ width: '60px' }} />
                                <img className='img-fluid' src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" alt="css" style={{ width: '60px' }} />
                                <img className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="" style={{ width: '60px' }} />

                                <img className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" style={{ width: '60px' }} />
                                <img className='img-fluid' src="https://ps.w.org/cvw-pb-animation/assets/icon-256x256.png?rev=2077939" alt="" style={{ width: '60px' }} />
                            </div>
                            <h4 className='mt-3'>Important Links</h4>
                            <div className='d-flex justify-content-start align-items-center'>
                                <a href={projectData.live_link}><button className='bn33'>Live Site</button></a>
                                <a href={projectData.client_link}><button className='bn33'>Client Site</button></a>
                                {projectData.server_link ? <a href={projectData.server_link}><button className='bn33'>Server Site</button></a>
                                    : <></>}
                            </div>
                            <div className='d-flex justify-content-start align-items-center mt-3'>
                                <div>
                                    <img className='rounded' src={ProfileImage} alt="" style={{ width: '70px', height: '70px' }} />
                                </div>
                                <div className='ms-3'>
                                    <h5>Sazeduzzaman</h5>
                                    <p>+880 16167 58963</p>
                                    <p>szamansaju@gmail.com</p>
                                    <section class="mb-4">
                                        <a
                                            class="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: '#3b5998' }}
                                            href="https://www.facebook.com/programmer.saju/"
                                            role="button"
                                        ><FaFacebook></FaFacebook></a>

                                        <a
                                            class="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: '#0082ca' }}
                                            href="https://linkedin.com/in/szamansaju/"
                                            role="button"
                                        ><FaLinkedinIn></FaLinkedinIn></a>
                                        <a
                                            class="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: '#333333' }}
                                            href="https://github.com/Sazeduzzzaman"
                                            role="button"
                                        ><FaGithub></FaGithub></a>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <img className='img-fluid' src={projectData.img} alt="" />
                    </div>
                </div>
            </div>
            <div className='container'>

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
    );
};

export default ProjectDetails;