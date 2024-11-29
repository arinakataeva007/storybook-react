// import React, { useState, useEffect } from 'react';

// const RichTextField = ({
//   placeholder = '',
//   hint = '',
//   showHint = false,
//   theme = 'light-theme',
//   value = '',
//   disabled = false,
//   onChange = () => {},
//   onInput = () => {}
// }) => {
//   const [rlValue, setRlValue] = useState(value);

//   // Sync with external changes (similar to ngOnChanges in Angular)
//   useEffect(() => {
//     setRlValue(value);
//   }, [value]);

//   const handleInput = (event) => {
//     const { value } = event.target;
//     setRlValue(value);
//     onInput(value);
//   };

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setRlValue(value);
//     onChange(value);
//   };

//   return (
//     <div>
//       <textarea
//         className={`rich-text-field ${theme === 'dark-theme' ? 'dark-theme' : ''}`}
//         placeholder={placeholder}
//         disabled={disabled}
//         value={rlValue}
//         onInput={handleInput}
//         onChange={handleChange}
//       ></textarea>
//       {showHint && <div className="hint-container-rich">{hint}</div>}
//     </div>
//   );
// };

// export default RichTextField;
