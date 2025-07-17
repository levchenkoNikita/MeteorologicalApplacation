function createArrOfObj(count, [], {}) {
    const array = [];
    let obj = {};
    for(let i = 0; i < count; i++) {
        if(firstUnit === 'AM' && i === count/2) {
            firstUnit = 'PM';
        }
        obj.id = i;
        obj[firstName] = String(firstData[i]) + firstUnit ;
        obj[secondName] = String(secondData[i]) + secondUnit;
        array.push(obj);
        obj = {}
    }

    return array;
}

export default createArrOfObj;