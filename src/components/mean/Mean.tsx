import React, { useEffect, useState } from "react";

const Mean = (props: any) => {
    const [array, setArray] = useState(props.theArray || []);
    const [value, setValue] = useState("");

    useEffect(() => {
        if (array.length > 0) {
            const averageArray = (
                array.reduce((a: number, b: number) => a + b) / array.length
            ).toFixed(3);
            setValue(averageArray);
        }
    }, [props.theArray]);

    return <div key={value}>{Number(value).toFixed(3)}</div>;
};

export default Mean;
