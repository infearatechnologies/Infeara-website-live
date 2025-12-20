import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#09090b] text-white">
            {/* Background 404 Text */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <h1 className="text-[15rem] sm:text-[25rem] font-bold text-[#1c1c1e] leading-none tracking-tighter">
                    404
                </h1>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight">
                    <span className="text-zinc-500">You're in uncharted</span>{" "}
                    <span className="text-white font-bold">design territory!</span>
                </h2>

                <p className="text-zinc-400 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed">
                    Looks like you took a wrong turn. But don't worry, even the best creatives get lost sometimes!
                </p>

                <Link
                    href="/"
                    className="text-white underline underline-offset-8 decoration-1 hover:decoration-2 hover:text-zinc-200 transition-all text-lg mt-8"
                >
                    Return home
                </Link>
            </div>
        </div>
    );
}
