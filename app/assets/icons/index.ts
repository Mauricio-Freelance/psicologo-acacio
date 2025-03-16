import availability from "./availability.svg";
import barrier from "./barrier.svg";
import clock from "./clock.svg";
import insurance from "./insurance.svg";
import padlock from "./padlock.svg";
import telephone from "./telephone.svg";

import rightArrow from "./rightArrow.svg";
import rightArrowWhite from "./rightArrow_white.svg";
import leftArrow from "./leftArrow.svg";
import leftArrowWhite from "./leftArrow_white.svg";

import email from "./email.svg";
import instagram from "./instagram.svg";
import logo from "./logo.svg";
import whatsApp from "./whatsapp.svg";
import whatsAppWhite from "./whatsapp_white.svg";

// Define o tipo para as chaves de ICONS
type IconKey = 
    | "email"
    | "instagram"
    | "logo"
    | "whatsApp"
    | "whatsAppWhite"
    | "availability"
    | "barrier"
    | "clock"
    | "insurance"
    | "padlock"
    | "telephone"
    | "rightArrow"
    | "rightArrowWhite"
    | "leftArrow"
    | "leftArrowWhite";


// Tipa o objeto ICONS
const ICONS: Record<IconKey, string> = {
    email,
    instagram,
    logo,
    whatsApp,
    whatsAppWhite,
    availability,
    barrier,
    clock,
    insurance,
    padlock,
    telephone,
    rightArrow,
    rightArrowWhite,
    leftArrow,
    leftArrowWhite,
};

export default ICONS;
export type {IconKey};