import Header from "./headerBar/header/Header.tsx";
import AsideBar from "./asideBar/AsideBar.tsx";

const BaseLayout = () => {
    return (
        <>
            <AsideBar/>
            <Header/>
        </>
    );
};

export default BaseLayout;