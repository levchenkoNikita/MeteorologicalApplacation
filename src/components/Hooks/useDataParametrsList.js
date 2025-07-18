import { useState } from 'react';

const useDataParametrsList = () => {
    const [parametrsList, setParametrsList] = useState([
        { id: 1, humidity: "UV-index", visibility: '11' },
        { id: 2, humidity: "UV-index", visibility: '11' },
        { id: 3, humidity: "UV-index", visibility: '11' },
        { id: 4, humidity: "UV-index", visibility: '11' },
        { id: 5, humidity: "UV-index", visibility: '11' },
        { id: 6, humidity: "UV-index", visibility: '11' },
        { id: 7, humidity: "UV-index", visibility: '11' },
        { id: 8, humidity: "UV-index", visibility: '11' }
    ]);

    return [parametrsList, setParametrsList];
}

export default useDataParametrsList;