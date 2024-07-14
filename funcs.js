const fs = require("fs");

const addPerson = (id, fname, lname, age, city) => {
    const loadData = getData();
    const duplicatedData = loadData.filter((item) => {
        return item.id === id;
    });

    if (duplicatedData.length > 0) {
        console.log("This id already exists");
    } else {
        loadData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        });
        saveData(loadData);
    }
};

const getData = () => {
    try {
        const dataJson = fs.readFileSync("data.json").toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }
};

const saveData = (data) => {
    const allDataJson = JSON.stringify(data);
    fs.writeFileSync("data.json", allDataJson);
};
const deleteperson = (id)=>{
    const loadData = getData();
      const newitem = loadData.filter((item)=>{
        return item.id !== id;
      })
 
      saveData(newitem);

}
const readData = (id)=>{
    const loadData = getData();
    const newitem = loadData.filter((item)=>{
        return item.id === id;
    })
    if(newitem.length>0)
    console.log(newitem) 
    else console.log("sure your id") 
}
const listData = ()=>{
    const loadData = getData()
         if(newitem.length>0)
                      {
           loadData.forEach((element) => {
            console.log(element.fname,element.lname,element.age,element.city)
           });
        }
        else console.log("no found data")
}
module.exports = {
    addPerson,
    deleteperson ,
    readData,
    listData
};
