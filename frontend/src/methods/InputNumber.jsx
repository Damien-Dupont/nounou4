import React from "react";
// import "./stylesheets/InputNumber.scss";

const InputNumber = React.forwardRef((props, ref) => {
  const { className, icon } = props;
  return (
    <div className="input-number">
      <input
        {...props}
        ref={ref}
        type="number"
        className={`input-number__input ${className}`}
      />
      {icon && <div className="input-number__icon">{icon}</div>}
    </div>
  );
});

InputNumber.displayName = "InputNumber";

export default InputNumber;
