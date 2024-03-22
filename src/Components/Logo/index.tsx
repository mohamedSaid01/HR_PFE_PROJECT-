import logoImage from '../../Assets/Images/logo.svg'

function Logo({children}:{
    children:React.ReactNode
}) {
  return (
    <div className='flex flex-col gap-y-8'>
      <div className=''>
        <img src={logoImage} alt="thisisleavemetryimage"  className="ml-12" />
      </div>
        {children}
    </div>
  )
}

export default Logo
