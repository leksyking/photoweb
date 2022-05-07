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
          <form className="mt-3">
            <div className="block">
                <span className="text-gray-700 uppercase tracking-wide font-bold ">Shoot type</span>

                <p className="text-gray-500 mbtext-xs mb-1 italic">What are your expertise?</p>
                <div className="mt-2 flex shoot__type">

                    <div>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio h-4 w-4" name="radio-sizes" value="1" checked/>
                        <span className="ml-2 mr-2">Portrait </span>
                    </label>
                    </div>
                    <div>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio h-4 w-4" name="radio-sizes" value="1" checked/>
                        <span className="ml-2 mr-2">Portrait </span>
                    </label>
                    </div>
                    <div>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio h-4 w-4" name="radio-sizes" value="1" checked/>
                        <span className="ml-2 mr-2">Portrait </span>
                    </label>
                    </div>
                    <div>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio h-4 w-4" name="radio-sizes" value="1" checked/>
                        <span className="ml-2 mr-2">Portrait </span>
                    </label>
                    </div>
                </div>
                </div>
            </form>
        

          <PrevNext/>


        </div>
    )
}

export default ProgressLevel
