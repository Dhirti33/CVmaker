import "../styles/education.css"
import { useState } from "react"

export default function Education(props){
    const [degree, setDegree] = useState("");
    const [schoolName, setSchoolName] = useState("Untitle");
    const [schoolFrom, setSchoolFrom] = useState("");
    const [schoolTo, setSchoolTo] = useState("");
    const [schoolLocation, setSchoolLocation] = useState("");
    const [schoolRole, setSchoolRole] = useState("");

    const handleDegreeChange = (event) => {
        const newDegree = event.target.value;
        setDegree(newDegree)
        props.onDegreeChange(newDegree)
    }
    const handleSchoolNameChange = (event) => {
        const newSchoolName = event.target.value;
        setSchoolName(newSchoolName)
        props.onSchoolNameChange(newSchoolName)
    }
    const handleSchoolFromChange = (event) => {
        const newSchoolFrom = event.target.value;
        setSchoolFrom(newSchoolFrom)
        props.onSchoolFromChange(newSchoolFrom)
    }
    const handleSchoolToChange = (event) => {
        const newSchoolTo = event.target.value;
        setSchoolTo(newSchoolTo)
        props.onSchoolToChange(newSchoolTo)
    }
    const handleSchoolLocationChange = (event) => {
        const newSchoolLocation = event.target.value;
        setSchoolLocation(newSchoolLocation)
        props.onSchoolLocationChange(newSchoolLocation)
    }
    const handleSchoolRoleChange = (event) => {
        const newSchoolRole = event.target.value;
        setSchoolRole(newSchoolRole)
        props.onSchoolRoleChange(newSchoolRole)
    }

    const handleClick =()=>{
        const caret = document.querySelector('.caretEdu')
        const details = document.querySelector('.educationDetails')

        caret.classList.toggle('caretEdu-rotate')
        details.classList.toggle('educationDetails-open')
    }

    return(
        <section className="education">
            <h1>Education</h1>
            <p className="italic">
                Some helpful information or tips about what the user should include in this education section of the CV creator
            </p>
            <div className="educationDropdown">
                <div className="schooledAt" onClick={handleClick}>
                    <div>
                        <h1 className="Head">{schoolName}</h1>
                        <p>{schoolFrom} -- {schoolTo}</p>
                    </div>
                    <div className="caretEdu"></div>
                </div>
                <div className="educationDetails">
                    <div className="edu">
                        <input type="text" name="" value={degree} id="Degree" className="inputEdu" placeholder="Degree" onChange={handleDegreeChange}/>
                        <input type="text" name=""  id="schoolName" className="inputEdu" placeholder="School name" onChange={handleSchoolNameChange}/>
                        <div className="PeriodEdu">
                            <input type="text" name="" id="schoolFrom" className="inputEdu" placeholder="From" onChange={handleSchoolFromChange}/>
                            <input type="text" name="" id="schoolTo" className="inputEdu" placeholder="To" onChange={handleSchoolToChange}/>
                        </div>
                        <input type="text" name="" value={schoolLocation} id="schoolLocation" className="inputEdu" placeholder="Location" onChange={handleSchoolLocationChange}/>
                    </div>
                    <textarea name="" value={schoolRole} id="schoolRole" cols="30" rows="10" onChange={handleSchoolRoleChange}></textarea>
                </div>
            </div>
            
        </section>
    )
}