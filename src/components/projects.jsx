import React from 'react'

function Projects({projectdata}) {
  return (
    <div>
     <div className={`w-full h-[80vh] flex ${projectdata.style.right}`}>
     <div className='w-1/2 h-auto flex flex-col pl-7 pt-10 items-center'>
          <h1 className='text-[9vw] leading-[15vh] font-bold tracking-tighter'>{projectdata.title}</h1>
          <p className=' leading-none w-[93%] mt-5 uppercase font-medium text-[0.85rem]'>{projectdata.dis}</p>
          <a href={projectdata.link} className=' hover:bg-zinc-700 border border-zinc-700 w-fit py-2 px-14 hover:text-zinc-50 mt-4'>VIEW</a>
          </div>
     <div className='w-1/2 h-full pl-10 flex items-center justify-center'>
          <img className=' w-full object-cover mr-3' src={projectdata.style.image} />
     </div>
     </div>
    </div>
  )
}

export default Projects