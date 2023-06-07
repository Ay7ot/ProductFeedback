import FeedbackBoard from "./FeedbackBoard"
import {Routes, Route} from 'react-router-dom'
import FeedbackInfo from "./FeedbackInfo"
function App() {

  return (
    <div className='bg-[#f4f5f7] min-h-screen font-poppins'>
      <Routes>
        <Route path="/" element={<FeedbackBoard />} />
        <Route path="/feedback/:id" element={<FeedbackInfo />} />
      </Routes>
    </div>
  )
}

export default App
