// Company A – Ziya Academy
const ziyaTemplates = {
  appointment: (emp) => `
APPOINTMENT LETTER
Ziya Academy LLP

Dear ${emp.name},

We are delighted to appoint you as ${emp.designation} at Ziya Academy LLP.

Department : ${emp.department}  
Salary     : ${emp.salary}  
Joining On : ${emp.joiningDate}

We look forward to your valuable contribution.

Warm Regards,  
HR Department  
Ziya Academy LLP
`,

  offer: (emp) => `
OFFER LETTER
Ziya Academy LLP

Date: ${new Date().toLocaleDateString()}

Dear ${emp.name},

We are pleased to offer you the role of ${emp.designation} 
in the ${emp.department} department at Ziya Academy LLP.

Salary Offered : ${emp.salary}  
Joining Date   : ${emp.joiningDate}

Please confirm your acceptance.

Best Regards,  
HR Team  
Ziya Academy LLP
`,

  increment: (emp) => `
INCREMENT LETTER
Ziya Academy LLP

Date: ${new Date().toLocaleDateString()}

Dear ${emp.name},

Based on your performance, your salary has been revised.

Revised Salary : ${emp.salary}  
Effective Date : ${emp.joiningDate}

Congratulations and keep growing with us.

Warm Regards,  
HR Department  
Ziya Academy LLP  
📧 finance@ziyaacademy.co.in  
📞 +91 7306353515  
🌐 www.ziyaacademy.co.in
`
};


// Company B – Ziyaaaa Solutions
const SlamsTemplates = {
  appointment: (emp) => `
APPOINTMENT LETTER
Slams edu tech

Dear ${emp.name},

We are happy to appoint you as ${emp.designation} 
at Slams edu tech.

Department : ${emp.department}  
Salary     : ${emp.salary}  
Joining On : ${emp.joiningDate}

Welcome to the Ziyaaaa family.

Sincerely,  
HR Team  
Slams edu tech
`,

  offer: (emp) => `
OFFER LETTER
Slams edu tech

Date: ${new Date().toLocaleDateString()}

Dear ${emp.name},

We are excited to offer you the position of ${emp.designation} 
in our ${emp.department} team.

Salary Package : ${emp.salary}  
Joining Date   : ${emp.joiningDate}

We await your confirmation.

Regards,  
HR Department  
Slams edu tech
`,

  increment: (emp) => `
INCREMENT LETTER
Slams edu tech

Date: ${new Date().toLocaleDateString()}

Dear ${emp.name},

In recognition of your contribution, your compensation has been enhanced.

New Salary     : ${emp.salary}  
Effective From: ${emp.joiningDate}

Keep up the excellent work.

Best Wishes,  
HR Team  
Slams edu tech
`
};

export const companyTemplates = {
  Ziya: ziyaTemplates,
  Slams: SlamsTemplates,
};
