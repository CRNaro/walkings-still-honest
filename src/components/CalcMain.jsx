import React from "react";
import { useState } from "react";
import { Formik } from "formik";

const CalcMain = () => {
    const [totalCash, setTotalCash] = useState(0);

    const handleInputChange = (e) => {
        setTotalCash(e.target.value);
    };
    return (
        <Formik>
            <form>  
            Total Cash Received
            <input
                type="number"
                value={totalCash}
                onChange={handleInputChange}/>
            </form>
        </Formik>
    );
};

export default CalcMain;