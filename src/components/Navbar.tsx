import Link from "next/link"

export default function Navbar() {
    return (
        <div>
            <ul className="flex justify-between pt-5 items-center">
                <div>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                </div>
                <div className="flex gap-5">
                    <button>Light</button>
                    <button>Dark</button>
                    <button>Corporate</button>
                </div>
            </ul>
        </div>
    )
}