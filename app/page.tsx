'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import './styles/style.css';
import './styles/icon.css';
import './styles/media.css';
import './scripts/desin.js';
import React from "react";
import { CldImage } from 'next-cloudinary';
import { getAllProjects } from "./crud.mjs";
import '@fortawesome/fontawesome-free/css/all.min.css';

// import { mouseEnter } from "./scripts/nav_icon.js";

export default function Home() {


    
    const [navIconHover, setNavIconHover] = useState(false);
    const [navIconClicked, setNavIconClicked] = useState(false);
    const [navSectionHover, setNavSecgtionHover] = useState(false);
    const [navSectionExist, setNavSectionExist] = useState(false);
    const [navIconClickedShape, setNavIconClickedShape] = useState(false);
    

    const handleNavIconMouseEnter = () => {
        setNavIconHover(true);
    }
    const handleNavIconMouseLeave = () => {
        setNavIconHover(false);
    }
    const handleNavIconClicked = () => {
        setNavIconClicked(!navIconClicked);
    }
    const handelNavSectionMouseEnter = () => {
        setNavSecgtionHover(true);
    }
    const handelNavSectionMouseLeave = () => {
        setNavSecgtionHover(false);
    }
    const handelNavSectionExist = () => {
        setNavIconClicked(false);
        setNavSecgtionHover(false)
        setNavSectionExist(false);
    }
  
    useEffect(() => {

        !navIconHover && !navIconClicked && !navSectionHover? setNavSectionExist(false)
        :navIconClicked? setNavSectionExist(true)
        :!navIconClicked && navIconHover? setNavSectionExist(!navSectionExist)
        :navIconHover && navIconClicked? setNavSectionExist(true)
        :navSectionHover? setNavSectionExist(true)
        : setNavSectionExist(false)

    },[navIconHover, navIconClicked, navSectionHover])


    const getData = async() => {
        const allProducts = await getAllProjects();
        console.log(allProducts);
    }
    useEffect(() => {
        getData()
    }, [])

  return (
    <>
    {/* <CldImage
              src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
              width="500" // Transform the image: auto-crop to square aspect_ratio
              height="500"
              crop={{
                  type: 'auto',
                  source: true
              }} alt={""}    /> */}
      <header id="laptop-header">
        <a href="#" id="tittle">FARES HOUIDI</a>
        <nav>
            <a href="#services-section-tittle">Services</a>
            <a href="#projects-section-tittle">Projects</a>
            <a href="#contact-section-tittle">Contact</a>
        </nav>
    </header>
    <header id="phone-header">
        <a href="#" id="tittle">FARES HOUIDI</a>
        <div 
            onMouseEnter={handleNavIconMouseEnter} 
            onMouseLeave={handleNavIconMouseLeave} 
            onClick={handleNavIconClicked}
            id="option-icon" className={navSectionExist? "option-icon-clicked": "option-icon"}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </header>
    <div className={navSectionExist? 'navSectionExist': 'navSectionNotExist'} id="navSection_"
        onMouseEnter={handelNavSectionMouseEnter}
        onMouseLeave={handelNavSectionMouseLeave}>
        <a className="nav-links" href="#services-section-tittle" onClick={handelNavSectionExist}>Services</a>
        <a className="nav-links" href="#projects-section-tittle" onClick={handelNavSectionExist}>Projects</a>
        <a className="nav-links" href="#contact-section-tittle" onClick={handelNavSectionExist}>Contact</a>
    </div>

    <section id="presentation-section">
        <div id="background-img"></div>
        <div id="container">
            <h6>Hi i'm Fares,</h6>
            <h1>web developer full stack</h1>
            <p>specializing in building advanced web applications using modern technologies like JavaScript, React, and Node.js. I have a strong passion for turning ideas into innovative digital solutions that focus on enhancing user experience, providing seamless and efficient user interfaces. I am committed to continuously improving my skills to ensure excellence in every project I work on, with a focus on delivering high quality and performance. If you're looking for an innovative developer who can turn your vision into a remarkable digital reality, I am here to make that happen.</p>
            <div>
                <div className="Download-cv-btn">
                    <div></div>
                    <div className="i-and-span">
                        <i className="fas fa-file-alt"></i>
                        <span>Download my cv</span>
                    </div>
                </div>
                <a id="view-project-btn" href="#projects-section-tittle">
                    <div></div>
                    <span>View my work</span>
                </a>
                <div className="social-media">
                    <i className="fab fa-facebook"><a href="#"></a></i>
                    <i className="fab fa-github"><a href="#"></a></i>
                    <i className="fab fa-linkedin"><a href="#"></a></i>
                    <i className="fa-solid fa-envelope"><a href=""></a></i>
                </div>
            </div>
        </div>
    </section>

    <section id="services-section">
        <h2 className="section-tittle" id="services-section-tittle">Services</h2>
        <div className="carts-cntainer">
            <a href="https://m.me/100006758537339?ref=SGVsbG8sIEkgd2FzIG9uIHlvdXIgcGVyc29uYWwgZGVzaWduIGFuZCBJIHdhcyBpbXByZXNzZWQgYnkgdGhlIGZ1bGwgc3RhY2sgd2ViIGRldmVsb3BtZW50IHNlcnZpY2UgeW91IG9mZmVyLg==" className="cart">
                <i className="fas fa-globe"></i>
                <div className="text">
                    <div className="tittle">
                        <h4>Full Stack</h4>
                        <h4>Web Development</h4>  
                    </div>
                    <p>I build complete web applications from scratch, starting with a robust and scalable back-end to a responsive, attractive front-end. I use modern technologies like [ React or next with Node.js ] to create efficient, scalable applications.</p>
                </div>
            </a>
            <a href="https://m.me/100006758537339?ref=SGVsbG8sIEkgd2FzIG9uIHlvdXIgcGVyc29uYWwgZGVzaWduIGFuZCBJIHdhcyBpbXByZXNzZWQgYnkgdGhlIFVJLyVYIFBvc3RpbWl6YXRpb24gYW5kIFBlcmZvcm1hbmNlIHNlcnZpY2UgeW91IG9mZmVyLg==" className="cart">
                <i className="fas fa-laptop-code"></i>
                <div className="text">
                    <div className="tittle">
                        <h4>UI/UX Optimization</h4>
                        <h4>and</h4>
                        <h4>Performance</h4>
                    </div>
                    <p>I enhance the user experience by simplifying navigation and creating responsive interfaces. Additionally, I focus on improving site performance to ensure speed and a seamless experience for visitors, which increases engagement and reduces bounce rates.</p>
                </div>
            </a>
            <a href="https://m.me/100006758537339?ref=SGVsbG8sIEkgd2FzIG9uIHlvdXIgcGVyc29uYWwgZGVzaWduIGFuZCBJIHdhcyBpbXByZXNzZWQgYnkgdGhlIERhdGFiYXNlIEludGVncmF0aW9uIGFuZCBNYW5hZ2VtZW50IHNlcnZpY2UgeW91IG9mZmVyLg==" className="cart">
                <i className="fas fa-database"></i>
                <div className="text">
                    <div className="tittle"> 
                        <h4>Database Integration</h4>
                        <h4>and</h4>
                        <h4>Management</h4> 
                    </div>
                    <p>I develop efficient, secure databases using [ MongoDB or MySQL ] and integrate them seamlessly with web applications to ensure high performance and reliable data storage. I assist with structuring data for organized and efficient access.</p>
                </div>
            </a>
        </div>
    </section>

    <section id="projects-section">
        <h2 className="section-tittle" id="projects-section-tittle">Projects</h2>
        <div className="carts-cntainer">
            <div className="cart">
                <div className="triangle Upper-triangle"></div>
                <div className=" triangle Bottom-triangle"></div>
                <div className="container">
                    <div className="project-image">
                        <img src="./images/profileForPhone.jpg"></img>
                    </div>
                    <p className="discription">any example any example any example any example any example</p>
                    <h4 className="project-name">project name</h4>
                    <span className="more-details-btn">more details</span>
                </div>
            </div>
            <div className="cart">
                <div className="triangle Upper-triangle"></div>
                <div className=" triangle Bottom-triangle"></div>
                <div className="container">
                    <div className="project-image">
                        <img src="./images/profileForPhone.jpg"></img>
                    </div>
                    <p className="discription">any example any example any example any example any example</p>
                    <h4 className="project-name">project name</h4>
                    <span className="more-details-btn">more details</span>
                </div>
            </div>
            <div className="cart">
                <div className="triangle Upper-triangle"></div>
                <div className=" triangle Bottom-triangle"></div>
                <div className="container">
                    <div className="project-image">
                        <img src="./images/profileForPhone.jpg"></img>
                    </div>
                    <p className="discription">any example any example any example any example any example</p>
                    <h4 className="project-name">project name</h4>
                    <span className="more-details-btn">more details</span>
                </div>
            </div>
        </div>
    </section>

    <section id="Contact-section">
        <h2 className="section-tittle" id="contact-section-tittle">Contact</h2>
        <h4>We would love to hear your idea and make it a reality ...</h4>
        <div id="message-bar">
            <textarea placeholder="whrite your idea here ..."></textarea>
            <i id="send-btn" className="fa-solid fa-paper-plane"></i>
        </div>
        <div id="talk-by-detail">
            <h4>we can talk about more datail here ...</h4>
            <div className="carts-cntainer">
                <a href="tel:+21629165922" className="icon" title="Call Us">
                    <i className="fa-solid fa-phone-flip"></i>
                  </a>
                  <a href="mailto:fereshouidi298@gmail.com?ref=hi ..." className="icon" title="Send Email">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                  <a href="https://m.me/100006758537339?ref=hi ..." target="_blank" className="icon" title="Open Messenger">
                    <i className="fa-brands fa-facebook-messenger"></i>
                  </a>
            </div>
        </div>

        <div id="copyrights-bar">
            <h4>Copyrights @<span>Fares Houidi</span></h4>
            <div className="social-media">
                <i className="fab fa-facebook"><a href="#"></a></i>
                <i className="fab fa-github"><a href="#"></a></i>
                <i className="fab fa-linkedin"><a href="#"></a></i>
                <i className="fa-solid fa-envelope"><a href=""></a></i>
            </div>
        </div>

    </section>

    
    </>
  );
}
