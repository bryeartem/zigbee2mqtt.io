---
title: "TuYa YSR-MINI-Z control via MQTT"
description: "Integrate your TuYa YSR-MINI-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2021-10-30T12:58:50
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# TuYa YSR-MINI-Z

|     |     |
|-----|-----|
| Model | YSR-MINI-Z  |
| Vendor  | TuYa  |
| Description | 2 in 1 dimming remote control and scene control |
| Exposes | battery, action, operation_mode, linkquality |
| Picture | ![TuYa YSR-MINI-Z](https://www.zigbee2mqtt.io/images/devices/YSR-MINI-Z.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/devices-groups.md)*

* `simulated_brightness`: Set to `true` to simulate a `brightness` value (default: `false`).
If this device provides a `brightness_move_up` or `brightness_move_down` action it is possible to specify the update
interval and delta. This can be done by instead of specifying `true`:

```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```
<!-- Notes END: Do not edit below this line -->


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `on`, `off`, `brightness_move_up`, `brightness_step_up`, `brightness_step_down`, `brightness_move_down`, `brightness_stop`, `color_temperature_step_down`, `color_temperature_step_up`, `1_single`, `1_double`, `1_hold`, `2_single`, `2_double`, `2_hold`, `3_single`, `3_double`, `3_hold`, `4_single`, `4_double`, `4_hold`.

### Operation_mode (enum)
Operation mode: "command" - for group control, "event" - for clicks.
Value can be found in the published state on the `operation_mode` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"operation_mode": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"operation_mode": NEW_VALUE}`.
The possible values are: `command`, `event`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

