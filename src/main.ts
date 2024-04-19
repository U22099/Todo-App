import ListClass from "./List";
import load from "./ListTemplates";


const btn = document.getElementById("btn") as HTMLButtonElement
const clear = document.getElementById("clr") as HTMLButtonElement
const input = document.getElementById("input") as HTMLInputElement
const listbody = document.getElementById("list-body") as HTMLUListElement

const myList = new ListClass([])
load(myList, listbody)

input.addEventListener("keypress", (e)=>
{
    if(e.key === "Enter"){
        e.preventDefault()
        btn.click()
    }else{

    }
})
btn.addEventListener("click",()=>{
        myList.add(input.value, false)
        load(myList, listbody)
        input.value = ''
    }
)
clear.addEventListener("click",()=>{
    myList.clear()
    load(myList, listbody)
})