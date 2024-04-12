class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
class Electronics extends Product {
    private brand:string
    constructor(name: string, price: number, brand:string) {
        super(name, price)
        this.brand = brand
    }
    show(){
        console.log(this.brand,this.name,this.price);
    }
}
const myProduct = new Electronics("BMW", 10000, "Mercedes");
myProduct.show();