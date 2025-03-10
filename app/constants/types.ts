import { IconKey } from "@/assets/icons"; // Importe o tipo IconKey
import React from "react"; // Importe React para usar React.CSSProperties


export interface WorkCard {
    title: string;
    content: string;
    style?: React.CSSProperties;
}

export interface BenefitsCard {
    icon: IconKey;
    alt: string;
    text: string;
    style?: React.CSSProperties;
}

export interface CardsData {
    Work: WorkCard[];
    Benefits: BenefitsCard[];
}