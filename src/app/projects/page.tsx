import Navigation from "@/components/navigation";
import ProjectList from "./project-list";

export default function Project() {

  return (
    <div className="flex flex-col w-full min-h-screen self-start">
      <Navigation />
      <div className="flex flex-col items-center w-full pt-14 md:pt-0 pb-8">
        <h1 className="font-anon font-extrabold text-4xl my-6">Projects</h1>
        <ProjectList />
      </div>
    </div>
  );
}