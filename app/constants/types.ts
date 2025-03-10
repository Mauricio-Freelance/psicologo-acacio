import React from "react"; // Importe React para usar React.CSSProperties


export interface Card {
    title?: string; // Obrigatório para Work, opcional para Benefits
    content?: string; // Obrigatório para Work, opcional para Benefits
    icon?: string; // Obrigatório para Benefits, opcional para Work
    alt?: string; // Obrigatório para Benefits, opcional para work
    text?: string; // Obrigatório para Benefits, opcional para Work
    style?: React.CSSProperties; // Opcional para ambos
}

export interface CardsData {
    Work: Card[];
    Benefits: Card[];
}