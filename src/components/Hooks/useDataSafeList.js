import { useState } from 'react';

const useSafeList = () => {
    const [safeList, setSafeList] = useState([])

    return [safeList, setSafeList];
}

export default useSafeList;