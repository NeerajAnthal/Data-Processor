import { useState } from "react";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
    const [response, setResponse] = useState(null);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" >
            <h1 className="mb-4 text-warning text-center">Data Processor</h1>
            <InputForm setResponse={setResponse} />
            {response && <ResponseDisplay response={response} />}
        </div>
    );
};

export default App;
