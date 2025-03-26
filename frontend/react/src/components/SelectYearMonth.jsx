import { useEffect, useState } from 'react';
import ListupResult from './ListupResult';

function SelectYearMonth() {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [searchList, setSearchList] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();     //prevent page refresh
    fetch('${process.env.REACT_APP_API_URL}/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        year: selectedYear,
        month: selectedMonth
      })
    })
    .then(res => res.json())
    .then(data => {
      setSearchList(data.result);
    });
  };

  return (
    <div>
      <select value={selectedYear} id="yearSelect" onChange={e => setSelectedYear(e.target.value)}>
          <option value="defalut">연도 선택</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
      </select>
      <select value={selectedMonth} id="monthSelect" onChange={e => setSelectedMonth(e.target.value)}>
          <option value="defalut">월 선택</option>
          <option value="6">6월</option>
          <option value="9">9월</option>
          <option value="11">11월 (수능)</option>
      </select>

      <button onClick={handleSend}> 검색 </button>
      <ListupResult results={searchList} />
    </div>
  );
}

export default SelectYearMonth;
