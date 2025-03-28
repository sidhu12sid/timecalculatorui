import React from 'react'
const page = () => {
  const [text, setText] = React.useState("Enter your time data here...");

  return (
    <div className="h-screen w-full flex justify-center items-center bg-cover bg-center ">
       <div className="h-[60%] w-[35%] outline-offset-2 border-2 p-5">
          <h1 className='text-4xl text-black'>Time Calculator</h1>
             <div className='mt-5'>
              <form action="">
                <div className="flex flex-col">
                <label for="story">Enter your time data:</label>
                <textarea id="story" name="story" rows="8" cols="10" value ={text} className='mt-4'>
                   
                </textarea>
                <button>
                  Calculate1
                </button>
                </div>
              </form>
            </div>    
       </div>
    </div>
  )
}

export default page
