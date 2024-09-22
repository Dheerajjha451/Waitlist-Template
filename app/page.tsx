import Benefits from '@/components/Benefits';
import Billy from '@/components/BillyPromise';
import FeaturesSection from '@/components/Feature';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Offer from '@/components/Offer';

import JoinWaitlistButton from '@/components/ui/joinwaitlist';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[url('/div.svg')] opacity-100 min-h-screen py-10 px-5 ">
      <MaxWidthWrapper>
        <div className="space-y-10">
          <header className="text-center mb-10">
            <div className=" opacity-100 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <img src='/paw.png' alt='paw' className="h-5 w-5 mr-2" />
              <span>BUILDING THE LARGEST PLATFORM FOR B2B CREATORS</span>
              <img src='/paw.png' alt='paw' className="h-5 w-5 ml-2" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Run Your Entire Creator Business &<br />
              Get B2B Sponsorships for
            </h1>
          </header>
          
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 sm:p-8 md:p-12 bg-white border rounded-lg">
              <img src='/newsletter.png' alt='newsletter' className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-bold mb-4 md:mb-6">Newsletter Creator</h2>
              <p>Active newsletter with excellent open rates and CTR.</p>
            </div>
            <div className="p-6 sm:p-8 md:p-12 bg-white border rounded-lg">
              <img src='/linkedin.png' alt='linkedinicon' className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-bold mb-2 md:mb-6">LinkedIn Influencer</h2>
              <p>I post on LinkedIn and have a strong following.</p>
            </div>
            <div className="p-6 sm:p-8 md:p-12 bg-white border rounded-lg">
              <img src='/x.png' alt='xicon' className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-bold mb-2 md:mb-6">Twitter Influencer</h2>
              <p>I post on X and have a strong following.</p>
            </div>
          </section>

          <section className="text-center flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-gray-600 text-lg">115+ Creators</span>
              <span className="text-gray-600">Already Joined</span>
            </div>
            <img src='/arrow.png' alt='arrow' className="hidden md:block w-8 h-6 md:w-12 md:h-8" />

            <Link href='/waitlist' className="join-waitlist-button" >
              <JoinWaitlistButton  />
            </Link>
          </section>
         
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className='mt-28 '>
  

  <FeaturesSection />
</MaxWidthWrapper>
      <MaxWidthWrapper className='mt-28'>

          <Benefits />
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mt-28'>

          <Offer />
      </MaxWidthWrapper>

          <MaxWidthWrapper className='mt-28'>

          <Billy />
      </MaxWidthWrapper>

    </div>
  );
}
