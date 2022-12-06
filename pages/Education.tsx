import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosSchool } from "react-icons/io";

function Education() {

    return (
        <div className="m-auto">
            <h3 className="text-xl py-5 dark:text-white">Education</h3>
            <VerticalTimeline lineColor="#834431" className="p-15">
                <VerticalTimelineElement
                className="text-cyan-500"
                date=" 2019-now"
                iconStyle={{background:"#eecd27" , color:"white"}}
                icon={<IoIosSchool/>}
                >
                    <h3>POLISH-JAPANESE ACADEMY
OF INFORMATION TECHNOLOGY IN GDAŃSK</h3>
<p className="text-black">Computer Science - Bachelor</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="text-cyan-500"
                date="2014-2018"
                iconStyle={{background:"white" , color:"#eecd27"}}
                icon={<IoIosSchool/>}
                >
                    <h3>POLISH-JAPANESE ACADEMY
OF INFORMATION TECHNOLOGY IN GDAŃSK</h3>
<p className="text-black">New media art - Bachelor</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="text-cyan-500"
                date="2010-2014"
                iconStyle={{background:"#eecd27" , color:"white"}}
                icon={<IoIosSchool/>}
                >
                    <h3>TECHNICAL COLLEGE IN KARTUZY</h3>
                    <p className="text-black">IT specialist</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            
        </div>
      
    );
  }

  export default Education;