import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserView.css'; // Import the CSS file

const UserView = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/servers');
        if (response.data.length > 0) {
          setHeaders(Object.keys(response.data[0]));
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='userview'>
      <h1>Sanctuary of the Doomed Server Directory 🌐✨</h1>
      <h2>Your one-stop shop for all your gaming adventures! 🎮 Explore our diverse collection of servers across various games.
        <br />                                                                                                
      

      <br /> ❓   Need Help?
If you encounter any problems, please submit a support ticket on our <a href='https://discord.gg/DV42DXfmbC' target='_blank' rel='noopener noreferrer'> Discord server </a>. Our friendly community and staff are always ready to assist you!

<br /> 🛠️   Maintenance: All servers undergo maintenance and restart around 4 AM GMT. This helps keep them running and ensures the best possible experience for everyone.

<br />🎉   Happy Gaming!
We hope you have a blast exploring our servers and creating unforgettable memories with fellow gamers. See you in the game!
      
        
      </h2>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>
                  {row[header] !== undefined ? row[header] : 'N/A'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserView;
