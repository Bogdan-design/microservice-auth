'use client'

import React, {ReactNode} from 'react';
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Header} from "@/components/auth/header";

type CardWrapperProps = {
    children: ReactNode
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
}


export const CardWrapper = ({
                                children,
                                backButtonHref,
                                backButtonLabel,
                                headerLabel,
                                showSocial
}:CardWrapperProps) => {
    return (
        <Card className='w-[400px] shadow-md'>
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            {children}
        </Card>
    );
};
