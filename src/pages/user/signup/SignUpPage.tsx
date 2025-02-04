import { goToLoginPage, goToAdminPage } from "../../../routes/navigate";
import style from "./SignUpPage.module.scss";
import { useSignUpPage } from "./useSignUpPage";

function SignUpPage(){
    const logic = useSignUpPage();

    return(
        <main className={`${style.signupPage} width_100`}>
            <section className={`${style.formSection} width_100`}>
                <div className={`${style.formSection__title} width_100`}>
                    <h3>Cadastro de Usuário</h3>
                </div>
                <div className={`${style.formSection__formArea} width_100`}>
                    <form onSubmit={logic.handleSubmit(logic.onSubmit)} className={`${style.formSection__formArea___form} width_100`}>
                        <div>
                            <div>
                                <label>Nome</label>
                                <input
                                    type="text"
                                    {...logic.register("name",{required: "Nome é obrigatório"})}
                                    placeholder="Informe seu nome"
                                />
                                {logic.errors.name && <p>{logic.errors.name.message}</p>}
                            </div>
                            <div>
                                <label>Sobrenome</label>
                                <input 
                                    type="text"
                                    placeholder="Informe seu sobrenome" 
                                    {...logic.register("lastname")}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Apelido</label>
                                <input
                                    type="text"
                                    placeholder="Informe seu apelido" 
                                    {...logic.register("username")}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    {...logic.register("email", {
                                        required: "Email é obrigatório",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Formato de e-mail inválido"
                                        }
                                    })}
                                    placeholder="Informe seu e-mail" 
                                />
                                {logic.errors.email && <p>errors.email.message</p>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Senha</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Informe seu apelido" 
                                    // {...register("password")}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Confirme sua senha</label>
                                <input
                                    type="text"
                                    value={logic.confirmPassword}
                                    name="confirmPassword"
                                    placeholder="Informe seu apelido" 
                                />
                            </div>
                        </div>
                        <div>
                            <button onClick={()=> goToAdminPage(logic.navigate)}>Registrar</button>
                            <button onClick={()=> goToLoginPage(logic.navigate)}>Voltar</button>
                        </div>

                    </form>                
                </div>
            </section>
        </main>
    )
}

export default SignUpPage