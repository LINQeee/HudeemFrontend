import classes from "./LoginPageLayout.module.sass";
import React, {FC, Suspense} from "react";
import Logo from "../../UI/logo/Logo.tsx";
import LoadingScreen from "../../UI/loadingScreen/screen/LoadingScreen.tsx";
import "./LoginPageLayout.sass";

interface LoginPageLayoutProps {
    page: React.ReactNode;
    imgUrl: string;
}

const LoginPageLayout: FC<LoginPageLayoutProps> = ({page, imgUrl}) => {
    return (
        <div className={classes.loginLayout}>
            <Logo className={classes.logo}/>
            <img className={classes.backgroundImage} src={imgUrl} alt={"background"}/>
            <Suspense fallback={<LoadingScreen/>}>{page}</Suspense>
        </div>
    );
};

export default LoginPageLayout;