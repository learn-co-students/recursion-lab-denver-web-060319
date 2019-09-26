// Code your solution here!

const string = 'hey buddy!'

function reverseString(string) {
    console.log(string[-1])
    if (string.length > 1) {
        string.pop()
        reverseString(string)
    } else {
        return true
    }
}