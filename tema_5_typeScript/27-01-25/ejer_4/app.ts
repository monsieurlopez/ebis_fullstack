//* Declaration function
function priceWithTaxes (price: number, taxes: number = 21) : void {
    console.log(price + (price * taxes / 100))
}

priceWithTaxes(20, 10)