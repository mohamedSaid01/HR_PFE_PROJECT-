
interface InformationsLeave {
  color?: string;
  name?: string;
  logo?:any
}

function CardLeave(props:InformationsLeave) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 border border-gray-100 border-2 rounded-3xl w-44 h-40">
      <div className={`w-12 h-12 rounded-full  flex justify-center items-center ${props.color}`}>
        <img src={props.logo} alt="this icon" />
      </div>
        <p className='text-sm font-medium'>{props.name} Leave</p>      
        <p className='font-light'><span className='font-semibold'>9</span>/12 Days</p>
    </div>
  )
}

export default CardLeave
