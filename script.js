var input = document.getElementById("inputoutput");
function display(a) {
    input.value += a;
    console.log(input.value);
}
function calculate(){
    try{
        input.value=eval(input.value)
    }
    catch{
        input.value="Error"
    }
}
function clearInput(){
 input.value=""
}
function del(){
    input.value=input.value.slice(0,-1)
}