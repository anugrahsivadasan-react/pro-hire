export const generateAppointmentLetter = (emp) => `
Appointment Letter

                     Dear ${emp.name},

We are pleased to appoint you as ${emp.designation} in our organization.
Department: ${emp.department}
Salary: ${emp.salary}
Joining date: ${emp.joiningDate}

Best regards,
HR Team
`;

export const generateOfferLetter = (emp) => `
Offer Letter

Dear ${emp.name},

We are excited to offer you the position of ${emp.designation}.
Department: ${emp.department}
Offered Salary: ${emp.salary}
Start Date: ${emp.joiningDate}

Best regards,
HR Team
`;

export const generateIncrementLetter = (emp) => `
                                INCREMENT LETTER

            Date: ${new Date().toLocaleDateString()}

Dear ${emp.name},

Based on your performance and contribution to the organization, 
we are pleased to inform you that your salary has been revised.

Your revised salary is ${emp.salary}, effective from ${emp.joiningDate}.

We appreciate your dedication and look forward to your continued success.

Warm Regards,
HR Department

Finance Department
Ziya Academy LLP
📧 finance@ziyaacademy.co.in 
📞 +91 7306353515
🌐 www.ziyaacademy.co.in
`;