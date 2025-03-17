import Navigation from "@/components/navigation";
import ProjectList from "./project-list";

export default function Project() {

  return (
    <div className="flex flex-col w-full pt-16 mt-96 pb-5 items-center">
      {/* Extra padding for mobile users */}
      <div className="block md:hidden pt-96 mt-96 h-16"></div>
      <Navigation />
      <h1 className="font-anon font-extrabold text-4xl my-6">Projects</h1>
      <ProjectList />
    </div>
  );
}