const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
const fs = require('fs');

var filename = "";
var directory = "";
var content = "";

var createDirectoryWizard = () => {
    rl.question("Enter the name of the directory which you want to create : ",(ans) => {
        directory = ans;
        fs.mkdir(ans,function(err){
            if(err){
                console.log(err);
            }else{
                console.log("Create Directory : " + directory);
            }
            repeat();
        });
    });
};

var removeDirectoryWizard = () => {
    rl.question("Enter the name of the directory which you want to remove : ",(ans) => {
        directory = ans;
        fs.rmdir(directory, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Remove Directory : " + directory);
            }
            repeat();
        });
    });
};

var writeFileWizard = () => {
    rl.question("Enter the name of the file which you want to write on : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter file content : ", (ans) => {
            content = ans;
            fs.writeFile(filename,content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("File content write successfully!!!");
                }
                repeat();
            });
        });
    });
};

var readFileWizard = () => {
    rl.question("Enter the name of the file which you want to read : ", (ans) => {
        filename = ans + ".txt";
        fs.readFile(filename,'utf-8', (err,result) => {
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            repeat();
        });
    });
};

var deleteFileWizard = () => {
    rl.question("Enter the name of the file which you want to delete : ",(ans) => {
        filename = ans + ".txt";
        fs.unlink(filename, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Delete file : " + filename);
            }
            repeat();
        });
    });
};

var appendFileWizard = () => {
    rl.question("Enter the name of the file which you want to append on : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter Content : ", (ans) => {
            content = ans;
            fs.appendFile(filename,content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Append content in file : " + filename);
                }
                repeat();
            });
        });
    });
};

var updateFileWizard = () => {
    rl.question("Enter the name of the file which you want to update on : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter Content : ", (ans) => {
            content = ans;
            fs.writeFile(filename,content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Update file data : " + filename);
                }
                repeat();
            });
        });
    });
};

var renameFileWizard = () => {
    rl.question("Enter the name of the file which you want to rename : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter new file name : ", (ans) => {
            var newFilename = ans + ".txt";
            fs.rename(filename,newFilename, (err) =>{
                if(err){
                    console.log(err);
                }else{
                    console.log("Update File Name : " + filename);
                }
                repeat();
            });
        });
    });
};

var instruction = () => {
    console.log("\n1. Create Directory");
    console.log("2. Remove Directory");
    console.log("3. Write File");
    console.log("4. Read File");
    console.log("5. Delete File");
    console.log("6. Append data to file");
    console.log("7. Update file with new data");
    console.log("8. Rename file");
    console.log("9. Exit");
};

var start = () => {
    rl.question("Enter Your Choice : ", (ans) => {
        if(ans == '1'){
            createDirectoryWizard();
        }else if(ans == '2'){
            removeDirectoryWizard();
        }else if(ans == '3'){
            writeFileWizard();
        }else if(ans == '4'){
            readFileWizard();
        }else if(ans == '5'){
            deleteFileWizard();
        }else if(ans == '6'){
            appendFileWizard();
        }else if(ans == '7'){
            updateFileWizard();
        }else if(ans == '8'){
            renameFileWizard();
        }else if(ans == '9'){
            rl.close();
        }else{
            console.log("Invalid Choice, Please try again!!!");
            start();
        }
    });
};

var repeat = () => {
    instruction();
    start();
};
repeat();