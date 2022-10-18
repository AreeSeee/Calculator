
function add(){
    const num1 = document.getElementById('number1');
    const num2 = document.getElementById('number2');
    let addition=parseInt(num1.value)+parseInt(num2.value)
    console.log(addition);
    alert(`the sum is ${addition}`);

}
