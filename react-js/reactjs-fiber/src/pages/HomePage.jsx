import Messages from "../organisms/Messages";
import PostListing from "../organisms/PostListing";
import Sidebar from "../organisms/Sidebar";
import StatusBar from "../organisms/StatusBar";

function HomePage() {

    return (
        <div className="flex items-start justify-center">
            {/* <Sidebar /> */}
            {/* <StatusBar /> */}
            <PostListing />
            {/* <Messages /> */}
        </div>
    )
}

export default HomePage;