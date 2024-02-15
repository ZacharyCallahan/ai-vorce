import axios from "axios";
import ChatComponent from "../../components/ChatComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../utils/auth";

const page = async ({ params }) => {
    const id = params.id;
    const chat = await axios
        .get(`http://localhost:3000/api/get/${id}`)
        .then((res) => {

            console.log("HELLO WHY NO WORK")
            console.log(res.data);
            res.data})
        .catch((err) => {});
    return (
        <div className="pt-20">
            <ChatComponent chat={chat} id={id} />
        </div>
    );
};

export default page;
