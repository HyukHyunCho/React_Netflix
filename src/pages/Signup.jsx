import React from "react";
import SignupForm from "../containers/Login/SignupForm";

export default function Signup() {
  // const navigate = useNavigate();
  // const { handleSubmit, control, watch } = useForm();
  // const { isLoading, isError, error, mutate } = useAddUser();
  // const [message, setMessage] = useState("");

  // const onSubmit = formData => {
  //   console.log({ user: formData });
  //   mutate(
  //     { user: formData },
  //     {
  //       onSuccess: data => {
  //         if (data.user) {
  //           navigate("/browse");
  //         } 
  //       },
  //       onError: err => {
  //         setMessage(err.response.data.message);
  //       }
  //     }
  //   );
  // };

  return <SignupForm />
    // <Layout>
    //   <LoginContainer>
    //     <LoginForm>
    //       <Title>로그인</Title>
    //       {message && <Message>{message}</Message>}
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <Controller
    //           name="email"
    //           control={control}
    //           defaultValue=""
    //           render={({ field: { onChange }, fieldState: { error } }) => (
    //             <Form>
    //               <Input onChange={onChange} placeholder="이메일" />
    //               <label style={{ color: "#e87c03" }}>{!!error}</label>
    //               <label style={{ color: "#e87c03" }}>
    //                 {error ? error.message : null}
    //               </label>
    //             </Form>
    //           )}
    //           rules={{
    //             required: "이메일을 입력 해주세요.",
    //             pattern: {
    //               value: /\S+@\S+\.\S+/,
    //               message: "이메일 형식을 입력하세요.",
    //             },
    //           }}
    //         />
    //         <Controller
    //           name="password"
    //           control={control}
    //           defaultValue=""
    //           render={({ field: { onChange }, fieldState: { error } }) => (
    //             <Form>
    //               <Input
    //                 type="password"
    //                 onChange={onChange}
    //                 placeholder="비밀번호"
    //               />
    //               <label style={{ color: "#e87c03" }}>{!!error}</label>
    //               <label style={{ color: "#e87c03" }}>
    //                 {error ? error.message : null}
    //               </label>
    //             </Form>
    //           )}
    //           rules={{
    //             required: "비밀번호를 입력 해주세요.",
    //             minLength: {
    //               value: 6,
    //               message: "6글자 이상 입력해주세요.",
    //             },
    //             deps: ["passwordConfirm"],
    //           }}
    //         />
    //         <Controller
    //           name="passwordConfirm"
    //           control={control}
    //           defaultValue=""
    //           render={({ field: { onChange }, fieldState: { error } }) => (
    //             <Form>
    //               <Input
    //                 type="password"
    //                 onChange={onChange}
    //                 placeholder="비밀번호 확인"
    //               />
    //               <label style={{ color: "#e87c03" }}>{!!error}</label>
    //               <label style={{ color: "#e87c03" }}>
    //                 {error ? error.message : null}
    //               </label>
    //             </Form>
    //           )}
    //           rules={{
    //             required: "비밀번호 확인을 입력 해주세요.",
    //             minLength: {
    //               value: 6,
    //               message: "6글자 이상 입력해주세요.",
    //             },
    //             validate: value =>
    //               value === watch("password") ||
    //               "비밀번호가 서로 일치하지 않습니다.",
    //           }}
    //         />
    //         <Controller
    //           name="username"
    //           control={control}
    //           defaultValue=""
    //           render={({ field: { onChange }, fieldState: { error } }) => (
    //             <Form>
    //               <Input onChange={onChange} placeholder="사용자 이름" />
    //               <label style={{ color: "#e87c03" }}>{!!error}</label>
    //               <label style={{ color: "#e87c03" }}>
    //                 {error ? error.message : null}
    //               </label>
    //             </Form>
    //           )}
    //           rules={{ required: "사용자 이름을 입력 해주세요." }}
    //         />
    //         <Controller
    //           name="accountname"
    //           control={control}
    //           defaultValue=""
    //           render={({ field: { onChange }, fieldState: { error } }) => (
    //             <Form>
    //               <Input
    //                 onChange={onChange}
    //                 placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능"
    //               />
    //               <label style={{ color: "#e87c03" }}>{!!error}</label>
    //               <label style={{ color: "#e87c03" }}>
    //                 {error ? error.message : null}
    //               </label>
    //             </Form>
    //           )}
    //           rules={{
    //             required: "계정 입력",
    //             pattern: /^[-._a-z0-9]+$/gi,
    //           }}
    //         />

    //         <Controller
    //           name="intro"
    //           control={control}
    //           defaultValue=""
    //           render={({ field: { onChange }, fieldState: { error } }) => (
    //             <Form>
    //               <Input
    //                 onChange={onChange}
    //                 placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능"
    //               />
    //               <label style={{ color: "#e87c03" }}>{!!error}</label>
    //               <label style={{ color: "#e87c03" }}>
    //                 {error ? error.message : null}
    //               </label>
    //             </Form>
    //           )}
    //           // rules={{
    //           //   required: "계정 입력",
    //           //   pattern: /^[-._a-z0-9]+$/gi,
    //           // }}
    //         />
    //         <Controller
    //           name="image"
    //           control={control}
    //           defaultValue=""
    //           render={({ field: { onChange }, fieldState: { error } }) => (
    //             <Form>
    //               <Input
    //                 onChange={onChange}
    //                 placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능"
    //               />
    //               <label style={{ color: "#e87c03" }}>{!!error}</label>
    //               <label style={{ color: "#e87c03" }}>
    //                 {error ? error.message : null}
    //               </label>
    //             </Form>
    //           )}
    //           // rules={{
    //           //   required: "계정 입력",
    //           //   pattern: /^[-._a-z0-9]+$/gi,
    //           // }}
    //         />

    //         <Form>
    //           <Button type="submit">회원가입</Button>
    //         </Form>
    //       </form>
    //       {/* <Text onClick={() => navigate("/signup")}>회원가입</Text> */}
    //     </LoginForm>
    //   </LoginContainer>
    // </Layout>
  
}
