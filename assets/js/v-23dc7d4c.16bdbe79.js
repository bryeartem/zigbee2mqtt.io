"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1832],{39383:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-23dc7d4c",path:"/devices/E1743.html",title:"IKEA E1743 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1743 control via MQTT",description:"Integrate your IKEA E1743 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Deprecated click event",slug:"deprecated-click-event",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Binding",slug:"binding",children:[]},{level:3,title:"Battery Replacement",slug:"battery-replacement",children:[]},{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1743.md",git:{updatedTime:1635885305e3}}},73760:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(66252);const i=(0,n.uE)('<h1 id="ikea-e1743" tabindex="-1"><a class="header-anchor" href="#ikea-e1743" aria-hidden="true">#</a> IKEA E1743</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1743</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>TRADFRI ON/OFF switch</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1743.jpg" alt="IKEA E1743"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event" aria-hidden="true">#</a> Deprecated click event</h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the switch to Zigbee2MQTT by pressing the pair button (found under the back cover next to the battery) 4 times in a row. The red light on the front side should flash a few times and then turn off (it&#39;s more visible to see the light from the back). After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3>',10),s=(0,n.Uk)("The E1743 can be bound to groups using "),d=(0,n.Uk)("binding"),o=(0,n.Uk)(". It can only be bound to 1 group at a time and cannot be bound to a device."),c=(0,n._)("p",null,[(0,n.Uk)("By default this remote is bound to the default bind group which you first have to unbind it from. This can be done by sending to "),(0,n._)("code",null,"zigbee2mqtt/bridge/request/device/unbind"),(0,n.Uk)(" payload "),(0,n._)("code",null,'{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}'),(0,n.Uk)(". Right before executing the commands make sure to wake up the device by pressing a button on it.")],-1),r=(0,n._)("h3",{id:"battery-replacement",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#battery-replacement","aria-hidden":"true"},"#"),(0,n.Uk)(" Battery Replacement")],-1),l=(0,n._)("p",null,"After replacing the battery, reporting of battery % may not work. If you experience this issue, remove the device and join it again.",-1),u=(0,n._)("h3",{id:"device-type-specific-configuration",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#device-type-specific-configuration","aria-hidden":"true"},"#"),(0,n.Uk)(" Device type specific configuration")],-1),p=(0,n.Uk)("How to use device type specific configuration"),h=(0,n.uE)('<ul><li><p><code>legacy</code>: Set to <code>false</code> to disable the legacy integration (highly recommended!) (default: true)</p></li><li><p><code>simulated_brightness</code>: Set to <code>true</code> to simulate a <code>brightness</code> value (default: <code>false</code>). If this device provides a <code>brightness_move_up</code> or <code>brightness_move_down</code> action it is possible to specify the update interval and delta. This can be done by instead of specifying <code>true</code>:</p></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),b=(0,n.Uk)("This device supports OTA updates, for more information see "),m=(0,n.Uk)("OTA updates"),g=(0,n.Uk)("."),f=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_down</code>, <code>brightness_move_up</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),v={},y=(0,a(83744).Z)(v,[["render",function(e,t){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,(0,n._)("p",null,[s,(0,n.Wm)(a,{to:"/guide/usage/binding.html"},{default:(0,n.w5)((()=>[d])),_:1}),o]),c,r,l,u,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[p])),_:1})])]),h,(0,n._)("p",null,[b,(0,n.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[m])),_:1}),g]),f],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,n]of t)e[a]=n;return e}}}]);