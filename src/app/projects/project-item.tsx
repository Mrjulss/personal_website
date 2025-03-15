import Image from "next/image";

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

function ProjectItem({ title, description, image, tags }: ProjectItemProps) {
  return (
    <div className="bg-purple-900 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="font-anon text-xl font-bold mb-2">{title}</h3>
        <p className="font-anon opacity-80 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-purple-950 px-2 py-1 rounded-full text-xs font-anon"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;