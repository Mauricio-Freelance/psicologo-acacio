const size = {
    mobile: "450px",
    mediumMobile: "451px",
    acacioMobile: "568px",

    smallTablet: "750px",
    mediumTablet: "1000px",
    tablet: "1180px",
    
    desktop: "1280px",
    largeDesktop: "1440px"
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    acacioMobile: `(min-width: ${size.mediumMobile} and max-width: ${size.acacioMobile})`,
    mediumTablet: `(min-width: ${size.smallTablet} and max-width: ${size.mediumTablet})`,
    tablet: `(min-width: ${size.mediumTablet}) and (max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
    largeDesktop: `(min-width: ${size.largeDesktop})`
};