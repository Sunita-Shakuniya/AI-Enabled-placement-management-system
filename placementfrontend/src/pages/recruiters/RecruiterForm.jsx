import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const RecruiterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    opportunityType: "",
    organizationName: "",
    websiteUrl: "",
    email: "",
    contactPersonName: "",
    contactNumber: "",
    alternateContactNumber: "",
    modeOfDrive: "",
    country: "",
    state: "",
    city: "",
    location: "",
    preferredDates: [],
    requiredSkills: "",
    jobDescription: "",
    numberOfRounds: "",
    rounds: [],
    packageOffered: "",
    roleOffered: "",
    eligibilityCriteria: "",
    documentsRequired: [],
    specificRequirements: "",
    accommodationProvided: "",
    travelReimbursement: "",
    otherBenefits: "",
    termsAndConditions: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission success
  const [submissionError, setSubmissionError] = useState(null); // Track submission errors
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSkillChange = (e) => {
    setFormData({
      ...formData,
      requiredSkills: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      preferredDates: [...prevFormData.preferredDates, selectedDate], // Add the selected date to the array
    }));
  };


  const handleDocumentChange = (e) => {
    const { value, checked } = e.target;
    let updatedDocuments = [...formData.documentsRequired];
    if (checked) {
      updatedDocuments.push(value);
    } else {
      updatedDocuments = updatedDocuments.filter((doc) => doc !== value);
    }
    setFormData({
      ...formData,
      documentsRequired: updatedDocuments,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.opportunityType) newErrors.opportunityType = "Required";
    if (!formData.organizationName) newErrors.organizationName = "Required";
    if (!formData.websiteUrl) newErrors.websiteUrl = "Required";
    if (!formData.email) newErrors.email = "Required";
    if (!formData.contactPersonName) newErrors.contactPersonName = "Required";
    if (!formData.contactNumber) newErrors.contactNumber = "Required";
    if (!formData.modeOfDrive) newErrors.modeOfDrive = "Required";
    if (formData.modeOfDrive === "Offline") {
      if (!formData.country) newErrors.country = "Required";
      if (!formData.state) newErrors.state = "Required";
      if (!formData.city) newErrors.city = "Required";
      if (!formData.location) newErrors.location = "Required";
    }
    if (!formData.termsAndConditions)
      newErrors.termsAndConditions = "You must agree to the terms and conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        try {
            const response = await axios.post(
                '/api/recruiter-forms/submit',
                formData
            );
            console.log("Form Data Submitted:", response.data);
            // If submission is successful
            if (response.data.message === "Form submitted successfully") {
              setIsSubmitted(true); // Set success state
              setSubmissionError(null); // Clear any previous errors
              navigate("/success"); // Redirect to success page
          }
      } catch (error) {
          console.error("Error submitting form:", error);

          // Handle backend validation errors
          if (error.response && error.response.data.error) {
              setSubmissionError(error.response.data.error); // Set error message
          } else {
              setSubmissionError("An unexpected error occurred. Please try again."); // Generic error
          }
      }
  } else {
      // Handle frontend validation errors
      setSubmissionError("Please fill out all required fields correctly.");
  }
};
  const handleNumberOfRoundsChange = (e) => {
    const numberOfRounds = parseInt(e.target.value, 10);
    const rounds = Array.from({ length: numberOfRounds }, (_, index) => ({
      roundName: "",
      description: "",
    }));
    setFormData({
      ...formData,
      numberOfRounds,
      rounds,
    });
  };
  
  const handleRoundChange = (index, field, value) => {
    const updatedRounds = [...formData.rounds];
    updatedRounds[index][field] = value;
    setFormData({
      ...formData,
      rounds: updatedRounds,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Recruiter Application Form</h2>
      {/* Success Message */}
      {isSubmitted && (
            <div className="mb-5 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <p>Form submitted successfully!</p>
                <p>Your submission ID is: {formData.id}</p>
                <button
                    onClick={() => setIsSubmitted(false)} // Allow resubmission
                    className="mt-2 text-sm text-green-700 underline"
                >
                    Submit another form
                </button>
            </div>
        )}

        {/* Error Message */}
        {submissionError && (
            <div className="mb-5 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <p>{submissionError}</p>
            </div>
        )}
      {/* Opportunity Type */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Opportunity Type</label>
        <select
          name="opportunityType"
          value={formData.opportunityType}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Select</option>
          <option value="Internship">Internship</option>
          <option value="Full-time">Full-time</option>
          <option value="Training">Training</option>
        </select>
        {errors.opportunityType && <span className="text-red-500 text-sm">{errors.opportunityType}</span>}
      </div>

      {/* Organization Name */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Organization Name</label>
        <input
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {errors.organizationName && <span className="text-red-500 text-sm">{errors.organizationName}</span>}
      </div>

      {/* Website URL */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Website URL</label>
        <input
          type="text"
          name="websiteUrl"
          value={formData.websiteUrl}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {errors.websiteUrl && <span className="text-red-500 text-sm">{errors.websiteUrl}</span>}
      </div>

      {/* Email */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>

      {/* Contact Person Name */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Contact Person Name</label>
        <input
          type="text"
          name="contactPersonName"
          value={formData.contactPersonName}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {errors.contactPersonName && <span className="text-red-500 text-sm">{errors.contactPersonName}</span>}
      </div>

      {/* Contact Number */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {errors.contactNumber && <span className="text-red-500 text-sm">{errors.contactNumber}</span>}
      </div>

      {/* Alternate Contact Number */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Alternate Contact Number (Optional)</label>
        <input
          type="text"
          name="alternateContactNumber"
          value={formData.alternateContactNumber}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Mode of Drive */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Mode of Drive</label>
        <select
          name="modeOfDrive"
          value={formData.modeOfDrive}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Select</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
        {errors.modeOfDrive && <span className="text-red-500 text-sm">{errors.modeOfDrive}</span>}
      </div>

      {/* Offline Drive Details */}
      {formData.modeOfDrive === "Offline" && (
        <>
        <div className="flex flex-row gap-6">
          {/**country */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
          </div>
          {/**state */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.state && <span className="text-red-500 text-sm">{errors.state}</span>}
          </div>
        </div>  
        <div className="flex flex-row gap-6">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
          </div>
          {/** location*/}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.location && <span className="text-red-500 text-sm">{errors.location}</span>}
          </div>
          </div>  
          {/** city*/}  
        </>
      )}

       {/* Preferred Dates */}
       <div className="mb-5">
        <label className="block mb-2 bg-white text-sm font-medium text-gray-900">Preferred Dates</label>
        <div className="relative bg-white max-w-sm">
          <div className="absolute  inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            type="date"
            onChange={handleDateChange}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      {/* Display Selected Dates */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Selected Dates</label>
        <ul>
          {formData.preferredDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>

      {/* Required Skills */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Required Skills (comma-separated)</label>
        <input
          type="text"
          name="requiredSkills"
          value={formData.requiredSkills}
          onChange={handleSkillChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Job Description */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Job Description</label>
        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Number of Rounds */}
<div className="mb-5">
  <label className="block mb-2 text-sm font-medium text-gray-900">Number of Rounds</label>
  <input
    type="number"
    name="numberOfRounds"
    value={formData.numberOfRounds}
    onChange={handleNumberOfRoundsChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  />
</div>

      {/* Round Details */}
      {formData.rounds.map((round, index) => (
        <div key={index} className="mb-5">
          <h3 className="text-lg font-semibold mb-2">Round {index + 1}</h3>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">Round Name</label>
            <input
              type="text"
              value={round.roundName}
              onChange={(e) => handleRoundChange(index, "roundName", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <textarea
              value={round.description}
              onChange={(e) => handleRoundChange(index, "description", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </div>
      ))}

      {/* Package Offered */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Package Offered</label>
        <input
          type="text"
          name="packageOffered"
          value={formData.packageOffered}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Role Offered */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Role Offered</label>
        <input
          type="text"
          name="roleOffered"
          value={formData.roleOffered}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Eligibility Criteria */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Eligibility Criteria</label>
        <textarea
          name="eligibilityCriteria"
          value={formData.eligibilityCriteria}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Documents Required */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Documents Required</label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="documentsRequired"
              value="Resume"
              onChange={handleDocumentChange}
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500"
            />
            Resume
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="documentsRequired"
              value="Cover Letter"
              onChange={handleDocumentChange}
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500"
            />
            Cover Letter
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="documentsRequired"
              value="Transcripts"
              onChange={handleDocumentChange}
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500"
            />
            Transcripts
          </label>
        </div>
      </div>

      {/* Specific Requirements */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Specific Requirements</label>
        <textarea
          name="specificRequirements"
          value={formData.specificRequirements}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      {/* Other Benefits */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Other Benefits</label>
        <textarea
          name="otherBenefits"
          value={formData.otherBenefits}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Terms and Conditions */}
      <div className="mb-5">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="termsAndConditions"
            checked={formData.termsAndConditions}
            onChange={handleChange}
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500"
          />
          I agree to the terms and conditions
        </label>
        {errors.termsAndConditions && <span className="text-red-500 text-sm">{errors.termsAndConditions}</span>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RecruiterForm;