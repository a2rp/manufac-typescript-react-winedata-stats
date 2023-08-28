import React, { useEffect, useState } from "react";

const Median = (props: any) => {
    const [array, setArray] = useState(props.theArray || []);
    const [value, setValue] = useState("");

    const mode = (arr: number[]): number => {
        const mode: { [key: number]: number } = {};
        let max = 0,
            count = 0;

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];

            if (mode[item]) {
                mode[item]++;
            } else {
                mode[item] = 1;
            }

            if (count < mode[item]) {
                max = item;
                count = mode[item];
            }
        }

        return max;
    };

    useEffect(() => {
        //function to find the median of the given array
        const value: any = mode(array);
        setValue(value);
    }, [props.theArray]);

    return <div key={value}>{Number(value).toFixed(3)}</div>;
};

export default Median;
