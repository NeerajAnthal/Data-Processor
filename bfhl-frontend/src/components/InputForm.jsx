import { useState } from "react";
import axios from "axios";

const InputForm = ({ setResponse }) => {
    const [jsonInput, setJsonInput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const parsedData = JSON.parse(jsonInput);
            if (!parsedData.data || !Array.isArray(parsedData.data)) {
                throw new Error("Invalid JSON format");
            }

            const response = await axios.post("http://localhost:3000/bfhl", parsedData);
            setResponse(response.data);
        } catch (error) {
            alert("Invalid JSON or Server Error");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card shadow-lg p-4 border-0 text-center" style={{ width: "400px" }}>
                <h2 className="text-primary">Enter JSON Input</h2>
                <textarea
                    className="form-control mt-3"
                    rows="5"
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder='{"data":["A","1","B","2"]}'
                />
                <button className="btn btn-primary mt-3 w-100" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default InputForm;
