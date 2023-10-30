// import Letter from "../CV-letter/letter"
import "../styles/yourDetails.css"
import { useState } from "react";


export default function YourDetails(props){
    const [jobName,setJobName] = useState("")
    const [activeIndex,setActiveIndex] = useState(0)


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [address,setAddress] = useState("")
    const [email,setEmail] = useState("")
    const [city,setCity] = useState("")
    const [tel,setTel] = useState("")


    const handleJobChange = (event) =>{
        const newJobName = event.target.value;
        setJobName(newJobName);
        props.onJobNameChange(newJobName)
    }

    const handleFirstNameChange = (event) => {
        const newFirstName = event.target.value;
        setFirstName(newFirstName);
        props.onFirstNameChange(newFirstName); 
    }
    const handleLastNameChange = (event) => {
        const newLastName = event.target.value;
        setLastName(newLastName);
        props.onLastNameChange(newLastName); 
    }

    const handleAddressChange = (event) => {
        const newAddress = event.target.value;
        setAddress(newAddress);
        props.onAddressChange(newAddress); 
    }
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        props.onEmailChange(newEmail); 
    }
    const handleCityChange = (event) => {
        const newCity = event.target.value;
        setCity(newCity);
        props.onCityChange(newCity); 
    }
    const handleTelChange = (event) => {
        const newTel = event.target.value;
        setTel(newTel);
        props.onTelChange(newTel); 
    }
    
    const handleClick =()=>{
        const caret = document.querySelector('.caret')
        const details = document.querySelector('.userDetails')

        caret.classList.toggle('caret-rotate')
        details.classList.toggle('userDetails-open')

    }

    return(
        <section className="details">
            <div className="detailsDropdown">
                <div className="userInfo" onClick={handleClick}>
                    <h2>Your Details</h2>
                    <div className="caret"></div>
                </div>
                <div className="userDetails">
                    <input type="text" name="" value={jobName} id="jobTitle" placeholder="Job Title" onChange={handleJobChange}/>
                    <div className="userName">
                        <input type="text" name="" value={firstName} id="firstName " className="input" placeholder="First Name" onChange={handleFirstNameChange}/>
                        <input type="text" name="" value={lastName} id="lastName" className="input" placeholder="Last Name" onChange={handleLastNameChange}/>
                    </div>
                    <div className="otherInfo">
                        <input type="text" name="" value={address} id="address input" className="input" placeholder="Address" onChange={handleAddressChange}/>
                        <input type="email" name="" value={email} id="email input" className="input" placeholder="Email: your@gmail.com" onChange={handleEmailChange}/>
                        <input type="text" name="" value={city} id="city input" className="input" placeholder="City,country(eg: Accra - Ghana)" onChange={handleCityChange}/>
                        <input type="number" name="" value={tel} id="tel input" className="input" placeholder="Contact number(+223 548431442)" onChange={handleTelChange}/>
                    </div>
                </div>
            </div>
        </section>
    )
}