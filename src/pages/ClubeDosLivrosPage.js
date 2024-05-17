import React, { useState, useEffect } from 'react';
import NavigationMenu from '../components/NavigationMenu';
import EventsBoard from '../components/EventsBoard';

// Config variables
const SPREADSHEET_ID = '10uHYuGgUITWKFyi7gHRlvXKj-jvBFHVOWNgnh4MCDFg';
const SHEET_ID = '188774116';

const ClubeDosLivrosPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=${SHEET_ID}`);
      const data = await response.text();
      const json = JSON.parse(data.substr(47).slice(0, -2));
      const rows = json.table.rows;

      const eventsData = rows.map(row => {
        const columns = row.c;
        return {
          year: columns[0]?.v,
          month: columns[1]?.v,
          day: columns[2]?.v,
          book: columns[3]?.v,
          author: columns[4]?.v,
          moderator: columns[5]?.v
        };
      });

      setEvents(eventsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavigationMenu />

      <header className="header mb-4 p-3 border rounded" style={{
        backgroundImage: "url('https://picsum.photos/2000/1000')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <h1 className="display-4 font-weight-bold">O Clube do Livro Imperdível</h1>
        <p className="lead">Calendário do Clube do Livro</p>
      </header>

      <div className="py-5">
        <EventsBoard events={events} />
      </div>
    </div>

  );
};

export default ClubeDosLivrosPage;
