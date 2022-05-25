let getSortedArray = function (array, key) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i][key] > array[j][key]) {
                let swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}