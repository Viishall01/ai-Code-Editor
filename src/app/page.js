import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  
  return (
    <div>
    <Header/>
    <div className="h-screen flex flex-col justify-center items-center">
      
        <h2 className="text-black font-mono font-bold text-3xl ml-2 text-pretty text-center">Write Debug & Explain Your Code</h2>
        <h2 className="text-black font-mono font-bold text-3xl mt-2"> </h2>
        <p className="text-sm text-gray-600 m-2 font-sans text-pretty text-center">Revolutionize your content creatation with our AI-Tool</p>
       <Link href={'/dashboard'}> <Button  className='rounded-lg mt-2'>Get Started</Button></Link>
      </div>
      </div>  
    
  )
}
