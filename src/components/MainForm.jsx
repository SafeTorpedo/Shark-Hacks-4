import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainForm = () => {
    let navigate = useNavigate();

    const [error, setError] = useState("");
    const [data, setData] = useState({ name: "", room: "" });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const validation = () => {
        if (!data.name) {
            setError("Please enter your name.");
            return false;
        }
        if (!data.room) {
            setError("Please select room.");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (isValid) {
            navigate(`/chat/${data.room}`, { state: data });
        }
    };

    return (
        <div className="row d-flex justify-content-center py-5">
            <div className="px-3 py-5 mt-auto shadow bg-inherit text-dark col-6  ">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <h2 className="text-white text-center mb-4">
                            Welcome to{" "}
                            <span className="text-info">Sharky </span>
                            Chat
                        </h2>
                    </div>
                    <div className="form-group mb-4">
                        <input
                            type="name"
                            className="form-control bg-light"
                            name="name"
                            placeholder="Enter name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <select
                            className="form-select bg-light"
                            name="room"
                            aria-label="Default select example"
                            onChange={handleChange}
                        >
                            <option value="">Select Room</option>
                            <option value="blahaj">BLAHAJ</option>
                            <option value="general">General</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-info w-100 mb-2">
                        Submit
                    </button>
                    {error ? (
                        <small className="text-danger m-auto text-medium">
                            {error}
                        </small>
                    ) : (
                        ""
                    )}
                </form>
            </div>
        </div>
    );
};

export default MainForm;
