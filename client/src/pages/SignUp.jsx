import React from 'react'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-slate-950 font-bold text-center my-8'>SignUp</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username'
        className='border p-2 rounded-xl' id='username' />
        <input type='email' placeholder='Email'
        className='border p-2 rounded-xl' id="email" />
        <input type='password' placeholder='Password'
        className='border p-2 rounded-xl' id="password" />
      </form>

      <div className='p-2'>
        <h1>Already an account? <a href='http://localhost:5173/sign-in' className='text-blue-700 font-semibold'>Sign-In</a></h1>
      </div>
    </div>
  )
}
