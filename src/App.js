// Global Import
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Local Import
import "./dist/App.scss";
import Tasks from "./components/Tasks";
import Login from "./components/Login";

export default function App() {

    const [login, setLogin] = useState(false)

    return (
        <BrowserRouter>
            <div className="App">
                <DragDropContext  >
                    <Routes>
                        <Route path="/" element={<Login login={login} setLogin={setLogin} />} />
                        {login && <Route path="/board/:name" element={<Tasks />} />}
                    </Routes>
                </DragDropContext>
            </div>
        </BrowserRouter>
    );
}
