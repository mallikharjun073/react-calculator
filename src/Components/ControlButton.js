
// to show a single button on the control layout
const ControlButton = (props) => {
    const {index,value,handleClick} = props;
    return (
        <div className={`card${index}`} onClick={() => handleClick(value)}>
                {/* button value */}
                {value !== '*' ? value : 'x'}
        </div>
    );
}

// exporting the component
export default ControlButton;