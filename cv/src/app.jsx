import Letter from "./components/CV-letter/letter";
import DetailedInfo from "./components/Personal-info/DetailedInfo";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobName, setJobName] = useState("");

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [tel, setTel] = useState("");

  const [bio, setBio] = useState("");

  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");

  const [degree, setDegree] = useState("");
  const [schoolName, setSchoolName] = useState("Untitle");
  const [schoolFrom, setSchoolFrom] = useState("");
  const [schoolTo, setSchoolTo] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [schoolRole, setSchoolRole] = useState("");

  //===================Your Details====================
  const handleJobChange = (JobName) => {
    setJobName(JobName);
  };
  const handleFirstNameChange = (FirstName) => {
    setFirstName(FirstName);
  };
  const handleLastNameChange = (LastName) => {
    setLastName(LastName);
  };

  const handleAddressChange = (Address) => {
    setAddress(Address);
  };
  const handleEmailChange = (Email) => {
    setEmail(Email);
  };
  const handleCityChange = (City) => {
    setCity(City);
  };
  const handleTelChange = (Tel) => {
    setTel(Tel);
  };
  //====================================================
  //=================Short Bio==========================
  const handleBioChange = (Bio) => {
    setBio(Bio);
  };
  //====================================================
  //================Your Experience=====================
  const handleJobExpChange = (Job) => {
    setJob(Job);
  };
  const handleCompanyChange = (Company) => {
    setCompany(Company);
  };
  const handleFromChange = (From) => {
    setFrom(From);
  };
  const handleToChange = (To) => {
    setTo(To);
  };
  const handleLocationChange = (Location) => {
    setLocation(Location);
  };
  const handleRoleChange = (Role) => {
    setRole(Role);
  };
  //====================================================
  //======================Education=====================
  const handleDegreeChange = (Degree) => {
    setDegree(Degree);
  };
  const handleSchoolNameChange = (SchoolName) => {
    setSchoolName(SchoolName);
  };
  const handleSchoolFromChange = (SchoolFrom) => {
    setSchoolFrom(SchoolFrom);
  };
  const handleSchoolToChange = (SchoolTo) => {
    setSchoolTo(SchoolTo);
  };
  const handleSchoolLocationChange = (SchoolLocation) => {
    setSchoolLocation(SchoolLocation);
  };
  const handleSchoolRoleChange = (SchoolRole) => {
    setSchoolRole(SchoolRole);
  };
  //====================================================
  return (
    <>
      <DetailedInfo
        jobNameChange={handleJobChange}
        firstNameChange={handleFirstNameChange}
        lastNameChange={handleLastNameChange}
        onAddressChange={handleAddressChange}
        onEmailChange={handleEmailChange}
        onCityChange={handleCityChange}
        onTelChange={handleTelChange}
        onBioChange={handleBioChange}
        JobChange={handleJobExpChange}
        CompanyChange={handleCompanyChange}
        FromChange={handleFromChange}
        ToChange={handleToChange}
        LocationChange={handleLocationChange}
        RoleChange={handleRoleChange}

        onDegreeChange={handleDegreeChange}
        onSchoolNameChange={handleSchoolNameChange}
        onSchoolFromChange={handleSchoolFromChange}
        onSchoolToChange={handleSchoolToChange}
        onSchoolLocationChange={handleSchoolLocationChange}
        onSchoolRoleChange={handleSchoolRoleChange}
      />
      <Letter
        jobTitle={jobName}
        firstName={firstName}
        lastName={lastName}
        address={address}
        city={city}
        tel={tel}
        email={email}
        bio={bio}
        job={job}
        company={company}
        from={from}
        to={to}
        location={location}
        role={role}
        degree={degree}
        schoolName={schoolName}
        schoolFrom={schoolFrom}
        schoolTo={schoolTo}
        schoolLocation={schoolLocation}
        schoolRole={schoolRole}
      />
    </>
  );
};

export default App;
