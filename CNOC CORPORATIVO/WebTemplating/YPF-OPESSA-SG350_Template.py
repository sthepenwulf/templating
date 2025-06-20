client = input("Enter client name: ")
ID = input("Enter ID: ")
vlan = input("Enter client vlan: ")
ip = input("Enter monitoria's IP: ")
dg = input("Enter monitoria's DG: ")
description = input("Enter interface link description: ")
service = input("Enter service description: ")


output = f'''conf t
hostname {client}-{ID}
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
ip address {ip} 255.255.255.240 

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
switchport mode trunk
switchport trunk allowed vlan add 152,{vlan}
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
snmp-server community TELECENTRO-{ID} ro view Default
sntp server 192.168.15.74
clock source sntp 
clock timezone 1 -3

exit
'''
with open(f"{ID} - {client} - SG350.txt", "w") as f:
    f.write(output)
    f.closed


print(f'''
hostname {client}-{ID}
vlan {vlan}
ip address {ip}
ip default-gateway {dg}
description ##CLIENTE##{description}
switchport trunk allowed vlan add 152,{vlan}
description ##CLIENTE##{service}
switchport access vlan {vlan}
snmp-server community TELECENTRO-{ID} ro view Default''')