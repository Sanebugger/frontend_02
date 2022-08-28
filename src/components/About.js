import React from 'react'
import { Link } from 'react-router-dom'
import aboutme1 from '../components/img/aboutme1.png'
import { FaInstagram} from "react-icons/fa";



export default function About() {
  return (
    <>
        <>
    <div className="container-fluid">

    <div className="container home-top mx-auto">
        <div className="row">
            <div className="col-md-6 col-11 order-2 pt-md-5  mt-md-5 pt-0 mt-0 mx-auto">
              <div className='px-5 mx-5'>

                   <h1 className='mt-5 mb-5'>About me</h1>
                   
                   <h3 className='text-dark'>
                     hey their, i am SAURAV
                       </h3>
                   <p className='text-dark'>
                     i am a self-learned developer <br/>i love to design,develop,and all related stuffs.........
                       </p>
                   <div className="d-flex">
                    <Link name="" id="botn" class="btn btn-dark" to="/contactus" role="button">Conatct me</Link>
                    <a href="https://www.instagram.com/sanebugger/" target="_jhgk" className='btn '> <FaInstagram color={` rgb(18, 18, 69) `} className="mx-3" size={`2.07em`} /></a>

                   </div>
              </div>
            </div>
            <div className="col-md-6 col-10 order-1 pt-3 mt-2 mx-auto hometopimg">
               <img src={aboutme1} alt="" className='img-fluid' />
            </div>
        </div>
    </div>
    </div>
    </>
    
    </>
  )
}
