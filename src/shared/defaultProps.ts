type Size = "base" | "mid" | "large" | "extra-large";
type Theme = "light-theme" | "dark-theme";
export interface ThemeProps {
  theme?: Theme,
  disabled?: boolean
}
export interface SizeProps {
  size?: Size;
}
export interface LabelProps {
  label: string;
  showIcon?: boolean;
  showText?: boolean;
}