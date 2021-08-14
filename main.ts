I2C_LCD1602.LcdInit(39)
basic.forever(function () {
    I2C_LCD1602.ShowString("Water Level", 2, 0)
    I2C_LCD1602.ShowNumber(pins.analogReadPin(AnalogPin.P0), 7, 1)
})
