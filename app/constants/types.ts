interface Card {
    title?: string; // Obrigatório para Work, opcional para Benefits
    content?: string; // Obrigatório para Work, opcional para Benefits
    icon?: string; // Obrigatório para Benefits, opcional para Work
    text?: string; // Obrigatório para Benefits, opcional para Work
    style?: React.CSSProperties; // Opcional para ambos
}

// interface CardsData {
//     Work: Card[];
//     Benefits: Card[];
// }