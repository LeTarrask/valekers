import React, { useState, useEffect } from 'react';
import NavigationMenu from '../components/NavigationMenu';
import NewslettersBoard from '../components/NewslettersBoard';

// Config variables
const SPREADSHEET_ID = '10uHYuGgUITWKFyi7gHRlvXKj-jvBFHVOWNgnh4MCDFg';
const SHEET_ID = '460273902';

const NewslettersPage = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=${SHEET_ID}`);
      const data = await response.text();
      const json = JSON.parse(data.substr(47).slice(0, -2));
      const rows = json.table.rows;

      const newsletterData = rows.map(row => {
        const columns = row.c;
        return {
          title: columns[0]?.v,
          author: columns[1]?.v,
          description: columns[2]?.v,
          link: columns[3]?.v 
        };
      });

      setNewsletters(newsletterData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavigationMenu />

      <header className="header mb-4 p-3 border rounded" style={{ backgroundImage: "url('https://picsum.photos/2000/1000')", backgroundSize: 'cover' }}>
        <h1>As Newsletters não sabem de si</h1>
        <p>Uma lista das newsletters dos participantes do grupo Valekers Imperdíveis </p>
      </header>

      <NewslettersBoard newsletters={ newsletters } />
    </div>
  );
};

export default NewslettersPage;
