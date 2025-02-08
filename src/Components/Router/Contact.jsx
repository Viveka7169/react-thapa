import React from 'react'
import {Form} from "react-router-dom"

export const contactData = async ({ request }) => {
    try {
      const res = await request.formData();
      const data = Object.fromEntries(res);
      console.log(data);
      return null;
    } catch (error) {
      console.log(error.message);
    }
  };


const Contact=()=>{
  return (
    <>
    <h1>Contact Us</h1>
    <Form method='POST' action='/contact'>
    <div >
                  <div>
                    <label htmlFor="username">full name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      placeholder="enter full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="abc@thapa.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message "
                    cols="30"
                    rows="10"
                    placeholder="we are always here to help you."
                  ></textarea>
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn contact-btn">
                    send message
                  </button>
                </div>
    </Form>
    </>
  )
}
export default Contact