import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [result, setResult] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();
  const onSubmit = (data, e) => {
    // console.log('Message submited: ' + JSON.stringify(data));
    emailjs.sendForm('service_dsrev1i', 'template_dyzx06f', form.current, '9fFlHOoF8BjGIWAc8').then(
      (result) => {
        if (result.text === 'OK') setResult(true);
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <>
      <form ref={form} className='contact_form' onSubmit={handleSubmit(onSubmit)}>
        <div className='first_row'>
          <input type='text' name='name' placeholder='Name *' {...register('name', { required: true })} />
          {errors.name && errors.name.type === 'required' && <span className='invalid-feedback'>Name is required</span>}
        </div>
        {/* End .first_row */}

        <div className='second'>
          <input
            type='email'
            placeholder='Email *'
            name='email'
            {...register(
              'email',
              {
                required: 'Email is Required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              },
              { required: true }
            )}
          />
          {errors.email && <span className='invalid-feedback'>{errors.email.message}</span>}
        </div>
        {/* End .second */}

        <div className='third'>
          <textarea {...register('message', { required: true })} placeholder='Message *' name='message'></textarea>
          {errors.message && <span className='invalid-feedback'>Message is required</span>}
        </div>
        {/* End .third */}

        <div className='edina_tm_button'>
          <button type='submit' className='color' value='send'>
            {`${result ? 'Message Sent Successfully' : 'Submit'}`}
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
