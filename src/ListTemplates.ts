import ListClass from "./List"

export default function load(myList: ListClass, listbody: HTMLUListElement): void{
    const loadList = myList.load()
    listbody.innerHTML = ''
    loadList.map((li, i)=>{
        const lidom: HTMLLIElement = document.createElement("li")
        const chkbox: HTMLInputElement = document.createElement("input")
        const label: HTMLLabelElement = document.createElement("label")
        const button: HTMLButtonElement = document.createElement("button")
        chkbox.setAttribute("id", `${i}`)
        label.setAttribute("for", `${i}`)
        label.innerHTML = li.taskName
        chkbox.setAttribute("type", "checkbox")
        chkbox.checked = li.checked
        chkbox.addEventListener("change", ()=>
        {
            myList.update(i, chkbox.checked)
            if(chkbox.checked){
                label.style.textDecoration = "line-through"
            }else{
                label.style.textDecoration = "none"
            }
        })
        button.innerHTML = "x"
        button.addEventListener("click",()=>{
            myList.removeID(i)
            load(myList, listbody)
        })
        lidom.appendChild(chkbox) 
        lidom.appendChild(label) 
        lidom.appendChild(button) 
        listbody.appendChild(lidom)
    })
}