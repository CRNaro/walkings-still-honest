import React from "react";
import { useState } from "react";
import { Formik } from "formik";

const Hours = () => {
    const [totalHours, setTotalHours] = useState(0);

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