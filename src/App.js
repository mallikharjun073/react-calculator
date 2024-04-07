
// importing css styles from Styles folder 
import styles from "./Styles/app.module.css";

// importing Calculator component
import Calculator from "./Components/Calculator";



function App() {

  // return the main page of application
  return (
    // main container 
    <div className={styles.mainContainer}>
      <Calculator />    
    </div>
  );
}

export default App;
