import React from 'react'
import { Link } from 'react-router-dom'
import digital from '../img/digital.png'
export default function Hometop() {
  return (
    <>
    <div className="container-fluid">

    <div className="container home-top ">
        <div className="row ">
            <div className="col-md-6 col-11 order-2 pt-md-5  mt-md-5  mt-0 mx-auto ">
                   <h2 className='mt-4'>we the digiteck ,assuring web security over yeaars</h2>
                   
                   <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, totam. 
                       Amet nihil ut non consequuntur illum vitae magnam ullam eveniet!
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti placeat 
                       as voluptatibus molestiae animi.
                  </p>
                  <div className="d-flex">
                    <Link name="" id="botn" class="btn btn-dark" to="/contactus" role="button">Conatct Us</Link>
                    <Link name="" id="botn" class="btn btn-dark mx-3" to="/products" role="button">our products</Link>
                  
                   </div>

            </div>
            <div className="col-md-6 col-10 order-1 pt-3 mt-2 mx-auto hometopimg">
               <img src={digital} alt="" className='img-fluid' />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
