export const navLinks = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Categorías",
      href: "#",
    },
    {
      name: "Ofertas",
      href: "#",
    },
  ] as const;


  export const userInputs = [
    {
      id: "form__user-name",
      label: "Nombre",
      name: "username",
      type: "text",
      placeholder: "Ingrese su nombre...",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "form__user-mail",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Ingrese su email...",
      errorMessage: "It should be a valid email address!",
      required: true,

    },
  ] as const;