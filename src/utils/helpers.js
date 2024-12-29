export const getCookie = (cookieName) => {
    // debugger;
    console.log(cookieName);
    // console.log(name.split("="));
    const rawCookie = document.cookie ? document.cookie : null;
    if (rawCookie) {
        const cookieSplit = rawCookie.split(`;`);
        let value;
        cookieSplit.filter((item) => {
            // console.log(item);
            // console.log(item.split(`=`));
            const itemSplit = item.split("=");
            const key = itemSplit[0];
            if (key == cookieName) {
                value = itemSplit[1];
            }
        });
        return value;
    }
    return null;
};
