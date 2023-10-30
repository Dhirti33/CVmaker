import Education from "./education";
import Header from "./header";
import ShortBio from "./shortBio";
import YourDetails from "./yourDetails";
import YourExperience from "./yourExperience";
import "../styles/DetailedInfo.css";
import { useState } from "react";

export default function DetailedInfo(props) {
  // ======================= Your Details =================
  const [firstName, setFirstName] = useState("Untitled");
  const [lastName, setLastName] = useState("");


  const handleJobChange = (newJobName) => {
    const JobName = newJobName;
    props.jobNameChange(JobName);
  };

  const handleFirstNameChange = (newFirstName) => {
    const FirstName = newFirstName;
    setFirstName(FirstName);
    props.firstNameChange(FirstName);
  };
  const handleLastNameChange = (newLastName) => {
    const LastName = newLastName;
    setLastName(LastName);
    props.lastNameChange(LastName);
  };

  const handleAddressChange = (newAddress) => {
    const Address = newAddress;
    props.onAddressChange(Address);
  };
  const handleEmailChange = (newEmail) => {
    const Email = newEmail;
    props.onEmailChange(Email);
  };
  const handleCityChange = (newCity) => {
    const City = newCity;
    props.onCityChange(newCity);
  };
  const handleTelChange = (newTel) => {
    const Tel = newTel;
    props.onTelChange(Tel);
  };
  //=======================================================
  //================Short Bio==============================
  const handleBioChange = (newBio) => {
    const Bio = newBio;
    props.onBioChange(Bio);
  };
  //=======================================================
  //==================Your Experience=====================
  const handleJobExpChange = (newJob) => {
    const Job = newJob
    props.JobChange(Job);
  };
  const handleCompanyChange = (newCompany) => {
    const Company = newCompany
    props.CompanyChange(Company);
  };
  const handleFromChange = (newFrom) => {
    const From = newFrom
    props.FromChange(From);
  };
  const handleToChange = (newTo) => {
    const To = newTo
    props.ToChange(To);
  };
  const handleLocationChange = (newLocation) => {
    const Location = newLocation
    props.LocationChange(Location);
  };
  const handleRoleChange = (newRole) => {
    const Role = newRole
    props.RoleChange(Role);
  };
  //======================================================
  //===================Education==========================
  const handleDegreeChange = (newDegree) => {
    const Degree = newDegree
    props.onDegreeChange(Degree);
  };
  const handleSchoolNameChange = (newSchoolName) => {
    const SchoolName = newSchoolName
    props.onSchoolNameChange(SchoolName);
  };
  const handleSchoolFromChange = (newSchoolFrom) => {
    const SchoolFrom = newSchoolFrom
    props.onSchoolFromChange(SchoolFrom);
  };
  const handleSchoolToChange = (newSchoolTo) => {
    const SchoolTo = newSchoolTo
    props.onSchoolToChange(SchoolTo);
  };
  const handleSchoolLocationChange = (newSchoolLocation) => {
    const SchoolLocation = newSchoolLocation
    props.onSchoolLocationChange(SchoolLocation);
  };
  const handleSchoolRoleChange = (newSchoolRole) => {
    const SchoolRole = newSchoolRole
    props.onSchoolRoleChange(SchoolRole);
  };
  //======================================================
  return (
    <div className="DetailedInfo">
      <Header firstName={firstName} lastName={lastName} />
      <YourDetails
        onJobNameChange={handleJobChange}
        onFirstNameChange={handleFirstNameChange}
        onLastNameChange={handleLastNameChange}
        onAddressChange={handleAddressChange}
        onEmailChange={handleEmailChange}
        onCityChange={handleCityChange}
        onTelChange={handleTelChange}
      />
      <ShortBio onBioChange={handleBioChange} />
      <YourExperience
        onJobChange={handleJobExpChange}
        onCompanyChange={handleCompanyChange}
        onFromChange={handleFromChange}
        onToChange={handleToChange}
        onLocationChange={handleLocationChange}
        onRoleChange={handleRoleChange}
      />
      <Education 
        onDegreeChange={handleDegreeChange}
        onSchoolNameChange={handleSchoolNameChange}
        onSchoolFromChange={handleSchoolFromChange}
        onSchoolToChange={handleSchoolToChange}
        onSchoolLocationChange={handleSchoolLocationChange}
        onSchoolRoleChange={handleSchoolRoleChange}
      />
    </div>
  );
}
