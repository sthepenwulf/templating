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


    var create = document.getElementById('create');

    create.addEventListener('click', function () {

        console.log("DOS");
        var client_id = document.getElementById('client_id').value;
        var client_name = document.getElementById('client_name').value;
        var ip_mon = document.getElementById('ip_mon').value;
        var dg_mon = document.getElementById('dg_mon').value;
        var mask_mon = document.getElementById('mask_mon').value;
        var vlan = document.getElementById('vlan').value;
        var description = document.getElementById('description').value;
        var service = document.getElementById('service').value;

        var output = `conf t\r
hostname ${client_name}-${client_id}\r
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
exit\r
vlan ${vlan}\r
exit\r
interface vlan 152\r
name MONITORIA-CPE\r
ip address ${ip_mon} ${mask_mon}\r
exit\r
ip default-gateway ${dg_mon}\r
exit\r
interface gigabitethernet9\r
description ##CLIENTE##${description}\r
switchport mode trunk\r
switchport trunk allowed vlan add 152,${vlan}\r
no macro auto smartport\r
no shutdown\r
exit\r
interface gigabitethernet1\r
description ##CLIENTE##${service}\r
switchport mode trunk\r
switchport trunk allowed vlan add 152,${vlan}\r
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
snmp-server community TELECENTRO-${client_id} ro view Default\r
sntp server 192.168.15.74\r
clock source sntp\r
clock timezone 1 -3\r
exit\r`

        var link = document.getElementById('downloadlink');
        link.style.display = 'block';
        link.download = `${client_id} - ${client_name} - SG350.txt`;
        link.href = makeTextFile(output);
    }, false);
})();
