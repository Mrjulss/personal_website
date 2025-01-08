import Navigation from "./components/navigation";
import PersonalInfo from "./components/personalInfo";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center w-full flex-col md:flex-col-reverse">
    <Navigation />
    <PersonalInfo />
    </div>
  );
}
