import React from 'react'
import contact from '../components/img/contact.png'
export default function Contact() {
  return (
    <>
      <div className="container-fluid">

        <div className="container home-top ">
          <div className="row">
            <div className="col-md-6 col-11 order-1 pt-md-5  mt-md-1 pt-0 mt-0 mx-auto">
                            <div class="container">
                              <div>
                                <h2>Contact Us</h2>
                                <p>Swing by for a cup of coffee, or leave us a message:</p>
                              </div>
                              <div class="row">
                                <div class="column">
                                  <form action="">
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                    <label for="country">Country</label>
                                    <select id="country" name="country">
                                      <option value="australia">india</option>
                                      <option value="canada">aus</option>
                                      <option value="usa">USA</option>
                                    </select>
                                    <label for="subject">Subject</label>
                                    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                                    <input type="submit" value="Submit" />
                                  </form>
                                </div>
                              </div>
                            </div>
            </div>
            <div className="col-md-6 col-10 order-2 mt-5 mx-auto hometopimg">
              <img src={contact} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
