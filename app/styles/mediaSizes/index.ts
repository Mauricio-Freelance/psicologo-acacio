const size = {
    mobile: "450px",
    tablet: "1024px",
    desktop: "1440px",
    largeDesktop: "1920px"
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(max-width: ${size.desktop})`,
    largeDesktop: `(min-width: ${size.largeDesktop})`
};