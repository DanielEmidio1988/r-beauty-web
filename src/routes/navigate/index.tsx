import { NavigateFunction } from "react-router-dom";

export const goToHomePage = (navigate: NavigateFunction) => {
    navigate('/');
};

export const goToLoginPage = (navigate: NavigateFunction) => {
    navigate('/user/login');
};

export const goToSignUpPage = (navigate: NavigateFunction) => {
    navigate('/user/signup');
};

export const goToAdminPage = (navigate: NavigateFunction) => {
    navigate('/admin');
};