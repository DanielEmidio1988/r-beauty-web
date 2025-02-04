import style from "./LoginPage.module.scss";
import { useLoginPage } from "./useLoginPage";
import { goToSignUpPage } from "routes/navigate";

function LoginPage() {
    const logic = useLoginPage();

    return (
        <main className={`${style.loginPage} width_100`}>
            <section className={`${style.formArea} width_100`}>
                <form onSubmit={logic.handleSubmit(logic.onSubmit)} className={`${style.formArea___form}`}>
                    <div>
                        <h2>Login</h2>

                    </div>
                    <div>
                        <input
                            type="email"
                            {...logic.register("email", { required: "Email é obrigatório" })}
                            placeholder="Informe seu e-mail"
                        />
                        {logic.errors.email && <p>{logic.errors.email?.message}</p>}

                        <input
                            type="password"
                            {...logic.register("password", { required: "Senha é obrigatória" })}
                            placeholder="Informe sua senha"
                        />
                        <button type="submit" onClick={() => logic.loginUser()}>Login</button>
                        <p>Esqueceu sua senha? <a href="#">Clique aqui!</a></p>
                    </div>
                    <div>
                        <p>
                            Não possui cadastro? Crie sua conta 
                            <button onClick={() => goToSignUpPage(logic.navigate)}>
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