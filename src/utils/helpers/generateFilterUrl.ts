export const generateFilterUrl = (selectedFilters: any) => {
    const filterUrl: any =
        selectedFilters &&
        Object.keys(selectedFilters)?.filter(
            (filter: string, key: number) => !!selectedFilters[`${filter}`],
        );

    let url = '';
    const filteru = filterUrl?.map((filter: string, key: number) => {
        if (!url) {
            url = `${filter}=${selectedFilters[filter]}`;
        } else {
            url = url.concat(`&${filter}=${selectedFilters[filter]}`);
        }
    });

    return { url, filterUrl };
};
