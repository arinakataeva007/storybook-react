// import React, { Component, ReactNode, createRef } from 'react';
// import LabelComponent from '../../atoms/label/label.component';
// import './button.style.scss';

// interface ButtonComponentProps {
//   state: string;
//   theme: string;
//   size: string;
//   label: string;
//   showIcon: boolean;
//   showText: boolean;
//   onSendAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   disabled?: boolean;
//   children?: ReactNode;
// }

// class ButtonComponent extends Component<ButtonComponentProps> {
//   static defaultProps = {
//     state: 'secondary',
//     showIcon: false,
//     showText: false,
//     disabled: false,
//   };

//   private buttonRef = createRef<HTMLButtonElement>();

//   constructor(props: ButtonComponentProps) {
//     super(props);
//     this.sendActions = this.sendActions.bind(this);
//   }

//   classes() {
//     const { state, theme, disabled } = this.props;
//     if (disabled) {
//       return [
//         `button--${state}`,
//         `button--${state}--${theme}`,
//         `button--disabled--${state}`,
//         `button--disabled--${state}--${theme}`,
//       ].join(' ');
//     }
//     return [`button--${state}`, `button--${state}--${theme}`].join(' ');
//   }

//   sendActions(event: React.MouseEvent<HTMLButtonElement>) {
//     const { onSendAction } = this.props;
//     if (this.buttonRef.current) {
//       this.buttonRef.current.blur();
//     }
//     if (onSendAction) {
//       onSendAction(event);
//     }
//   }

//   renderChildrenWithSlot(slotName: string) {
//     const { children } = this.props;
//     return React.Children.map(children, (child) =>
//       React.isValidElement(child) && child.props.slot === slotName ? child : null
//     );
//   }

//   render() {
//     const { label, showIcon, showText, theme, disabled } = this.props;

//     return (
//       <button
//         ref={this.buttonRef}
//         className={`button ${this.classes()}`}
//         onClick={this.sendActions}
//         disabled={disabled}
//       >
//         <div className="label-container">
//           <LabelComponent
//             size="base"
//             label={label}
//             showIcon={showIcon}
//             showText={showText}
//             isOwner={true}
//             iconPadding={'right'}
//             theme={theme}
//           >
//             {this.renderChildrenWithSlot("prev-icon")}
//           </LabelComponent>
//         </div>
//       </button>
//     );
//   }
// }

// export default ButtonComponent;
