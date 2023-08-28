// import "./App.css";
import styles from "./styles.module.scss";
import { wineDataSet } from "./files/wineDataSet";
import { useEffect, useState } from "react";
import Mean from "./components/mean";
import Median from "./components/median";
import Mode from "./components/mode";

function App() {
    const [class1Array, setClass1Array] = useState([]);
    const [class2Array, setClass2Array] = useState([]);
    const [class3Array, setClass3Array] = useState([]);

    const [gamma1Array, setGamma1Array] = useState(Array());
    const [gamma2Array, setGamma2Array] = useState([]);
    const [gamma3Array, setGamma3Array] = useState([]);

    useEffect(() => {
        const class1: any = []; // alcholo = 1
        const class2: any = []; // alcholo = 2
        const class3: any = []; // alcholo = 3

        const gamma1: any = []; // alcholo = 1
        const gamma2: any = []; // alcholo = 2
        const gamma3: any = []; // alcholo = 3

        wineDataSet.map((item) => {
            if (item["Alcohol"] === 1) {
                class1.push(item);
                gamma1.push(
                    (Number(item["Ash"]) * Number(item["Hue"])) /
                        item["Magnesium"]
                );
            } else if (item["Alcohol"] === 2) {
                class2.push(item);
                gamma2.push(
                    (Number(item["Ash"]) * Number(item["Hue"])) /
                        item["Magnesium"]
                );
            } else if (item["Alcohol"] === 3) {
                class3.push(item);
                gamma3.push(
                    (Number(item["Ash"]) * Number(item["Hue"])) /
                        item["Magnesium"]
                );
            }
        });

        setGamma1Array(gamma1);
        setGamma2Array(gamma2);
        setGamma3Array(gamma3);

        const tempClass1Array: any = [];
        Object.entries(class1).forEach(([key, value], index) => {
            tempClass1Array.push(parseFloat(class1[key]["Flavanoids"]));
        });
        setClass1Array(tempClass1Array);

        const tempClass2Array: any = [];
        Object.entries(class2).forEach(([key, value], index) => {
            tempClass2Array.push(parseFloat(class2[key]["Flavanoids"]));
        });
        setClass2Array(tempClass2Array);

        const tempClass3Array: any = [];
        Object.entries(class3).forEach(([key, value], index) => {
            tempClass3Array.push(parseFloat(class3[key]["Flavanoids"]));
        });
        setClass3Array(tempClass3Array);
    }, []);

    useEffect(() => {
        // console.log(class1Array, class2Array, class3Array);
    }, [class1Array, class2Array, class3Array]);

    useEffect(() => {
        // console.log(gamma1Array, gamma2Array, gamma3Array);
    }, [gamma1Array, gamma2Array, gamma3Array]);

    // gamma calculation

    return (
        <div className={styles.container}>
            <h1>Some Statistical Measures Of The Wine Data Set</h1>
            <table>
                <thead>
                    <tr>
                        <th>Measure</th>
                        <th>Alcohol - Class 1</th>
                        <th>Alcohol - Class 2</th>
                        <th>Alcohol - Class 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Flavanoids Mean</td>
                        <td>
                            <Mean key={class1Array} theArray={class1Array} />
                        </td>
                        <td>
                            <Mean key={class2Array} theArray={class2Array} />
                        </td>
                        <td>
                            <Mean key={class3Array} theArray={class3Array} />
                        </td>
                    </tr>
                    <tr>
                        <td>Flavanoids Median</td>
                        <td>
                            <Median key={class1Array} theArray={class1Array} />
                        </td>
                        <td>
                            <Median key={class2Array} theArray={class2Array} />
                        </td>
                        <td>
                            <Median key={class3Array} theArray={class3Array} />
                        </td>
                    </tr>
                    <tr>
                        <td>Flavanoids Mode</td>
                        <td>
                            <Mode key={class1Array} theArray={class1Array} />
                        </td>
                        <td>
                            <Mode key={class2Array} theArray={class2Array} />
                        </td>
                        <td>
                            <Mode key={class3Array} theArray={class3Array} />
                        </td>
                    </tr>
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>Measure</th>
                        <th>Alcohol - Class 1</th>
                        <th>Alcohol - Class 2</th>
                        <th>Alcohol - Class 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gamma Mean</td>
                        <td>
                            <Mean key={gamma1Array} theArray={gamma1Array} />
                        </td>
                        <td>
                            <Mean key={gamma2Array} theArray={gamma2Array} />
                        </td>
                        <td>
                            <Mean key={gamma3Array} theArray={gamma3Array} />
                        </td>
                    </tr>
                    <tr>
                        <td>Gamma Median</td>
                        <td>
                            <Median key={gamma1Array} theArray={gamma1Array} />
                        </td>
                        <td>
                            <Median key={gamma2Array} theArray={gamma2Array} />
                        </td>
                        <td>
                            <Median key={gamma3Array} theArray={gamma3Array} />
                        </td>
                    </tr>
                    <tr>
                        <td>Gamma Mode</td>
                        <td>
                            <Mode key={gamma1Array} theArray={gamma1Array} />
                        </td>
                        <td>
                            <Mode key={gamma2Array} theArray={gamma2Array} />
                        </td>
                        <td>
                            <Mode key={gamma3Array} theArray={gamma3Array} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
