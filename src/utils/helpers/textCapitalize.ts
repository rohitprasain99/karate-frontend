export const textCapitalize = (text: string) => {
    if (text) {
        const capitalized = text.split(' ').map((name) => {
            const temp = name?.split('');
            return temp[0]?.toUpperCase() + temp?.slice(1).join('');
        });
        return capitalized.join(' ');
    }
};
