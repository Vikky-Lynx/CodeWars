/*Description:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/

//Solution:
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    }
    return reversed;
}