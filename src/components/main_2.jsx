import React from 'react'
import Projects from './projects'

function Main_2() {
  const projectdata = [
    {
      name:"",
      title:"THIS IS MY PAST PROJECTS",
      dis:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis beatae est officiis dignissimos quibusdam ducimus laboriosam ad repudiandae nostrum? Officiis mollitia ex iure quibusdam aut, facere inventore ad dolorem velit, at minima id explicabo, unde sint enim! Et autem aliquid at ab reprehenderit cumque maxime, temporibus mollitia quidem minima.",
      link:"https://plick.netlify.app",
      style:{
        right:"flex-row-reverse mt-12",
        image:"https://mdbcdn.b-cdn.net/img/home/main-dark.webp",
      },
    },
    {
      name:"",
      title:"THIS IS MY PAST PROJECTS",
      dis:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis beatae est officiis dignissimos quibusdam ducimus laboriosam ad repudiandae nostrum? Officiis mollitia ex iure quibusdam aut, facere inventore ad dolorem velit, at minima id explicabo, unde sint enim! Et autem aliquid at ab reprehenderit cumque maxime, temporibus mollitia quidem minima.",
      link:"https://abhay7111.netlify.app",
      style:{
        right:"flex-row mt-20",
        image:"https://cdn.dribbble.com/userupload/13480902/file/original-3dc9ada946134e7b95eaf523271b5098.png?resize=1024x584",
      },
    },
    {
      name:"",
      title:"THIS IS MY PAST PROJECTS",
      dis:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis beatae est officiis dignissimos quibusdam ducimus laboriosam ad repudiandae nostrum? Officiis mollitia ex iure quibusdam aut, facere inventore ad dolorem velit, at minima id explicabo, unde sint enim! Et autem aliquid at ab reprehenderit cumque maxime, temporibus mollitia quidem minima.",
      link:"https://plick.netlify.app",
      style:{
        right:"flex-row-reverse mt-12",
        image:"https://mdbcdn.b-cdn.net/img/home/tutorial-dark.webp",
      },
    },
  ];
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
     <h2 className=' text-[100px] font-bold border-b border-zinc-900 text-center w-[70%] leading-none pb-10'>PROJECTS</h2>
     {projectdata.map((item, index) =>(
      <Projects projectdata={item}/>
     ))}
    </div>
  )
}

export default Main_2