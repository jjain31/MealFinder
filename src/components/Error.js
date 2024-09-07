import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header';
function Error() {
  const err=useRouteError();
  return (
    <div className="error-container flex flex-col justify-center items-center bg-gray-50 min-h-screen">

        <h1 className='text-red-600 text-7xl m-4'>Oops!!!</h1>
        <h2 className='text-gray-400 text-3xl m-2'>Something went wrong</h2>
        <h3 className='text-blue-300 text-3xl p-2'>{err.status}:{err.statusText}</h3>
    </div>
  )
}

export default Error