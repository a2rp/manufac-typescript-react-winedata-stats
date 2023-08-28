import React, { useEffect, useState } from "react";

const Median = (props: any) => {
    const [array, setArray] = useState(props.theArray || []);
    const [value, setValue] = useState("");

    function median(arr: number[]) {
        const mid = Math.floor(arr.length / 2);
        const sortedArr = arr.sort((a, b) => a - b);

        if (arr.length % 2 === 0) {
            return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
        } else {
            return sortedArr[mid];
        }
    }

    useEffect(() => {
        //function to find the median of the given array
        const value: any = median(array);
        setValue(value);
    }, [props.theArray]);

    return <div key={value}>{Number(value).toFixed(3)}</div>;
};

export default Median;
