import Footer from "../components/Footer";
import Nav from "../components/Nav";

const layout = ({children}) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
}

export default layout;