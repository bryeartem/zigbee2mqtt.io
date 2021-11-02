"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93555],{24259:(e,t,i)=>{i.r(t),i.d(t,{data:()=>d});const d={key:"v-0fbab2cc",path:"/devices/PS-SPRZMS-SLP3.html",title:"PLAID SYSTEMS PS-SPRZMS-SLP3 control via MQTT",lang:"en-US",frontmatter:{title:"PLAID SYSTEMS PS-SPRZMS-SLP3 control via MQTT",description:"Integrate your PLAID SYSTEMS PS-SPRZMS-SLP3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-01T17:18:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PS-SPRZMS-SLP3.md",git:{updatedTime:1635885305e3}}},61648:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var d=i(66252);const o=(0,d.uE)('<h1 id="plaid-systems-ps-sprzms-slp3" tabindex="-1"><a class="header-anchor" href="#plaid-systems-ps-sprzms-slp3" aria-hidden="true">#</a> PLAID SYSTEMS PS-SPRZMS-SLP3</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PS-SPRZMS-SLP3</td></tr><tr><td>Vendor</td><td>PLAID SYSTEMS</td></tr><tr><td>Description</td><td>Spruce temperature and moisture sensor</td></tr><tr><td>Exposes</td><td>humidity, temperature, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PS-SPRZMS-SLP3.jpg" alt="PLAID SYSTEMS PS-SPRZMS-SLP3"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),r=(0,d.Uk)("How to use device type specific configuration"),a=(0,d.uE)('<ul><li><p><code>temperature_precision</code>: Controls the precision of <code>temperature</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the temperature value set it to e.g. <code>{30: 0, 10: 1}</code>, when temperature &gt;= 30 precision will be 0, when temperature &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>temperature_calibration</code>: Allows to manually calibrate temperature values, e.g. <code>1</code> would add 1 degree to the temperature reported by the device; default <code>0</code>. Calibration will take into affect with next report of device.</p></li><li><p><code>humidity_precision</code>: Controls the precision of <code>humidity</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the humidity value set it to e.g. <code>{80: 0, 10: 1}</code>, when humidity &gt;= 80 precision will be 0, when humidity &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),c={},n=(0,i(83744).Z)(c,[["render",function(e,t){const i=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[o,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[r])),_:1})])]),a],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,d]of t)e[i]=d;return e}}}]);