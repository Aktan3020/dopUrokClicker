import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {dobleClick} from '../../store/reducers/clicksSlice'

const Shop = () => {
    const dispatch = useDispatch()
    const {Xclick} =useSelector((state)=>state.clicksReducer)
  return (
    <div className='shop'>
        <div className='Xclicks sh' onClick={()=>{dispatch(dobleClick(100*Xclick))}}>
          <div  >удвайваеть клики</div>  
          <div>{100*Xclick}</div>  

        </div>
        <div className='car sh'>
            <div>тачка</div>
            <div>{1000}</div>
            <img src="https://avatars.mds.yandex.net/i?id=b7df711ffd615d4806edb40cdcfe6bb2cad16f2a-8399918-images-thumbs&n=13" alt="" />
        </div>
    </div>
  )
}

export default Shop