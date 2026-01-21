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

For Ziya Academy Pvt.Ltd
Authorized Signatory


Name:
Designation:

`,

  offer: (emp) => `
OFFER LETTER
                                  Date: ${new Date().toLocaleDateString()}

Subject: Offer of Employment

Dear ${emp.name},
We are delighted to extend to you an offer for the position of ${emp.designation} at Ziya
Academy. We were truly impressed with your skills and background, and we believe you will be
a valuable addition to our team.
1. Date of Commencement and Probation
You will initially be on a probationary period of 3 Months, during which we will support your
onboarding and growth. During your probation period, your performance, conduct, and overall
contribution will be closely observed and reviewed to ensure alignment with the expectations of
the role and the values of the organization.

Your expected date of joining is ${emp.joiningDate}, and you will be based at our Ernakulam office.

From the date of your joining, you will be expected to adhere to the rules, regulations, and policies
prevailing within the company. These guidelines are designed to maintain a positive, respectful,
and productive work environment. Please note that any deviation or violation may lead to
appropriate corrective actions, which may include a formal warning or, in serious cases,
reconsideration of your employment status.
2. Location / Transferability
You will work from Company office at Aluva (“Work Location”). However, Company may ask
or allow you to work remotely (that is from your place of residence) within the city of Work
Location.
Your services may be transferred to any other department or client program within the Company,
or to any other Affiliate of Company due to Company’s business engagement and requirements,
and you may be asked to relocate to any other location within India or overseas, on the same
terms and conditions as contained in this Offer Letter except for any changes necessitated due to
applicable regulations or prevalent policy for the location. The company will make all reasonable
efforts to ensure that you are not adversely impacted and that any change, transition or transfer is
made as smooth as possible for you.

During the course of employment, your reporting manager may change time-to-time, depending on
the nature of assignment/ task given to you.
3. Remuneration/Salary
The position offers a gross monthly compensation of ${emp.salary}, subject to applicable deductions,
along with access to company benefits and a supportive work environment.
4. Background Checks / Disclosure of Information
Your employment with us is contingent on the subject to successful clearance of background
verification.
You need to submit all relevant documents for background verification and the Company may,
at any time, (or as part of the joining formalities) conduct reference/ background checks, reference
check with previous employers, education qualifications, credit history as applicable, exclusion
screening, criminal background, etc.).
In the event the statements / particulars furnished by you at the time of joining are found to be false
or misleading or any information is suppressed, or if the Company, during the course of the check
receives any adverse report against you that may be detrimental to the interests of the Company,
then the Company shall have the right to terminate your services forthwith without any notice
period.
5. Duties & Services
You will be responsible to perform all the work assigned to you from time to time. You shall
discharge your duties in a diligent, trustworthy, businesslike, and efficient manner. You will abide
by the code of conduct, policies, procedures, rules and regulations stipulated from time to time by
the Company. If required, the Company will provide the required training to you in updating your
relevant knowledge for discharge of your duties efficiently and effectively, which will be as per
the needs of business of the Company from time to time.
You may be required to sign a separate agreement with the Company, should the Company send
you for any training, deputation or any other assignment, either in India or abroad and you shall be
strictly bound by the terms and conditions of any such agreement that you may sign.


6. Annual Review
At the discretion of the Company, your performance and total compensation may be reviewed by
the Company from time to time or annually as per the policy of the Company. If your performance
is not found satisfactory, then the Company shall have the right to terminate your employment in
accordance with the terms of the Company Policy.
7. Personal Information
The personal information you provide to the Company in connection with your recruitment and
subsequent employment will be used for the purpose of administering your employment with the
Company and the Company’s human resources generally. The Company may give out some of
this information to other parties authorized by law to receive it. You have the right to access and
correct any of your personal data in the Company’s possession. Any request for personal data
access and/or correction should be addressed to the Human Resources Department. You shall keep
the company informed of any change in your present or permanent address.
8. Work Schedule
Your working days and shift timings, including any changes therein, will be decided and informed
to you by your supervisor. If you are required to work overtime and on holidays, you may be
entitled to allowance in accordance with Company policy.

