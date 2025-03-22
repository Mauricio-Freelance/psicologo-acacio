const size = {
    mobile: "450px",
    tablet: "1180px",
    desktop: "1280px",
    largeDesktop: "1440px"
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
    largeDesktop: `(min-width: ${size.largeDesktop})`
};