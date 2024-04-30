import React, { useState, useEffect } from 'react';
import '../styles/seats.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function SeatsBooking() {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'g', 'H', 'I', 'J', '', 'K', 'L', 'M', 'N', 'P'];
    const [movie, setMovie] = useState(null);
    const [seatselect, setSeatSelect] = useState([]);

    const handleClick = (row, seatNumber) => {
        const newSeatSelect = [...seatselect];
        const rowIndex = rows.indexOf(row);

        if (!newSeatSelect[rowIndex]) {
            newSeatSelect[rowIndex] = Array(rows.length).fill(0);
        }

        newSeatSelect[rowIndex][seatNumber - 1] = newSeatSelect[rowIndex][seatNumber - 1] === 0 ? 1 : 0;
        setSeatSelect(newSeatSelect);
    };

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/api/movies/${id}`)

            .then(response => {
                setMovie(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
            });
    }, [id]);


    useEffect(() => {
        console.log("Selected Seats:", seatselect);
    }, [seatselect]);
    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div className="body"> <h1>{movie.title}</h1>

            <div className="seats">
                <p style={{ margin: "0 50px", fontSize: "20px" }}>Rs100 FirstClass Ticket</p>
                {rows.map((row, rowIndex) => {
                    if (row !== '') {
                        return (
                            <div className='row' key={row}>
                                <p style={{ padding: "10px", width: "30px", height: "40px", margin: "10px" }}>{row}</p>
                                {Array(rows.length).fill(0).map((_, seatIndex) => (
                                    <div
                                        key={seatIndex}
                                        id={`${row}${seatIndex + 1}`}
                                        onClick={() => handleClick(row, seatIndex + 1)}
                                        style={{
                                            padding: "10px",
                                            width: "30px",
                                            height: "40px",
                                            margin: "10px",
                                            backgroundColor: seatselect[rowIndex] && seatselect[rowIndex][seatIndex] ? "green" : "white",
                                            color: seatselect[rowIndex] && seatselect[rowIndex][seatIndex] ? "white" : "black",
                                            transition: "background-color 0.3s ease",
                                        }}
                                        className="seat"
                                    >
                                        {seatIndex + 1}
                                    </div>
                                ))}
                            </div>
                        );
                    } else {
                        return (
                            <>
                                <hr style={{ margin: "0 100px 0 0" }} />
                                <div style={{ width: '100%', height: "20px" }}></div>
                                <p style={{ margin: "0 50px", fontSize: "20px" }}>Rs50 Nela Ticket</p>

                            </>
                        );
                    }
                })}

            </div>
            <div className="screen">
                <button>Screen this way</button>
            </div>
            <hr style={{ margin: "0 100px 0 0" }} />

            <div className="paybtn">

                <Link to={`/bookingdetails/${movie._id}`}>
                    <button>Pay</button>
                </Link>

            </div>

        </div>
    );
}

export default SeatsBooking;
