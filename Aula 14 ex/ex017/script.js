function tabuada(){
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab") 

    if (num.value == 0){
        window.alert('Favor digitar um numero')
    } else{
        let n = Number(num.value)
        let c= 1 
        tab.innerHTML= ''
        for (c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

   




}