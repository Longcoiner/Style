import { ReactComponent as UserIcon } from "../../images/svg/user-icon.svg";
import { ReactComponent as PasswordIcon } from '../../images/svg/password-icon.svg'
import {
  DefaultInput,
  PasswordInput,
  NameInput,
  Icon,
  GroupIcon,
  Wrapper,
  IconWrapper,
  InputArea,
  Label,
} from "./styled";
function Input({
  error = "error",
  $type = "Default",
  $width = "100%",
  isDisabled,
  children,
  $className,
  ...rest
}) {
  // Default
  // if ($type === "Default") {
  //   return (
  //     <DefaultInput
  //       type="text"
  //       error={error}
  //       placeholder="Tên đăng nhập/Email"
  //       $type={$type}
  //       $width={$width}
  //       disabled={isDisabled}
  //       {...rest}
  //     >
  //       {children}
  //     </DefaultInput>
  //   );
  // }
  // // else if(error==='error'){
  // //   return(
  // //     (<ErrorText error={error} {...rest}> Tên đăng nhập/Email không đúng</ErrorText>)

  // //   )
  // // }

  // if ($type === "icon") {
  //   return (
  //     <GroupIcon $type={$type} $width={$width} {...rest}>
  //       <UserIcon />
  //     </GroupIcon>
  //   );
  // }

  // //   password
  // if ($type === "Password") {
  //   return (
  //     <PasswordInput
  //       type="password"
  //       error={error}
  //       placeholder="Mật khẩu"
  //       $type={$type}
  //       $width={$width}
  //       {...rest}
  //     >
  //       {children}
  //     </PasswordInput>
  //   );
  // }

  // //   Name
  // if ($type === "Name") {
  //   return (
  //     <NameInput
  //       type="text"
  //       placeholder="Nhập họ và tên"
  //       $type={$type}
  //       $width={$width}
  //       {...rest}
  //     >
  //       {children}
  //     </NameInput>
  //   );
  // }

  if ($type === 'default'){
      return (
        <Wrapper disabled={isDisabled} error={error} {...rest}>
            <IconWrapper error={error}>
              <UserIcon />
            </IconWrapper >
            <InputArea placeholder="Tên đăng nhập/Email"  />
        </Wrapper>
      );
  }



  if ($type === 'password'){
    return (
      <Wrapper disabled={isDisabled} {...rest}>
        
          <IconWrapper>
            <PasswordIcon/>
          </IconWrapper>


          <InputArea type='password' placeholder="Mật khẩu"  />
      </Wrapper>
    );
  }



  if ($type === 'name'){
    return (
      <>
        <Label>Họ và tên</Label>
        <Wrapper disabled={isDisabled} {...rest}>
          <InputArea placeholder="Nhập họ và tên"  />
      </Wrapper>
      </>

    );
  }




  
}
export default Input;

