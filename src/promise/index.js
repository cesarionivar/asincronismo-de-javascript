const somethingWillHappen = () => {

    return new Promise((resolve, reject) => {

        (true)
            ? resolve('Hey, Done!')
            : reject('Whoops, Error');
    });
}

somethingWillHappen()
    .then(console.log)
    .catch(console.error);


const somethingWillHappen2 = () => {

    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('True'), 200)
            : reject(new Error('Whoops!'));
    });
}

somethingWillHappen2()
    .then(console.log)
    .catch(console.error);


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(console.log)
    .catch(console.error);
