export type ListType = {
    taskName: string,
    checked: boolean
}[]
export default class ListClass{
    lists
    constructor(lists: ListType){
        this.lists = lists
    }
    update(i: number, check:boolean){
        this.lists[i].checked = check
        this.save()
    }
    add(list: string, check: boolean){
        this.lists.push({
            taskName: list,
            checked: check
        })
        this.save()
    }
    removeID(x: number){
        this.lists = this.lists.filter((_,i)=> i != x)
        this.save()
    }
    save(){
        localStorage.setItem("lists", JSON.stringify(this.lists))
    }
    load(): ListType{
        const list = localStorage.getItem("lists")
        if(typeof list !== "string") return []
        this.lists = JSON.parse(list)
        return this.lists
    }
    clear(){
        this.lists = []
        this.save()
    }
}
