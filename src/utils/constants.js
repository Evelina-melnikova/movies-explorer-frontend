const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-76',
  headers: {
    authorization: '2c619271-7a2d-4266-95fe-47db284f8454',
    "Content-Type": "application/json",
  }
}
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorSelector: '.popup__input-error_type_',
  inputErrorFrameClass: 'popup__input_error-frame',
};

const registerValidationConfig = {
  formSelector: '.register__form',
  inputSelector: '.register__input',
  submitButtonSelector: '.register__button',
  inputErrorSelector: '.register__input-error_type_',
  inputErrorFrameClass: 'register__input_error-frame',
};

const formValidators = {}

export { apiConfig, validationConfig, formValidators, registerValidationConfig };

