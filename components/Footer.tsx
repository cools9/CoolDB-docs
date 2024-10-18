export function Footer() {
    return (
        <footer className="bg-gray-800 bg-opacity-20 p-4 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} Lunar DB. All rights reserved.
            </p>
        </footer>
    )
}