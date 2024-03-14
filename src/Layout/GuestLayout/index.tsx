import image from '../../Assets/Images/imageAuthentification.png'
import Logo from '../../Components/Logo'

export default function GuestLayout({children}:{
    children:React.ReactNode
}){

    return (
<div className="flex h-screen">
  <div className="flex-1 flex items-center justify-center">
    <img src={image} alt='this is image Authentification' className='max-w-full max-h-full' />
  </div>
  <div className="flex-1 flex items-center justify-center">
    <Logo>
      {children}
    </Logo>
  </div>
</div>

    )
}