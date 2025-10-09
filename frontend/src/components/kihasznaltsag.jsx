import React from "react";
import { useEffect, useState } from "react";

function Kihasznaltsag() {
    const [roomData, setRoomData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/kihasznaltsag")
            .then(response => response.json())
            .then(data => {
                setRoomData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Betöltés...</div>;

    return (
        <div>
            <h3>A szobák kihasználtsága:</h3>
            <table style={{ borderCollapse: 'collapse', width: '100%', margin: '20px 0' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ border: '1px solid #ddd', padding: '12px' }}>Szoba</th>
                        <th style={{ border: '1px solid #ddd', padding: '12px' }}>Foglalások száma</th>
                        <th style={{ border: '1px solid #ddd', padding: '12px' }}>Összes vendégéjszaka</th>
                    </tr>
                </thead>
                <tbody>
                    {roomData.map((room, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '12px' }}>{room.szoba}</td>
                            <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{room.foglalasok_szama}</td>
                            <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{room.osszes_ejszaka}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Kihasznaltsag;