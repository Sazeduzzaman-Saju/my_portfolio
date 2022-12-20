import React from 'react';
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Social = () => {
    return (
        <div className=''>
            <ul>
                <li>
                    <a target="_blank" rel=" noreferrer" href='https://www.facebook.com/programmer.saju/'>
                        <FaFacebook></FaFacebook>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel=" noreferrer" href='https://linkedin.com/in/szamansaju/'>
                        <FaLinkedinIn></FaLinkedinIn>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel=' noreferrer' href='https://github.com/Sazeduzzzaman'>
                        <FaGithub></FaGithub>
                    </a>
                </li >
            </ul >
        </div>
    );
};

export default Social;