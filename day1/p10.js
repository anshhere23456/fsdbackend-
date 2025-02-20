const fs = require('fs');

const write=()=>{

    // const data=fs.readFileSync("./data.txt","utf-8")
    // console.log(data)

    fs.writeFile("./mydir/data.txt","utf8",(err,data)=>{
        if(err)
            console.log("Error writing file",err)
        else
        console.log("File Written successfully")
    
    })

}
console.log("before reading")
write("new data");
console.log("After reading")