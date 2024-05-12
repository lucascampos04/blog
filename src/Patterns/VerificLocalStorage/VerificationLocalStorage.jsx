import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const VerificationLocalStorage = ({ storageKey, redirectTo }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const storedValue = sessionStorage.getItem(storageKey);

        if (!storedValue) {
            navigate(redirectTo);
        }
    }, [storageKey, redirectTo, navigate]);

    return null;
};
