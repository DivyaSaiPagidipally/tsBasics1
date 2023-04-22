var employeeDetails = [
    { "id": 0, "name": "Sai", "age": 20 },
    { "id": 1, "name": "Sai", "age": 21 },
    { "id": 2, "name": "DivyaSai", "age": 22 }
];
var myMap = new Map();
var set = new Set();
var uiqueObjects = employeeDetails.filter(function (eachItem) {
    if (set.has(eachItem.name)) {
        return false;
    }
    else {
        set.add(eachItem.name);
        return true;
    }
});
console.log(uiqueObjects);
/*for (let employee of employeeDetails)
{
    myMap.set(employee["name"], employee)
}
var iteratorValues= myMap.values();
var uniqueEmplyeeDetails =[...iteratorValues];
for(let i=0;i<uniqueEmplyeeDetails.length;i++)
    {
        console.log(uniqueEmplyeeDetails[i]);
    }*/ 
