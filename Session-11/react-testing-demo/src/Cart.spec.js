import Cart from "./Cart";

describe("Testing for Shopping Cart",()=>{
    let cart;
    beforeEach(()=> {cart = new Cart()})

    it("Add an item",()=>{
        const item = {id:1, name:"iphone",price:10};
        cart.add(item);
        expect([item]).toEqual(cart.getItems());
    })
    it("Add another item",()=>{
        const item = {id:2, name:"iphone",price:100};
        cart.add(item);
        expect([item]).toEqual(cart.getItems());
    })
    it("Remove an Item",()=>{
        const item1 = {id:1, name:"Apple iphone 15",price:100};
        const item2 = {id:2, name:"iphone 14",price:100};
        cart.add(item1);
        cart.add(item2);
        cart.remove(item1)
        expect([item2]).toEqual(cart.getItems());
    })
    it("Total Price Test",()=>{
        const item1 = {id:1, name:"Apple iphone 15",price:100};
        const item2 = {id:2, name:"iphone 14",price:100};
        expect(cart.totalPrice()).toEqual(0);

        cart.add(item1);
        cart.add(item2);
        expect(cart.totalPrice()).toEqual(200);
       
    })
    
})