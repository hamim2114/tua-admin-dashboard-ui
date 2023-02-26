import { useEffect, useRef } from 'react'
import './progress-bar.scss'

const ProgressBar = ({value}) => {
    // const barInnerRef = useRef();

    // useEffect(() => {
    //     barInnerRef.current.style.width = `${value}%`
    // }, [])
    
  return (
    <div className='progress-bar' >
        <div style={{width : `${value}%`}} className="progress-bar_inner"></div>
    </div>
  )
}

export default ProgressBar