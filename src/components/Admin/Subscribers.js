import React from 'react'

const Subscribers = () => {
  return (
    <div>
        <div className="subscribers">
            <div className="subsmem">
                Subscribers!
            </div>
           {
                subscribers.map((data,i)=>{
                    return(
                        <ul key={i}>
                            <li className='sno'>
                                {i+1}.
                            </li>
                            <li>
                                {data.email}
                            </li>
                        </ul>
                    )
                })
            }
           </div>
    </div>
  )
}

export default Subscribers