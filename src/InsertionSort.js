export function insertionSort(array) {

    let i = 0

    while (i < array.length - 1) {
        if (array[i] > array[i+1]){
            let temp = array[i+1];
            array[i+1] = array[i];
            array[i] = temp;
            break;
        }
        i++
    }

    return array
}
