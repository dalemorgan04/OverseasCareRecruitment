"use client";
import SectionHeadingBlue from "../components/headings/headingBlue";
import SectionOrange from "../components/headings/headingOrange";
import SectionHeadingWhite from "../components/headings/headingWhite";
import Timeline, { TimelineItemProps } from "../components/timeline/timeline";

export default function ApplicationPage() {
    let processTimelineItems: TimelineItemProps[] = [];

    processTimelineItems.push({
        heading: "Meet your International Consultant",
        textContent: (
            <>
                A dedicated local consultant will guide and support you throughout your overseas
                journey.
                <br />
                They will assist with Visa options, registration as a healthcare professional
                abroad, set tup up a bank account and finding suitable accomodation
            </>
        ),
    });

    processTimelineItems.push({
        heading: "Finding Your Ideal Vacancy",
        textContent: (
            <>
                We help you find the perfect job opportunity that matches your skills and
                aspirations.
            </>
        ),
    });

    processTimelineItems.push({
        heading: "Interview Arrangements",
        textContent: (
            <>We arrange interviews between candidates and clients, ensuring a smooth process.</>
        ),
    });

    processTimelineItems.push({
        heading: "Sponsor Licence Assistance",
        textContent: (
            <>
                If required, we assist in obtaining a Sponsor Licence to facilitate your
                employment.,
            </>
        ),
    });

    processTimelineItems.push({
        heading: "Bank Account Set Up",
        textContent: <>We help you navigate the process of setting up a UK bank account</>,
    });

    processTimelineItems.push({
        heading: "Accommodation & Relocation",
        textContent: (
            <>
                Our support extends to finding suitable accommodation and providing relocation
                guidance.
            </>
        ),
    });

    processTimelineItems.push({
        heading: "Ongoing Support",
        textContent: (
            <>
                We provide ongoing support to ensure your seamless transition and continued success.
            </>
        ),
    });

    let certTimelineItems: TimelineItemProps[] = [];
    certTimelineItems.push({
        heading: "Certificate of Sponsorship (CoS)",
        textContent: (
            <>
                In order for an individual to make a valid application for permission (also known as
                a visa) under the Skilled Worker and other sponsored work route, a sponsor must
                first assign a Certificate of Sponsorship (CoS) to them.
                <br />
                <br />
                There are two types of CoS that can be assigned:
                <br />
                <ul className="list-disc ml-8">
                    <li>Defined CoS</li>
                    <li>Undefined CoS</li>
                </ul>
                <br />
                <strong>Undefined CoS</strong> are to be used for those who are already in the UK
                and who are lawfully able to apply under the Skilled Worker route; and for those
                applying under the other routes, whether in the UK or overseas. When a sponsor
                initially applies for a licence, it will be asked to confirm how many CoS are
                required and may be asked to provide evidence or a detailed explanation as to why
                the business will need to assign that amount of CoS.
            </>
        ),
    });

    certTimelineItems.push({
        heading: "Objective Structured Clinical Examination (OSCE)",
        textContent: (
            <>
                Objective Structured Clinical Examination (OSCE) acts out scenarios which nurses
                likely to encounter when they assess, plan, carry out and evaluate care. Each
                separate clinical examination is known as a &apos;station&apos; and candidates will
                visit all the stations within a set time. The test of competence is based on current
                UK pre-registration standards where in applicant nurses are supposed to demonstrate
                safe and effective practice. <br />
                You can begin the OSCE stage of the Overseas registration process once you have
                received a decision letter from the NMC and you have received a visa clearance to
                enter, work and stay in the UK.
            </>
        ),
    });

    certTimelineItems.push({
        heading: "Computer Based Test (CBT)",
        textContent: (
            <>
                Applicants take the Computer Based Test of competence after the online eligibility
                assessment. The CBT tests applicants&apos; theoretical and practice-based knowledge.
                The tests can be booked and done at the applicants&apos; country of residence. We
                guide and assist the applicants through out the entire processes. You may contact us
                for more details.
            </>
        ),
    });

    certTimelineItems.push({
        heading: "IELTS for UK Registered Nurse",
        textContent: (
            <>
                All non-EU trained nurses to be registered with the NMC, must complete the
                International English Language Test (IELTS). It must be the academic version of the
                IELTS test and achieve at least 7.0 in individual modules- Listening, Reading
                Writing and Speaking modules, and at least 7.0 overall.
                <br />
                Applicants may provide two IELTS test certificates to meet the above requirements,
                but must not have scored below 6.5 in any categories, in either of the test
                sittings.
            </>
        ),
    });

    certTimelineItems.push({
        heading: "Tier 2 Visa – Immigration",
        textContent: (
            <>
                Tier 2 Visa enables an individual to work in the UK. The individual&apos;s stay in
                the UK is based on and for the purpose of employment. Overseas Care Recruitment
                helps in finding an employer and applying for your Tier 2 visa for the UK. <br />
                <br />
                <strong>You can apply for a Tier 2 (General) visa if:</strong>
                <ul className="list-disc ml-4">
                    <li>You&apos;ve been offered a skilled job in the UK</li>
                    <li>
                        You&apos;re from outside the European Economic Area (EEA) and Switzerland
                    </li>
                </ul>
            </>
        ),
    });

    return (
        <>        
            <SectionOrange>
                <h3 className="font-serif font-bold text-xl">Applications</h3>
                <p className="font-sans text-base">
                    Use the application form below to introduce yourself and one of our consultants will reach out to you.
                    We provide extensive support every step of the way to securing your ideal role in the UK
                </p>
            </SectionOrange>

            <div className="container mx-auto mt-10 flex flex-col">
                <SectionHeadingWhite>Our process</SectionHeadingWhite>
                <Timeline id="process-timeline" timelineItems={processTimelineItems} />

                <SectionHeadingWhite>Certifications</SectionHeadingWhite>
                <Timeline id="certificates-timeline" timelineItems={certTimelineItems} />
            </div>

            <br className="mb-10"/>

            <div className="container mx-auto mt-8">
                {/* Contact Form */}
                <SectionHeadingBlue>Apply</SectionHeadingBlue>
                <div className=" bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm">
                        <div className="text-gray-600">
                            <p className="font-medium text-lg">Important</p>
                            <p>
                                We are not accepting any applications at this moment in time. Please come back at a later date to see what placements we can offer<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <br/>

        </>
    );
}
