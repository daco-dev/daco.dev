import React from "react";
interface InputsFormType {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<InputsFormType>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <p>Correo: {email}</p>
    <p>Nombre: {name}</p>
    <hr />
    <p>{message}</p>
  </div>
);
