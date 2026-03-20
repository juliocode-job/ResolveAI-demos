async function fetchData() {
    return { name: "John", age: 30 };
}

function getUserData() {
    const data = fetchData();
    return data.name; 
}


function runLoopBug() {
    for (var i = 0; i < 3; i++) {

        setTimeout(() => {
            console.log("Index:", i); 
        }, 100);

    }
}

module.exports = { getUserData, runLoopBug };
