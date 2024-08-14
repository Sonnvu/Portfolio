import React from 'react'
import TabComponent from './TabComponent'
import BaseballTab from '../../page/SportPage/sportTabs/BaseballTab'
import FrisbeeTab from "../../page/SportPage/sportTabs/FrisbeeTab";
import BoxingTab from "../../page/SportPage/sportTabs/BoxingTab";

export default function TabPage() {
  return (
    <div>
        <div className='bg-slate-50 flex pl-40 py-11'>
            <p className="font-poppin text-xl">
                Here are some sports I love
            </p>
        </div>
        <TabComponent items={items}/>
    </div>
  )
}

const items = [
    {
        title: "Baseballs", 
        content: (
            <BaseballTab />
        ),
    },
    {
        title: "Ultimate Frisbee", 
        content: (
            <FrisbeeTab />
        ),
    },
    {
        title: "Boxing", 
        content: (
            <BoxingTab />
        ),
    },
    {
        title: "Skateboard", 
        content: (
            <div className='h-32 bg-red-50'>
                gay
            </div>
        ),
    },
    
]