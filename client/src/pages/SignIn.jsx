import React from 'react'

export default function SignIn() {
  return (
    <div className='p-4 max-w-sm mx-auto'>
      <h1 className='text-slate-900 font-bold text-center my-8'>Login</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='border rounded-xl p-2' />
        <input type='password' placeholder='Password' className='border rounded-xl p-2' />

      </form>
      <div className='p-2'>Dont have an account? <a href='http://localhost:5173/sign-up' className='text-blue-700 font-semibold '>Sign-Up</a></div>
    </div>
  )
}
