"use client";
import SectionOrange from "../components/headings/headingOrange";

export default function ContactPage() {
    return (
        <>
            <SectionOrange>
                <h3 className="font-serif font-bold text-xl">Contact Information</h3>
            </SectionOrange>

            {/* Phone and address */}
            <div className="container mx-auto mt-10 ">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
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
                </div>
            </div>
        </>
    );
}
