controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    statusbar.value += -10
})
let statusbar: StatusBarSprite = null
scene.setBackgroundColor(9)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("Health")
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setOffsetPadding(0, 10)
statusbar.value = 100
