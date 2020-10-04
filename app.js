function setnum(num)
{
    // console.log(num);
 var a =document.getElementById("input")
 a.value += num;

}

function clrbutton()
{
    var a =document.getElementById("input")
    a.value =""
}

function getresult()
{
    var a =document.getElementById("input")
    console.log(a.value);
    a.value = eval(a.value)
}