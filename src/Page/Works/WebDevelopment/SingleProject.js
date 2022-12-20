import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from "swiper/react";
import { FaEyeSlash, FaDesktop } from "react-icons/fa";

const SingleProject = ({ project }) => {
    return (
        <SwiperSlide>
            <div>
                <div class="box">
                    <img src={project.img} alt='project' />
                    <div class="box-content d-flex justify-content-between align-item-center">
                        <h3 class="title">{project.title}</h3>
                        <ul class="icon">
                            <li><Link to="/contact"><FaEyeSlash></FaEyeSlash></Link></li>
                            <li><Link to={`/project/${project.id}`}><FaDesktop></FaDesktop>Details</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default SingleProject;