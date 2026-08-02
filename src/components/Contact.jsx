import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const onSubmit = () => {
    setStatus('sending');

    emailjs.sendForm('service_dsrev1i', 'template_dyzx06f', form.current, '9fFlHOoF8BjGIWAc8').then(
      () => {
        setStatus('success');
        reset();
      },
      () => {
        setStatus('error');
      }
    );
  };

  const isSending = status === 'sending';

  return (
    <form ref={form} className='contact_form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className='first_row'>
        <label className='sr-only' htmlFor='contact-name'>
          Name
        </label>
        <input id='contact-name' type='text' name='name' placeholder='Name *' autoComplete='name' aria-invalid={errors.name ? 'true' : 'false'} aria-describedby={errors.name ? 'contact-name-error' : undefined} {...register('name', { required: 'Name is required' })} />
        {errors.name && (
          <span className='invalid-feedback' id='contact-name-error'>
            {errors.name.message}
          </span>
        )}
      </div>
      {/* End .first_row */}

      <div className='second'>
        <label className='sr-only' htmlFor='contact-email'>
          Email
        </label>
        <input
          id='contact-email'
          type='email'
          placeholder='Email *'
          name='email'
          autoComplete='email'
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please enter a valid email address',
            },
          })}
        />
        {errors.email && (
          <span className='invalid-feedback' id='contact-email-error'>
            {errors.email.message}
          </span>
        )}
      </div>
      {/* End .second */}

      <div className='third'>
        <label className='sr-only' htmlFor='contact-message'>
          Message
        </label>
        <textarea id='contact-message' placeholder='Message *' name='message' rows='6' aria-invalid={errors.message ? 'true' : 'false'} aria-describedby={errors.message ? 'contact-message-error' : undefined} {...register('message', { required: 'Message is required' })}></textarea>
        {errors.message && (
          <span className='invalid-feedback' id='contact-message-error'>
            {errors.message.message}
          </span>
        )}
      </div>
      {/* End .third */}

      <div className='edina_tm_button'>
        <button type='submit' className='color' disabled={isSending}>
          {isSending ? 'Sending…' : 'Send message'}
        </button>
      </div>
      {/* End tokyo_tm_button */}

      <p className='form_status' role='status' aria-live='polite'>
        {status === 'success' && <span className='is_success'>Thanks — your message has been sent. I&apos;ll get back to you soon.</span>}
        {status === 'error' && <span className='is_error'>Something went wrong sending your message. Please email me directly at barufkosgei@gmail.com.</span>}
      </p>
    </form>
  );
};

export default Contact;
