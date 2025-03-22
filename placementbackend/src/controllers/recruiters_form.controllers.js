import pool from "../config/database.js";

// Submit recruiter form
export const submitRecruiterForm = async (req, res) => {
    const formData = req.body;

    const query = `
        INSERT INTO recruiter_form (
            organization_name, website_url, email, opportunity_type, contact_person_name,
            contact_number, alternate_contact_number, mode_of_drive, country, state,
            city, location, preferred_dates, required_skills, job_description,
            number_of_rounds, rounds, package_offered, role_offered, eligibility_criteria,
            documents_required, specific_requirements, accommodation_provided,
            travel_reimbursement, other_benefits, terms_and_conditions
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        formData.organizationName,
        formData.websiteUrl,
        formData.email,
        formData.opportunityType,
        formData.contactPersonName,
        formData.contactNumber,
        formData.alternateContactNumber,
        formData.modeOfDrive,
        formData.country,
        formData.state,
        formData.city,
        formData.location,
        JSON.stringify(formData.preferredDates),
        formData.requiredSkills,
        formData.jobDescription,
        formData.numberOfRounds,
        JSON.stringify(formData.rounds),
        formData.packageOffered,
        formData.roleOffered,
        formData.eligibilityCriteria,
        JSON.stringify(formData.documentsRequired),
        formData.specificRequirements,
        formData.accommodationProvided,
        formData.travelReimbursement,
        formData.otherBenefits,
        formData.termsAndConditions
    ];

    try {
        const [result] = await pool.query(query, values);
        res.status(200).json({ message: "Form submitted successfully", id: result.insertId });
    } catch (error) {
        console.error("Error submitting form:", error);
        res.status(500).json({ error: "Database error" });
    }
};

// Get all recruiter forms
export const getRecruiterForms = async (req, res) => {
    try {
        const [forms] = await pool.query("SELECT * FROM recruiter_form");
        res.json(forms);
    } catch (error) {
        console.error("Error fetching recruiter forms:", error);
        res.status(500).json({ error: "Database error" });
    }
};
// Get a single recruiter form by ID
export const getRecruiterFormById = async (req, res) => {
    const { id } = req.params;

    try {
        const [form] = await pool.query("SELECT * FROM recruiter_form WHERE id = ?", [id]);
        if (form.length === 0) {
            return res.status(404).json({ error: " recruiters Form not found" });
        }
        res.json(form[0]);
    } catch (error) {
        console.error("Error fetching recruiter form:", error);
        res.status(500).json({ error: "Database error while fetching recruiters table" });
    }
};

// Move recruiter form data to companies table
export const moveToCompanies = async (req, res) => {
    const { id } = req.params;

    try {
        // Step 1: Fetch the recruiter form data
        const [form] = await pool.query("SELECT * FROM recruiter_form WHERE id = ?", [id]);
        if (form.length === 0) {
            return res.status(404).json({ error: "Form not found" });
        }

        const { organization_name, website_url, email } = form[0];

        // Step 2: Check if the company already exists in the companies table
        const [existingCompany] = await pool.query(
            "SELECT * FROM companies WHERE company_name = ?",
            [organization_name]
        );

        if (existingCompany.length > 0) {
            return res.status(400).json({ error: "Company already exists" });
        }

        // Step 3: Insert into companies table
        const insertQuery = `
            INSERT INTO companies (company_name, website, contact_email)
            VALUES (?, ?, ?)
        `;
        const values = [organization_name, website_url, email];

        const [result] = await pool.query(insertQuery, values);

        res.status(200).json({
            message: "Data moved to companies table successfully",
            companyId: result.insertId,
        });
    } catch (error) {
        console.error("Error moving data to companies:", error);
        res.status(500).json({ error: "Database error" });
    }
};


// Delete a recruiter form
export const deleteRecruiterForm = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query("DELETE FROM recruiter_form WHERE id = ?", [id]);
        res.status(200).json({ message: "Form deleted successfully" });
    } catch (error) {
        console.error("Error deleting form:", error);
        res.status(500).json({ error: "Database error" });
    }
};
