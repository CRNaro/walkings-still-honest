
import { useState } from "react";
import { Formik } from "formik";
import '../style/Cash.css';

const Cash = ({ totalCash, setTotalCash }) => {
   const handleInputChange = (e) => {
        setTotalCash(e.target.value);
    };
    return (
        <Formik>
            <form>  
                <div>
            Total Cash Received:
            </div>
            <input
                className="input-field"
                type="number"
                placeholder="Enter Total Cash Received"
                value={totalCash}
                onChange={handleInputChange}/>
            </form>
        </Formik>
    );
};

export default Cash;