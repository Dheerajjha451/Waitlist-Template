import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = async () => {
  return (
    <nav className='sticky top-0 z-[100] h-14 w-full border-b border-gray-200 bg-gray-100 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between'>
          <Link href='/' className='flex z-40 font-semibold'>
            <img src='/logo.png' alt='logo' className='w-24 h-8' />
          </Link>
          
          <div className='flex items-center space-x-4'>
            <Link
              href='/waitlist'
              className='rounded-full text-primary h-9 px-4 md:px-6 text-center text-white bg-black flex items-center justify-center'
            >
              Join waitlist
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
