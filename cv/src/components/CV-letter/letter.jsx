import "../styles/letter.css";

export default function Letter(props) {
  const {
    firstName,
    lastName,
    jobTitle,
    address,
    city,
    tel,
    email,
    bio,
    job,
    company,
    from,
    to,
    location,
    role,
    degree,
    schoolName,
    schoolFrom,
    schoolTo,
    schoolLocation,
    schoolRole
  } = props;

  return (
    <div className="letterContainer">
      <div className="letterBody">
        <div className="aboutInfo LetterH">
          <div className="name">
            <h1>{firstName + " " + lastName}</h1>
            <p>{jobTitle}</p>
          </div>

          <div className="userInfo">
            <p className="address">{address}</p>
            <p className="city">{city}</p>
            <p className="number">{tel}</p>
            <p className="email">{email}</p>
          </div>
        </div>
        <div className="short-bio LetterH">
          <h1>Short bio</h1>
          <p>{bio}</p>
        </div>
        <div className="work-experience LetterH">
          <h1>Work experience</h1>
          <div>
            <p className="letterWorkAt head">
              {job},{company}
            </p>
            <p className="letterPeriod next">
              {from} -- {to}
            </p>
            <p className="letterLocation next">{location}</p>
            <p className="letterRole text">{role}</p>
          </div>
        </div>
        <div className="Education LetterH">
          <h1>Education</h1>
          <div>
            <p className="letterDegree head">
              {degree}
            </p>
            <p className="letterEduName next">{schoolName}</p>
            <p className="letterEduPeriod next">
              {schoolFrom} -- {schoolTo}
            </p>
            <p className="letterEduLocation next">{schoolLocation}</p>
            <p className="letterEduRole text">{schoolRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
