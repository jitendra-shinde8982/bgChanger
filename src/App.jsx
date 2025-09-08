import { useState } from 'react'

function App() {
  const [color, setColor] = useState('gray')
  const colors = [
    'red', 'green', 'orange', 'blue',
    'purple', 'pink', 'teal', 'brown',
    'black', 'yellow', 'cyan', 'lime'
  ]
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed bottom-10 flex flex-wrap justify-center items-center w-full'>
        <div className='bg-yellow-50 px-2 py-1 rounded-xl gap-5 flex'>
          {colors.map((c, index) => (
            <button 
              className='text-white px-5 py-1 rounded-xl cursor-pointer' 
              key={index} 
              onClick={() => (setColor(c))} 
              style={{ backgroundColor: c }}>
                {c.charAt(0).toUpperCase()+c.slice(1)}
              </button>))

          }

          {/* <button className='text-white px-5 py-1 rounded-xl cursor-pointer' onClick={()=> (setColor('green'))} style={{ backgroundColor: 'green' }}>Green</button>
          <button className='text-white px-5 py-1 rounded-xl cursor-pointer' onClick={()=> (setColor('orange'))} style={{backgroundColor: 'orange'}}>Orange</button>
          <button className='text-white px-5 py-1 rounded-xl cursor-pointer' onClick={()=> (setColor('blue'))} style={{backgroundColor: 'blue'}}>blue</button> */}

        </div>

      </div>
    </div>
  )
}

export default App
