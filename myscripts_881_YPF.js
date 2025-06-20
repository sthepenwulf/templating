(function () {
    var textFile = null,
        makeTextFile = function (text) {
            var data = new Blob([text], { type: 'text/plain' });

            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
        };

    console.log("UNO");

    var client_id_4 = 0;
    var client_name_4 = 0;
    var ip_mon_4 = 0;
    var dg_mon_4 = 0;
    var mask_mon_4 = 0;
    var vlan_4 = 0;
    var wan_ip_4 = 0;
    var wan_mask_4 = 0;
    var wan_dg_4 = 0;
    var lan_net_4 = 0;
    var lan_mask_4 = 0;
    var lan_ip_4 = 0;
    var lan_dg_4 = 0;
    var service_4 = 0;


  var create = document.getElementById('create4');

  create.addEventListener('click', function () {

console.log("DOS");
    
    var client_id_4 = document.getElementById('client_id_4').value;
    var client_name_4 = document.getElementById('client_name_4').value;
    var ip_mon_4 = document.getElementById('ip_mon_4').value;
    var dg_mon_4 = document.getElementById('dg_mon_4').value;
    var mask_mon_4 = document.getElementById('mask_mon_4').value;
    var vlan_4 = document.getElementById('vlan_4').value;
    var wan_ip_4 = document.getElementById('wan_ip_4').value;
    var wan_mask_4 = document.getElementById('wan_mask_4').value;
    var wan_dg_4 = document.getElementById('wan_dg_4').value;
    var lan_net_4 = document.getElementById('lan_net_4').value;
    var lan_mask_4 = document.getElementById('lan_mask_4').value;
    var lan_ip_4 = document.getElementById('lan_ip_4').value;
    var lan_dg_4 = document.getElementById('lan_dg_4').value;
    var service_4 = document.getElementById('service_4').value;


    output = `conf t\r
hostname ${client_id_4}-${client_name_4}\r

vrf definition MONITORIA-CPE\r

address-family ipv4\r
exit-address-family\r

logging buffered 200000\r


ip domain name telecentro.net.ar\r

no ip domain-lookup\r


crypto key generate rsa\r


vtp mode transparent\r
username  telecentro privilege 15 password Inst4l4c10n3s\r
username  backups privilege 15 password c0rp0backup!\r
service password-encryption\r

vlan 10\r
name LAN\r
vlan 152\r
name MONITORIA\r
vlan ${vlan_4}\r
name L3VPN\r
no cdp run\r
ip ssh version 2\r
interface vlan 10\r
ip address ${lan_ip_4} 255.255.255.252\r
exit\r
interface Fa4\r
no cdp enable\r
no shutdown\r
exit\r
interface Fa4.152\r
description ##MONITORIA## MONITORIA-CPE\r
encapsulation dot1Q 152\r
vrf forwarding MONITORIA-CPE\r
ip address ${ip_mon_4} ${mask_mon_4}\r
no cdp enable\r
exit\r
interface F4.${vlan_4}\r
description ##CLIENTE##${service_4}\r
encapsulation dot1Q ${vlan_4}\r
ip address ${ wan_ip_4} 255.255.255.252\r
ip ospf network point-to-point\r
ip ospf hello-interval 5\r
no cdp enable\r
exit\r
interface Fa0\r
switchport mode access\r
switchpor access vlan 10\r
exit\r
interface Fa1\r
switchport mode access\r
switchport access vlan 10\r
exit\r
interface Fa2\r
switchport mode access\r
switchport access vlan 10\r
exit\r
interface Fa3\r
switchport mode access\r
switchport access vlan 10\r
exit\r
interface Vlan1\r
no ip address\r
shutdown\r
exit\r
router ospf 10\r
router-id ${wan_ip_4}\r
network ${wan_ip_4} 0.0.0.0 area 0\r
redistribute bgp 27747 subnets\r


ip forward-protocol nd\r

no ip http server\r
no ip http secure-server\r

ip route 0.0.0.0 0.0.0.0 ${wan_dg_4}\r
ip route vrf MONITORIA-CPE 0.0.0.0 0.0.0.0 ${dg_mon_4}\r

logging host 192.168.15.100\r


snmp-server community TELECENTRO-${client_id_4} RO SNMP\r
snmp-server community CpeSnmpTlc!! ro\r

router bgp 27747\r
network ${lan_net_4} mask 255.255.255.252\r
neighbor ${lan_dg_4} remote-as 65103\r
redistribute ospf 10 match internal external 1 external 2\r

banner motd ^ C\r
-----------------------------------------------------\r
Este sistema es propiedad de Telecentro S.A.\r
ESTA PROHIBIDO EL ACCESO A PERSONAL NO AUTORIZADO.\r
Ud.debe  tener permiso explicito para acceder a este\r
equipo.Todas las actividades son monitoreadas y re -\r
gistradas.Cualquier violacion de acceso resultara en\r
acciones legales.\r
-------------------------------------------------^ C\r

line con 0\r
logging synchronous\r
login local\r
line vty 0 4\r
privilege level 15\r
login local\r
transport input ssh\r
line vty 5 15\r
privilege level 15\r
login local\r
transport input ssh\r

ntp server vrf MONITORIA-CPE 192.168.15.74\r
clock timezone GMT -3\r`

        var link = document.getElementById('downloadlink4');
        link.style.display = 'block';
        link.download = `${client_id_4} - 881_YPF.txt`;
        link.href = makeTextFile(output);
    }, false);
})();
