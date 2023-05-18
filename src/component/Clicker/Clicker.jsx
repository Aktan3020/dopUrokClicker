import React from 'react'
import {addClicks} from '../../store/reducers/clicksSlice'
import { useDispatch,useSelector } from 'react-redux'
const Clicker = () => {
    const dispatch = useDispatch()
const {clicks,Xclick} =useSelector((state)=> state.clicksReducer)

  return (
    <div>
        <div className="count">{clicks}</div><div className='Xclicks'>{Xclick}X</div>
        <button onClick={()=>dispatch(addClicks(Xclick))}>click me!!!</button>
    </div>
  )
}

export default Clicker