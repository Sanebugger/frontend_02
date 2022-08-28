import React from 'react'
import onlineshop from '../img/onlineshop.png'
export default function Homemid() {
  return (
<>
<div className="conatiner-fluid homemid ">
    <div className="container pt-5 pb-5">
        <div className="row pt-5 pb-5">
            <div className="col-md-4 col-11 mx-auto  px-5 py-3 homemidimg">
                <h2>  Lorem ipsum dolor sit.</h2>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum nihil provident rem quae, ipsa voluptates quibusdam minus explicabo, dignissimos consequatur eligendi doloribus dolorem porro perferendis, earum molestias! Nam exercitationem expedita sed amet animi repudiandae totam voluptatem accusamus inventore cum!</p>
                <img src={onlineshop} className="img-fluid " alt=""/>  
            </div>
            <div className="col-md-4 col-11 mx-auto  px-5 py-3 homemidimg">
                <h2>  Lorem ipsum dolor sit.</h2>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum nihil provident rem quae, ipsa voluptates quibusdam minus explicabo, dignissimos consequatur eligendi doloribus dolorem porro perferendis, earum molestias! Nam exercitationem expedita sed amet animi repudiandae totam voluptatem accusamus inventore cum!</p>
                <img src={onlineshop} className="img-fluid " alt=""/>  
            </div>
            <div className="col-md-4 col-11 mx-auto px-5 py-3 homemidimg">
                <h2>  Lorem ipsum dolor sit.</h2>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum nihil provident rem quae, ipsa voluptates quibusdam minus explicabo, dignissimos consequatur eligendi doloribus dolorem porro perferendis, earum molestias! Nam exercitationem expedita sed amet animi repudiandae totam voluptatem accusamus inventore cum!</p>
                <img src={onlineshop} className="img-fluid " alt=""/>  
            </div>
          
        </div>
    </div>
</div>
</>
    )
}
