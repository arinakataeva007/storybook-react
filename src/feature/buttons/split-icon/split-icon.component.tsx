// import React from 'react';
// import CheckBoxComponent from '../../atoms/checkbox/check-box.component'; 
// import './split-icon.style.scss';

// const SplitIconComponent = ({ name, checkBoxId, theme, onSendState, disabled, children }:any) => {
//   const classes = () => {
//     return [];
//   };

//   const changeChoice = () => {
//     const isChoice = true;
//     onSendState(isChoice);
//   };

//   const applyFilter = () => {
//     const isChoice = !disabled; 
//     onSendState(isChoice);
//   };

//   return (
//     <div className={classes().join(' ')}>
//       {name === 'filter-checkbox' && (
//         <>
//           <CheckBoxComponent 
//             onSendState={applyFilter} 
//             disabled={disabled} 
//             checkBoxId={checkBoxId} 
//             theme={theme} 
//           />
//           {React.Children.map(children, (child) =>
//             child.props.slot === "filter-icon" && child
//           )}
//         </>
//       )}
//       {name === 'add-icon' && (
//         <>
//           {React.Children.map(children, (child) =>
//             child.props.slot === "add-icon" && child
//           )}
//           <svg
//             onClick={changeChoice}
//             className="add-icon"
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//           >
//             <mask
//               id="mask0_38_7908"
//               style={{ maskType: 'alpha' }}
//               maskUnits="userSpaceOnUse"
//               x="0"
//               y="0"
//               width="16"
//               height="16"
//             >
//               <rect width="16" height="16" fill="#D9D9D9" />
//             </mask>
//             <g mask="url(#mask0_38_7908)">
//               <path
//                 d="M7.33325 12.6667V8.66668H3.33325V7.33334H7.33325V3.33334H8.66658V7.33334H12.6666V8.66668H8.66658V12.6667H7.33325Z"
//                 fill="#42444A"
//               />
//             </g>
//           </svg>
//         </>
//       )}
//     </div>
//   );
// };

// export default SplitIconComponent;
