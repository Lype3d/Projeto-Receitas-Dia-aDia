import React from "react";
import "../css/Contact.css"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date } from 'yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    subject: yup.string().required("O assunto é obrigatório"),
    message: yup.string().required("Não vai nos enviar uma receita? ):").max(500, "Excedido o número de caracteres"),
}).required();


function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        console.log(data);
        const form = document.getElementById('contactForm')
        const msg = document.getElementById('form-message-success')
        form.reset()
        msg.innerText = 'Receita enviada com sucesso! :)'

    }




    return (
        <main className=" bgoutcontact">
            <section className="ftco-section pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="wrapper">
                                <div className="row no-gutters border border-dark">
                                    <div className="col-md-6 bgformcontact">
                                        <div className="contact-wrap w-100 p-lg-5 p-4">
                                            <h3 className="mb-4 titlecontact">Envie sua receita :</h3>
                                            <div id="form-message-success" className="mb-4 text-success">
                                            </div>
                                            <form onSubmit={handleSubmit(onSubmit)} id="contactForm" name="contactForm" className="contactForm">
                                                <div className="row">
                                                    <div className="col-md-12 mt-3 mb-2">
                                                        <div className="form-group">
                                                            <input {...register("name")} type="text" className="form-control " name="name" id="name" placeholder="Nome da Receita" />
                                                            <p className="error-message">{errors.name?.message}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt-2 mb-2">
                                                        <div className="form-group">
                                                            <input {...register("subject")} type="file" className="form-control" name="subject" id="subject" placeholder="Foto da sua receita" />
                                                            <p className="error-message">{errors.subject?.message}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt-3 mb-2">
                                                        <div className="form-group">
                                                            <input {...register("name")} type="text" className="form-control " name="name" id="name" placeholder="Outras informações" />
                                                            <p className="error-message">{errors.name?.message}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12  mt-2 mb-3">
                                                        <div className="form-group">
                                                            <textarea {...register("message")} name="message" className="form-control" id="message" cols="30" rows="6" placeholder="Ingredientes"></textarea>
                                                            <p className="error-message">{errors.message?.message}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12  mt-2 mb-3">
                                                        <div className="form-group">
                                                            <textarea {...register("message")} name="message" className="form-control" id="message" cols="30" rows="6" placeholder="Modo de Preparo..."></textarea>
                                                            <p className="error-message">{errors.message?.message}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <button type="submit" className="btn-btn-success"> Enviar Receita</button>
                                                            <div className="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-stretch bg-contact">
                                        <div className="info-wrap w-100 p-lg-5 p-4 img">
                                            <h3 className="titlecontact mb-3">Nos Envie sua receita!</h3>
                                            <p className="mb-4">Estamos abertos para todos os tipos de receitas.
                                            </p>
                                            <br /><br /><br />
                                            <h4 className="titlecontact mb-3">Antes de enviar!</h4>
                                            <br />
                                            <ul>
                                                <li>Revise sua receita para ter certeza que as quantidades estão corretas e todos os itens estão listados.</li>
                                                <li>Por favor, só envie fotos tiradas por você, fotos tiradas da internet não serão aceitas e você ainda corre o risco de ter seu cadastro removido do site.</li>
                                                <li>Em outras informações adicione rendimento e tempo de preparo.</li>
                                            </ul>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Contact