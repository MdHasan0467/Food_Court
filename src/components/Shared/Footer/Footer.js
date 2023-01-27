import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import logo from '../../../Resource/FC_logo.jpg';

const Footer = () => {
    return (
        <div className="min-w-full pt-16 bg-base-300 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Food Court Restaurant"
            className=""
          >
          <Link className='flex' to='/'>
          <img className='w-16 h-10 rounded-lg mt-2' src={logo} alt='logo' />
          <span className="ml-2 text-xl my-auto font-bold tracking-wide text-gray-800 uppercase">
          Food Court Restaurant
        </span>
          </Link>
            
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm  text-start text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm  text-start text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base text-start font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:01869870467"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              01869870467
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="ornilhasan.oht.riyad@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
            ornilhasan.oht.riyad@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold tracking-wide text-gray-900">
            Social Media
          </h3>
          <div className="inline-flex items-center my-3">
          
            <a
              href="https://github.com/MdHasan0467"
              target={'_blank'}
              className="text-gray-500 hover:text-black mx-2 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <BsGithub className='h-5 w-10'></BsGithub>
            </a>
            
            <a
              href="https://www.linkedin.com/in/md-hasan-8aa8b7259/"
              target={'_blank'}
              className="text-gray-500 hover:text-blue-700 mx-2 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <BsLinkedin className='h-5 w-10'></BsLinkedin>
            </a>
            
            <a
            href="https://www.facebook.com/ornilhasan0467/"
            target={'_blank'}
              className="text-gray-500 mx-2 hover:text-blue-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <BsFacebook className='h-5 w-10'></BsFacebook>
            </a>
            
          </div>
          <p className="mt-4 text-sm text-start text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 Food Court Restaurant All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/about"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/Privacy-Policy"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/Terms-&-Conditions"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default Footer;