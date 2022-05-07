import React from 'react'
import ProgressStep from '../components/ProgressStep'
import PrevNext from '../components/PrevNext'
import '../styles/Pages/ProgressProfile.css'


function ProgressLevel() {
    // const [loading, setLoading] = useState(false);
    const socials = [
        {
            socail: "Whatsapp",
            objId: 1
        },
        {
            socail: "Facebook",
            objId: 2
        },
        {
            socail: "Instagram",
            objId: 1
        },
        {
            socail: "Linkdln",
            objId: 1
        }
    ]


    return (
        <div className="body">
            {/* Step from */}
          <ProgressStep/>

          {/* PROFILE FORM */}
          <form className="w-full mt-3">
            <div className="flex flex-wrap -mx-3 mb-6">
                {socials.map((social)=>{
                    return(
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" key={social.objId}>
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            {social.socail}
                          </label>
                          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={"Copy your " + social.socail + " link"} />
                          <p className="text-red-500 mbtext-xs mb-1 italic">Please fill out this field.</p>
                        </div>

                    )
                })}
            </div>
          </form>
          <PrevNext/>


        </div>
    )
}

export default ProgressLevel
