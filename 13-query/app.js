const queryParameters = {
    search: "Вaся",
    take: 10
};
function stringOfQueryParameters(query) {
    const stringQuery = Object.entries(query).map(([key, value]) => `${key}=${value}`).join("&");
    return stringQuery;
}
console.log(stringOfQueryParameters(queryParameters));