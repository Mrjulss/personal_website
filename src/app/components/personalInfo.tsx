import Image from 'next/image'

const userInfo = {
    name: 'Julian Sibbing',
    status: "Currently doing my M.Sc in Information Systems at TUM",
    description: "Exploring the worlds of software engineering, machine learning, and product development with a keen interest in learning and growth."
  };

export default function PersonalInfo() {
  return (
    <div className="w-2/4 items-center flex flex-col-reverse md:flex-row space-x-4 m-20">
    <div id="content-text">
  <div id="header-text">
  <h1 className="text-4xl font-anon font-bold">{userInfo.name}</h1>
  <h2 className="text-lg opacity-80 font-anon font-light">{userInfo.status}</h2>
  </div>
  <div className="w-full h-[1px] bg-white my-4 opacity-25"></div>
  <p className="text-lg font-anon">{userInfo.description}</p>
</div>
<Image
  src="/main.jpeg"
  alt="Descriptive text about the image" 
  width={200} 
  height={200}
  className="rounded-full shadow-lg border-purple-950 border-2 m-5"
/>
</div>
  );
}
