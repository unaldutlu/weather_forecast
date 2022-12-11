import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div className='flex justify-center items-center'>
      <div className='text-white mb-20 w-60 sm:w-72 h-16 flex justify-around items-center border-x-2 border-b-2 rounded-b-lg bg-blue-800'>
        <a
          href='https://www.linkedin.com/in/unaldutlu/'
          className='rounded-3xl bg-red-700 hover:bg-red-800 p-2'
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href='https://github.com/unaldutlu'
          className='rounded-3xl bg-red-700 hover:bg-red-800 p-2'
        >
          <FaGithub size={25} />
        </a>
        <a
          href='https://mail.google.com/mail/u/0/?hl=tr&tf=cm&fs=1&to=unaldutlu@gmail.com'
          className='rounded-3xl bg-red-700 hover:bg-red-800 p-2'
        >
          <HiOutlineMail size={25} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
