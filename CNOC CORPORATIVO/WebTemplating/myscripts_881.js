(function () {
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };


  var create = document.getElementById('create');

  create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    var client_id = document.getElementById('client_id').value;
    var client_name = document.getElementById('client_name').value;
    var ip_mon = document.getElementById('ip_mon').value;
    var dg_mon = document.getElementById('dg_mon').value;
    var mask_mon = document.getElementById('mask_mon').value;
    var vlan = document.getElementById('vlan').value;
    var wan_ip = document.getElementById('wan_ip').value;
    var wan_mask = document.getElementById('wan_mask').value;
    var wan_dg = document.getElementById('wan_dg').value;
    var lan_net = document.getElementById('lan_net').value;
    var lan_mask = document.getElementById('lan_mask').value;
    var lan_ip = document.getElementById('lan_ip').value;
    var lan_dg = document.getElementById('lan_dg').value;
    var service = document.getElementById('service').value;


    output = `conf t
!
hostname ${client_id}-${client_name}
!
vrf definition MONITORIA-CPE
!
address-family ipv4
exit-address-family
!
logging buffered 200000
!
!
ip domain name telecentro.net.ar
!
no ip domain-lookup
!
!
crypto key generate rsa
!
!
vtp mode transparent
username  telecentro privilege 15 password Inst4l4c10n3s
username  backups privilege 15 password c0rp0backup!
service password-encryption
!
vlan 10
name LAN
vlan 152
name MONITORIA
vlan ${vlan}
name L3VPN
no cdp run
!
!
ip ssh version 2
!
!
!
interface vlan 10
ip address ${lan_ip} 255.255.255.252
!
interface Fa4
no cdp enable
no shutdown
!
interface Fa4.152
description ##MONITORIA## MONITORIA-CPE
encapsulation dot1Q 152
vrf forwarding MONITORIA-CPE
ip address ${ip_mon} ${mask_mon}
no cdp enable
!
interface F4.${vlan}
description ##CLIENTE##${service}
encapsulation dot1Q ${vlan}
ip address ${ wan_ip} 255.255.255.252
ip ospf network point-to-point
ip ospf hello-interval 5
no cdp enable
!
interface Fa0
switchport mode access
switchpor access vlan 10
!
interface Fa1
switchport mode access
switchport access vlan 10
!
interface Fa2
switchport mode access
switchport access vlan 10
!
interface Fa3
switchport mode access
switchport access vlan 10
!
interface Vlan1
no ip address
shutdown
!
router ospf 10
router-id ${wan_ip}
network ${wan_ip} 0.0.0.0 area 0
redistribute bgp 27747 subnets
!
!
ip forward-protocol nd
!
no ip http server
no ip http secure-server
!
ip route 0.0.0.0 0.0.0.0 ${wan_dg}
ip route vrf MONITORIA-CPE 0.0.0.0 0.0.0.0 ${dg_mon}
!
logging host 192.168.15.100
!
!
snmp-server community TELECENTRO-${client_id} RO SNMP
!
!
router bgp 27747
network ${lan_net} mask 255.255.255.252
neighbor ${lan_dg} remote-as 65103
redistribute ospf 10 match internal external 1 external 2
!
!
banner motd ^ C
-----------------------------------------------------
Este sistema es propiedad de Telecentro S.A.
ESTA PROHIBIDO EL ACCESO A PERSONAL NO AUTORIZADO.
Ud.debe  tener permiso explicito para acceder a este
equipo.Todas las actividades son monitoreadas y re -
gistradas.Cualquier violacion de acceso resultara en
acciones legales.
-------------------------------------------------^ C
!
line con 0
logging synchronous
login local
line vty 0 4
privilege level 15
login local
transport input ssh
line vty 5 15
privilege level 15
login local
transport input ssh
!
ntp server vrf MONITORIA-CPE 192.168.15.74
clock timezone GMT -3`

    console.log(output);
    link.href = makeTextFile(output);
    link.style.display = 'block';
    link.download = `${client_id} - ${client_name} - 881.txt`;
  }, false);
})();
