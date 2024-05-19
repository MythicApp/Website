"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../../_components/navigation/navbar";
import Docsnav from "../../../_components/navigation/documentation-navbar";

interface Game {
    game_name: string;
    game_rating: string;
    game_notes?: string;
}

export default function Compatibility() {
    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState<Game[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);
    const [initialLoadTime, setInitialLoadTime] = useState(0);

    useEffect(() => {
        setInitialLoadTime((Date.now() - performance.timing.navigationStart) / 1000);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/MythicApp/Compatibility-Database/main/games.json");
                const data = await response.json();
                setGames(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setFilteredGames(games.filter((game) => game.game_name.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [games, searchTerm]);

    const renderGameRating = (game: Game) => {
        const ratings = ["Doesn't run", "Unplayable", "Runs", "Playable", "Perfect", "Unknown"];
        const averageRating = parseInt(game.game_rating);
        const ratingText = ratings[averageRating - 1] || "Unknown";
        return ratingText;
    };

    return (
        <div>
            <Navbar />
            <Docsnav />
            <div className="CTA">
                <div style={{ textAlign: "left", justifyContent: "center", alignItems: "center" }}>
                    <h1>Compatibility Database</h1>
                    <p>This database is not in sync with Mythic users their experience at this time but from external sources.</p>
                    <input
                        type="text"
                        placeholder="Search by game name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <p>
                        Total games: {filteredGames.length} {searchTerm ? "found" : "loaded"}{" "}
                        {loading ? "..." : searchTerm ? "" : `in ${initialLoadTime.toFixed(2)} seconds`}
                    </p>
                    {loading ? (
                        <p>Fetching games...</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Game Name</th>
                                    <th>Playability Rating</th>
                                    <th>Notes and Fixes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredGames.map((game) => (
                                    <tr key={game.game_name}>
                                        <td>{game.game_name}</td>
                                        <td>{renderGameRating(game)}</td>
                                        <td>{game.game_notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