9. Absence
If you do not report for work for 3 or more consecutive working days without prior information to
and approval of your supervisor, it will be considered as an act of indiscipline and dereliction of
duty and will be dealt with as per disciplinary policy or code of conduct of Company.
10. Standard of business conduct
This Offer Letter contains some provisions of the Company's Code of Conduct and other Company
policies and procedures. These may be amended by the Company from time to time. You agree
that you will regularly visit the intranet of the Company and keep yourself current with the
prevalent policies and procedures. You also agree to complete the various training sessions and
training modules that the Company may want you to undergo.
You may be required to sign a separate agreement with the Company, should the Company send
you along with the Appointment letter and you shall be strictly bound by the terms and conditions
of any such agreement that you may sign.
11. Precedence
In the event of any inconsistency between this Agreement and the Company’s Code of Conduct,
policies, or procedures, as the case may be, the prevalent Code of Conduct, policies or procedures
shall prevail.
12. Governing Law and Jurisdiction
This Agreement is made with reference to the law of India and the appropriate court in Kochi will
be the jurisdiction for all legal governance.

Provided that further details regarding employment terms, please refer to the Company’s
Policies, in the Handbook which forms part of your service conditions and are subject to
change from time to time.
13. Miscellaneous

1. Any claim relating to your employment with the Company shall be time-barred and
not to be raised beyond six (6) months from your last working day with the
Company and shall not be entertained unless applicable laws provide otherwise.
2. You shall not pledge / use the Company’s name for personal purposes unless
otherwise authorized by the Company.
3. The Company shall not be responsible and liable for any actions or omissions
committed or executed by you in your personal capacity or on your behalf within
or outside the office premises. All liabilities arising out of such actions shall be
your sole responsibility. You shall indemnify the Company against any claim
arising out of your acts or omissions and also make good any loss or damages
Company may be subject to.

4. You shall not give or receive any gift /cash equivalent, in your official capacity
representing the Company unless otherwise authorized by the Company.

Sincerely,
For Ziya Academy

Aslam
Managing Director Ziya Academy


Acknowledgement:

By signing, I confirm that I have read and completely understand the terms and conditions of this
Offer Letter and agree to accept this offer of employment with Company.
Please return a signed copy of this letter to confirm your offer of acceptance.

Candidate Name:

Candidate Signature:


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
                                  Date: ${new Date().toLocaleDateString()}

Subject: Offer of Employment

Dear ${emp.name},
We are delighted to extend to you an offer for the position of ${emp.designation} at Slams Edu Tech
. We were truly impressed with your skills and background, and we believe you will be
a valuable addition to our team.
1. Date of Commencement and Probation
You will initially be on a probationary period of 3 Months, during which we will support your
onboarding and growth. During your probation period, your performance, conduct, and overall
contribution will be closely observed and reviewed to ensure alignment with the expectations of
the role and the values of the organization.

Your expected date of joining is ${emp.joiningDate}, and you will be based at our Ernakulam office.

From the date of your joining, you will be expected to adhere to the rules, regulations, and policies
prevailing within the company. These guidelines are designed to maintain a positive, respectful,
and productive work environment. Please note that any deviation or violation may lead to
appropriate corrective actions, which may include a formal warning or, in serious cases,
reconsideration of your employment status.
2. Location / Transferability
You will work from Company office at Aluva (“Work Location”). However, Company may ask
or allow you to work remotely (that is from your place of residence) within the city of Work
Location.
Your services may be transferred to any other department or client program within the Company,
or to any other Affiliate of Company due to Company’s business engagement and requirements,
and you may be asked to relocate to any other location within India or overseas, on the same
terms and conditions as contained in this Offer Letter except for any changes necessitated due to
applicable regulations or prevalent policy for the location. The company will make all reasonable
efforts to ensure that you are not adversely impacted and that any change, transition or transfer is
made as smooth as possible for you.

