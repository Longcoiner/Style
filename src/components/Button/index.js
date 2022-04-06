import {
  ButtonBase,
  SecondPrimary,
  ThirdPrimary,
  FifthPrimary,
  Secondary,
  SecondarySecond,
  ThirdSecond,
  FifthSecond,
  Gray,
  SecondGray,
  ThirdGray,
  FifthGray,
} from "./styled";

function Button({ $type, $width = "100%", children, ...rest }) {

    // primary 
if ($type === 'primary'){
    return <ButtonBase $width={$width} {...rest}>{children}</ButtonBase>
};


if ($type === 'SecondPrimary'){
    return <SecondPrimary $width={$width} {...rest}>{children}</SecondPrimary>
};


if($type === 'ThirdPrimary'){
    return <ThirdPrimary $width={$width}  {...rest}>{children}</ThirdPrimary>
}


if($type === 'FifthPrimary' ){
    return <FifthPrimary $width={$width}   {...rest}>{children}</FifthPrimary>
}




// Secondary
if($type === 'Secondary' ){
    return <Secondary $width='50%'  {...rest}>{children}</Secondary>
}

if($type === 'SecondarySecond' ){
    return <SecondarySecond $width='50%'  {...rest}>{children}</SecondarySecond>
}

if($type === 'SecondaryThird' ){
    return <ThirdSecond $width='20%'  {...rest}>{children}</ThirdSecond>
}

if($type === 'SecondaryFifth' ){
    return <FifthSecond $width='30%'  {...rest}>{children}</FifthSecond>
}




// gray 
if($type === 'Gray' ){
    return <Gray $width={$width}  {...rest}>{children}</Gray>
}
if($type === 'SecondGray' ){
    return <SecondGray $width={$width}  {...rest}>{children}</SecondGray>
}
if($type === 'ThirdGray' ){
    return <ThirdGray $width={$width}  {...rest}>{children}</ThirdGray>
}
if($type === 'ThirdGray' ){
    return <ThirdGray $width={$width}  {...rest}>{children}</ThirdGray>
}
if($type === 'FifthGray' ){
    return <FifthGray $width={$width}  {...rest}>{children}</FifthGray>
}


 
}
export default Button;
