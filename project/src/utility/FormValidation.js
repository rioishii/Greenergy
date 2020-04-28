function validateForm(state) {
    // clear all error messages
    const inputs = document.getElementsByClassName("is-danger");
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains("error")) {
        inputs[i].classList.remove("is-danger");
      }
    }
  
    if (state.hasOwnProperty("firstname") && state.firstname === "") {
      document.getElementById("firstname").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("lastname") && state.lastname === "") {
      document.getElementById("lastname").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("email") && state.email === "") {
      document.getElementById("email").classList.add("is-danger");
      return { blankfield: true };
    }
    if (
      state.hasOwnProperty("verificationcode") &&
      state.verificationcode === ""
    ) {
      document.getElementById("verificationcode").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("password") && state.password === "") {
      document.getElementById("password").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("oldpassword") && state.oldpassword === "") {
      document.getElementById("oldpassword").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("newpassword") && state.newpassword === "") {
      document.getElementById("newpassword").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("passconf") && state.passconf === "") {
      document.getElementById("passconf").classList.add("is-danger");
      return { blankfield: true };
    }
    if (
      state.hasOwnProperty("password") &&
      state.hasOwnProperty("passconf") &&
      state.password !== state.passconf
    ) {
      document.getElementById("password").classList.add("is-danger");
      document.getElementById("passconf").classList.add("is-danger");
      return { passwordmatch: true };
    }
    if (
      state.hasOwnProperty("newpassword") &&
      state.hasOwnProperty("passconf") &&
      state.newpassword !== state.passconf
    ) {
      document.getElementById("newpassword").classList.add("is-danger");
      document.getElementById("passconf").classList.add("is-danger");
      return { passwordmatch: true };
    }
    return;
  }
  
  export default validateForm;