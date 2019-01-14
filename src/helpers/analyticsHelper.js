export function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export function beautifyNumber(num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}