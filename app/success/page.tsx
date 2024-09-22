"use client";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[url('/div.svg')] opacity-100">
      <MaxWidthWrapper className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-1/4 h-1/4 ">
        <img src='/billy.png' alt='billy' className="mb-4 text-black w-12 h-12" />
        <p className="text-center text-lg font-semibold">
          Thank You for joining our waitlist, Billy will be live within 15 days.
        </p>
      </MaxWidthWrapper>
    </div>
  );
};

export default SuccessPage;
