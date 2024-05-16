"use client";

import SubmitButtonLight from "../components/buttonLight";
import CountryOptions from "../components/countryOptions";
import SectionHeadingBlue from "../components/headings/headingBlue";
import SectionOrange from "../components/headings/headingOrange";

export default function ContactPage() {
    return (
    <>
        <SectionOrange>
            <h3 className="font-serif font-bold text-xl">Applications</h3>
            <p className="font-sans text-base">
                Please fill in the form below to apply
            </p>
        </SectionOrange>
        <div className="container mx-auto mt-8">
                {/* Contact Form */}
                <SectionHeadingBlue>Apply</SectionHeadingBlue>
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
                            <form name="contact-candidate" method="POST" data-netlify="true"  className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <input type="hidden" name="form-name" value="contact-candidate"/>
                                <div className="md:col-span-3">
                                    <label htmlFor="full_name">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="countries">Country</label>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                                        defaultValue={"countrylist_x"}
                                    >
                                        <option key="countrylist_x">
                                            Select a Country{" "}
                                        </option>
                                        <CountryOptions />
                                    </select>
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
                                        <SubmitButtonLight buttonText="Submit"></SubmitButtonLight>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}