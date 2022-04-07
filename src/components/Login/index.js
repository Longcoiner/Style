import {
  DefaultInput,
  PasswordInput,
  NameInput,
  ErrorText,
  ErrorBorder,
} from "./styled";

function Input({
  error ='true' ,
  $type = "Default",
  $width = "100%",
  isDisabled,
  children,
  ...rest
}) {
  // Default
  if ($type === "Default") {
    return (
      <DefaultInput 
        type="text"
        error={error}
        placeholder="Tên đăng nhập/Email"
        $type={$type}
        $width={$width}
        disabled={isDisabled}
        {...rest}
      >
        {children}
      </DefaultInput>
    );
  }
  else if($type === "Default" && error ==='false') {
    return (
      (
        <DefaultInput
          type="text"
          error='false'
          placeholder="Tên đăng nhập/Email"
          $type={$type}
          $width={$width}
          disabled={isDisabled}
          {...rest}
        >
          {children}
        </DefaultInput>
      ),
      (<ErrorText error='false'> Tên đăng nhập/Email không đúng</ErrorText>)
    );
  }
 

  //   password
  if ($type === "Password") {
    return (
      <PasswordInput
        type="password"
        placeholder="Mật khẩu"
        $type={$type}
        $width={$width}
        {...rest}
      >
        {children}
      </PasswordInput>
    );
  }

  //   Name
  if ($type === "Name") {
    return (
      <NameInput
        type="text"
        placeholder="Nhập họ và tên"
        $type={$type}
        $width={$width}
        {...rest}
      >
        {children}
      </NameInput>
    );
  }
  
}
export default Input;
