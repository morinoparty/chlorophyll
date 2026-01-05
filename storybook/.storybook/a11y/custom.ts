import APCACheck from "./apca";

export const custom = APCACheck("custom", (fontSize: string) => {
    const size = Number.parseFloat(fontSize);
    switch (true) {
        case size >= 32:
            return 45;
        default:
            return 60;
    }
});
