import React from "react";
import { useBaseContextData } from "context/BaseContext";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import { hooks } from "@utils/hooks";

export interface SocialNetworksProps { };

interface IMenu {
    icon: JSX.Element;
    url: string;
}

export function useSocialNetworks() {
    const context = useBaseContextData();
    const menus: IMenu[] = [
        {
            icon: React.createElement(BsLinkedin),
            url: "https://www.linkedin.com/in/danielemidio1988/"
        },
        {
            icon: React.createElement(BsGithub),
            url: "https://github.com/DanielEmidio1988"
        },
        {
            icon: React.createElement(BsFillEnvelopeFill),
            url: "mailto:emidio.daniel@hotmail.com"
        }
    ]

    return { context, menus }
}