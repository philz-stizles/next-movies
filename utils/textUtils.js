export const shorten = (words, max) => {
    if(!words) {
        return ''
    }

    if(words.length >= max) {
        return `${words.substring(0, max)} ...`
    }

    return words
}