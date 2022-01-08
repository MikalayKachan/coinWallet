import React from 'react';

type ButtonPropsType = {
  onClick: (event: React.MouseEvent) => void;
};

const Button = ({ onClick }: ButtonPropsType) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-secondary">
      Add to wallet
    </button>
  );
};
export default React.memo(Button);
