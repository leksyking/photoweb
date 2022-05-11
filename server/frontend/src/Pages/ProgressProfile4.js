import React from 'react'
import ProgressStep from '../components/ProgressStep'
import PrevNext from '../components/PrevNext'
import '../styles/Pages/ProgressProfile.css'


function ProgressLevel() {
    // const [loading, setLoading] = useState(false);


    return (
        <div className="body">
            {/* Step from */}
          <ProgressStep/>

          {/* PROFILE FORM */}
          <form className="w-full mt-3">
                <p className="text-gray-700 uppercase font-bold">CONFIRM</p>
          </form>
          <PrevNext/>


        </div>
    )
}

export default ProgressLevel
