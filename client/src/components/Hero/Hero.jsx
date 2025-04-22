import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import "./Hero.css";
import backgroundVideo from "../../assets/HeroImg/background.mp4"
import Navbar from '../Navbar/Navbar';
import HeroData from '../../assets/HeroImg/HeroData';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Hero = () => {

    const videoRef = useRef(null);

    function createSlug(name) {
        return name.toLowerCase().replace(/\s+/g, '-');
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <div id='hero' >
            <section className="heroBackgroundContainer">
                <video ref={videoRef} className='heroBackground' autoPlay muted loop playsInline>
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
            <Navbar />
            <div id="carouselExampleInterval" className="heroCarousel carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        HeroData.map((item, index) => {
                            return (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="2000">
                                    <section className="carouselContainer p-5 d-flex justify-content-around">
                                        <aside className="leftContainer pt-3 d-flex flex-column gap-2" style={{ flex: 1 }}>
                                            <h1 className={item.headingDesign}>{item.name}</h1>
                                            <p className='fs-5'>{item.des}</p>
                                            <span className='price fs-5'>MRP : ₹{item.price}</span>
                                            <span className='rating fs-5'>{item.rating}({item.reviews} Reviews)</span>
                                            <Link to={`/product/${createSlug(item.name)}/`}>
                                                <button className={item.btnDesign + " btn mt-3"}>Shop Now</button>
                                            </Link>
                                        </aside>
                                        <aside className={item.ImgClass + " rightContainer d-flex justify-content-center"} style={{ flex: 1 }}>
                                            <div className=" d-flex justify-content-center">
                                                <img src={item.imgUrl} className={item.ImgClass === "slide2" ? "rotateImage" : ""} alt="" height={item.ImgClass === "slide3" ? 450 : 550} />
                                            </div>
                                        </aside>
                                    </section>
                                </div>
                            )
                        })
                    }

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <button className='exploreBtn text-light'>
                <a href="#newlyAddedSection" style={{ color: "white" }}><KeyboardDoubleArrowDownIcon sx={{ fontSize: "50px" }} /></a>
            </button>
        </div>
    )
}

export default Hero