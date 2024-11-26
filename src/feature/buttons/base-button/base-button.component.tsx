import React, { Component } from 'react';
import './base-button.style.scss';
import { SizeProps, ThemeProps } from "../../../shared/defaultProps";

export interface BaseButtonProps extends SizeProps, ThemeProps{
  name: string;
  isOwner?: boolean;
}

export class BaseButton extends Component<BaseButtonProps> {
  private baseBtnEl: React.RefObject<HTMLButtonElement>;

  constructor(props: BaseButtonProps) {
    super(props);
    this.baseBtnEl = React.createRef<HTMLButtonElement>();
    this.removeFocus = this.removeFocus.bind(this);
  }

  componentDidMount() {
    const { disabled } = this.props;
    if (disabled && this.baseBtnEl.current) {
      this.baseBtnEl.current.disabled = true;
    }
  }

  componentDidUpdate(prevProps: BaseButtonProps) {
    const { disabled } = this.props;
    if (prevProps.disabled !== disabled && this.baseBtnEl.current) {
      this.baseBtnEl.current.disabled = disabled ?? false;
    }
  }

  removeFocus() {
    if (this.baseBtnEl.current) {
      this.baseBtnEl.current.blur();
    }
  }

  getClasses() {
    const { isOwner, size, theme, disabled } = this.props;
    const mode = isOwner ? 'with-owner' : '';
    if (disabled) {
      return `symbol-size--${size} symbol-theme--disabled--${theme} symbol-disabled ${mode}`;
    }
    return `symbol-size--${size} symbol-theme--${theme} ${mode}`;
  }

