import React from 'react'

export default function Options(props) {
    const selections = [];

    for(let i = props.min; i <= props.max; i++) {
        selections.push(i);
    }
  return (
    selections.map(selection => {
        return <option value={selection}>{selection}</option>
    })
  );
}
