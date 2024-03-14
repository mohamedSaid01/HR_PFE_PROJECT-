import leavemetryImage from '../../Assets/Images/Leavemetry.png'
import strokImage from '../../Assets/Images/Stroke.png'

function Logo({children}:{
    children:React.ReactNode
}) {
  return (
    <div className='flex flex-col gap-y-10'>
      <div className=''>
        <img src={leavemetryImage} alt="thisisleavemetryimage"  className="ml-14" />
        <img src={strokImage} alt="this is stroke image" className='w-9 ml-20'/>
      </div>
        {children}
    </div>
  )
}

export default Logo