  renderIcon() {
    const { name } = this.props;

    if (name === 'app') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <mask
            id="mask0_38_7913"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <rect width="16" height="16" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_38_7913)">
            <path
              d="M11.1 8.66679L7.33333 4.90012L11.1 1.13345L14.8667 4.90012L11.1 8.66679ZM2 7.33345V2.00012H7.33333V7.33345H2ZM8.66667 14.0001V8.66679H14V14.0001H8.66667ZM2 14.0001V8.66679H7.33333V14.0001H2ZM3.33333 6.00012H6V3.33345H3.33333V6.00012ZM11.1167 6.80012L13 4.91679L11.1167 3.03345L9.23333 4.91679L11.1167 6.80012ZM10 12.6668H12.6667V10.0001H10V12.6668ZM3.33333 12.6668H6V10.0001H3.33333V12.6668Z"
              fill="#42444A"
            />
          </g>
        </svg>
      );
    }

    if (name === 'app_fill') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <mask
            id="mask0_38_7900"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <rect width="16" height="16" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_38_7900)">
            <path
              d="M11.1 8.66664L7.33333 4.89997L11.1 1.1333L14.8667 4.89997L11.1 8.66664ZM2 7.3333V1.99997H7.33333V7.3333H2ZM8.66667 14V8.66664H14V14H8.66667ZM2 14V8.66664H7.33333V14H2Z"
              fill="#1D8828"
            />
          </g>
        </svg>
      );
    }

    if (name === 'check-box_checked_fill') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7910"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7910)">
					<path
						d="M7.06667 10.8L11.7667 6.1L10.8333 5.16667L7.06667 8.93333L5.16667 7.03333L4.23333 7.96667L7.06667 10.8ZM3.33333 14C2.96667 14 2.65267 13.8696 2.39133 13.6087C2.13044 13.3473 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13044 2.65267 2.39133 2.39133C2.65267 2.13044 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3473 2.13044 13.6087 2.39133C13.8696 2.65267 14 2.96667 14 3.33333V12.6667C14 13.0333 13.8696 13.3473 13.6087 13.6087C13.3473 13.8696 13.0333 14 12.6667 14H3.33333Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }

    if (name === 'check-box_checked_line') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7850"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7850)">
					<path
						d="M7.06667 10.8L11.7667 6.1L10.8333 5.16667L7.06667 8.93333L5.16667 7.03333L4.23333 7.96667L7.06667 10.8ZM3.33333 14C2.96667 14 2.65278 13.8694 2.39167 13.6083C2.13056 13.3472 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13056 2.65278 2.39167 2.39167C2.65278 2.13056 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3472 2.13056 13.6083 2.39167C13.8694 2.65278 14 2.96667 14 3.33333V12.6667C14 13.0333 13.8694 13.3472 13.6083 13.6083C13.3472 13.8694 13.0333 14 12.6667 14H3.33333ZM3.33333 12.6667H12.6667V3.33333H3.33333V12.6667Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'check-box_indeterminate') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7914"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7914)">
					<path
						d="M4.66667 8.66667H11.3333V7.33333H4.66667V8.66667ZM3.33333 14C2.96667 14 2.65267 13.8696 2.39133 13.6087C2.13044 13.3473 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13044 2.65267 2.39133 2.39133C2.65267 2.13044 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3473 2.13044 13.6087 2.39133C13.8696 2.65267 14 2.96667 14 3.33333V12.6667C14 13.0333 13.8696 13.3473 13.6087 13.6087C13.3473 13.8696 13.0333 14 12.6667 14H3.33333Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'check-box_unchecked') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7871"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7871)">
					<path
						d="M3.33333 14C2.96667 14 2.65267 13.8696 2.39133 13.6087C2.13044 13.3473 2 13.0333 2 12.6667V3.33333C2 2.96667 2.13044 2.65267 2.39133 2.39133C2.65267 2.13044 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3473 2.13044 13.6087 2.39133C13.8696 2.65267 14 2.96667 14 3.33333V12.6667C14 13.0333 13.8696 13.3473 13.6087 13.6087C13.3473 13.8696 13.0333 14 12.6667 14H3.33333ZM3.33333 12.6667H12.6667V3.33333H3.33333V12.6667Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'plc') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<g clip-path="url(#clip0_38_8304)">
					<mask
						id="mask0_38_8304"
						style={{ maskType: 'alpha' }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="16"
						height="16">
						<rect
							x="16"
							width="16"
							height="16"
							transform="rotate(90 16 0)"
							fill="#D9D9D9" />
					</mask>
					<g mask="url(#mask0_38_8304)">
						<path
							d="M12.1053 5C12.1053 4.72222 12.0131 4.48622 11.8286 4.292C11.6446 4.09733 11.4211 4 11.1579 4C10.8947 4 10.6712 4.09733 10.4872 4.292C10.3027 4.48622 10.2105 4.72222 10.2105 5C10.2105 5.27778 10.3027 5.51378 10.4872 5.708C10.6712 5.90267 10.8947 6 11.1579 6C11.4211 6 11.6446 5.90267 11.8286 5.708C12.0131 5.51378 12.1053 5.27778 12.1053 5ZM5.78947 5C5.78947 4.72222 5.69726 4.48622 5.51284 4.292C5.32884 4.09733 5.10526 4 4.84211 4C4.57895 4 4.35537 4.09733 4.17137 4.292C3.98695 4.48622 3.89474 4.72222 3.89474 5C3.89474 5.27778 3.98695 5.51378 4.17137 5.708C4.35537 5.90267 4.57895 6 4.84211 6C5.10526 6 5.32884 5.90267 5.51284 5.708C5.69726 5.51378 5.78947 5.27778 5.78947 5ZM14 2.66667L14 13.3333C14 13.5222 13.9396 13.6804 13.8187 13.808C13.6975 13.936 13.5474 14 13.3684 14L8.94737 14C8.76842 14 8.61853 13.936 8.49768 13.808C8.37642 13.6804 8.31579 13.5222 8.31579 13.3333L8.31579 2.66667C8.31579 2.47778 8.37642 2.31956 8.49768 2.192C8.61853 2.064 8.76842 2 8.94737 2L13.3684 2C13.5474 2 13.6975 2.064 13.8187 2.192C13.9396 2.31956 14 2.47778 14 2.66667ZM12.7368 3.33333L9.57895 3.33333L9.57895 12.6667L12.7368 12.6667L12.7368 3.33333ZM7.68421 2.66667L7.68421 13.3333C7.68421 13.5222 7.62379 13.6804 7.50295 13.808C7.38168 13.936 7.23158 14 7.05263 14L2.63158 14C2.45263 14 2.30274 13.936 2.1819 13.808C2.06063 13.6804 2 13.5222 2 13.3333L2 2.66667C2 2.47778 2.06063 2.31956 2.1819 2.192C2.30274 2.064 2.45263 2 2.63158 2L7.05263 2C7.23158 2 7.38169 2.064 7.50295 2.192C7.62379 2.31956 7.68421 2.47778 7.68421 2.66667ZM6.42105 3.33333L3.26316 3.33333L3.26316 12.6667L6.42105 12.6667L6.42105 3.33333Z"
							fill="#42444A" />
					</g>
				</g>
				<defs>
					<clipPath id="clip0_38_8304">
						<rect
							width="16"
							height="16"
							rx="2"
							fill="white" />
					</clipPath>
				</defs>
			</svg>
      );
    }
    if (name === 'circuit') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7861"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7861)">
					<path
						d="M9.99992 14V12H7.33325V5.33333H5.99992V7.33333H1.33325V2H5.99992V4H9.99992V2H14.6666V7.33333H9.99992V5.33333H8.66658V10.6667H9.99992V8.66667H14.6666V14H9.99992ZM11.3333 6H13.3333V3.33333H11.3333V6ZM11.3333 12.6667H13.3333V10H11.3333V12.6667ZM2.66659 6H4.66658V3.33333H2.66659V6Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'table') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_8404"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_8404)">
					<path
						d="M2 14V2H14V14H2ZM3.33333 6H12.6667V3.33333H3.33333V6ZM6.88333 9.33333H9.11667V7.33333H6.88333V9.33333ZM6.88333 12.6667H9.11667V10.6667H6.88333V12.6667ZM3.33333 9.33333H5.55V7.33333H3.33333V9.33333ZM10.45 9.33333H12.6667V7.33333H10.45V9.33333ZM3.33333 12.6667H5.55V10.6667H3.33333V12.6667ZM10.45 12.6667H12.6667V10.6667H10.45V12.6667Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'app_fill') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <mask
            id="mask0_38_7900"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <rect width="16" height="16" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_38_7900)">
            <path
              d="M11.1 8.66664L7.33333 4.89997L11.1 1.1333L14.8667 4.89997L11.1 8.66664ZM2 7.3333V1.99997H7.33333V7.3333H2ZM8.66667 14V8.66664H14V14H8.66667ZM2 14V8.66664H7.33333V14H2Z"
              fill="#1D8828"
            />
          </g>
        </svg>
      );
    }
    if (name === 'workstation') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<g clip-path="url(#clip0_38_8462)">
					<mask
						id="mask0_38_8462"
						style={{ maskType: 'alpha' }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="16"
						height="16">
						<rect
							width="16"
							height="16"
							fill="#D9D9D9" />
					</mask>
					<g mask="url(#mask0_38_8462)">
						<path
							d="M5.33325 14V12.6667H6.66658V11.3333H2.66659C2.29992 11.3333 1.98614 11.2029 1.72525 10.942C1.46392 10.6807 1.33325 10.3667 1.33325 10V3.33333C1.33325 2.96667 1.46392 2.65267 1.72525 2.39133C1.98614 2.13044 2.29992 2 2.66659 2H13.3333C13.6999 2 14.0139 2.13044 14.2753 2.39133C14.5361 2.65267 14.6666 2.96667 14.6666 3.33333V10C14.6666 10.3667 14.5361 10.6807 14.2753 10.942C14.0139 11.2029 13.6999 11.3333 13.3333 11.3333H9.33325V12.6667H10.6666V14H5.33325ZM2.66659 10H13.3333V3.33333H2.66659V10Z"
							fill="#42444A" />
					</g>
				</g>
				<defs>
					<clipPath id="clip0_38_8462">
						<rect
							width="16"
							height="16"
							rx="2"
							fill="white" />
					</clipPath>
				</defs>
			</svg>
      );
    }
    if (name === 'BDE-selection') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7896"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7896)">
					<path
						d="M4.66667 11.3333V4.66667H11.3333V11.3333H4.66667ZM6 10H10V6H6V10ZM2 11.3333V10H3.33333V11.3333H2ZM2 6V4.66667H3.33333V6H2ZM4.66667 14V12.6667H6V14H4.66667ZM4.66667 3.33333V2H6V3.33333H4.66667ZM10 14V12.6667H11.3333V14H10ZM10 3.33333V2H11.3333V3.33333H10ZM12.6667 11.3333V10H14V11.3333H12.6667ZM12.6667 6V4.66667H14V6H12.6667Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'BDE-template') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7874"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7874)">
					<path
						d="M6 14C5.63333 14 5.31944 13.8694 5.05833 13.6083C4.79722 13.3472 4.66667 13.0333 4.66667 12.6667V6C4.66667 5.63333 4.79722 5.31944 5.05833 5.05833C5.31944 4.79722 5.63333 4.66667 6 4.66667H12.6667C13.0333 4.66667 13.3472 4.79722 13.6083 5.05833C13.8694 5.31944 14 5.63333 14 6V12.6667C14 13.0333 13.8694 13.3472 13.6083 13.6083C13.3472 13.8694 13.0333 14 12.6667 14H6ZM6 7.33333H12.6667V6H6V7.33333ZM8.66667 10H10V8.66667H8.66667V10ZM8.66667 12.6667H10V11.3333H8.66667V12.6667ZM6 10H7.33333V8.66667H6V10ZM11.3333 10H12.6667V8.66667H11.3333V10ZM6 12.6667H7.33333V11.3333H6V12.6667ZM11.3333 12.6667H12.6667V11.3333H11.3333V12.6667ZM3.33333 11.3333C2.96667 11.3333 2.65278 11.2028 2.39167 10.9417C2.13056 10.6806 2 10.3667 2 10V3.33333C2 2.96667 2.13056 2.65278 2.39167 2.39167C2.65278 2.13056 2.96667 2 3.33333 2H10C10.3667 2 10.6806 2.13056 10.9417 2.39167C11.2028 2.65278 11.3333 2.96667 11.3333 3.33333V4H10V3.33333H3.33333V10H4V11.3333H3.33333Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'action') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7901"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7901)">
					<path
						d="M7.03341 12.1333L10.4834 8.00001H7.81675L8.30008 4.21668L5.21675 8.66668H7.53341L7.03341 12.1333ZM5.33341 14.6667L6.00008 10H2.66675L8.66675 1.33334H10.0001L9.33342 6.66668H13.3334L6.66675 14.6667H5.33341Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'add') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7896"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7896)">
					<path
						d="M4.66667 11.3333V4.66667H11.3333V11.3333H4.66667ZM6 10H10V6H6V10ZM2 11.3333V10H3.33333V11.3333H2ZM2 6V4.66667H3.33333V6H2ZM4.66667 14V12.6667H6V14H4.66667ZM4.66667 3.33333V2H6V3.33333H4.66667ZM10 14V12.6667H11.3333V14H10ZM10 3.33333V2H11.3333V3.33333H10ZM12.6667 11.3333V10H14V11.3333H12.6667ZM12.6667 6V4.66667H14V6H12.6667Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'add-circle') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7912"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7912)">
					<path
						d="M7.33325 11.3333H8.66658V8.66665H11.3333V7.33331H8.66658V4.66665H7.33325V7.33331H4.66658V8.66665H7.33325V11.3333ZM7.99992 14.6666C7.0777 14.6666 6.21103 14.4915 5.39992 14.1413C4.58881 13.7915 3.88325 13.3166 3.28325 12.7166C2.68325 12.1166 2.20836 11.4111 1.85859 10.6C1.50836 9.78887 1.33325 8.9222 1.33325 7.99998C1.33325 7.07776 1.50836 6.21109 1.85859 5.39998C2.20836 4.58887 2.68325 3.88331 3.28325 3.28331C3.88325 2.68331 4.58881 2.2082 5.39992 1.85798C6.21103 1.5082 7.0777 1.33331 7.99992 1.33331C8.92214 1.33331 9.78881 1.5082 10.5999 1.85798C11.411 2.2082 12.1166 2.68331 12.7166 3.28331C13.3166 3.88331 13.7915 4.58887 14.1413 5.39998C14.4915 6.21109 14.6666 7.07776 14.6666 7.99998C14.6666 8.9222 14.4915 9.78887 14.1413 10.6C13.7915 11.4111 13.3166 12.1166 12.7166 12.7166C12.1166 13.3166 11.411 13.7915 10.5999 14.1413C9.78881 14.4915 8.92214 14.6666 7.99992 14.6666ZM7.99992 13.3333C9.48881 13.3333 10.7499 12.8166 11.7833 11.7833C12.8166 10.75 13.3333 9.48887 13.3333 7.99998C13.3333 6.51109 12.8166 5.24998 11.7833 4.21665C10.7499 3.18331 9.48881 2.66665 7.99992 2.66665C6.51103 2.66665 5.24992 3.18331 4.21658 4.21665C3.18325 5.24998 2.66659 6.51109 2.66659 7.99998C2.66659 9.48887 3.18325 10.75 4.21658 11.7833C5.24992 12.8166 6.51103 13.3333 7.99992 13.3333Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }
    if (name === 'add-item') {
      return (
        <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none">
				<mask
					id="mask0_38_7879"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="16"
					height="16">
					<rect
						width="16"
						height="16"
						fill="#D9D9D9" />
				</mask>
				<g mask="url(#mask0_38_7879)">
					<path
						d="M2 10.6667V9.33333H6.66667V10.6667H2ZM2 8V6.66667H9.33333V8H2ZM2 5.33333V4H9.33333V5.33333H2ZM10.6667 13.3333V10.6667H8V9.33333H10.6667V6.66667H12V9.33333H14.6667V10.6667H12V13.3333H10.6667Z"
						fill="#42444A" />
				</g>
			</svg>
      );
    }

    return null;
  }

  render() {
    return (
      <button
        ref={this.baseBtnEl}
        className={`container ${this.getClasses()}`}
        onClick={this.removeFocus}
      >
        {this.renderIcon()}
      </button>
    );
  }
}

export default BaseButton;
