import LoadingScreen from "../UI/loadingScreen/screen/LoadingScreen.tsx";
import React, {FC, lazy, Suspense} from "react";

const Header = lazy(() => import("./headerBar/header/Header.tsx"));
const AsideBar = lazy(() => import( "./asideBar/AsideBar.tsx"));

interface BasePageLayoutProps {
    page: React.ReactNode;
}

const BasePageLayout: FC<BasePageLayoutProps> = ({page}) => {
    return (
        <>
            <Suspense fallback={<LoadingScreen/>}><AsideBar/></Suspense>
            <Suspense fallback={<LoadingScreen/>}><Header/></Suspense>
            <Suspense fallback={<LoadingScreen/>}>{page}</Suspense>
        </>
    );
};

export default BasePageLayout;