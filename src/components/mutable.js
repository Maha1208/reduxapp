import React from 'react';

//In Js arrays and objects are mutable
export default function Mutable() {
    const obj = { a: 'apple', b: 'bat', c: 'cat' }
    obj.c = 'car';
    console.log(obj);

    const arr = ['a', 'b']
    arr.push('c')
    arr[1] = 'd'
    console.log(arr);

    return (
        <div>Mutable</div>
    )
};