import React, { useEffect, useState } from 'react'
import {FaPaperPlane, FaSmile} from 'react-icons/fa'
import gsap from 'gsap';

function ContactForm() {
    const inputContainerIn = () => {
        gsap.fromTo('.input-container', {x: 500, opacity: 0}, {x:0, opacity:1, delay:.5, stagger:0.3})
    }
    useEffect(() => {
      inputContainerIn()
    
      return () => {
        
      };
    }, []);
    
    const [alertMessage, setAlertMessage] = useState({type: '', message: ''})
    const [user, setUser] = useState({
        name : '',
        email: '',
        subject: '',
        message: ''
    })

    const updateUser = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUser(currentUser => ({...currentUser, [name] : value}))
    }

    const greetUser = () => {
        gsap.fromTo('.input-container', {x: 0, opacity: 1}, {x:500, opacity:0, delay:.1, stagger:0.1})
        gsap.fromTo('.greet-text', {x: 500, opacity: 0}, {x:0, opacity:1, delay:.5, stagger:0.3})
    }

    const submitForm = async(e) => {
        e.preventDefault()
        const {name, email, subject, message} = user
        if (name && email && subject && message) {
            const res = await fetch("https://portfolio-c8300-default-rtdb.firebaseio.com/contactedUser.json",
            {
                method: 'POST',
                headers: {'content-Type':'application/json'},
                body: JSON.stringify({user})
            })
            if (res.status === 200) {
                setUser({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
                setAlertMessage({type:'', message:''})
                greetUser()
            }
        }else{
            setAlertMessage({type:'error', message:'Please Complete the form.'})
        }
    }
    return (
        <form className='relative overflow-hidden text-center' onSubmit={submitForm}>
            {/* <div className='flex flex-col justify-between gap-8'> */}
                <div className='flex-1 input-container'>
                    <input type="text" name="name" id="" placeholder=' ' onChange={updateUser} value={user.name} className='input-field' />
                    <label htmlFor="" className='input-label'>NAME</label>
                </div>
                <div className='flex-1 input-container'>
                    <input type="email" name="email" id="" placeholder=' ' onChange={updateUser} value={user.email} className='input-field'/>
                    <label htmlFor="" className='input-label'>EMAIL</label>
                </div>
            {/* </div> */}
            <div className='input-container'>
                <input type="text" name="subject" id="" placeholder=' ' onChange={updateUser} value={user.subject} className='input-field'/>
                <label htmlFor="" className='input-label'>YOUR SUBJECT</label>
            </div>
            <div className='input-container'>
                <textarea name="message" id="" cols="30" rows="5" placeholder=' ' onChange={updateUser} value={user.message} className='input-field'/>
                <label htmlFor="" className='input-label'>YOUR MESSAGE</label>
            </div>
            {alertMessage.message && <div className={`text-white rounded-xl p-1 ${alertMessage.type==='error'? 'bg-red-500': 'dark:bg-orange bg-green'}`}>{alertMessage.message}</div>}
            <div className="input-container">
                <button type='submit' className='inline-flex items-center my-6 hoverable btn-primary'><span className='px-4'>SEND MESSAGE</span> <span className='px-4 text-white'><FaPaperPlane/></span> </button>
            </div>

            <div className='absolute top-0 left-0 w-full h-full z-[-1] flex items-center justify-center'>
                <div className='text-center dark:text-orange text-green'>
                    <FaSmile className='mx-auto opacity-0 text-8xl greet-text'/>
                    <h3 className='text-2xl font-bold tracking-wider opacity-0 greet-text'>Thanks for Contacting...</h3>
                </div>
            </div>
        </form>
    )
}

export default ContactForm
