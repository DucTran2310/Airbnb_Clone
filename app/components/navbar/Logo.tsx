'use client';

import Image from "next/image";
import { useRouter } from 'next/router';
import logoImg from '../../../public/images/logo.png';

const Logo = () => {
    
    // const router = useRouter();

    return (
        <Image 
            alt="logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src={logoImg}
        />
    )

}

export default Logo;