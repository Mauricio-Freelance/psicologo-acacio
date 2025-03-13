import availability from "./availability.svg";
import barrier from "./barrier.svg";
import clock from "./clock.svg";
import insurance from "./insurance.svg";
import padlock from "./padlock.svg";
import telephone from "./telephone.svg";

import rightArrow from "./rightArrow.svg";
import leftArrow from "./leftArrow.svg";

import email from "./email_07a8b4.svg";
import instagram from "./instagram_07a8b4.svg";
import logo from "./logo.svg";
import whatsApp from "./whatsapp_07a8b4.svg";
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
    | "leftArrow";

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
    leftArrow,
};

export default ICONS;
export type {IconKey};