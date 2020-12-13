export function insertionSort(array) {
    let index = 0
    while (index < array.length - 1) {
        if (array[index] > array[index+1]){
            let temp = array[index+1];
            array[index+1] = array[index];
            array[index] = temp;
            break;
        }
        index++
    }
    const isSorted = index === array.length - 2
    return [isSorted ? -1 : index, isSorted, array]
}
