import Item from './Item'
import { useState } from 'react'
import ModelPopup from './ModelPopup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="body">
      <div className="items-container">
        <Item setIsOpen={setIsOpen} />
        {/* <Item setShowViewer={setShowViewer} /> */}
        {/* <Item setShowViewer={setShowViewer} /> */}
      </div>
      <ModelPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default App
