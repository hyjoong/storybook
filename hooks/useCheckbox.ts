import React from "react";
import { useState } from "react";

type checkType = {
  valueList: string[];
  initialCheckeds: string[];
  onChange?: () => void;
};

const useCheckbox = ({ valueList, initialCheckeds }: checkType) => {
  const [checkedList, setCheckedList] = useState(initialCheckeds);

  const handleCheckedElement = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      checkedList.length === valueList.length
        ? setCheckedList([value])
        : setCheckedList([...checkedList, value]);
    } else {
      setCheckedList(
        checkedList.filter((checkedItem: string) => checkedItem !== value)
      );
    }
  };

  const handleReset = () => {
    setCheckedList(initialCheckeds);
  };

  return { checkedList, setCheckedList, handleCheckedElement, handleReset };
};

export default useCheckbox;
