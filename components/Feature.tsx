import React from 'react';

const FeaturesSection: React.FC = () => {
  const featuresLeftToRight = [
    { text: 'Monetization deals', imageSrc: '/Check.png' },
    { text: 'Connect with brands', imageSrc: '/Check.png' },
    { text: 'No spammy deals', imageSrc: '/Check.png' },
    { text: 'Earn more with same efforts', imageSrc: '/Check.png' },
  ];

  const featuresRightToLeft = [
    { text: 'AI tools to help you grow', imageSrc: '/Check.png' },
    { text: 'Affiliates programs suitable for you', imageSrc: '/Check.png' },
    { text: 'Deals for your niche specific audience', imageSrc: '/Check.png' },
  ];

  return (
    <section className="relative overflow-hidden mt-4 p-4 mb-5">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex flex-wrap justify-center gap-4 animate-slideLeftToRight">
        {featuresLeftToRight.map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-gray-200 rounded-full m-2"
          >
            <img src={feature.imageSrc} alt="check" className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6 animate-slideRightToLeft">
        {featuresRightToLeft.map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-gray-200 rounded-full m-2"
          >
            <img src={feature.imageSrc} alt="check" className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default FeaturesSection;
