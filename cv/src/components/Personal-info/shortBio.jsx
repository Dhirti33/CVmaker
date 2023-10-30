    import "../styles/shortBio.css"
import { useState } from "react"

export default function ShortBio(props){
    const [bio,setBio] = useState("")

    const handleBioChange = (event) => {
        const newBio = event.target.value;
        setBio(newBio)
        props.onBioChange(newBio)
    }
    const handleClick =()=>{
        const caret = document.querySelector('.caretBio')
        const details = document.querySelector('.bioDetail')

        caret.classList.toggle('caretBio-rotate')
        details.classList.toggle('bioDetail-open')
    }
    return(
        <section className="shortBio">
            <div className="bioDropdown">
                <div className="bioHead" onClick={handleClick}>
                    <h1>Short Bio</h1>  
                    <div className="caretBio"></div>
                </div>
                <div className="bioDetail">
                    <p className="italic">Be concise - The harsh reality is that hiring managers only spent an average of 6 seconds on each resume</p>
                    <textarea name="" value={bio} id="bioText" cols="30" rows="10" onChange={handleBioChange}></textarea>
                </div>
            </div>
        </section>
    )
}