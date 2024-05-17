import React, { useState, useEffect } from 'react';
import NavigationMenu from '../components/NavigationMenu';
import BooksBoard from '../components/BooksBoard';

// Config variables
const SPREADSHEET_ID = '10uHYuGgUITWKFyi7gHRlvXKj-jvBFHVOWNgnh4MCDFg';
const SHEET_ID = '0';

const LivrosPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=${SHEET_ID}`);
      const data = await response.text();
      const json = JSON.parse(data.substr(47).slice(0, -2));
      const rows = json.table.rows;

      const booksData = rows.map(row => {
        const columns = row.c;
        return {
          title: columns[0]?.v,
          category: columns[1]?.v,
          author: columns[2]?.v,
          description: columns[3]?.v,
          link: columns[4]?.v 
        };
      });

      console.log('Data fetched:', booksData);
      setBooks(booksData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavigationMenu />

      <header className="header mb-4 p-3 border rounded" style={{ backgroundImage: "url('https://picsum.photos/2000/1000')", backgroundSize: 'cover' }}>
        <h1>Autores afundam em dias normais</h1>
        <p>Uma lista dos livros dos participantes do grupo Valekers Imperdíveis </p>
      </header>

      <BooksBoard books={ books } />
    </div>
  );
};

export default LivrosPage;
