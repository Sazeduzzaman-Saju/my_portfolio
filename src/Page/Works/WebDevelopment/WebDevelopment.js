import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import './WebDevelopment.css';
import { FaEyeSlash, FaDesktop } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
    let [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("https://my-portfolio-server-xi.vercel.app/projects")
            .then(response => response.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects)
    return (
        <>
            <Swiper

                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    projects.map(project => <SwiperSlide>
                        <div>
                            <div class="box">
                                <img src={project.img} alt='project' />
                                <div class="box-content d-flex justify-content-between align-item-center">
                                    <h3 class="title">{project.title}</h3>
                                    <ul class="icon">
                                        <li><Link to={`/projects/${project._id}`}><FaEyeSlash></FaEyeSlash></Link></li>
                                        <li><a href={project.live_link} alt="links" target='_blank' rel="noreferrer"><FaDesktop></FaDesktop></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </>
    );
};

export default WebDevelopment;