
// importng useState reack hook
import { useState } from "react";

// importing calculatin part
import Controls from "./Controls";

// importing css file for style
import styles from "../Styles/calculator.module.css";

// render the calculator
const Calculator = () => {
    
    // state for storing the output 
    const [output,setOutput] = useState(0);
    // state for storing the input ( in string )
    const [input,setInput] = useState('0');
    

    // render the display component and Controls component
    return (
        // calculator container
        <div className={styles.calculatorLayout}>
            
            {/* display component to show input and output */}
            {/* passing the state as props */}
            <div className={styles.display}>

                {/* section to show the input entered by the user */}
                <div className={styles.inputSection}>
                    {/* if input is '0' show nothing */}
                    {input !== '0' ? input : null}
                </div>

                {/* section to show the output of user's input */}
                <div className={styles.outputSection}>

                    {/* if input is not '0' then show answer otherwise show '0' */}
                    {input !== '0' ?`=${output}` : output}
                </div>

            </div>
            {/* Controls component to show all the buttons and implement their funtionality */}
            {/* passing the state and setState methods as props */}
            <Controls input={input}
                    output={output} 
                    setInput={setInput} 
                    setOutput={setOutput} />

        </div>
    );
}


// export the component
export default Calculator;