export const convertToDict = (object: any) => {
    return Object.keys(object).map(key => ({
        name: key,
        value: object[key],
        type: String,
    }));
}
