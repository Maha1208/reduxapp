import React from 'react'

const Immutable = () => {
    const obj = {
        a: {
          // To safely update obj.a.c, we have to copy each piece
          c: 3
        },
        b: 2
      }
      const obj2 = {
        // copy obj
        ...obj,
        // overwrite a
        a: {
          // copy obj.a
          ...obj.a,
          // overwrite c
          c: 42
        }
      }
      console.log(obj2);

      const arr = ['a', 'b']
      const arr2 = arr.concat('c')  // Create a new copy of arr, with "c" appended to the end
      console.log(arr2);
      
      //we can make a copy of the original array:
      const arr3 = arr.slice()
      // and mutate the copy:
      arr3.push('c')
      console.log(arr3);
  return (
    <div>
      Immutable
    </div>
  )
}

export default Immutable
