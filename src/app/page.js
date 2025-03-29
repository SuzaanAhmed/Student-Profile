import Image from "next/image";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar/>
      <div className="h-[200px] w-[600px] m-2">
      <h1 className="font-[800]">About Me...</h1>
      <p className="italic">My name is Abdul Suzaan Ahmed. I am a student of Sahdyadri college of Engineering. I was gifted to this planet on 3rd of February, 2004. I love to build and program things. Breaking and picking apart at complex problems is somehting that highly excites me. To know more about me check out my resume and projects.</p>
      </div>
    </div>
  );
}
