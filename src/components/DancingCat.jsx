import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          aria-label={isAnimating ? 'Stop animation' : 'Start animation'}
        >
          {isAnimating ? '⏸️ Stop Dancing' : '▶️ Start Dancing'}
        </button>
      </div>
    </div>
  )
}

export default DancingCat
