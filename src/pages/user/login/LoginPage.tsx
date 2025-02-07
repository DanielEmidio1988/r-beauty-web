import style from "./LoginPage.module.scss";
import { useLoginPageViewModel } from "./LoginPageViewModel";
import { goToSignUpPage } from "routes/navigate";

function LoginPage() {
    const {
        register,
        handleSubmit,
        errors,
        context,
        navigate,
        onSubmit,
        loginUser,
    } = useLoginPageViewModel()

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
                        <p>
                            Não possui cadastro? Crie sua conta 
                            <button onClick={() => goToSignUpPage(navigate)}>
                                aqui
                            </button>.
                        </p>
                    </div>
                </form>

            </section>
        </main>
    )
}

export default LoginPage;