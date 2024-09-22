import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToLoginPage } from "../../../routes/navigate";
import { IUser } from "../../../types/IUser";

function SignUpPage(){
    const {register, handleSubmit, formState: {errors}} =useForm<IUser>();
    const [confirmPassword, setConfirmPassword] =useState<string>("");
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IUser> = (data)=>{
        console.log(data);
    }

    return(
        <main>
            <section>
                <div>
                    {/* Intro text */}
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div>
                                <label>Nome</label>
                                <input
                                    type="text"
                                    {...register("name",{required: "Nome é obrigatório"})}
                                    placeholder="Informe seu nome"
                                />
                                {errors.name && <p>{errors.name.message}</p>}
                            </div>
                            <div>
                                <label>Sobrenome</label>
                                <input 
                                    type="text"
                                    placeholder="Informe seu sobrenome" 
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Apelido</label>
                                <input
                                    type="text"
                                    placeholder="Informe seu apelido" 
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email é obrigatório",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Formato de e-mail inválido"
                                        }
                                    })}
                                    placeholder="Informe seu e-mail" 
                                />
                                {errors.email && <p>errors.email.message</p>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Senha</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Informe seu apelido" 
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Confirme sua senha</label>
                                <input
                                    type="text"
                                    value={confirmPassword}
                                    name="confirmPassword"
                                    placeholder="Informe seu apelido" 
                                />
                            </div>
                        </div>
                        <div>
                            <button onClick={()=> goToHomePage(navigate)}>Registrar</button>
                            <button onClick={()=> goToLoginPage(navigate)}>Voltar</button>
                        </div>

                    </form>                
                </div>
            </section>
        </main>
    )
}

export default SignUpPage