let employeeDetails: { id: number, name: string , age: number}[] = [
    { "id": 0, "name": "Sai", "age": 20 },
    { "id": 1, "name": "Sai","age":21},
    { "id": 2, "name": "DivyaSai","age":22}
];
let myMap = new Map<string,object>();
var set=new Set();
var uiqueObjects=employeeDetails.filter(function (eachItem)
{
    if(set.has(eachItem.name))
    {
        return false;
    }
    else 
    {
        set.add(eachItem.name);
        return true;
    }
});
console.log(uiqueObjects);
