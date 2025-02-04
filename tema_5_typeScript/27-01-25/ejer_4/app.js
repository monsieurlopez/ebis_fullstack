//* Declaration function
function priceWithTaxes(price, taxes) {
    if (taxes === void 0) { taxes = 21; }
    console.log(price + (price * taxes / 100));
}
priceWithTaxes(20, 10);
