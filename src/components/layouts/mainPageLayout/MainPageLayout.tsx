import React, {FC, lazy, Suspense} from "react";
import LoadingScreen from "../../UI/loadingScreen/screen/LoadingScreen.tsx";

const Header = lazy(() => import("./headerBar/header/Header.tsx"));
const AsideBar = lazy(() => import( "./asideBar/AsideBar.tsx"));

interface BasePageLayoutProps {
    page: React.ReactNode;
}

const MainPageLayout: FC<BasePageLayoutProps> = ({page}) => {
    return (
        <>
            <Suspense fallback={<LoadingScreen/>}><AsideBar/></Suspense>
            <Suspense fallback={<LoadingScreen/>}><Header/></Suspense>
            {page}
        </>
    );
};

export default MainPageLayout;