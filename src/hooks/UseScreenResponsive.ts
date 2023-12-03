import {useCallback, useEffect, useState} from "react";


export const useScreenResponsive = (dataLength: number, multiplier: number): number => {

    const calcValue = useCallback(() => Math.round(dataLength / window.screen.width * multiplier), [dataLength, multiplier]);

    const [value, setValue] = useState<number>(calcValue());

    useEffect(() => {
        window.addEventListener("resize", () => setValue(calcValue()));

        return () => window.removeEventListener("resize", () => setValue(calcValue()));
    }, [calcValue, dataLength, multiplier]);

    return value;
}