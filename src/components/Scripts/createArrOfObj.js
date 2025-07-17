function createArrOfObj(count, data, name) {
    const nameOfData = Object.keys(name);
    const unitOfData = Object.values(name);
    const array = [];
    let obj = {};
    for (let i = 0; i < count; i++) {
        obj.id = i;
        for (let j = 0; j < nameOfData.length; j++) {
            obj[nameOfData[j]] = String(data[j][i]) + unitOfData[j];
        }
        array.push(obj);
        obj = {}
    }

    return array;
}

export default createArrOfObj;