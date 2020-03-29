export function _nF(num: any) {
    if (!num) return '';
    return (Number.parseFloat(num) % 1 !== 0) ?
        Number.parseFloat(num.toString()).toFixed(4)
        : Number.parseInt(num);
}