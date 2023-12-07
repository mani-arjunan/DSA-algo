// const str = "Fe2H3OH"
const str = "NaCl2NaO2"

function parseMolecules(str: string) {
    const map = {}
    let tempStr = '';
    for (let i = 0; i < str.length; i++) {
        if (!Boolean(Number(str[i]))) {
            tempStr += str[i];
        }
        if (Boolean(Number(str[i]))) {
            map[tempStr] = (map[tempStr] || 0) + +str[i];
            tempStr = ''
        } else if (str[i + 1] && str[i + 1].toUpperCase() === str[i + 1]) {
            if (!Boolean(Number(str[i + 1]))) {
                map[tempStr] = (map[tempStr] || 0) + 1;
                tempStr = ''
            }
        } else if (str[i + 1] === undefined) {
            map[tempStr] = (map[tempStr] || 0) + 1;
            tempStr = ''
        }


    }

    return map;
}

console.log(parseMolecules(str))
