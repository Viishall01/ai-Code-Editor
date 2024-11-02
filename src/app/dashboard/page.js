import React from 'react'
import Template from '@/app/(data)/codeTemplate'
import TemplateCard from './_components/TemplateCrad'

const Dashboard = () => {
  return (
    <div className="flex flex-wrap justify-evenly p-4 bg-gray-100 items-center h-screen">
  {Template.map((item, index) => (
    <TemplateCard {...item} key={index} className="bg-white rounded-lg shadow-md m-2 p-4 flex-1 flex-grow md:flex-[0_1_calc(30%_-_2rem)] transition-transform transform hover:scale-105" />
  ))}
</div>

  )
}

export default Dashboard