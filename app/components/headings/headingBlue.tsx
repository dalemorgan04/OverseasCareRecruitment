export default function SectionHeadingBlue({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-cyan-600 p-8">
            <h1 className="font-sans space-y-8 text-5xl tracking-[2rem] uppercase text-white">
                {children}
            </h1>
        </div>
    );
}
