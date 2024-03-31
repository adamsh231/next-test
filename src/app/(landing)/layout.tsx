import "@/app/globals.css";
import Navbar from "@/components/Navbar.";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html data-theme="light" lang="en">
            <body>
                <Navbar>
                    {children}
                </Navbar>
            </body>
        </html>
    );
}