export default function SectionHeadingWhite({ children }: { children: React.ReactNode }) {
    return (
        <div className="py-8">
            <h1 className="font-sans space-y-8 text-5xl tracking-[2rem] uppercase text-cyan-600">
                {children}
            </h1>
        </div>
    );
}
