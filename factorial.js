<script> 
const factorial = function (a) 
{
if(a ===0 || a === 1)
{
return 1;
}
return a * factorial (a-1);
}
console.log(factorial(5));

</script>