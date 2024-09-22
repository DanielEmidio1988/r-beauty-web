import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { goToAdminPage, goToSignUpPage } from "../../../routes/navigate";

interface IFormInput {
    email: string;
    password: string;
}

function LoginPage(){
    const { register, handleSubmit, formState: {errors}} = useForm<IFormInput>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        console.log(data);
    };

    return(
        <main>
            <section>
                <div>

                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>

                        </div>
                        <div>
                            <input 
                                type="email"
                                {...register("email", {required: "Email é obrigatório"})}
                                placeholder="Informe seu e-mail"
                            />
                            {errors.email && <p>{errors.email?.message}</p>}

                            <input 
                                type="password"
                                {...register("password", {required: "Senha é obrigatória"})}
                                placeholder="Informe sua senha"
                            />
                            <button type="submit">Login</button>
                            <p>Esqueceu sua senha? <a href="#">Clique aqui!</a></p>
                        </div>
                        <div>
                            <p>Não possui cadastro? Crie sua conta <a onClick={()=>goToSignUpPage(navigate)}>aqui</a>.</p>
                        </div>
                    </form>
                </div>

            </section>
        </main>
    )
}

export default LoginPage;