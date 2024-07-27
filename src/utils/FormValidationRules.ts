/* eslint-disable no-useless-escape */
const urlPattern = /^(https?:\/\/)([\w\-\.]+)(:\d+)?(\/[\w\-\.]*)*\/?$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const productValidationRules = {
    title: {
        required: "Debe ingresar un nombre de producto.",
        minLength: {
            value: 4,
            message: "El nombre del producto debe contener entre 4 y 40 caracteres."
        },
        maxLength: {
            value: 40,
            message: "El nombre del producto debe contener entre 4 y 40 caracteres."
        }
    },
    price: {
        required: "Debe ingresar el precio de producto.",
        min: {
            value: 1,
            message: "El precio del producto no puede ser 0 ó menor a 0."
        },
        max: {
            value: 100000,
            message: "El precio del producto no puede ser mayor a 100.000."
        },
    },
    category: {
        required: "Debe ingresar una o mas categorías de producto.",
        minLength: {
            value: 4,
            message: "Debe ingresar un mínimo de 4 y un máximo 40 caracteres."
        },
        maxLength: {
            value: 40,
            message: "Debe ingresar un mínimo de 4 y un máximo 40 caracteres."
        }
    },
    description: {
        required: "Debe ingresar una descripción del producto.",
        minLength: {
            value: 4,
            message: "Debe ingresar un mínimo de 4 y un máximo 500 caracteres."
        },
        maxLength: {
            value: 500,
            message: "Debe ingresar un mínimo de 4 y un máximo 500 caracteres."
        }
    },
    image: {
        required: "Debe ingresar url para la imagen del producto.",
        pattern:
        {
            value: urlPattern,
            message: "Debe ingresar url válida para la imagen del producto."
        }
    }

} as const;

export const userValidationRules = {
    userName: {
        required: "Debe ingresar un nombre de usuario",
        minLength: {
            value: 4,
            message: "El nombre de usario debe contener entre 4 y 8 caracteres."
        },
        maxLength: {
            value: 8,
            message: "El nombre de usario debe contener entre 4 y 8 caracteres."
        }
    }, 
    mail: {
        required: "Es necesario ingresar un email.",
        minLength: {
            value: 3,
            message: "Debe tener al menos 3 caracteres."
        },
        pattern: {
            value: emailPattern,
            message: "Debe ingresar una dirección de correo valida."
        }
    }, 
    password: {
        required: "Debe ingresar una contraseña.",
        minLength: {
            value: 4,
            message: "La contraseña debe tener al menos 6 caracteres."
        }
    }
} as const;