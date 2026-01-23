function Product(id,name,price,quantity,category,isAvailable) {
    this.id=id;
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.category=category;
    this.isAvailable=isAvailable;
}
var Products =[ 
    new Product(101,"iphone 16",25000,1,"dien tu",true),
    new Product(102,"chuot razer",50000,1,"dien thoai",true),
new Product(103,"tivi 16 inch",36000,2,"dien thoai",true),
new Product(201,"tu lanh",677000,5,"gia dung",true),
new Product(202,"lo vi song",699000,4,"gia dung",true),
new Product(203,"may lanh",77500000,5,"gia dung",true),
];
Products.push(new Product(301, "Tai nghe Sony", 2000000, 10, "Accessories", true));
Products.push(new Product(302, "Ốp lưng", 150000, 50, "Accessories", true));
var ProductInfo= Products.map(function(product) {
    return{
        name: product.name,
        price: product.price
    };
});
var ProductAvailable= Products.filter(function(product){
    return product.quantity>0;
});
var haspriceProduct= Products.some(function(product){
    return product.price>30000000;
});
var AccessoriesList= Products.filter(function(product){
    return product.category === "category"
});
var allAccessoriesAvailable= Products.every(function(product){
    return product.isAvailable === true;
});
var totalValue= Products.reduce(function(total,product){
    return total + (product.price * product.quantity);
},0);
var activeProducts= Products
.filter(function(product){
return product.isAvailable === true && product.quantity>0;
})
.map(function(product){
return {
    name: product.name,
}
});
console.log(Products);
console.log(ProductInfo);
console.log(ProductAvailable);
console.log(haspriceProduct);
if (haspriceProduct){
    console.log("co!(true)");
}else{
    console.log("khong!(false");
}
console.log(AccessoriesList);
if(allAccessoriesAvailable){
    console.log("Tat ca deu dang ban !(true)");
}else{
    console.log("co mon khong ban!(false)");
}
console.log(totalValue);
console.log("\n-- Duyet mang for of --");
for (var product of Products){
    var statusText= product.isAvailable ? "Dang ban":"Het hang";
    console.log(product.name +"-" + product.category+ "-"+ statusText);
}
console.log("\n-- duyet mang for in--");
var fristProduct= Products[0];
for (var key in fristProduct){
    console.log("thuoc tinh: " + key +", gia tri: " + fristProduct[key]);
}
console.log(activeProducts);
