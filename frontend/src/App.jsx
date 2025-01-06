import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNavBar from "./LeftNavBar"; // Import the LeftNavBar component

function App() {
    const [lessons, setLessons] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("/api/lessons/")
            .then((response) => {
                setLessons(response.data);
            })
            .catch((err) => {
                setError("Failed to fetch lessons");
            });
    }, []);

    return (
        <div className="flex h-screen">
            {/* Left Navigation Bar */}
            <LeftNavBar />

            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">French Lessons</h1>
                {error && <p className="text-red-500">{error}</p>}
                <ul>
                    {lessons.map((lesson) => (
                        <li key={lesson.id} className="mb-4">
                            <h2 className="text-2xl font-semibold">{lesson.title}</h2>
                            <p>{lesson.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
