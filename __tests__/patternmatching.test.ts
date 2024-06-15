import { findPattern } from '../algos/patternmatching'

test('test pattern Matching', () => {
    expect(findPattern('large_text,tt.txt', 'la*t.*t.txt')).toEqual(true)
    // expect(findPattern('large_t.ext,t,t.t.tttxt', 'la*t.txt')).toEqual(false)
    // expect(findPattern('abcascas', '*s**b')).toEqual(false)
    // expect(findPattern('sabcascas', 's*****s')).toEqual(true)
})
//
// function findIndex(str: string, char: string, nextVal: string): number {
//     let resultIndex = -1
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             if (nextVal === '*') {
//                 resultIndex = i
//             } else if (nextVal === str[i + 1]) {
//  resultIndex = i;
//             }
//         }
//     }
//     return resultIndex
// }
//
// export function findPattern(filename: string, pattern: string): boolean {
//     let fileNameIndex = 0;
//     let patternIndex = 0;
//     while (patternIndex !== pattern.length) {
//         if (pattern[patternIndex] !== '*') {
//             if (filename[fileNameIndex] !== pattern[patternIndex]) {
//                 return false;
//             }
//             fileNameIndex++;
//         } else {
//             const indexValue = findIndex(
//                 filename, pattern[patternIndex + 1], pattern[patternIndex + 2]
//             )
//             fileNameIndex = indexValue;
//         }
//         patternIndex++;
//     }
//     return fileNameIndex === filename.length || fileNameIndex === -1 ? true : false;
// }
//
