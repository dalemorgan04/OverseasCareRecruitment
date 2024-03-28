"use client";

import ButtonLight from "../components/buttonLight";
import SectionHeadingBlue from "../components/headings/headingBlue";
import SectionOrange from "../components/headings/headingOrange";
import SectionHeadingWhite from "../components/headings/headingWhite";
import Timeline, { TimelineItemProps } from "../components/timeline/timeline";

export default function FindCandidatesPage() {
    const timelineItems: TimelineItemProps[] = [];
    timelineItems.push({
        heading: "Expertise you can trust",
        textContent: (
            <>
                Our staff are trained and qualified health professionals giving us the inside
                knowledge to find the right clients.
            </>
        ),
    });

    timelineItems.push({
        heading: "Rigorous Screening Process",
        textContent: `We prioritise the safety and well-being of your residents. Our diligent background research includes collecting all compliance documentation, running thorough police checks, and verifying the qualifications of our candidates.`,
    });

    timelineItems.push({
        heading: "Seamless and Convenient Process",
        textContent: `We understand your time is valuable. Our dedicated team takes care of arranging interviews, handling all travel logistics, securing accommodations, and providing guidance on sponsorship for our candidates. We make it easy for you and your future staff members.`,
    });

    return (
        <>
            <SectionOrange>
                <h3 className="font-serif font-bold text-xl">Find Candindates</h3>
                <p className="font-sans text-base">
                    If you are an employer looking to join our exclusive panel please contact us by
                    phone, email or contact form below
                </p>
            </SectionOrange>
            <div className="container mx-auto mt-10">
                <SectionHeadingWhite>Our Services</SectionHeadingWhite>
                <Timeline id="process-timeline" timelineItems={timelineItems} />
            </div>
            <div className="container mx-auto mt-10">
                <SectionHeadingBlue>ENQUIRE</SectionHeadingBlue>
                {/* Contact Form */}
                <div className=" bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div className="text-gray-600">
                            <p className="font-medium text-lg">Get in touch</p>
                            <p>
                                Send us a short message and we&apos;ll get back in touch with you
                                straight away
                            </p>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div className="md:col-span-5">
                                    <label htmlFor="full_name">Company Name</label>
                                    <input
                                        type="text"
                                        name="organization"
                                        id="organization"
                                        autoComplete="organization"
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    />
                                </div>

                                <div className="md:col-span-3">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        placeholder="email@domain.com"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="contact">Contact Number</label>
                                    <input
                                        type="tel"
                                        name="tel"
                                        id="tel"
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        placeholder=""
                                    />
                                </div>

                                <div className="md:col-span-5">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="h-[200px] border mt-1 rounded px-4 w-full bg-gray-50"
                                    />
                                </div>

                                <div className="md:col-span-5 text-right">
                                    <div className="inline-flex items-end">
                                        <ButtonLight buttonText="Submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
