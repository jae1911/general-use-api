import Rainbow from "@indot/rainbowvis";
import figlet from "figlet";

export const textToRainbow = (text: string, baseColour: string, endColour: string): string => {
    const rainbow = new Rainbow();
    const stringLength = text.length;

    rainbow.setNumberRange(1, stringLength);
    rainbow.setSpectrum(baseColour, endColour);

    return text.split('').map((char, index): string => {
        const hexColour = rainbow.colorAt(index);

        return `<color=#${hexColour}>${char}</color>`;
    }).join('');
}

export const textToAscii = (text: string, font: string): string => {
    try {
        return figlet.textSync(text, {
            font: font as figlet.Fonts,
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        });
    } catch (_e) {
        return `Invalid font; check /utils/ascii/fonts for list`;
    }
}

export const allAsciiFonts = (): string => {
    const fonts = figlet.fontsSync();

    return fonts.toString();
}
