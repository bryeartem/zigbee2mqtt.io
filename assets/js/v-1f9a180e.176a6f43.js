"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10493],{76409:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a={key:"v-1f9a180e",path:"/devices/AU-A1ZBPIRS.html",title:"Aurora Lighting AU-A1ZBPIRS control via MQTT",lang:"en-US",frontmatter:{title:"Aurora Lighting AU-A1ZBPIRS control via MQTT",description:"Integrate your Aurora Lighting AU-A1ZBPIRS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-04-29T17:11:59.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/AU-A1ZBPIRS.md",git:{updatedTime:1635885305e3}}},38499:(e,i,t)=>{t.r(i),t.d(i,{default:()=>l});var a=t(66252);const n=(0,a.uE)('<h1 id="aurora-lighting-au-a1zbpirs" tabindex="-1"><a class="header-anchor" href="#aurora-lighting-au-a1zbpirs" aria-hidden="true">#</a> Aurora Lighting AU-A1ZBPIRS</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>AU-A1ZBPIRS</td></tr><tr><td>Vendor</td><td>Aurora Lighting</td></tr><tr><td>Description</td><td>AOne PIR sensor</td></tr><tr><td>Exposes</td><td>occupancy, battery_low, tamper, illuminance, illuminance_lux, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/AU-A1ZBPIRS.jpg" alt="Aurora Lighting AU-A1ZBPIRS"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),c=(0,a.Uk)("How to use device type specific configuration"),o=(0,a.uE)('<ul><li><p><code>illuminance_lux_precision</code>: Controls the precision of <code>illuminance_lux</code> values, e.g. <code>0</code> or <code>1</code>; default <code>1</code>. To control the precision based on the illuminance_lux value set it to e.g. <code>{1000: 0, 100: 1}</code>, when illuminance_lux &gt;= 1000 precision will be 0, when illuminance_lux &gt;= 100 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>illuminance_lux_calibration</code>: Allows to manually calibrate illuminance values, e.g. <code>95</code> would take 95% to the illuminance reported by the device; default <code>100</code>. Calibration will take into affect with next report of device.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),r={},l=(0,t(83744).Z)(r,[["render",function(e,i){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[c])),_:1})])]),o],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{for(const[t,a]of i)e[t]=a;return e}}}]);