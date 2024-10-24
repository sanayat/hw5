import React, { useState } from 'react';

    const MainPage = () => {
        const [nameInput, setNameInput] = useState('');
        const [names, setNames] = useState([]);

        const addName = () => {
            if (nameInput.trim()) {
                setNames([...names, nameInput]);
                setNameInput('');
            }
        };

        const changeName = (index) => {
            if (nameInput.trim()) {
                const updatedNames = [...names];
                updatedNames[index] = nameInput;
                setNames(updatedNames);
            }
        };

        return (
            <div>
                <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Введите имя"
                />
                <button onClick={addName} disabled={!nameInput.trim()}>
                    Добавить
                </button>

                {names.length === 0 ? (
                    <p>Список пуст</p>
                ) : (
                    <ul>
                        {names.map((name, index) => (
                            <li key={index}>
                                {name}
                                <button onClick={() => changeName(index)} disabled={!nameInput.trim()}>
                                    Поменять
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    export default MainPage;


