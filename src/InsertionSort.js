export function insertionSort(array) {
    let index = 0
    let isSorted = true
    while (index < array.length - 1) {
        if (array[index] > array[index+1]){
            let temp = array[index+1];
            array[index+1] = array[index]
            array[index] = temp
            isSorted = false
            break
        }
        index++
    }
    return [isSorted ? -1 : index, isSorted, array]
}
