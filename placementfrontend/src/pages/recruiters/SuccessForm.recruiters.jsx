import React from 'react'

function SuccessForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
    <h1 className="text-3xl font-bold text-green-700 mb-4">Form Submitted Successfully!</h1>
    <p className="text-lg text-green-700">Thank you for your submission.</p>
    <a
        href="/"
        className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
    >
        Go Back to Home
    </a>
</div>
  )
}

export default SuccessForm
