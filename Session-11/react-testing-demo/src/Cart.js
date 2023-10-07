export default class Cart{
    constructor(database){
        this.items=[];
        this.database=database;
    }

    add(item){
        this.items.push(item)
    }

    remove(item){
        this.items=this.items.filter(i=>i.id !=item.id);
    }

    save(){
        this.database.save();
    }
    
    totalPrice(){
        return this.items.map(i=> i.price).reduce((prev,next)=> prev+next,0);
    }

    getItems(){
        return this.items;
    }
}