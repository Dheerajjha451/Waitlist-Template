import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import JoinWaitlistButton from './ui/joinwaitlist';

export default function Billy() {
    return (
        <div className="flex flex-col md:flex-row items-start justify-start mt-8 w-full">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <Image src="/Billy.png" alt="Billy" width={400} height={600} className="mt-4 w-full md:w-auto" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-3xl font-bold mt-4 md:mt-16 mb-4">Billy's Promise</h2>
            <p className="text-gray-700 text-left md:text-center lg:text-left max-w-md mx-auto md:mx-0">
              I'm Billy! Your new friend. I'm not your average sleepy bear, I'll get you
              sponsorship deals and <span className='font-bold'> help you grow as a creator.</span> And I eat dollars dipped in
              honey! Why coz I am Billy, <span className='font-bold'> now join my waitlist. </span>
            </p>
            <h3 className="text-xl font-semibold mt-4">Billy, The Business Bear</h3>
            <img src='/billysign.png' alt='billysign' className="mt-2 mx-auto md:mx-0" />
            <div className="flex items-center justify-center md:justify-start mt-4">
              <Link href='/waitlist' className="join-waitlist-button" >
                <JoinWaitlistButton />
              </Link>
            </div>
          </div>
        </div>
    );
}
