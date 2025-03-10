---
sidebarDepth: 1
next: ../usage/
---

# Getting started

## Prerequisites

In order to use Zigbee2MQTT we need the following hardware:

1. <img src="../../images/zzh.jpg" title="ZZH" class="float-left" /> **A Zigbee Adapter** which is the interface between the Computer (or Server) where you run Zigbee2MQTT and the Zigbee radio
communication. Zigbee2MQTT supports a variety of adapters with different kind of connections like USB, GPIO or remote via WIFI or Ethernet.
  Recommended adapters have a chip starting with CC2652 or CC1352. See [supported Adapters](../adapters/README.md). <br class="clear" />

2. <img src="../../images/pi.jpg" title="Raspberry Pi" class="float-left" /> **A Server** where you would run Zigbee2MQTT. Most Raspberry-Pi models are known to work but you can run it on many computers and platforms including Linux, Windows an MacOS. <br class="clear" />

3. <img src="../../images/xiaomi_sensors.jpg" title="Zigbee devices" class="float-left" /> One or more **Zigbee Devices** which will be paired with Zigbee2MQTT. <br class="clear" />

::: tip TIP
<img alt="USB Cable" src="../../images/usb_extension_cable.jpg" class="float-left" /> To improve network range and stability use a USB extension cable.
See [Improve network range and stability](../../advanced/zigbee/02_improve_network_range_and_stability.md). <br class="clear" />
:::

## Installation

You can run Zigbee2MQTT in different ways, see [Installation](../installation/). In this example
[Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) is used to
set up and run Zigbee2MQTT.

### 1.) Find the Zigbee-Adapter

After you plug the adapter in see the `dmesg` output to find the device location:

```bash
$ sudo dmesg

...
usbcore: registered new interface driver ch341
usbserial: USB Serial support registered for ch341-uart
ch341 3-1:1.0: ch341-uart converter detected
usb 3-1: ch341-uart converter now attached to ttyUSB0
```

As we can see the adapter was identified and mounted on `ttyUSB0`.

```bash
$ ls -l /dev/ttyUSB0
crw-rw---- 1 root dialout 188, May 16 19:15 /dev/ttyUSB0
```

Here we can see that the adapter is owned by `root` and accessible from all users in the `dialout` group.

### 2.) Setup and start Zigbee2MQTT

It's assumed, that you've a recent version of Docker and Docker-Compose is installed.

First, we create the `docker-compose.yml` file which defines how Docker would run our containers. The following file consists of two services, one for the MQTT-Server and one for Zigbee2MQTT itself. Be sure to adjust the file to your needs and match the devices-mount in the case your adapter was not mounted on `/dev/ttyUSB0`.


```yaml
version: '3.5'
services:
  mqtt:
    image: eclipse-mosquitto:2.0
    restart: unless-stopped
    volumes:
      - "./mosquitto-data:/mosquitto"
    ports:
      - "1883:1883"
      - "9001:9001"
    command: "mosquitto -c /mosquitto-no-auth.conf"

  zigbee2mqtt:
    container_name: zigbee2mqtt
    restart: unless-stopped
    image: koenkk/zigbee2mqtt
    volumes:
      - ./zigbee2mqtt-data:/app/data
    ports:
      - 8080:8080
    environment:
      - TZ=Europe/Berlin
    group_add:
      - dialout
    devices:
      - /dev/ttyUSB0:/dev/ttyUSB0
```

In the next step we'll create a simple [Zigbee2MQTT config file](../configuration/) in `zigbee2mqtt-data/configuration.yml`.

```yaml
# Let new devices join our zigbee network
permit_join: true
# Docker-Compose makes the MQTT-Server available using "mqtt" hostname
mqtt:
  base_topic: zigbee2mqtt
  server: mqtt://mqtt
# Zigbee Adapter path
serial:
  port: /dev/ttyUSB0
# Enable the Zigbee2MQTT WebUI
frontend:
  port: 8080
# Let Zigbee2MQTT generate a new network key on first start
advanced:
  network_key: GENERATE
```

We should now have two files in our directory and can start the stack:

```bash
$ find
./docker-compose.yml
./zigbee2mqtt-data/configuration.yaml

# First start
$ docker-compose up -d

# Check the logs
$ docker-compose logs -f
```

After some short time you should see some log messages that Mosquitto and Zigbee2MQTT is running now.
You can open the WebUI using [http://localhost:8080](http://localhost:8080) (or the hostname of your remote server).

We can now go on and pair our first device.


## Connect a device

Search the [supported devices](../../supported-devices/) for your device and follow the instructions how to pair.

If no instructions are available, the device can probably be paired by factory resetting it.

Once you see something similar to below in the log your device is paired and you can start controlling it using the WebUI and MQTT messages.

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
```

::: warning ATTENTION
It's important that `permit_join` is set to `false` in your `configuration.yaml` after initial setup is
done to keep your Zigbee network safe and to avoid accidental joining of other Zigbee devices.
:::
