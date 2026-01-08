const offerLetter = (emp) => `
OFFER LETTER

Date: ${new Date().toLocaleDateString()}

Dear ${emp.name},

We are pleased to offer you the position of ${emp.designation} 
in our ${emp.department} department.

Your offered salary will be ${emp.salary}.
Your expected joining date is ${emp.joiningDate}.

This offer is subject to verification of documents and company policies.
Please confirm your acceptance by replying to this email.

Best Regards,
HR Department
`;

export default offerLetter;
