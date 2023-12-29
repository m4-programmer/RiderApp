const COLORS = {
    primary: "#FEBB1B",
    primary2: "#E1982B",
    primary3: "#FA9F29",
    primary4: "#FFF8E8",

    darkMode: "#181A20",
    lightMode: "#FFFFFF",

    //accent colors
    warning: "#FD3C4A",
    success: "#00A86B",
    active: "#7F3DFF",
    //text colors
    textDark: "#212121",
    textDark2: "#292B2D",
    textSecondary: "#616161",
    textTertiary : "#6C727F",
    textLast: "#7B8186"
    
}

const typography = {
    header1(mode='dark') {
        return {
            // fontFamily: "inter",
            fontWeight: "semibold",
            fontSize: 32,
            lineHeight: 32,
            color: mode === "dark" ? COLORS.textDark : COLORS.lightMode,
        };
    },
    header2(mode='dark') {
        return {
            // fontFamily: "inter",
            fontWeight: "700",
            fontSize: 28,
            lineHeight: 32,
            color: mode === "dark" ? COLORS.textDark : COLORS.lightMode,
        };
    },

    body1(mode='dark',weight="regular") {
        return {
            // fontFamily: "Urbanist",
            fontWeight: weight==="regular" ? 400 : weight,
            fontSize: 18,
            lineHeight: 30,
            color: mode === "dark" ? COLORS.textDark : COLORS.lightMode,
        };
    },

    body2(mode='dark',weight="regular") {
        return {
            // fontFamily: "inter",
            fontWeight: weight==="regular" ? "normal" : weight,
            fontSize: 16,
            lineHeight: 24,
            color: mode === "dark" ? COLORS.textDark : COLORS.lightMode,
        };
    },
    bodySmall(mode='dark',weight="regular") {
        return {
            // fontFamily: "inter",
            fontWeight: weight==="regular" ? "normal" : weight,
            fontSize: 14,
            lineHeight: 24,
            color: mode === "dark" ? COLORS.textDark : COLORS.lightMode,
        };
    },
    bodyExtraSmall(mode='dark',weight="regular") {
        return {
            // fontFamily: "inter",
            fontWeight: weight==="regular" ? "normal" : weight,
            fontSize: 12,
            lineHeight: 24,
            color: mode === "dark" ? COLORS.textDark : COLORS.lightMode,
        };
    },
    

}

export { COLORS, typography };