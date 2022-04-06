import { ButtonBase, Secondary, Gray } from "./styled";
import { useState } from "react";

// defaultProps;

function Button({
  $type,
  $width = "100%",
  $size = '20px',
  isDisabled,
  children,
  ...rest
}) {
  // primary
  if ($type === "primary") {
    return (
      <ButtonBase $width={$width} $size={$size} disabled={isDisabled} {...rest}>
        {children}
      </ButtonBase>
    );
  }

  // Secondary
  if ($type === "Secondary") {
    return (
      <Secondary $width={$width} $size={$size} disabled={isDisabled} {...rest}>
        {children}
      </Secondary>
    );
  }

  // gray
  if ($type === "Gray") {
    return (
      <Gray $width={$width} $size={$size} disabled={isDisabled} {...rest}>
        {children}
      </Gray>
    );
  }
}
export default Button;
