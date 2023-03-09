const range = (first: number, last: number) => {
    let count = first - 1;

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    console.log('comingg')
                    if(count > last) {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                    const num = count;
                    count += 1;
                    console.log('coming here')
                    return {
                        value: num,
                        done: false
                    }
                }
            }
        }
    } as any
}

const g = range(0, 100);
for(const val of g) {
    console.log(val)
}
