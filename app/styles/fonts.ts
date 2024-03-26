import { Libre_Baskerville } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const libreBaskerville = Libre_Baskerville({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-libre-baskerville",
});
export { libreBaskerville };
