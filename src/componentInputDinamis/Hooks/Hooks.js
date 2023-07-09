import { useState } from 'react';

export const useInput = (initial) => {
    const [value, setValue] = useState(initial);

    const handleChange = (e) => {
        const updatedData = { ...value };
        updatedData[e.target.name] = e.target.value;
        setValue(updatedData);
    };

    return [value, handleChange];
}