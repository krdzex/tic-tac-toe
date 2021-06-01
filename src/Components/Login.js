import React, { useState } from 'react';

const Login = (props) => {
    const changeTriggerSubmit = (e) => {
        e.preventDefault();
        if (firstPlayer !== "" && sacondPlayer !== "") {
            props.setTrigger(false);
            props.gettingPlayers(firstPlayer, sacondPlayer);
        } else {
            if (firstPlayer === "") {
                setFirstPlayerErr("Name of Player1 cant be empty!");
            } else {
                setFirstPlayerErr("")
            }
            if (sacondPlayer === "") {
                setSacondPlayerErr("Name of Player2 cant be empty!");
            } else {
                setSacondPlayerErr("")
            }
        }
    }

    const [firstPlayer, setFirstPlayer] = useState("");
    const [firstPlayerErr, setFirstPlayerErr] = useState("");
    const [sacondPlayer, setSacondPlayer] = useState("");
    const [sacondPlayerErr, setSacondPlayerErr] = useState("");

    const firstPlayerInput = (e) => {
        setFirstPlayer(e.target.value);
    }
    const sacondPlayerInput = (e) => {
        setSacondPlayer(e.target.value);
    }
    return (props.trigger) ? (
        <div className="loginWrapper">
            <div className="loginForm">
                <form onSubmit={changeTriggerSubmit} >
                    <table className="tableStyle" >
                        <tbody>
                            <tr>
                                <td>
                                    Name Player1:
                        </td>
                            </tr>
                            <tr>
                                <td>
                                    < input placeholder="*This input is required!" style={firstPlayerErr !== "" ? { border: "1px solid red" } : {}} onChange={firstPlayerInput} type="text"></input>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ color: "red", fontSize: 21, fontStyle: 'italic' }}>
                                    {firstPlayerErr}
                                </td>
                            </tr >
                            <tr>
                                <td>
                                    Name Player2:
                        </td>
                            </tr>
                            <tr>
                                <td>
                                    <input placeholder="*This input is required!" style={sacondPlayerErr !== "" ? { border: "1px solid red" } : {}} onChange={sacondPlayerInput} type="text"></input>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ color: "red", fontSize: 21, fontStyle: 'italic' }}>
                                    {sacondPlayerErr}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="submitButton">Submit</button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </form>
            </div >
        </div >
    ) : "";

};

export default Login;