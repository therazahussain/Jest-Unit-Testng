const shallowObjClone = require("./shallowObjClone")

test("Create a clone of object parameter", ()=>{
    const myObj = {name:"Raza", age:24}
    expect(shallowObjClone(myObj)).toStrictEqual(myObj)
})