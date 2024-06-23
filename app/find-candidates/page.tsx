"use client";
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
                    If you are an employer looking to join our exclusive panel please contact us.
                </p>
            </SectionOrange>
            <div className="container mx-auto mt-10">
                <SectionHeadingWhite>Our Services</SectionHeadingWhite>
                <Timeline id="process-timeline" timelineItems={timelineItems} />
            </div>

        </>
    );
}
