export const arrayRotate = (arr:any, reverse = false) => {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
}