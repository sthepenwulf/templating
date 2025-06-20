def burn_sg350(client, id, vlan, ip, mask, dg, description, service):

    output = f'''conf t
hostname {client}-{id}
username telecentro privilege 15 password Inst4l4c10n3s
username backups privilege 15 password c0rp0backup!
enable password Inst4l4c10n3s
banner login #


Este sistema es propiedad de Telecentro S.A.
ESTA PROHIBIDO EL ACCESO A PERSONAL NO AUTORIZADO.
Ud. debe  tener permiso explicito para acceder a este
equipo.  Todas las actividades son monitoreadas y re-
gistradas. Cualquier violacion de acceso resultara en
acciones legales.
-----------------------------------------------------
#
ip ssh server
ip ssh-client username telecentro
ip ssh-client password Inst4l4c10n3s
ip access-list extended 152
permit ip 192.168.0.0 0.0.255.255 any
permit ip 10.210.0.0 0.0.255.255 any
deny ip any any
!
vlan 152
!
vlan {vlan}
!
interface vlan 152
name MONITORIA-CPE
ip address {ip} {mask}

!
ip default-gateway {dg}
!
interface gigabitethernet9
no macro auto smartport
description ##CLIENTE##{description}
switchport mode trunk
switchport trunk allowed vlan add 152,{vlan}
no macro auto smartport
no shutdown
!
interface gigabitethernet1
description ##CLIENTE##{service}
switchport mode access
switchport access vlan {vlan}
no macro auto smartport
no shutdown
!
interface gigabitethernet2
shutdown
interface gigabitethernet3
shutdown
interface gigabitethernet4
shutdown
interface gigabitethernet5
shutdown
interface gigabitethernet6
shutdown
interface gigabitethernet7
shutdown
interface gigabitethernet8
shutdown
interface vlan 1
shutdown
snmp-server server
snmp-server community TELECENTRO-{id} ro view Default
sntp server 192.168.15.74
clock source sntp 
clock timezone 1 -3
exit
'''
    with open(f"{id} - {client}.txt", "w") as f:
        f.write(output)
        f.closed


def burn_c881(client, id, vlan, ip, mask, dg, wanip, wandg, lan_net, lanip, landg, description, service):
    
    output = f'''
conf t
!
hostname {id}-{client}
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
vlan {vlan}
 name L3VPN
no cdp run
!
!
ip ssh version 2
!
!
!
interface vlan 10
 ip address {lanip} 255.255.255.252
!
interface Fa4
 no cdp enable
 no shutdown
!
interface Fa4.152
 description ##MONITORIA## MONITORIA-CPE
 encapsulation dot1Q 152
 vrf forwarding MONITORIA-CPE
 ip address {ip} 255.255.255.240
 no cdp enable
!
interface F4.{vlan}
 description ##CLIENTE##l3vpn-{service}
 encapsulation dot1Q {vlan}
 ip address {wanip} 255.255.255.252
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
router-id {wanip}
network {wanip} 0.0.0.0 area 0
redistribute bgp 27747 subnets
!
!
ip forward-protocol nd
!
no ip http server
no ip http secure-server
!
ip route 0.0.0.0 0.0.0.0 {wandg}
ip route vrf MONITORIA-CPE 0.0.0.0 0.0.0.0 {dg}
!
logging host 192.168.15.100
!
!
snmp-server community TELECENTRO-{id} RO SNMP
!
!
router bgp 27747
 network {lan_net} mask 255.255.255.252
 neighbor {landg} remote-as 65103
 redistribute ospf 10 match internal external 1 external 2
!
!
banner motd ^C
-----------------------------------------------------
Este sistema es propiedad de Telecentro S.A.
ESTA PROHIBIDO EL ACCESO A PERSONAL NO AUTORIZADO.
Ud. debe  tener permiso explicito para acceder a este
equipo.  Todas las actividades son monitoreadas y re-
gistradas. Cualquier violacion de acceso resultara en
acciones legales.
-----------------------------------------------------^C
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
clock timezone GMT -3


'''
    
    with open(f"{id} - {client} - 881-K9.txt", "w") as f:
        f.write(output)
        f.closed