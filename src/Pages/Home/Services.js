import React from 'react';
import { useState } from 'react';
import { BsFacebook } from "react-icons/bs";

import { FaAlipay } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { ImInstagram } from "react-icons/im";
import { ImGooglePlus } from "react-icons/im";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import Service from './Service';


const Services = () => {

    const datas = [
        {
            id: 1,
            name: "FACEBOOK MARKETING",
            img: <BsFacebook size={50}></BsFacebook>,
            descraption: "Facebook is one of the most popular social media platforms in the world and is an excellent platform for businesses to advertising their products and services to a large audience.As a Digital Marketer I can setup & manage  Facebook ads campaign, Facebook pixel setup, Facebook Remarketing, Facebook conversion API, Facebook shop create and set up Facebook algorithm Research, Facebook business manager and also Deduplication."
        },
        {
            id: 2,
            name: "GOOGLE MARKETING",
            img: <ImGooglePlus size={50}></ImGooglePlus>,
            descraption: "Google Marketing is a powerful tool for Develop or grow any kinds of online business  to reach and engage with their target audience through various advertising channels such as Google Search, Google Display Network, Google shopping ads campaign, YouTube and more. As a  digital marketers I can create highly targeted and effective advertisements that drive results.",
        },
        {
            id: 3,
            name: "SOCIAL MEDIA MARKETING",
            img: <FaAlipay size={50}></FaAlipay>,
            descraption: "Social Media Marketing is a crucial aspect of any digital marketing portfolio, offering businesses a platform to reach and engage with their target audience. As a digital marketer, I can setup & manage in creating visually-appealing advertisements, managing your social media accounts, or utilizing influencer marketing, social media marketing provides numerous opportunities to reach and engage with a large and diverse audience and help businesses grow  online presence.",
        },
        {
            id: 4,
            name: "SEO",
            img: <TiArrowMaximiseOutline size={50}></TiArrowMaximiseOutline>,
            descraption: "Social Media Marketing is a crucial aspect of any digital marketing portfolio, offering businesses a platform to reach and engage with their target audience. As a digital marketer, I can setup & manage in creating visually-appealing advertisements, managing your social media accounts, or utilizing influencer marketing, social media marketing provides numerous opportunities to reach and engage with a large and diverse audience and help businesses grow  online presence.",
        },
        {
            id: 5,
            name: "SHOPIFY STORE DESIGN",
            img: <SiShopify size={50}></SiShopify>,
            descraption: "Shopify Store Design Services offer a comprehensive solution for businesses looking to create a professional and user-friendly online store. As a digital marketer I can help creating a custom theme, optimizing for conversion, or integrating with other marketing tools, Totally store design and Management , Shopify Store Design Services provide businesses with the tools they need to sell products online and grow their business.",
        },
        {
            id: 6,
            name: "INSTAGRAM MARKETING",
            img: <ImInstagram size={50} ></ImInstagram>,
            descraption: "Instagram Marketing is a valuable tool for businesses looking to reach a visually-driven and engaged audience. As a digital marketer, I setup & manage Instagram ads campaign, Optimise Instagram page, Instagram shop create, Hashtag research, Instagram post design, Instagram DM set up, Instagram product research, Target a niche market, Look At Product-To-Market Fit, Management and etc.",
        },
    ];
    return (
       <div id='service' className=' mx-10 my-12 '>
        <h1 className='text-2xl lg:text-4xl font-bold text-center text-purple-800'>MY SERVICES</h1>
         <div className='grid lg:grid-cols-3 gap-5 mt-12'>
            {
                datas.map(data => <Service
                    key={data._id}
                    data={data}
                ></Service>)
            }
        </div>
       </div>
    );
};

export default Services;