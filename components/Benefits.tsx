import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  list: string[];
  brief: string;
}

const Card = ({ title, description, brief, imageSrc, reverse, list }: CardProps) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-center p-8 mt-24`}>
      <Image src={imageSrc} alt={title} width={600} height={400} />
      <div className="md:ml-8 md:mr-8 mt-4 md:mt-0 text-center md:text-left">
        <h2 className="inline-block bg-gray-200 text-gray-800 font-medium rounded-lg px-4 py-2 hover:bg-gray-300">{title}</h2>
        <p className="text-gray-800 text-2xl mt-4">
          <span className="font-bold font-2xl">{description} </span>
          {brief}
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-800">
          {list.map((item, index) => (
            <li key={index} className="flex items-center mt-2">
              <img src='/Check.png' alt='checkicon' className="mr-2 w-4 h-4" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="container mx-auto  px-4 py-16 transform scale-105 mt-5">
      <div className="flex flex-col items-center mb-8">
        <img className="mb-4 w-24 h-24" src="/love.png" alt="icon" />
        <h1 className="text-4xl font-bold text-center flex items-center">
          Reasons to Love Billy
          <img className="ml-4 w-12 h-12" src="/billy.png" alt="billyicon" />
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 ">
        <Card
          title="Discovery"
          description="Discover sponsorship & affiliate options "
          brief="for any audience, across every industry."
          list={[
            "Effortless brand ad Integration",
            "Maximized Earnings",
            "Find deals for your niche audience effortlessly."
          ]}
          imageSrc="/discovery.png"
        />
        <Card
          title="Library"
          description="Save time, organize and bookmark "
          brief="your favourite brand deals and affiliate"
          list={[
            "Bookmark Favorite deals",
            "Search deals and filter them",
            "Find Both sponsorship & Affiliate programs in seconds",
            "Streamlining your sponsorship process."
          ]}
          imageSrc="/library.png"
          reverse
        />
        <Card
          title="Matchmaking"
          description="We showcase your profile to brands "
          brief='tailored for your audience.'
          list={[
            "We will auto match your profile with brands",
            "Focus on your content, we will take care of the rest",
            "Quality audiences, even in smaller numbers, matter to brands."
          ]}
          imageSrc="/Matchmaking.png"
        />
        <Card
          title="Tools library"
          description="Get Suites of tools "
          brief='which will help you grow your content business'
          list={[
            "AI tools to make your life easy",
            "Get a bunch of tools for your creator business at just one price",
            "No need to jump from SaaS to another; all things under Billy"
          ]}
          imageSrc="/Tools.png"
          reverse
        />
      </div>
    </div>
  );
};

export default Benefits;
