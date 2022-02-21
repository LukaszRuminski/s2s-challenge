export const mapFontSize = (size: string) => {
    switch (size){
        case "sm":
            return "1rem"
        case "md":
            return "1.4rem"
        case "lg":
            return "2rem"
        case "xl":
            return "4rem"
        default:
            return "1.5rem"
    }
}