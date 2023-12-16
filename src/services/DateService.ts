export const formatISODate = (isoDate: string): string => {
    const date = new Date(isoDate);
    const localeDateArr = date.toLocaleString("default", {day: "numeric", month: "short"}).split(" ");
    return `${localeDateArr[0]} ${capitalize(localeDateArr[1])}`;
}

export const formatFullISODate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return `${formatISODate(isoDate)} ${date.getFullYear()}`;
}

export const formatNumeralFullDate = (isoDate: string): string => {
    return new Date(isoDate).toLocaleDateString("default");
}

const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const plusDays = (date: Date, count: number): Date => {
    date.setDate(date.getDate() + count);
    return date;
}