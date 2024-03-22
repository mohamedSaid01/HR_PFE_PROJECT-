import image from '../../Assets/Images/imageAuthentification.png'
import Logo from '../../Components/Logo'

export default function GuestLayout({children}: {
    children: React.ReactNode
}) {

    return (
        <div className="flex flex-col gap-40 md:flex-row items-center justify-center w-full overflow-hidden">
            <div className="w-6/12 sm:w-6/12 md:w-1/2 lg:w-1/2 xl:w-1/2">
                <img src={image} alt='this is image Authentification' />
            </div>
            <div className="w-6/12 sm:w-6/12 md:w-1/2 lg:w-1/2 xl:w-1/2 flex items-center">
                <Logo>
                    {children}
                </Logo>
            </div>
        </div>
    )
}
