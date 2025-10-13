export class Product {
  constructor(name, category, coder, price){
    Object.assign(this, {name, category, coder, price});
  }

  getData(){
    return{
      name: this.name,
      category: this.category,
      coder: this.coder,
      price: this.price
    }
  };

  static clearForm(form){
    form.reset();
  }
}