import React from 'react'

export default function Filter({filterIt}) {
  return (
    <select onChange={filterIt}>
      <option value="all">Все</option>
      <option value="avaliable">Доступные</option>
    </select>
  );
}
