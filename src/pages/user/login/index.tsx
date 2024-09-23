import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { goToAdminPage, goToSignUpPage } from "../../../routes/navigate";
import style from "./LoginPage.module.scss";

interface IFormInput {
    email: string;
    password: string;
}

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    function loginUser() {
        goToAdminPage(navigate);
    }

    return (
        <main className={`${style.loginPage} width_100`}>
            <section className={`${style.formArea} width_100`}>
                <form onSubmit={handleSubmit(onSubmit)} className={`${style.formArea___form}`}>
                    <div>
                        <h2>Login</h2>

                    </div>
                    <div>
                        <input
                            type="email"
                            {...register("email", { required: "Email é obrigatório" })}
                            placeholder="Informe seu e-mail"
                        />
                        {errors.email && <p>{errors.email?.message}</p>}

                        <input
                            type="password"
                            {...register("password", { required: "Senha é obrigatória" })}
                            placeholder="Informe sua senha"
                        />
                        <button type="submit" onClick={() => loginUser()}>Login</button>
                        <p>Esqueceu sua senha? <a href="#">Clique aqui!</a></p>
                    </div>
                    <div>
                        <p>Não possui cadastro? Crie sua conta <a onClick={() => goToSignUpPage(navigate)}>aqui</a>.</p>
                    </div>
                </form>

            </section>
        </main>
    )
}

export default LoginPage;