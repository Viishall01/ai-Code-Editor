"use client"
import Template from '@/app/(data)/codeTemplate';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { use } from 'react';
import Image from 'next/image';
import { ArrowUpCircle, Loader2Icon } from 'lucide-react';
import OutPutSextion from '../_components/OutPutSextion';
import { chatSession } from '@/utils/AiModel';


const Page = ({params}) => {
const [loading, setLoading]= useState(false);
const [aiOutput, setAiOutput] = useState('');
const [formData, setFormData] = useState('');

  const handleInputChange = (event)=>{
  const {name,value}= event.target;
  setFormData({...formData, [name]:value});
  console.log(formData)
  };
  
   
      const GenerateAiContent = async (FormData)=>{
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIprompt = FormData+", "+SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAIprompt);
      console.log(result.response.text());
      setAiOutput(result?.response.text());
      setLoading(false);
    }


    const unwrappedParams = use(params);
    const templateSlug = unwrappedParams['template-slug']
    // it can be written as const varname = unwrappedParams.templateSlug
    // whatever the name of folder is defined inside the [templateSlug] will only be accepted 
   
   const selectedTemplate=Template?.find((item)=>item.slug== templateSlug);
 
  
    
  return (
    <div className='h-screen'>
         {selectedTemplate?.form?.map((item,index)=>(
            <div key={index}>
              
              <form className=''>
               <div className='flex justify-center items-center mx-2'> 
                <Image src={selectedTemplate?.icon} alt='icon' height={40} width={40} className='mt-2'/>
                <h2 className='font-bold text-2xl mb-2 text-slate-800 mt-5 m-2'>{selectedTemplate?.name}</h2>
                <Button onClick={()=>navigator.clipboard.writeText(aiOutput)} className='z-10 '>Copy</Button>
                </div>
                <p className='text-slate-200 text-sm line-clamp-1 mx-5 bg-black rounded-md text-center'>{selectedTemplate?.desc}</p>
                <OutPutSextion aiOutput={aiOutput}/>
                <Textarea name={item.name} required={item.required} onChange={handleInputChange}/>
                <div className='flex justify-center items-center mt-4 '>
                <Button onClick={GenerateAiContent} className='mx-10 w-[600px] lg:w-full' disabled={loading}>{loading?<Loader2Icon className='animate-spin'/>: <ArrowUpCircle/> }Generate-Output</Button>
                </div>
              </form>
                   
             </div>
               
          ))}
     </div>
                
              
            

  )
}

export default Page
