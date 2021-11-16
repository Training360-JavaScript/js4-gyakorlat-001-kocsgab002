const converterPromise = (array = []) => {
    return new Promise((resolve, reject) => {
        if (array.every(element => (typeof element === 'string'))) {
            resolve((array).map(item => item.toLocaleUpperCase()));
        } else {
            reject('Error: Not all elements are string type!')
        }
    })
};

 export default converterPromise;
