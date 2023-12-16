export const generateId = ():string => {
    return new Date().toISOString() + Math.random() * 500;
}