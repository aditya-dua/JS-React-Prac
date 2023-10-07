import Cart from "./Cart";

describe("Testing for Shopping Cart",()=>{
    let cart = new Cart();
    //beforeEach(()=> {cart = new Cart()})

    it("Add an item",()=>{
        const item = {id:1, name:"iphone",price:10};
        cart.add(item);
        expect([item]).toEqual(cart.getItems());
    })
    it("Add another item - False Testing",()=>{
        const item = {id:2, name:"iphone",price:100};
        cart.add(item);
        expect([item]).toEqual(cart.getItems());
    })
})