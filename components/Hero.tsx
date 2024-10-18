import Link from "next/link";

export function Hero() {
    return (
        <section className=" w-full h-1/2 flex justify-center items-center bg-blur-md bg-white bg-opacity-5 flex-col">
            <h1 className="text-2xl">Lunar DB</h1>
            <p>Everything you need to get your software documentation online.
            </p>

            <Link href={'/docs'}  type="button" data-search-full="" className="mt-5 inline-flex items-center gap-2 rounded-full border bg-fd-secondary/50 p-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground w-full max-w-[240px] max-md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search ms-1 size-4">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </svg>
                Search
                <div className="ms-auto inline-flex gap-0.5">
                    <kbd className="rounded-md border bg-fd-background px-1.5">⌘</kbd>
                    <kbd className="rounded-md border bg-fd-background px-1.5">K</kbd>
                </div>
            </Link>
        </section>
    )
}