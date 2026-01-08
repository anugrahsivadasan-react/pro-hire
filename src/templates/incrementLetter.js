const incrementLetter = (emp) => `
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

export default incrementLetter;
