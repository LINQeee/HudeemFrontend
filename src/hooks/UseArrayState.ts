import {useState} from "react";

type UseArrayState<T> = [
    value: T[],
    add: (value: T) => void,
    remove: (value: T) => void,
    addFew: (values: T[]) => void,
    clear: () => void
];

export const useArrayState = <T>(initialValue: T[]): UseArrayState<T> => {
    const [array, setArray] = useState<T[]>(initialValue);

    const addValue = (value: T) => setArray([...array, value]);
    const addValues = (values: T[]) => setArray([...array, ...values]);
    const removeValue = (value: T) => setArray(array.filter(v => v !== value));

    const clear = () => () => setArray([]);

    return [array, addValue, removeValue, addValues, clear];
}