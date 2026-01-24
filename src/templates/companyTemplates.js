// Company A – Ziya Academy
const ziyaTemplates = {
  appointment: (emp) => `
                         APPOINTMENT LETTER
                                          Date: ${new Date().toLocaleDateString()}
To,
 ${emp.name},
 
 
 Subject: Appointment letter for the Position of ${emp.designation}


Dear  ${emp.name},

We are pleased to inform you that you have been appointed as ${emp.designation} in Ziya Academy Pvt.
Ltd., [Address of the Company].
You are hereby asked to join from ${emp.joiningDate}.
As a ${emp.designation} you are required to undertake all duties and activities as assigned to you by the
company. Your monthly gross salary will be [Salary Amount], payable as per the company's standard
payroll schedule. The detailed breakup and applicable deductions will be shared separately with your
salary structure.
You will be on a probation period of 6 months, upon which the company shall scrutinize your performance
and shall confirm your employment in the company.


EMPLOYMENT AGREEMENT

This Employment Agreement is by and between Ziya Academy Pvt.Ltd and  ${emp.name},
, and is
effective from the Employee’s date of joining with the Company and not later than ${emp.joiningDate} and is
made with reference to the following.
The Company desires to employ the services of the Employee, and the Employee is willing to be so
employed by the Company.
The terms and conditions of this Agreement are as follows:
1. Employment
The Company hereby employs you,  ${emp.name}, and you accept such employment with the
Company commencing on the date mentioned above and contingent to the terms and conditions pertaining
to the employment, as given below.
2. Duties and Services
a. Duties: You shall be designated as ${emp.designation} for Ziya Academy Pvt.Ltd. In the performance of your
duties, you shall report directly to your Reporting Manager or any other person that the Company may, in
its sole and absolute discretion from time to time designate.
b. Exclusive Services: You are expected at all times faithfully, assiduously and to the best of your ability,
experience and talent, perform to the Company's satisfaction, all of the duties that may be assigned to you,
from time to time. While you are in employment with the Company, you will not engage in any other
employment, business or activity without the written consent of the Company. While you render services
to the Company, you also will not assist any person or organization in competing with the Company or in
hiring any employees of the Company. Prior to executing this Agreement and beginning employment with
the Company you are expected to be officially relieved from all employment obligations from any prior
employers. To the extent you have not been officially relieved by all prior employers, your employment
with the Company will be void and the Company will have no further obligations pursuant to this
Agreement.



3. Place of Posting & Transfer
Your initial place of posting will be at Aluva,Kochi. However, the management reserves the right to transfer
you to any of its branches, departments, associate companies, or client sites within India.
4. Working Hours
Your normal working hours shall be from 9:30 AM to 6:00 PM. However, you
may be required to work beyond these hours depending on business needs.
5. Probation
You will be on probation for a period of 6 months / as per company policy from the date of joining.
Based on your performance, conduct, and suitability, your services may be confirmed in writing. During
probation, either party may terminate the employment by giving 30 days notice or salary in lieu thereof.
6. Termination
a. Termination for breach of Code of Conduct
The Company may terminate this Agreement at any time for breach of Code of Conduct with immediate
effect, without giving any notice of termination to you, and without paying you any severance. The Code
of Conduct shall be deemed as having been breached by any or all of the following:
i. Conviction by, or entry of a plea of guilty in a court of competent and final jurisdiction for
any crime involving moral turpitude or punishable by imprisonment;
ii. Commission of an act of fraud, whether prior to or subsequent to the date of employment;
iii. Continuing, repeated or willful failure or refusal to perform agreed duties in the Company;
iv. Gross negligence, insubordination or violation of any duty of loyalty to the Company:
v. Commission of any act which is detrimental to the Company's business or goodwill or in
breach of the Company's ethical code of conduct,
vi. Violation of any other provision of this Agreement or Company policies;
vii. Providing false information on your application for employment or to the Company at any
time during the hiring process;
viii. Failure to meet the expectations of the job as demonstrated by poor performance or
absenteeism;
ix. Failure to appear for work for three (3) consecutive days without obtaining the Company's
approval,
x. Omission or failure to highlight any information relative to prior employment, which would
form part of the evaluation by the Company, to confirm your employment here; and
xi. Failure to submit the requisite certificates and documentation as prescribed in the Checklist
referenced in Appendix B attached hereto, within the pre-defined timelines.

b. Termination at the Company’s discretion (Post confirmation)
The Company may terminate this Agreement at its sole discretion by providing you with thirty
(30) days prior written notice. In lieu of written notice, the Company shall only be required to pay you a
maximum severance payment equal to one (1) month of basic salary, HRA, special allowance and LTA
or prorated for one (1) month.
c. Termination at the Employee’s discretion (Resignation)
You may terminate this Agreement or resign from this role by providing the Company with Thirty
(30) days prior written notice, after confirmation of your services in the Company. Leaving too early will
result in the salary for the shortfall in your notice period being deducted from your final settlement. The
notice pay that you will be required to pay the Company in lieu of such notice shall be computed on the
existing annual basic salary, HRA, special allowance and LTA. prorated for the required period. At the
time of termination, the Company may require you to complete any assignment or assignments on which
you were working to the satisfaction of the Company before relieving you from your services and should
return the company assets (laptop, ID card, access card, etc.) and clear any pending dues if any. During
the notice period, you will not be entitled to any leave except Earned Leave. You may Submit your
resignation in writing or via official company email.
d. Full and Final Settlement
Upon resignation or termination, the company will process your full and final settlement (F&F)
including salary dues, leave encashment (if applicable), statutory contributions, and other payable
amounts, as per company policy and applicable laws. The F&F settlement will be completed within [45
days] from your last working day.
7. Notice Period
• During probation, either party may terminate this employment by giving [30 days] written notice
or salary in lieu thereof.
• After confirmation, either party may terminate this employment by giving 45 days written notice
or salary in lieu thereof.
• Resignation Process Notice Period: You must give at least 30 days’ written notice if you decide
to resign.
8. Confidentiality & Non-disclosure
All information, documents and data pertaining to the Company's business and work processes,
inventions, customers, tools and machines or any other information proprietary to the Company
and its subsidiary companies or associated companies, which have been given to you or gathered
by you during the course of your employment, may not be disclosed to a third party, either during

or after your employment, unless specifically approved by the Company in writing.
9. Non-Liability of the Company
If this Agreement is terminated by you or the Company for any reason whatsoever, you shall not
be entitled to any action or claim against the Company before any court or arbitrator, on the grounds of
wrongful termination of employment, or any other grounds whatsoever.
10. Company Property
The Company will provide you with infrastructure and tools as deemed necessary and, in the
management's, sole and absolute discretion, for carrying out your duties, which may include, but is not
limited to, equipment, devices, identification badges, keys, and documents (whether tangible or
electronic), solely for official business purposes.
You are expected to take all necessary and reasonable care to ensure the preservation, safety, and proper
use of all Company property in your custody or charge.
Any loss or damage caused to the Company's property owing to your negligence, misuse, or wilful
destruction will be subject to disciplinary action, up to and including termination of employment. The
Company further reserves the right to recover the full cost of repair or replacement of such losses/damages
from any amounts due to you, in accordance with applicable law and the company's policies.
All such property of the Company that is given to you, shall be returned to the designated person in the
Company, upon the termination of this Agreement and prior to the effective last date of your employment
in the Company, or at any time upon the Company's request, you must immediately return all Company
property in good condition.
11. Miscellaneous
a. This Agreement supersedes all prior and existing agreements, both oral and written, between the
Company and you, concerning employment in the Company, and may be modified only by a document,
which has been signed by both parties.
b. You are bound to abide by and adhere to the policies, rules, and regulations enforced by the Company
from time to time including those relating to conduct, discipline, benefits, salary review, and any other
matters as though these rules, regulations and orders were a part of this Agreement. Such policies, rules,
and regulations may be subjected to alteration and amendment.

12. Application Law
This Agreement is made with reference to the law of India and the appropriate court in Kochi will be the
jurisdiction for all legal governance.
Provided that further details regarding employment terms, please refer to the Company’s
Policies, which form part of your service conditions and are subject to change from time to time.

For Ziya Academy Pvt.Ltd
Authorized Signatory
   

Name:
Designation:

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
  appointment: (emp) =>`
                         APPOINTMENT LETTER
                                          Date: ${new Date().toLocaleDateString()}
To,
 ${emp.name},
 
 
 Subject: Appointment letter for the Position of ${emp.designation}


Dear  ${emp.name},

We are pleased to inform you that you have been appointed as ${emp.designation} in Ziya Academy Pvt.
Ltd., [Address of the Company].
You are hereby asked to join from ${emp.joiningDate}.
As a ${emp.designation} you are required to undertake all duties and activities as assigned to you by the
company. Your monthly gross salary will be [Salary Amount], payable as per the company's standard
payroll schedule. The detailed breakup and applicable deductions will be shared separately with your
salary structure.
You will be on a probation period of 6 months, upon which the company shall scrutinize your performance
and shall confirm your employment in the company.


EMPLOYMENT AGREEMENT

This Employment Agreement is by and between Slams Edu Tech and  ${emp.name},
, and is
effective from the Employee’s date of joining with the Company and not later than ${emp.joiningDate} and is
made with reference to the following.
The Company desires to employ the services of the Employee, and the Employee is willing to be so
employed by the Company.
The terms and conditions of this Agreement are as follows:
1. Employment
The Company hereby employs you,  ${emp.name}, and you accept such employment with the
Company commencing on the date mentioned above and contingent to the terms and conditions pertaining
to the employment, as given below.
2. Duties and Services
a. Duties: You shall be designated as ${emp.designation} for Slams Edu Tech. In the performance of your
duties, you shall report directly to your Reporting Manager or any other person that the Company may, in
its sole and absolute discretion from time to time designate.
b. Exclusive Services: You are expected at all times faithfully, assiduously and to the best of your ability,
experience and talent, perform to the Company's satisfaction, all of the duties that may be assigned to you,
from time to time. While you are in employment with the Company, you will not engage in any other
employment, business or activity without the written consent of the Company. While you render services
to the Company, you also will not assist any person or organization in competing with the Company or in
hiring any employees of the Company. Prior to executing this Agreement and beginning employment with
the Company you are expected to be officially relieved from all employment obligations from any prior
employers. To the extent you have not been officially relieved by all prior employers, your employment
with the Company will be void and the Company will have no further obligations pursuant to this
Agreement.



3. Place of Posting & Transfer
Your initial place of posting will be at Aluva,Kochi. However, the management reserves the right to transfer
you to any of its branches, departments, associate companies, or client sites within India.
4. Working Hours
Your normal working hours shall be from 9:30 AM to 6:00 PM, [Days of Week]. However, you
may be required to work beyond these hours depending on business needs.
5. Probation
You will be on probation for a period of [6 months / as per company policy] from the date of joining.
Based on your performance, conduct, and suitability, your services may be confirmed in writing. During
probation, either party may terminate the employment by giving [30 days] notice or salary in lieu thereof.
6. Termination
a. Termination for breach of Code of Conduct
The Company may terminate this Agreement at any time for breach of Code of Conduct with immediate
effect, without giving any notice of termination to you, and without paying you any severance. The Code
of Conduct shall be deemed as having been breached by any or all of the following:
i. Conviction by, or entry of a plea of guilty in a court of competent and final jurisdiction for
any crime involving moral turpitude or punishable by imprisonment;
ii. Commission of an act of fraud, whether prior to or subsequent to the date of employment;
iii. Continuing, repeated or willful failure or refusal to perform agreed duties in the Company;
iv. Gross negligence, insubordination or violation of any duty of loyalty to the Company:
v. Commission of any act which is detrimental to the Company's business or goodwill or in
breach of the Company's ethical code of conduct,
vi. Violation of any other provision of this Agreement or Company policies;
vii. Providing false information on your application for employment or to the Company at any
time during the hiring process;
viii. Failure to meet the expectations of the job as demonstrated by poor performance or
absenteeism;
ix. Failure to appear for work for three (3) consecutive days without obtaining the Company's
approval,
x. Omission or failure to highlight any information relative to prior employment, which would
form part of the evaluation by the Company, to confirm your employment here; and
xi. Failure to submit the requisite certificates and documentation as prescribed in the Checklist
referenced in Appendix B attached hereto, within the pre-defined timelines.

b. Termination at the Company’s discretion (Post confirmation)
The Company may terminate this Agreement at its sole discretion by providing you with thirty
(30) days prior written notice. In lieu of written notice, the Company shall only be required to pay you a
maximum severance payment equal to one (1) month of basic salary, HRA, special allowance and LTA
or prorated for one (1) month.
c. Termination at the Employee’s discretion (Resignation)
You may terminate this Agreement or resign from this role by providing the Company with Thirty
(30) days prior written notice, after confirmation of your services in the Company. Leaving too early will
result in the salary for the shortfall in your notice period being deducted from your final settlement. The
notice pay that you will be required to pay the Company in lieu of such notice shall be computed on the
existing annual basic salary, HRA, special allowance and LTA. prorated for the required period. At the
time of termination, the Company may require you to complete any assignment or assignments on which
you were working to the satisfaction of the Company before relieving you from your services and should
return the company assets (laptop, ID card, access card, etc.) and clear any pending dues if any. During
the notice period, you will not be entitled to any leave except Earned Leave. You may Submit your
resignation in writing or via official company email.
d. Full and Final Settlement
Upon resignation or termination, the company will process your full and final settlement (F&F)
including salary dues, leave encashment (if applicable), statutory contributions, and other payable
amounts, as per company policy and applicable laws. The F&F settlement will be completed within [45
days] from your last working day.
7. Notice Period
• During probation, either party may terminate this employment by giving [30 days] written notice
or salary in lieu thereof.
• After confirmation, either party may terminate this employment by giving [_days] written notice
or salary in lieu thereof.
• Resignation Process Notice Period: You must give at least 30 days’ written notice if you decide
to resign.
8. Confidentiality & Non-disclosure
All information, documents and data pertaining to the Company's business and work processes,
inventions, customers, tools and machines or any other information proprietary to the Company
and its subsidiary companies or associated companies, which have been given to you or gathered
by you during the course of your employment, may not be disclosed to a third party, either during

or after your employment, unless specifically approved by the Company in writing.
9. Non-Liability of the Company
If this Agreement is terminated by you or the Company for any reason whatsoever, you shall not
be entitled to any action or claim against the Company before any court or arbitrator, on the grounds of
wrongful termination of employment, or any other grounds whatsoever.
10. Company Property
The Company will provide you with infrastructure and tools as deemed necessary and, in the
management's, sole and absolute discretion, for carrying out your duties, which may include, but is not
limited to, equipment, devices, identification badges, keys, and documents (whether tangible or
electronic), solely for official business purposes.
You are expected to take all necessary and reasonable care to ensure the preservation, safety, and proper
use of all Company property in your custody or charge.
Any loss or damage caused to the Company's property owing to your negligence, misuse, or wilful
destruction will be subject to disciplinary action, up to and including termination of employment. The
Company further reserves the right to recover the full cost of repair or replacement of such losses/damages
from any amounts due to you, in accordance with applicable law and the company's policies.
All such property of the Company that is given to you, shall be returned to the designated person in the
Company, upon the termination of this Agreement and prior to the effective last date of your employment
in the Company, or at any time upon the Company's request, you must immediately return all Company
property in good condition.
11. Miscellaneous
a. This Agreement supersedes all prior and existing agreements, both oral and written, between the
Company and you, concerning employment in the Company, and may be modified only by a document,
which has been signed by both parties.
b. You are bound to abide by and adhere to the policies, rules, and regulations enforced by the Company
from time to time including those relating to conduct, discipline, benefits, salary review, and any other
matters as though these rules, regulations and orders were a part of this Agreement. Such policies, rules,
and regulations may be subjected to alteration and amendment.

12. Application Law
This Agreement is made with reference to the law of India and the appropriate court in Kochi will be the
jurisdiction for all legal governance.
Provided that further details regarding employment terms, please refer to the Company’s
Policies, which form part of your service conditions and are subject to change from time to time.

For Slams Edu Tech
Authorized Signatory


Name:
Designation:

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
