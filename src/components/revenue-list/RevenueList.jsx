import './revenue-list.scss'
import data from '../../constants/data'
import ProgressBar from '../progressbar/ProgressBar'

const RevenueList = () => {
  return (
    <div className='revenue-list'>
        {
            data.revenueByChannel.map((item,index) => (
                <li className="revenue-list_item" key={`revenue-${index}`}>
                    <div className="revenue-list_item_title">
                        {item.title}
                        <span className={`${item.value < 50 ? 'txt-success' : 'txt-danger'}`}>
                            {item.value}%
                        </span>
                    </div>
                    <div className="">
                        <ProgressBar value={item.value}/>
                    </div>
                </li>
            ))
        }
    </div>
  )
}

export default RevenueList