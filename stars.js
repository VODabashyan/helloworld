<script>

const space = function (n){
if (n === 0){
return "";
}
return " " + space (n - 1);
};

const star = function (m) {
if (m === 1) {
return "*";
}
return "*" + star (m - 1);
};

const coordinator = function (quantity, spacequantity, starquantity){
if (quantity === 0) {
return;
}
console.log(space(spacequantity) + star(starquantity));
coordinator((quantity-1), (spacequantity-1), (starquantity+2));
};

const triangleStars = function (k){
 coordinator (k, k-1, 1);
 }
triangleStars(7);
</script>
