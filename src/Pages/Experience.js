import React from 'react'
import  { FaCode, FaDatabase, FaGraduationCap} from 'react-icons/fa'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';


function Experience() {
  return (
    <div className='experience'>
       <VerticalTimeline lineColor='#000'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010-2016' iconStyle={{background:"black", color: '#fff'}} icon={<FaGraduationCap/>}>
           <h2 className='vertical-timeline-component-title'>My first high school, Rwanda Coding Academy</h2>
           <p>High school Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-component--education' iconStyle={{background:'#000', color:'#fff'}} icon={<FaGraduationCap/>} date='2016-2020'>
             <h2 className='vertical-timeline-component-title'>University at MIT</h2>
             <p>Bachelor's degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-component--education' icon={<FaGraduationCap/>} iconStyle={{background:'#000', color:'#fff'}} date='2020-2023'>
          <h2 className='vertical-timeline-component-title'>Masters at MIT</h2>
          <p>Masters degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-component--work' icon={<FaCode/>} iconStyle={{background:'#000', color:'#fff'}} date='2023-2025'>
           <h2 className='vertical-timeline-component-title'>Participating in various websites</h2>
           <p>E-commerce websites , School wbsites among others</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-component--work' icon={<FaDatabase/>} iconStyle={{background:'#000', color:'#fff'}} date='2025-2028'>
           <h2 className='vertical-timeline-component-title'>Database experience</h2>
           <p>A database manager at NLCA</p>
        </VerticalTimelineElement>
       </VerticalTimeline>
    </div>
  )
}

export default Experience
