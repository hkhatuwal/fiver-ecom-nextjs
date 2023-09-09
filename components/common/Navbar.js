"use client"
import React, {useState} from 'react';
import Image from "next/image";
import GlobeIcon from "@/public/assets/images/globe.svg";
import Link from "next/link";
import {BiCross} from "react-icons/bi";
import {RxCross1} from "react-icons/rx";

const Navbar = () => {
    const [isVisible,setIsVisible]=useState(false)

    return (
        <nav className="absolute flex items-center justify-between flex-wrap lg:px-40  px-2    py-5  w-full z-10 top-0 ">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link className="text-white no-underline hover:text-white hover:no-underline" href="/">
                    <Image className={'w-16 lg:w-48'} src={'/assets/images/logo.png'} alt={'Logo'} height={150} width={150}/>
                </Link>
            </div>

            <div className="block lg:hidden">
                <button id="nav-toggle"
                        onClick={()=>{setIsVisible(!isVisible)}}
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>

                <div className={`w-full flex-grow lg:flex lg:items-center xl:w-auto lg:bg-none  h-screen xl:h-auto  pt-6 lg:pt-0  ${isVisible?'bg-green_dark fixed top-0 left-0 z-50':'hidden'}`}
                 id="nav-content">

                    <RxCross1 onClick={()=>setIsVisible(false)} size={22} className={'text-right float-right text-white mr-3 lg:hidden'}/>
                <ul className="list-reset lg:flex justify-end flex-1 items-center text-xl tracking-wider">
                    <li className="mr-3">
                        <Link className="inline-block py-2 px-4 text-white no-underline " href="#">Home</Link>
                    </li>
                    <li className="mr-3">
                        <Link className="inline-block py-2 px-4 text-white no-underline " href={"/search"}>Products</Link>
                    </li>
                    <li className="mr-3">
                        <Link className="inline-block py-2 px-4 text-white no-underline " href="#about">About</Link>
                    </li>
                    <li className="mr-3">
                        <Link className="inline-block py-2 px-4 text-white no-underline " href="#services">Service</Link>
                    </li>
                    <li className="mr-3">
                        <Link className="inline-block py-2 px-4 text-white no-underline " href="#faq">FAQ</Link>
                    </li>

                    <li className="mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline rounded-full border border-[#158319] "
                           href="#contact">Contact Us</a>
                    </li>
                    <li className="mt-4 lg:mt-0 ml-4 flex gap-2 items-center">
                        <Image src={GlobeIcon} alt={"Language Icon"}/>

                        <span className={'text-white'}>en</span>
                        <span className={'h-5 w-0.5 bg-white/60'}></span>
                        <span className={'text-white/30'}>Fr</span>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;