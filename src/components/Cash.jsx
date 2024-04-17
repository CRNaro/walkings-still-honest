
import { useState } from "react";
import { Formik } from "formik";

const Cash = ({ totalCash, setTotalCash }) => {
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

export default Cash;