const isArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

const isArrayOfObjectsEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) {
            return false;
        }
    }

    return true;
};

module.exports = {
    isArrayEqual,
    isArrayOfObjectsEqual
}