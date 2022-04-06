import { ButtonBase, SecondaryButton, GrayButton } from "./styled";
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
      <SecondaryButton $width={$width} $size={$size} disabled={isDisabled} {...rest}>
        {children}
      </SecondaryButton>
    );
  }

  // gray
  if ($type === "Gray") {
    return (
      <GrayButton $width={$width} $size={$size} disabled={isDisabled} {...rest}>
        {children}
      </GrayButton>
    );
  }
}
export default Button;
