import React from 'react';
import {CardWrapper} from "@/components/auth/card-wrapper";

export const LoginForm = () => {
    return (
        <CardWrapper headerLabel='Walcom back'
        backButtonLabel='Don`t have an accont?'
                     backButtonHref='/auth/register'
                     showSocial
        >
Login Form!
        </CardWrapper>
    );
};
