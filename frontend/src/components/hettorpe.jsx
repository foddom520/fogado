import React from "react";
import { useEffect, useState } from "react";

function HetTorpe() {
    const [rooms, setRooms] = useState([]);
    const [totalBeds, setTotalBeds] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3000/szobak")
            .then((response) => response.json())
            .then((data) => {
                setRooms(data);
                const total = data.reduce((sum, room) => {
                    const mainBeds = room.agy || 0;
                    return sum + mainBeds;
                }, 0);
                setTotalBeds(total);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h3>A hét törpe fogadó</h3>
            <table style={{ borderCollapse: 'collapse', width: '100%', margin: '20px 0' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Szoba neve</th>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Ágyak Száma</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room, index) => (
                        <tr key={index} style={{ border: '1px solid #ddd' }}>
                            <td style={{ border: '1px solid #ddd', padding: '12px' }}>{room.sznev}</td>
                            <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{room.agy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p><strong>A házban összesen {totalBeds} fő fér el.</strong></p>
            <p><strong>Felszeretségünk:</strong></p>
            <ul>
                <li>Ruhásszekrény</li>
                <li>Saját fürdőszoba zuhanytálca</li>
                <li>WC (fürdőszobával egyben)</li>
            </ul>
        </div>
    );
}

export default HetTorpe;