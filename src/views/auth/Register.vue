<template>
  <nav class="navbar navbar-light bg-white mb-4">
    <div class="container">
      <a class="navbar-brand d-block mx-auto" href="#">
        <img src="../../assets/image/logo-auth.svg" alt="Logo ngolahraga" />
      </a>
    </div>
  </nav>

  <div class="container pb-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <form action="" method="post" class="form-login">
          <h5>Masuk</h5>
          <p>Lengkapi form dibawah ini dengan menggunakan yang valid!</p>

          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="">Full Name</label>
                <input type="text" name="full_name" class="_form-input" />
              </div>

              <div class="form-group">
                <label for="">Email</label>
                <input type="email" name="email" class="_form-input" />
              </div>

              <div class="form-group">
                <label for="">Password</label>
                <input type="password" name="password" class="_form-input" />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="">Username</label>
                <input type="text" name="username" class="_form-input" />
              </div>

              <div class="form-group">
                <label for="">Phone Number</label>
                <input type="number" name="phone_number" class="_form-input" />
              </div>

              <div class="form-group">
                <label for="">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  class="_form-input"
                />
              </div>
            </div>
          </div>

          <div class="row justify-content-center mt-3">
            <div class="col-lg-5">
              <button
                type="submit"
                class="btn _btn_ngolahraga btn-block _shadow-auth py-2"
              >
                Daftar
              </button>

              <hr />
              <button
                type="submit"
                class="btn _btn_ngolahraga btn-block _shadow-auth py-2 mb-3"
                style="font-weight: normal; background-color: #1a2c3f"
              >
                <img
                  src="../../assets/image/google-logo.svg"
                  width="17"
                  class="me-2"
                />
                Masuk dengan Google
              </button>
              <button
                type="submit"
                class="btn _btn_ngolahraga btn-block _shadow-auth py-2 mb-3"
                style="font-weight: normal; background-color: #1a2c3f"
              >
                <img
                  src="../../assets/image/facebook-logo.svg"
                  width="17"
                  class="me-2"
                />
                Masuk dengan Facebook
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped>
._shadow-auth {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  box-shadow: 0px 8px 15px rgba(0, 20, 42, 0.3);
}
.navbar-brand img {
  width: 40px;
}

.form-login {
  font-family: "Roboto", sans-serif;
}

.form-login h5 {
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: medium;
}

.form-login .form-group {
  margin-bottom: 15px;
}

.form-login .form-group label,
._label {
  font-size: 14px;
  color: #00142a;
  margin-bottom: 5px;
}

._label {
  text-decoration: none;
  margin-top: 10px;
  color: #4d5b6a;
}

._form-input {
  font-family: "Poppins", sans-serif;
  display: block;
  width: 100%;
  padding: 0.475rem 0.75rem;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: #1a2c3f;
  background-color: #f5f6f8;
  background-clip: padding-box;
  border: 1px solid #f5f6f8;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

._btn-auth-register {
  background-color: #ccd0d4;
  color: #1a2c3f;
  border-radius: 8px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}

@media (min-width: 992px) {
  .navbar-brand img {
    width: 80px;
  }
}
</style>