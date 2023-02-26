import './user-info.scss'

const Userinfo = ({data}) => {
  return (
    <div className='user-info'>
        <div className="user-info_img">
            <img src={data.img} alt="" />
        </div>
        <div className="user-info_name">
            {data.name}
        </div>
    </div>
  )
}

export default Userinfo