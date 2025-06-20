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

 	var client_id_2 = 0;
        var client_name_2 = 0;
        var ip_mon_2 = 0;
        var dg_mon_2 = 0;
        var mask_mon_2 = 0;
        var vlan_2 = 0;
        var description_2 = 0;
        var service_2 = 0;


    var create = document.getElementById('create2');

    create.addEventListener('click', function () {

        console.log("DOS");
        var client_id_2 = document.getElementById('client_id_2').value;
        var client_name_2 = document.getElementById('client_name_2').value;
        var ip_mon_2 = document.getElementById('ip_mon_2').value;
        var dg_mon_2 = document.getElementById('dg_mon_2').value;
        var mask_mon_2 = document.getElementById('mask_mon_2').value;
        var vlan_2 = document.getElementById('vlan_2').value;
        var description_2 = document.getElementById('description_2').value;
        var service_2 = document.getElementById('service_2').value;

        var output = `conf t\r
hostname ${client_name_2}-${client_id_2}\r
username telecentro privilege 15 password Inst4l4c10n3s\r
username backups privilege 15 password c0rp0backup!\r
enable password Inst4l4c10n3s\r
banner login #\r
-----------------------------------------------------\r
Este sistema es propiedad de Telecentro S.A.\r
ESTA PROHIBIDO EL ACCESO A PERSONAL NO AUTORIZADO.\r
Ud. debe  tener permiso explicito para acceder a este\r
equipo.  Todas las actividades son monitoreadas y re-\r
gistradas. Cualquier violacion de acceso resultara en\r
acciones legales.\r
-----------------------------------------------------\r
#
ip ssh server\r
ip ssh-client username telecentro\r
ip ssh-client password Inst4l4c10n3s\r
ip access-list extended 152\r
permit ip 192.168.0.0 0.0.255.255 any\r
permit ip 10.210.0.0 0.0.255.255 any\r
deny ip any any\r
vlan 152\r
vlan ${vlan_2}\r
interface vlan 152\r
name MONITORIA-CPE\r
ip address ${ip_mon_2} ${mask_mon_2}\r
exit\r
ip default-gateway ${dg_mon_2}\r
interface gigabitethernet9\r
description ##CLIENTE##${description_2}\r
switchport mode trunk\r
switchport trunk allowed vlan add 152,${vlan_2}\r
no macro auto smartport\r
no shutdown\r
exit\r
interface gigabitethernet1\r
description ##CLIENTE##${service_2}\r
switchport mode trunk\r
switchport trunk allowed vlan add 152,${vlan_2}\r
no macro auto smartport\r
no shutdown\r
exit\r
interface gigabitethernet2\r
shutdown\r
exit\r
interface gigabitethernet3\r
shutdown\r
exit\r
interface gigabitethernet4\r
shutdown\r
exit\r
interface gigabitethernet5\r
shutdown\r
exit\r
interface gigabitethernet6\r
shutdown\r
exit\r
interface gigabitethernet7\r
shutdown\r
exit\r
interface gigabitethernet8\r
shutdown\r
interface vlan 1\r
shutdown\r
exit\r
snmp-server server\r
snmp-server community TELECENTRO-${client_id_2} ro view Default\r
snmp-server community CpeSnmpTlc!! ro view Default\r
sntp server 192.168.15.74\r
clock source sntp\r
clock timezone 1 -3\r
exit\r`

        var link = document.getElementById('downloadlink2');
        link.style.display = 'block';
        link.download = `${client_id_2} - SG350_L3VPN.txt`;
        link.href = makeTextFile(output);
    }, false);
})();
