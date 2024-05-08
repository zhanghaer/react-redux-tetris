import React from 'react';
import Number from '../number';

export default function Point({ number, label }) {
  return (
    <div>
      <p>{label}</p>
      <Number number={number} />
    </div>
  );
}
