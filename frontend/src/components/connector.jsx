import React from "react";
import { useEffect, useState } from "react";

const Connector = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/szobak")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div>
            <h3>Available Rooms</h3>
            <ul>
                {data.map((room) => (
                    <li key={room.id}>{room.name} - {room.beds} beds</li>
                ))}
            </ul>
        </div>
    );
}
export default Connector;