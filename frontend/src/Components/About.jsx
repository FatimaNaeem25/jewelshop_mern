import React from 'react';

const About = () => {
    return (
        <div className="flex p-5 rounded-lg shadow-md bg-white max-w-4xl mx-auto my-5">
            <div className="text-content w-full md:w-1/2 p-3 mt-14">
                <h2 className="text-sm text-gray-500 mb-2">Our Story</h2>
                <h1 className="text-3xl font-bold mb-4">BERMERALE.</h1>
                <p className="text-gray-700 mb-4">
                    Our accessories are designed so that you can make a statement —
                    how and when you make it is up to you.
                </p>
                <p className="text-gray-700 mb-6">
                    We’re committed to empowering all women, and to harnessing our creativity into 
                    addressing our challenges and working towards a more sustainable future. 
                    We’re proud to have worked with many highly-skilled partners for over a decade; 
                    they allow us to dream up our incredible collections.
                </p>
                <button className="bg-orange-300 text-maroon px-6 py-2 rounded-md font-semibold hover:bg-orange-600">
                    Explore More
                </button>
            </div>
            <div className="image-content w-full md:w-1/2 p-4 flex justify-center items-center">
                <img 
                    src="https://i.pinimg.com/originals/6f/4f/68/6f4f68489057661bada784ed2e67d812.jpg" 
                    alt="Our Story" 
                    className="rounded-lg object-cover h-full w-full md:w-auto md:h-auto"
                />
            </div>
        </div>
    );
};

export default About;
