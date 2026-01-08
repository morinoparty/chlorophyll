import { defineTokens } from "@pandacss/dev";

export const easings = defineTokens.easings({
    linear: { value: "linear" },
    easeIn: { value: "cubic-bezier(0.4, 0, 1, 1)" },
    easeOut: { value: "cubic-bezier(0, 0, 0.2, 1)" },
    easeInOut: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
    emphasizedDecelerate: { value: "cubic-bezier(0.05, 0.7, 0.1, 1)" },
    emphasizedAccelerate: { value: "cubic-bezier(0.3, 0, 0.8, 0.15)" },
});
