function createArrOfObj(count, firstData, secondData, firstName, secondName) {
    const array = [];
    let obj = {};
    for(let i = 0; i < count; i++) {
        obj.id = i;
        obj[firstName] = firstData[i];
        obj[secondName] = secondData[i];
        array.push(obj);
        obj = {}
    }

    return array;
}

export default createArrOfObj;