import { useInput } from './Hooks/Hooks';

function DynamicInputData() {
    const [inputData, setInputData] = useInput({}); // State for the input data

    const handleAddInput = (e) => {
        e.preventDefault()
        console.log(inputData)
    };

    return (
        <form onSubmit={handleAddInput}>
            <input
                name='name'
                placeholder='name'
                type='text'
                onChange={(e) => setInputData(e)}
                required
            />
            <input
                name='email'
                placeholder='email'
                type='email'
                onChange={(e) => setInputData(e)}
                required
            />
            <input
                name='age'
                type='number'
                placeholder='age'
                onChange={(e) => setInputData(e)}
                required
            />
            <input
                name='alamat'
                placeholder='alamat'
                type='text'
                onChange={(e) => setInputData(e)}
                required
            />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default DynamicInputData;
