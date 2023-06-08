import useWindowDimensions from "../../windowDimensions"
import {FaBars} from 'react-icons/fa' 

export default function HeaderBoard() {
  
  const {width} = useWindowDimensions()
  
  if(width > 768) {
    return (
      <div>
        
      </div>
    )
  } else return (
    <div className="sticky top-0 z-[9999]">
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 from-20% via-sky-500 via-30% to-sky-200 to-90% py-4 px-6">
        <div className="text-white">
          <h2 className="font-bold text-lg">PROTASKMATE</h2>
          <p>Feedback Board</p>
        </div>
        <i className="text-[#7f7f81] text-xl">
          <FaBars />
        </i>
      </div>
      
    </div>
  )
}
