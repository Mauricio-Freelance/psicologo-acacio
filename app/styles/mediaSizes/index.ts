const size = {
    mobile: "568px",

    smallTablet: "750px",
    mediumTablet: "1000px",
    tablet: "1180px",
    
    desktop: "1280px",
    largeDesktop: "1440px"
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    mediumTablet: `(min-width: ${size.smallTablet} and max-width: ${size.mediumTablet})`,
    tablet: `(min-width: ${size.mediumTablet}) and (max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
    largeDesktop: `(min-width: ${size.largeDesktop})`
};