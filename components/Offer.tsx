import Image from 'next/image'; 
import { buttonVariants } from './ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

export default function Offer() {
  return (
    <MaxWidthWrapper>
      <div className="bg-gray-900 text-white " style={{ borderRadius: '32px' }}>
        <div className="container flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div>
          <h1 className="text-2xl md:text-4xl font-bold  mt-8">
            B2B Creators offer quality<br />
            audiences—brands
            🤍 love that.
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 ">With Billy, connecting is easy</h1>
          </div>
          <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'bg-white hover:bg-white flex items-center',
                })}
                href='/waitlist'>
                <span className="mr-2  text-black">Join the waitlist</span> 
                <ChevronRight className='h-4 w-4 text-black' />
              </Link>
        </div>
        <div className="container  ">
          <Image src="/ipad.png" alt="Offer Image" layout="responsive" width={600} height={800} />
        </div>
      </div>
      </MaxWidthWrapper>
  );
}