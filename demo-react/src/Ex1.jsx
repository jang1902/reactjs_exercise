
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState } from 'react';

const employeeCodes = ['NV001', 'NV002', 'NV003', 'NV004', 'NV005', 'NV006', 'NV007', 'NV008', 'NV009', 'NV010'];

function Ex1() {
  let [newCode, setNewCode] = useState('');
  let [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setNewCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newCode) {
      setMessage('Mã nhân viên không được để trống');
      return;
    }

    if (employeeCodes.includes(newCode)) {
      setMessage('Mã nhân viên đã tồn tại trong hệ thống');
      return;
    }

    employeeCodes.push(newCode);
    setMessage('Thêm mã nhân viên thành công');
    setNewCode('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newCode} onChange={handleInputChange} />
        <button type="submit">Thêm mã nhân viên</button>
      </form>
      <p>{message}</p>
      <p>{employeeCodes.join(', ')}</p>
    </div>
  );
}
export default Ex1
