export const formatISODate = (isoDate: string): string => {
    const date = new Date(isoDate);
    const localeDateArr = date.toLocaleString("default", {day: "numeric", month: "short"}).split(" ");
    return `${localeDateArr[0]} ${capitalize(localeDateArr[1])}`;
}

export const formatFullISODate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return `${formatISODate(isoDate)} ${date.getFullYear()}`;
}

const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}