import React, { useCallback } from 'react';


const onInsert = useCallback((text, id, list, setList) => {
    const listItem = {
        id: id.current,
        text,
        checked: false
    }
    setList(list.concat(listItem))
    id.current += 1;
}, [list]);

export default onInsert;