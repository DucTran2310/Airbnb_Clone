'use client'

import Image from 'next/image';
import placeHolderImg from '../../public/images/placeholder.jpg'

const Avatar = () => {

    return (
        <Image
            className='rounded-full'
            height="30"
            width="30"
            src={placeHolderImg} 
            alt={'Avatar'}        
        />
    );
}

export default Avatar;
