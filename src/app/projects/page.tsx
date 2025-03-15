import Navigation from "@/components/navigation";
import ProjectList from "./project-list";

export default function Project() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen"> {/* Added min-h-screen */}
      <Navigation />
      <h1 className="font-anon font-extrabold text-4xl mt-8 mb-6">Projects</h1>
      <ProjectList />
    </div>
  );
}