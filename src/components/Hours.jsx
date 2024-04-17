
import { useState } from "react";
import { Formik } from "formik";

const Hours = ({ totalHours, setTotalHours }) => {
    const handleInputChange = (e) => {
        setTotalHours(e.target.value);
    };
    return (
        <Formik>
            <form>  
            Total Hours Worked
            <input
                type="number"
                value={totalHours}
                onChange={handleInputChange}/>
            </form>
        </Formik>
    );
};

export default Hours;