During the course of employment, your reporting manager may change time-to-time, depending on
the nature of assignment/ task given to you.
3. Remuneration/Salary
The position offers a gross monthly compensation of ${emp.salary}, subject to applicable deductions,
along with access to company benefits and a supportive work environment.
4. Background Checks / Disclosure of Information
Your employment with us is contingent on the subject to successful clearance of background
verification.
You need to submit all relevant documents for background verification and the Company may,
at any time, (or as part of the joining formalities) conduct reference/ background checks, reference
check with previous employers, education qualifications, credit history as applicable, exclusion
screening, criminal background, etc.).
In the event the statements / particulars furnished by you at the time of joining are found to be false
or misleading or any information is suppressed, or if the Company, during the course of the check
receives any adverse report against you that may be detrimental to the interests of the Company,
then the Company shall have the right to terminate your services forthwith without any notice
period.
5. Duties & Services
You will be responsible to perform all the work assigned to you from time to time. You shall
discharge your duties in a diligent, trustworthy, businesslike, and efficient manner. You will abide
by the code of conduct, policies, procedures, rules and regulations stipulated from time to time by
the Company. If required, the Company will provide the required training to you in updating your
relevant knowledge for discharge of your duties efficiently and effectively, which will be as per
the needs of business of the Company from time to time.
You may be required to sign a separate agreement with the Company, should the Company send
you for any training, deputation or any other assignment, either in India or abroad and you shall be
strictly bound by the terms and conditions of any such agreement that you may sign.


6. Annual Review
At the discretion of the Company, your performance and total compensation may be reviewed by
the Company from time to time or annually as per the policy of the Company. If your performance
is not found satisfactory, then the Company shall have the right to terminate your employment in
accordance with the terms of the Company Policy.
7. Personal Information
The personal information you provide to the Company in connection with your recruitment and
subsequent employment will be used for the purpose of administering your employment with the
Company and the Company’s human resources generally. The Company may give out some of
this information to other parties authorized by law to receive it. You have the right to access and
correct any of your personal data in the Company’s possession. Any request for personal data
access and/or correction should be addressed to the Human Resources Department. You shall keep
the company informed of any change in your present or permanent address.
8. Work Schedule
Your working days and shift timings, including any changes therein, will be decided and informed
to you by your supervisor. If you are required to work overtime and on holidays, you may be
entitled to allowance in accordance with Company policy.

9. Absence
If you do not report for work for 3 or more consecutive working days without prior information to
and approval of your supervisor, it will be considered as an act of indiscipline and dereliction of
duty and will be dealt with as per disciplinary policy or code of conduct of Company.
10. Standard of business conduct
This Offer Letter contains some provisions of the Company's Code of Conduct and other Company
policies and procedures. These may be amended by the Company from time to time. You agree
that you will regularly visit the intranet of the Company and keep yourself current with the
prevalent policies and procedures. You also agree to complete the various training sessions and
training modules that the Company may want you to undergo.
You may be required to sign a separate agreement with the Company, should the Company send
you along with the Appointment letter and you shall be strictly bound by the terms and conditions
of any such agreement that you may sign.
11. Precedence
In the event of any inconsistency between this Agreement and the Company’s Code of Conduct,
policies, or procedures, as the case may be, the prevalent Code of Conduct, policies or procedures
shall prevail.
12. Governing Law and Jurisdiction
This Agreement is made with reference to the law of India and the appropriate court in Kochi will
be the jurisdiction for all legal governance.

Provided that further details regarding employment terms, please refer to the Company’s
Policies, in the Handbook which forms part of your service conditions and are subject to
change from time to time.
13. Miscellaneous

1. Any claim relating to your employment with the Company shall be time-barred and
not to be raised beyond six (6) months from your last working day with the
Company and shall not be entertained unless applicable laws provide otherwise.
2. You shall not pledge / use the Company’s name for personal purposes unless
otherwise authorized by the Company.
3. The Company shall not be responsible and liable for any actions or omissions
committed or executed by you in your personal capacity or on your behalf within
or outside the office premises. All liabilities arising out of such actions shall be
your sole responsibility. You shall indemnify the Company against any claim
arising out of your acts or omissions and also make good any loss or damages
Company may be subject to.

4. You shall not give or receive any gift /cash equivalent, in your official capacity
representing the Company unless otherwise authorized by the Company.

Sincerely,
For Slams Edu Tech

Aslam
Managing Director Slams Edu Tech


Acknowledgement:

By signing, I confirm that I have read and completely understand the terms and conditions of this
Offer Letter and agree to accept this offer of employment with Company.
Please return a signed copy of this letter to confirm your offer of acceptance.

Candidate Name:

Candidate Signature:


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
