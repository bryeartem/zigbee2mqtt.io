---
title: "Sunricher SR-ZG9001T4-DIM-EU control via MQTT"
description: "Integrate your Sunricher SR-ZG9001T4-DIM-EU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
addedAt: 2020-09-01T19:56:51Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Sunricher SR-ZG9001T4-DIM-EU

|     |     |
|-----|-----|
| Model | SR-ZG9001T4-DIM-EU  |
| Vendor  | Sunricher  |
| Description | Zigbee wireless touch dimmer switch |
| Exposes | action, linkquality |
| Picture | ![Sunricher SR-ZG9001T4-DIM-EU](https://www.zigbee2mqtt.io/images/devices/SR-ZG9001T4-DIM-EU.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `recall_*`, `on`, `off`, `brightness_stop`, `brightness_move_down`, `brightness_move_up`, `brightness_step_down`, `brightness_step_up`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

