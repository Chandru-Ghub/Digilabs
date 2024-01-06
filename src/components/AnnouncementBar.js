import React from 'react'
import '../style/Announcement.css'
import { GrAnnounce } from "react-icons/gr";
const AnnouncementBar = () => {
  return (
    <div className='annnounce'>
        <div className="c1">
           <div> <GrAnnounce /></div>
        </div>
        <div className="c2">
            We are happy to announce that we raise $2 million in Seed Funding
        </div>
    </div>
  )
}

export default AnnouncementBar