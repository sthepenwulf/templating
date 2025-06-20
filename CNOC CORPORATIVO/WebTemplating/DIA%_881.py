abonado = input("Enter clients abonado: ")
address = input("Enter client Addres: ")
ip = input("Enter monitoria's IP: ")
dg = input("Enter monitoria's DG: ")
lb = input("Enter Loopback1 IP Address: ")
wan = input("Enter Wan Int IP: ")
wandg = input("Enter Wan Int DG: ")
# description = input("Enter interface link description: ")
service = input("Enter l3vpn speed: ")


output = f'''
conf t
!
hostname {abonado}-DIA-881
!
!
ip vrf MONITORIA-CPE
!
!
no ip domain lookup
ip domain name www.telecentro.com.ar
ip cef
no ipv6 cef
!
!
multilink bundle-name authenticated
!
!
!
no spanning-tree vlan 152
no spanning-tree vlan 2306
vtp mode transparent
username telecentro privilege 15 password 0 Inst4l4c10n3s
username backups privilege 15 password 0 c0rp0backup!
!
!
vlan 10
 name LAN
!
vlan 152
 name MONITORIA
!
vlan 2306
 name VPN
!
!
!HACER UN CORTE AQUI PARA PODER GENERAR RSA CORRECTAMENTE
!
crypto key generate rsa
!
!
ip ssh version 2
!
ip ssh time-out 60
ip ssh authentication-retries 4
!
!
interface Loopback1
 description NAT
 ip address {lb} 255.255.255.255
!
interface Loopback100
 no ip address
!
interface FastEthernet0
 switchport access vlan 10
 no ip address
!
interface FastEthernet1
 switchport access vlan 10
 no ip address
!
interface FastEthernet2
 switchport access vlan 10
 no ip address
!
interface FastEthernet3
 switchport access vlan 10
 no ip address
!
interface FastEthernet4
 no ip address
 duplex auto
 speed auto
 no cdp enable
!
interface FastEthernet4.152
 description MONITORIA-CPE
 encapsulation dot1Q 152
 ip vrf forwarding MONITORIA-CPE
 ip address {ip} 255.255.255.240
!
interface FastEthernet4.2306 
 description VPN
 encapsulation dot1Q 2306
 ip address {wan} 255.255.255.252
 ip nat outside
 no ip virtual-reassembly in
!
!
interface Vlan10
 ip address 10.10.10.252 255.255.255.0
 ip nat inside
 ip virtual-reassembly in
 ip tcp adjust-mss 1452
 no autostate
!
ip forward-protocol nd
no ip http server
no ip http secure-server
!
!
ip nat inside source list DIA-LAN interface Loopback1 overload
ip nat inside source static tcp 10.10.10.2 23 interface Loopback1 10002
ip nat inside source static tcp 10.10.10.3 23 interface Loopback1 10003
ip nat inside source static tcp 10.10.10.4 23 interface Loopback1 10004
ip nat inside source static tcp 10.10.10.5 23 interface Loopback1 10005
ip nat inside source static tcp 10.10.10.6 23 interface Loopback1 10006
ip nat inside source static tcp 10.10.10.7 23 interface Loopback1 10007
ip nat inside source static tcp 10.10.10.8 23 interface Loopback1 10008
ip nat inside source static tcp 10.10.10.9 23 interface Loopback1 10009
ip nat inside source static tcp 10.10.10.1 7223 interface Loopback1 11001
ip nat inside source static tcp 10.10.10.2 7223 interface Loopback1 11002
ip nat inside source static tcp 10.10.10.3 7223 interface Loopback1 11003
ip nat inside source static tcp 10.10.10.4 7223 interface Loopback1 11004
ip nat inside source static tcp 10.10.10.5 7223 interface Loopback1 11005
ip nat inside source static tcp 10.10.10.6 7223 interface Loopback1 11006
ip nat inside source static tcp 10.10.10.7 7223 interface Loopback1 11007
ip nat inside source static tcp 10.10.10.8 7223 interface Loopback1 11008
ip nat inside source static tcp 10.10.10.9 7223 interface Loopback1 11009
ip nat inside source static tcp 10.10.10.1 20 interface Loopback1 12001
ip nat inside source static tcp 10.10.10.2 20 interface Loopback1 12002
ip nat inside source static tcp 10.10.10.3 20 interface Loopback1 12003
ip nat inside source static tcp 10.10.10.4 20 interface Loopback1 12004
ip nat inside source static tcp 10.10.10.5 20 interface Loopback1 12005
ip nat inside source static tcp 10.10.10.6 20 interface Loopback1 12006
ip nat inside source static tcp 10.10.10.7 20 interface Loopback1 12007
ip nat inside source static tcp 10.10.10.8 20 interface Loopback1 12008
ip nat inside source static tcp 10.10.10.9 20 interface Loopback1 12009
ip nat inside source static tcp 10.10.10.1 21 interface Loopback1 13001
ip nat inside source static tcp 10.10.10.2 21 interface Loopback1 13002
ip nat inside source static tcp 10.10.10.3 21 interface Loopback1 13003
ip nat inside source static tcp 10.10.10.4 21 interface Loopback1 13004
ip nat inside source static tcp 10.10.10.5 21 interface Loopback1 13005
ip nat inside source static tcp 10.10.10.6 21 interface Loopback1 13006
ip nat inside source static tcp 10.10.10.7 21 interface Loopback1 13007
ip nat inside source static tcp 10.10.10.8 21 interface Loopback1 13008
ip nat inside source static tcp 10.10.10.9 21 interface Loopback1 13009
ip nat inside source static tcp 10.10.10.1 7224 interface Loopback1 14001
ip nat inside source static tcp 10.10.10.2 7224 interface Loopback1 14002
ip nat inside source static tcp 10.10.10.3 7224 interface Loopback1 14003
ip nat inside source static tcp 10.10.10.4 7224 interface Loopback1 14004
ip nat inside source static tcp 10.10.10.5 7224 interface Loopback1 14005
ip nat inside source static tcp 10.10.10.6 7224 interface Loopback1 14006
ip nat inside source static tcp 10.10.10.7 7224 interface Loopback1 14007
ip nat inside source static tcp 10.10.10.8 7224 interface Loopback1 14008
ip nat inside source static tcp 10.10.10.9 7224 interface Loopback1 14009
ip nat inside source static tcp 10.10.10.1 80 interface Loopback1 15001
ip nat inside source static tcp 10.10.10.2 80 interface Loopback1 15002
ip nat inside source static tcp 10.10.10.3 80 interface Loopback1 15003
ip nat inside source static tcp 10.10.10.4 80 interface Loopback1 15004
ip nat inside source static tcp 10.10.10.5 80 interface Loopback1 15005
ip nat inside source static tcp 10.10.10.6 80 interface Loopback1 15006
ip nat inside source static tcp 10.10.10.7 80 interface Loopback1 15007
ip nat inside source static tcp 10.10.10.8 80 interface Loopback1 15008
ip nat inside source static tcp 10.10.10.9 80 interface Loopback1 15009
ip nat inside source static tcp 10.10.10.1 7225 interface Loopback1 16001
ip nat inside source static tcp 10.10.10.2 7225 interface Loopback1 16002
ip nat inside source static tcp 10.10.10.3 7225 interface Loopback1 16003
ip nat inside source static tcp 10.10.10.4 7225 interface Loopback1 16004
ip nat inside source static tcp 10.10.10.5 7225 interface Loopback1 16005
ip nat inside source static tcp 10.10.10.6 7225 interface Loopback1 16006
ip nat inside source static tcp 10.10.10.7 7225 interface Loopback1 16007
ip nat inside source static tcp 10.10.10.8 7225 interface Loopback1 16008
ip nat inside source static tcp 10.10.10.9 7225 interface Loopback1 16009
ip nat inside source static tcp 10.10.10.1 7226 interface Loopback1 17001
ip nat inside source static tcp 10.10.10.2 7226 interface Loopback1 17002
ip nat inside source static tcp 10.10.10.3 7226 interface Loopback1 17003
ip nat inside source static tcp 10.10.10.4 7226 interface Loopback1 17004
ip nat inside source static tcp 10.10.10.5 7226 interface Loopback1 17005
ip nat inside source static tcp 10.10.10.6 7226 interface Loopback1 17006
ip nat inside source static tcp 10.10.10.7 7226 interface Loopback1 17007
ip nat inside source static tcp 10.10.10.8 7226 interface Loopback1 17008
ip nat inside source static tcp 10.10.10.9 7226 interface Loopback1 17009
ip nat inside source static tcp 10.10.10.1 7227 interface Loopback1 18001
ip nat inside source static tcp 10.10.10.2 7227 interface Loopback1 18002
ip nat inside source static tcp 10.10.10.3 7227 interface Loopback1 18003
ip nat inside source static tcp 10.10.10.4 7227 interface Loopback1 18004
ip nat inside source static tcp 10.10.10.5 7227 interface Loopback1 18005
ip nat inside source static tcp 10.10.10.6 7227 interface Loopback1 18006
ip nat inside source static tcp 10.10.10.7 7227 interface Loopback1 18007
ip nat inside source static tcp 10.10.10.8 7227 interface Loopback1 18008
ip nat inside source static tcp 10.10.10.9 7227 interface Loopback1 18009
ip nat inside source static tcp 10.10.10.1 7228 interface Loopback1 19001
ip nat inside source static tcp 10.10.10.2 7228 interface Loopback1 19002
ip nat inside source static tcp 10.10.10.3 7228 interface Loopback1 19003
ip nat inside source static tcp 10.10.10.4 7228 interface Loopback1 19004
ip nat inside source static tcp 10.10.10.5 7228 interface Loopback1 19005
ip nat inside source static tcp 10.10.10.6 7228 interface Loopback1 19006
ip nat inside source static tcp 10.10.10.7 7228 interface Loopback1 19007
ip nat inside source static tcp 10.10.10.8 7228 interface Loopback1 19008
ip nat inside source static tcp 10.10.10.9 7228 interface Loopback1 19009
ip nat inside source static tcp 10.10.10.25 9100 interface Loopback100 9100
ip nat inside source static tcp 10.10.10.150 8080 interface Loopback1 80
ip nat inside source static tcp 10.10.10.150 5550 interface Loopback1 5550
ip nat inside source static tcp 10.10.10.150 6550 interface Loopback1 6550
ip nat inside source static tcp 10.10.10.150 4550 interface Loopback1 4550
ip nat inside source static tcp 10.10.10.150 5552 interface Loopback1 5552
ip nat inside source static tcp 10.10.10.150 8000 interface Loopback1 8000
ip nat inside source static tcp 10.10.10.150 554 interface Loopback100 554
ip nat inside source static tcp 10.10.10.150 80 interface Loopback1 8080
ip nat inside source static tcp 10.10.10.254 22 interface Loopback1 10500
ip nat inside source static tcp 10.10.10.1 23 interface Loopback1 10001
!
!
!
ip route 0.0.0.0 0.0.0.0 {wandg}
ip route vrf MONITORIA-CPE 0.0.0.0 0.0.0.0 {dg}
!
ip access-list standard DIA-LAN
 permit 10.10.10.0 0.0.0.255
!
!
snmp-server community DIA-RO RO
snmp-server community TELECENTRO-{abonado} RO
!
control-plane
!
!
mgcp behavior rsip-range tgcp-only
mgcp behavior comedia-role none
mgcp behavior comedia-check-media-src disable
mgcp behavior comedia-sdp-force disable
!
mgcp profile default
!
!
banner motd ^CCCC
-----------------------------------------------------
Este sistema es propiedad de Telecentro S.A.
ESTA PROHIBIDO EL ACCESO A PERSONAL NO AUTORIZADO.
Ud. debe  tener permiso explicito para acceder a este
equipo.  Todas las actividades son monitoreadas y re-
gistradas. Cualquier violacion de acceso resultara en
acciones legales.
-----------------------------------------------------
^C
!
line con 0
 logging synchronous
 login local
 no modem enable
line aux 0
line vty 0 4
 privilege level 15
 login local
 transport input telnet ssh
line vty 5 15
 privilege level 15
 login local
 transport input telnet ssh
!
scheduler allocate 20000 1000
ntp server vrf MONITORIA-CPE 192.168.15.74
clock timezone GMT -3

!
end
'''

with open(f"{abonado} - {address}.txt", "w") as f:
    f.write(output)
    f.closed



