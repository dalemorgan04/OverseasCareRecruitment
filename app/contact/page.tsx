"use client";

import SubmitButtonLight from "../components/buttonLight";
import SectionHeadingBlue from "../components/headings/headingBlue";
import SectionOrange from "../components/headings/headingOrange";

export default function ContactPage() {
    return (
        <>
            <SectionOrange>
                <h3 className="font-serif font-bold text-xl">Contact Us</h3>
                <p className="font-sans text-base">
                    If you have any questions about our services please give us a call, send us an
                    email or fill our the contact form below
                </p>
            </SectionOrange>

            {/* Phone and address */}
            <div className="container mx-auto mt-10 ">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-1 p-2 mb-4">
                        <h3 className="font-serif font-bold text-xl mb-2">Address</h3>
                        <address className="font-sans not-italic">
                            Overseas Care Recruitment, <br />
                            Crown House,
                            <br />
                            27 Old Gloucester Street,
                            <br />
                            London,
                            <br />
                            United Kingdom,
                            <br />
                            WC1N 3AX
                        </address>
                    </div>

                    <div className="col-span-1 p-2 mb-4">
                        <h3 className="font-serif font-bold text-xl mb-2">Call</h3>
                        <address className="font-sans not-italic">
                            London: <a href="tel:+442071676646"> +44 (0)207 167 6646</a> |{" "}
                            <a href="tel:+442071676649">+44 (0)207 167 6649</a> <br />
                            Manchester: <a href="tel:+441613624426">+44 (0)161 362 4426</a>
                        </address>
                    </div>

                    <div className="col-span-1 p-2 mb-4">
                        <h3 className="font-serif font-bold text-xl mb-2">Email</h3>
                        <address className="font-sans not-italic">
                            <a href="mailto:info@overseascarerecruitment.co.uk">
                                info@overseascarerecruitment.co.uk
                            </a>
                        </address>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-10">
                <SectionHeadingBlue>GENERAL QUERY</SectionHeadingBlue>
                {/* Contact Form */}
                <div className=" bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <form name="contact-general" method="POST" data-netlify="true" className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <input type="hidden" name="form-name" value="contact-general"/>
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
                                    <label htmlFor="full_name">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    />
                                </div>

                                <div className="md:col-span-5">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        placeholder="email@domain.com"
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
                                        <SubmitButtonLight buttonText="Submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
