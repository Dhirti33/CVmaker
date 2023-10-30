import "../styles/yourExperience.css"
import { useState } from "react"

export default function YourExperience(props){
    const [job, setJob] = useState("Untitled");
    const [company, setCompany] = useState("Employer");
    const [from, setFrom] = useState("Start");
    const [to, setTo] = useState("End");
    const [location, setLocation] = useState("");
    const [role, setRole] = useState("");

    const handleJobChange = (event) => {
        const newJob = event.target.value;
        setJob(newJob)
        props.onJobChange(newJob)
    }
    const handleCompanyChange = (event) => {
        const newCompany = event.target.value;
        setCompany(newCompany)
        props.onCompanyChange(newCompany)
    }
    const handleFromChange = (event) => {
        const newFrom = event.target.value;
        setFrom(newFrom)
        props.onFromChange(newFrom)
    }
    const handleToChange = (event) => {
        const newTo = event.target.value;
        setTo(newTo)
        props.onToChange(newTo)
    }
    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation)
        props.onLocationChange(newLocation)
    }
    const handleRoleChange = (event) => {
        const newRole = event.target.value;
        setRole(newRole)
        props.onRoleChange(newRole)
    }

    const handleClick =()=>{
        const caret = document.querySelector('.caretExp')
        const details = document.querySelector('.jobDetails')

        caret.classList.toggle('caretExp-rotate')
        details.classList.toggle('jobDetails-open')
    }
    
    return(
        <section className="yourExperience">
            <h1>Experience</h1>
            <p className="italic">Include your last 10 years of  relevant experience and date in this section. <br />
                List your most recent position first.
            </p>
            <div className="experienceDropdown">
                <div className="workAt" onClick={handleClick}>
                    <div>
                        <h1 className="Head">{job} at {company}</h1>
                        <p>{from} -- {to}</p>
                    </div>
                    <div className="caretExp"></div>
                </div>
                <div className="jobDetails">
                    <div className='exp'>
                        <input type="text"  name="" id="jobExpTitle" className='inputEpx' placeholder="Job Title" onChange={handleJobChange}/>
                        <input type="text" value={company} name="" id="company" className='inputEpx' placeholder="Company/Employer" onChange={handleCompanyChange}/>
                        <div className="Period">
                            <input type="text" name=""  id="periodFrom" className='inputEpx' placeholder="From" onChange={handleFromChange}/>
                            <input type="text" name=""  id="periodTo" className='inputEpx' placeholder="To" onChange={handleToChange}/>
                        </div>
                        <input type="text" name="" value={location} id="location" className='inputEpx' placeholder="Location" onChange={handleLocationChange}/>
                    </div>
                    <textarea name="" value={role} id="roleDescription" cols="30" rows="10" onChange={handleRoleChange}></textarea>
                </div>
            </div>
        </section>
    )
}