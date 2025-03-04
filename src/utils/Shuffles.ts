/**
 * Implements the Fisher-Yates shuffle algorithm to randomly shuffle an array.
 * This method modifies the original array in place.
 *
 * @param array The array to be shuffled
 * @return The shuffled array
 */
export default function shuffle(array:string[]) {
    let currentIndex:number = array.length,
        randomIndex: number;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex],];
    }

    return array;
}

