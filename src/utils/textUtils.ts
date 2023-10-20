import Rainbow from "@indot/rainbowvis";

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
