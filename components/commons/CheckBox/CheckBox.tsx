import Styled from "./CheckBox.styles";

export type Props = {
  labelText?: string;
  checked?: boolean;
  onCheck?: (isChecked: boolean) => void;
};

const CheckBox = ({ labelText, checked, onCheck }: Props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onCheck?.(isChecked);
  };
  return (
    <Styled.CheckBox>
      {labelText ? (
        <>
          <Styled.Input
            type="checkbox"
            id={labelText}
            checked={checked}
            onChange={onChange}
          />
          <Styled.Label htmlFor={labelText}>{labelText}</Styled.Label>
        </>
      ) : (
        <Styled.Input type="checkbox" checked={checked} onChange={onChange} />
      )}
    </Styled.CheckBox>
  );
};

export default CheckBox;
