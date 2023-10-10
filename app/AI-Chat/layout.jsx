import ChatNav from "../components/ChatNav";

export default function RootLayout({ children }) {
    return (
        <div className="min-h-screen flex gap-12  pt-20 ">
            <ChatNav />

            {children}
        </div>
    );
}
