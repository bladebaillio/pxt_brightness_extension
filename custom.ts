namespace brightness {
    /**
     * Set the screen brightness level (0-100)
     */
    //% block="set brightness to $level %"
    //% level.min=0 level.max=100 level.defl=50
    //% weight=100
    export function setBrightness(level: number) {
        // Ensure level is between 0-100
        level = Math.constrain(level, 0, 100);
        // Convert to 0-255 range that the system uses internally
        const brightnessValue = Math.map(level, 0, 100, 0, 255);
        // Use the internal screen brightness control
        screen.setBrightness(brightnessValue);
    }

    /**
     * Get the current brightness level (0-100)
     */
    //% block="current brightness %"
    //% weight=90
    export function getBrightness(): number {
        // Get the current brightness and map it back to 0-100
        return Math.map(screen.brightness(), 0, 255, 0, 100);
    }
}
