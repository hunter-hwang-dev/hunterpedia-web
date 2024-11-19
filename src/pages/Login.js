function Login() {
  return (
    <div>
      <div>Login Page</div>
      <input
        class="관리자-인풋"
        maxlength="100"
        placeholder="admin account"
        type="text"
      ></input>
      <input
        class="관리자-인풋"
        placeholder="admin password"
        type="password"
      ></input>
      <button class="관리자-버튼" type="button">
        login
      </button>
    </div>
  );
}

export default Login;
