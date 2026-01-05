import { defineSemanticTokens } from "@pandacss/dev";

/**
 * Animation Semantic Tokens
 * Durations and easings for consistent motion design
 */

export const durations = defineSemanticTokens.durations({
    // Semantic duration tokens for transitions
    transition: {
        // Micro interactions (hover, focus) - 150ms
        fast: { value: "150ms" },
        // Standard transitions - 200ms
        normal: { value: "200ms" },
        // Emphasis animations - 300ms
        slow: { value: "300ms" },
    },
});

export const easings = defineSemanticTokens.easings({
    // Semantic easing tokens for transitions
    transition: {
        // Default easing for most transitions
        DEFAULT: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
        // Enter animations (appearing elements)
        enter: { value: "cubic-bezier(0, 0, 0.2, 1)" },
        // Exit animations (disappearing elements)
        exit: { value: "cubic-bezier(0.4, 0, 1, 1)" },
        // Emphasized motion (important actions)
        emphasized: { value: "cubic-bezier(0.05, 0.7, 0.1, 1)" },
    },
});
