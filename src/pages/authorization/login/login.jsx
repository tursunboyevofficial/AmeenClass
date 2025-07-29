import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import s from "./login.module.scss";
import { Logo } from "../../../utils/getImg";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d{9}$/, "Telefon raqam 9 raqamdan iborat bo‘lishi kerak")
    .required("Telefon raqam majburiy"),
  password: Yup.string().required("Parol majburiy"),
});

const fieldsConfig = {
  phoneCodeOptions: ["+998"],
  placeholders: {
    phone: "9__ ___ ___",
    password: "********",
  },
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const fullPhone = "+998" + data.phone;
    console.log({ phone: fullPhone, password: data.password });
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 9);
    const formatted = val.replace(/(\d{2})(\d{3})(\d{0,4})/, "$1 $2 $3").trim();
    setValue("phone", val);
    e.target.value = formatted;
  };
  const navigate = useNavigate();
  const sendPage = () => {
    navigate("/register");
  };
  const sendPager = () => {
    navigate("/passwordreset");
  };
  return (
    <>
      <div className={s.box}>
        <div className={s.navbar}>
          <div className={s.container}>
            <div className={s.nav}>
              <img src={Logo} alt="srch" className={s.ImgName} />
              <div className={s.right}></div>
            </div>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.loginPage}>
            <div className={s.loginCard}>
              <h2>Kirish</h2>
              <p>Telefon raqamingiz va parolingizni kiriting</p>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label>Telefon raqam</label>
                <div className={s.phoneInputGroup}>
                  <select className={s.phoneCode} active>
                    <option className={s.options}>
                      {fieldsConfig.phoneCodeOptions[0]}
                    </option>
                  </select>
                  <input
                    type="text"
                    placeholder={fieldsConfig.placeholders.phone}
                    onInput={handlePhoneChange}
                    {...register("phone")}
                    maxLength={13}
                  />
                </div>
                {errors.phone && (
                  <span className={s.error}>{errors.phone.message}</span>
                )}

                <label>Parol</label>
                <div className={s.passwordInputGroup}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={fieldsConfig.placeholders.password}
                    {...register("password")}
                  />
                  <span
                    className={s.togglePassword}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁‍🗨" : "👁"}
                  </span>
                </div>
                {errors.password && (
                  <span className={s.error}>{errors.password.message}</span>
                )}

                <div className={s.forgotLink}>
                  <a onClick={sendPager}>Parolni unutdingizmi?</a>
                </div>

                <button type="submit">Kirish</button>

                <p className={s.signupLink}>
                  Akkountingiz yo‘qmi?{" "}
                  <a onClick={sendPage}>Ro‘yxatdan o‘tish</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
