import React from 'react';
import Image from "next/image";
import HeroImage from "@/public/assets/images/hero-image.png"

import {Khula} from 'next/font/google'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Button from "@/components/common/Button";
import Link from "next/link";


const khula = Khula({subsets: ['latin'], weight: ['700']})

const Hero = () => {
    return (
        <div className={' md:px-8 py-14  md:py-40   '}>

            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-y-2 ">



                <div className="left w-full md:w-5/12  flex justify-center flex-col items-end">
                    <Image className={'w-full h-60 md:h-full p-2'} src={HeroImage} alt={"Hero image"}/>


                    <div className={'flex gap-1 w-full justify-center mt-5'}>
                        <IoIosArrowBack className={'bg-green w-10 h-10 rounded-full p-2 text-white'} size={22}/>
                        <IoIosArrowForward className={'border border-green   w-10 h-10 rounded-full p-2 text-green'}
                                           size={22}/>
                    </div>

                </div>
                <div className="right w-full  md:w-7/12 flex flex-col gap-5 items-start px-2 ">
                    <h1 className={` text-2xl lg:text-[2.8rem] leading-[3rem]  text-white  font-bold ${khula.className} `}> Supercharge
                        Your Network with High-Quality
                        <span className={'text-green'}> Fiber Equipment</span></h1>

                    <p className={'text-white/70 text-xs'}>
                        Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa
                    </p>
                    <Button> <Link href={"/search"}>Shop Now</Link> </Button>
                </div>

            </div>


        </div>
    );
};

export default Hero;