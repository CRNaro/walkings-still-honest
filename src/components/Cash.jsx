
import { useState } from "react";
import { Field, Formik } from "formik";
import '../style/Cash.css';

const Cash = ({ totalCash, setTotalCash }) => {
   const handleInputChange = (e) => {
        setTotalCash(e.target.value);
    };

    const [styles, setStyles] = useState({
        width: '25%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        boxShadow: '1px 1px 1px 1px #ccc',
        color: 'rgb(4, 4, 43'
    });

    const focusStyles = {
        borderColor: '1px solid #ccc',
    };

    return (
        <Formik>
            <form>  
                <div>
            Total Cash Received:
            </div>
            <Field
                style={styles}
                onFocus={() => setStyles({ ...styles, borderColor: focusStyles.borderColor })}
                onBlur={() => setStyles({ ...styles, borderColor: '1px solic #ccc' })}
                className="input-field"
                type="number"
                name="totalCash"
                placeholder="Enter Total Cash Received"
                value={totalCash}
                onChange={handleInputChange}/>
            </form>
        </Formik>
    );
};

export default Cash;