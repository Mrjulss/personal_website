import Image from 'next/image'



function ProjectItem(){
    return (
        <div className="bg-purple-950 rounded-xl w-full p-3 shadow-lg flex flex-col place-items-start gap-2">
            <Image src="/main.jpeg" width={200} height={180} alt='project image'/>
            <div>
            <h2 className='text-lg font-anon font-bold'>Project Title</h2>
            <p className='text-sm opacity-80 font-anon font-light'>Project Description</p>
            </div>
        </div>
    )
}

export default ProjectItem;