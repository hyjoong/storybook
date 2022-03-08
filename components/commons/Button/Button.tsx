import * as Styled from "./Button.styles";

export interface Props
  extends Pick<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "onClick" | "children" | "type"
  > {
  size: "SM" | "MD" | "LG";
  backgroundColor?: string;
  fontColor?: string;
}

const Button = ({
  disabled,
  onClick,
  size,
  backgroundColor = "purple",
  fontColor = "white",
  children,
  type = "button",
}: Props) => {
  return (
    <Styled.Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      size={size}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
