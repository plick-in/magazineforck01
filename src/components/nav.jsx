import React from 'react'

function Nav() {
  return (
    <div className='border-b bg-slate-100 border-zinc-800 pb-3 flex items-center justify-between px-4'>
     <div className="logo text-3xl w-10 tracking-tighter break-words leading-6 font-bold ml-3 mt-2">PLICK</div>
     <ul className='flex gap-3 text-[0.8rem] font-medium items-center'>
          <li className=' cursor-pointer'>HOME</li>
          <li className=' cursor-pointer'>ABOUT</li>
          <li className=' cursor-pointer'>DOCUMENTS</li>
          <li className=' cursor-pointer'>PAGE</li>
          <button type="button" className=' text-zinc-100 dark_clr py-2 px-5 mx-4 hover:bg-zinc-50/0 hover:border border border-zinc-800 hover:text-zinc-800'>HELP</button>
     </ul>
    </div>
  )
}

export default Nav