import Image from 'next/image';
import React from 'react';

const Footer: React.FC = (): JSX.Element => {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto flex flex-col items-center mt-6'>
                <div className='my-14'>
                    <Image src={'/images/Logo.svg'} width='141px' height='41px' />
                </div>

                <div className='grid grid-cols-4 w-full'>
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-[#222] text-lg'>Contact Us</h4>
                    </div>

                    <div className='flex flex-col gap-2'>
                    <h4 className='text-[#222] text-lg'>Our Company</h4>

                    </div>

                    <div className='flex flex-col gap-2'>
                    <h4 className='text-[#222] text-lg'>Social Contacts</h4>

                    </div>

                    <div className='flex flex-col gap-2'>
                    <h4 className='text-[#222] text-lg'>Address</h4>
                    <h4 className='text-[#222] text-lg'>Follow Us</h4>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;