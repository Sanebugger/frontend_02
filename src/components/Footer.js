import React from 'react'
import { FaInstagram} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaYoutube} from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
    <div className="container-fluid footer">
        <div className='container footer mx-auto  d-flex flex-column justify-content-center  align-items-center'>

             <div>
                 <a href="https://www.instagram.com/sanebugger/"  target='_blank'> <FaInstagram color={`white`} className="mx-2" size={`1.1em`} /></a>
                 <a href="#">  <FaTwitter color={`white`}className="mx-2" size={`1.1em`}/> </a>
                 <a href="#"> <FaYoutube color={`white`}className="mx-2" size={`1.1em`}/> </a>
             </div>
             <div className='pt-4'>
              
                 <p>© 2021-22 All rights reserved.</p>
             </div>
            
                             
        </div>
            
    </div>
    </>
  )
}
