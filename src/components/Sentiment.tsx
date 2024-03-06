import React from 'react';

const Sentiment = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:w-full lg:max-w-4xl">
      {/* Left Column */}
      <div className="flex flex-col items-start justify-start gap-4 w-full md:w-1/2">
        {/* Key Events */}
        <div className="flex flex-row items-start justify-start gap-2">
          <div className="font-semibold">Key Events</div>
          <img className="h-5 w-5" alt="" src="/frame.svg" />
        </div>
        {/* First Item */}
        <div className="bg-blue-100 rounded-md p-4">
          <img className="h-12 w-12 rounded-full" alt="" src="/frame-1116601921.svg" />
          <div className="text-sm font-medium mt-2">
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim.
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
          </div>
        </div>
        {/* Second Item */}
        <div className="flex flex-row items-start justify-start gap-2">
          {/* Add content here */}
        </div>
      </div>
      
      {/* Right Column */}
      <div className="flex flex-col items-start justify-start gap-4 w-full md:w-1/2">
        {/* Third Item */}
        <div className="bg-green-100 rounded-md p-4 relative">
          <img className="h-12 w-12 rounded-full absolute top-4 left-4" alt="" src="/frame-1116601921-1.svg" />
          <div className="text-sm font-medium ml-20">
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim.
          </div>
          <div className="text-xs text-black-100 mt-2">
            <p className="mb-1">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra.
            </p>
            <p className="mb-0">In a adipisinc metus quis del</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
