import React from 'react'

const Content = () => {
  return (
    <main className='p-6'>
        <div className='bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold'>Hello!</h2>
            <p className='mt-2'>This app uses context API to toggle between light and dark themes globally.</p>
        </div>
    </main>
  )
}

export default Content
