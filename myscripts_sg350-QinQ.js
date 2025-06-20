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

	var client_id_3 = 0;
        var client_name_3 = 0;
        var ip_mon_3 = 0;
        var dg_mon_3 = 0;
        var mask_mon_3 = 0;
        var vlan_3 = 0;
        var description_3 = 0;
        var service_3 = 0;


    var create = document.getElementById('create3');

    create.addEventListener('click', function () {

        console.log("DOS");
        var client_id_3 = document.getElementById('client_id_3').value;
        var client_name_3 = document.getElementById('client_name_3').value;
        var ip_mon_3 = document.getElementById('ip_mon_3').value;
        var dg_mon_3 = document.getElementById('dg_mon_3').value;
        var mask_mon_3 = document.getElementById('mask_mon_3').value;
        var vlan_3 = document.getElementById('vlan_3').value;
        var description_3 = document.getElementById('description_3').value;
        var service_3 = document.getElementById('service_3').value;

        var output = `conf t\r
hostname ${client_name_3}-${client_id_3}\r
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
vlan ${vlan_3}\r
interface vlan 152\r
name MONITORIA-CPE\r
ip address ${ip_mon_3} ${mask_mon_3}\r
exit\r
ip default-gateway ${dg_mon_3}\r
interface gigabitethernet9\r
no macro auto smartport\r
description ##CLIENTE##${description_3}\r
switchport mode trunk\r
switchport trunk allowed vlan add 152,${vlan_3}\r
no macro auto smartport\r
no shutdown\r
exit\r
interface gigabitethernet1\r
description ##CLIENTE##${service_3}\r
switchport mode customer\r
switchport customer vlan ${vlan_3}\r
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
exit
interface gigabitethernet7\r
shutdown\r
exit\r
interface gigabitethernet8\r
shutdown\r
exit\r
interface vlan 1\r
shutdown\r
exit\r
snmp-server server\r
snmp-server community TELECENTRO-${client_id_3} ro view Default\r
snmp-server community CpeSnmpTlc!! ro view Default\r
sntp server 192.168.15.74\r
clock source sntp\r
clock timezone 1 -3\r
exit\r`

        var link = document.getElementById('downloadlink3');
        link.style.display = 'block';
        link.download = `${client_id_3} - SG350_QINQ.txt`;
        link.href = makeTextFile(output);
    }, false);
})();
