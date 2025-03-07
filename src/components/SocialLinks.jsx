import Image from "next/image"
import Link from "next/link"

const SocialLinks = () => {
    const socialLinks =[
        {
           path:"#" , icon:"/github-brands.svg"
        },
        {
            path: "#", icon: "/instagram-brands.svg"
        },
        {
            path: "#", icon: "/facebook-brands.svg"
        },
       {
         path: "#", icon: "/linkedin-brands.svg"
        }
    ]
  return (
    <div className="flex gap-5 mt-5 ">
         { 
            socialLinks.map((itmem)=>{
                 return (
                     <Link
                         key={itmem.name} href={itmem.path} >
                         <Image src={itmem.icon} alt={itmem.icon} width={40} height={40} className="invert  shadow-md hover:bg-red-100 rounded-xl p-2"/>
                     </Link>  
                 )
            })}     
          
    </div>
  )
}

export default SocialLinks
