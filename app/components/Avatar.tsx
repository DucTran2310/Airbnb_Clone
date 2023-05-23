'use client'

import Image from 'next/image';
import placeHolderImg from '../../public/images/placeholder.jpg'

interface AvatarProps {
    src?: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {

    return (
        <Image
            className='rounded-full'
            height="30"
            width="30"
            src={src || placeHolderImg} 
            alt={'Avatar'}        
        />
    );
}

export default Avatar;
