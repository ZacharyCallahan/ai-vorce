import ChatNav from "../components/ChatNav";

export default function RootLayout({ children }) {
    return (
        <div className="flex gap-12  pt-20">
            <ChatNav />

            {children}
        </div>
    );
}
