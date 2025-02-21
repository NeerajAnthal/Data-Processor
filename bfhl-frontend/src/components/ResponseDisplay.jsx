import { useState } from "react";

const ResponseDisplay = ({ response }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setSelectedFilters((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="card shadow-lg p-4 border-0 text-center" style={{ width: "400px" }}>
                <h2 className="text-success">Response Data</h2>

                <label className="mt-2">Select Data to Display:</label>
                <select
                    multiple
                    className="form-select mt-2"
                    onChange={handleFilterChange}
                >
                    <option value="numbers">Numbers</option>
                    <option value="alphabets">Alphabets</option>
                    <option value="highest_alphabet">Highest Alphabet</option>
                </select>

                <div className="mt-3 p-3 bg-light rounded border">
                    {selectedFilters.includes("numbers") && (
                        <p><strong>Numbers:</strong> {JSON.stringify(response.numbers)}</p>
                    )}
                    {selectedFilters.includes("alphabets") && (
                        <p><strong>Alphabets:</strong> {JSON.stringify(response.alphabets)}</p>
                    )}
                    {selectedFilters.includes("highest_alphabet") && (
                        <p><strong>Highest Alphabet:</strong> {JSON.stringify(response.highest_alphabet)}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResponseDisplay;
