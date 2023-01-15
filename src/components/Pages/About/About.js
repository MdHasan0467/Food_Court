import React from 'react';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'



const About = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='flex justify-center pt-[20%] font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300'>
            <AutoTyping
            active // <boolean>
            textRef='About Section Coming Soon . . .' // <string>
            writeSpeed={150} // <number>
            deleteSpeed={150} // <number>
            delayToWrite={1000} // <number>
            delayToDelete={2000} // <number>
          />
          <BlinkCursor
            active // <boolean>
            blinkSpeed={500} // <number>
          />
            </div>
        </div>
    );
};

export default About;