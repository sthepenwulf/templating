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

	var client_id = 0;
        var ip_mon_7 = 0;
        var dg_mon_7 = 0;
        var mask_mon_7 = 0;
        var vlan_7 = 0;
        var service_7 = 0;


    var create = document.getElementById('create7');

    create.addEventListener('click', function () {

        console.log("DOS");
        var client_id_7 = document.getElementById('client_id_7').value;
        var ip_mon_7 = document.getElementById('ip_mon_7').value;
        var dg_mon_7 = document.getElementById('dg_mon_7').value;
        var mask_mon_7 = document.getElementById('mask_mon_7').value;
        var vlan_7 = document.getElementById('vlan_7').value;
        var service_7 = document.getElementById('service_7').value;

        var output = `enable\r
configure\r
jumbo-size 9216\r
hostname CPE-SG3210-${client_id_7}\r
vlan 152\r
name Monitoria\r
exit\r
vlan ${vlan_7}\r
name ${client_id_7}-${service_7}\r
exit\r



user name telecentro privilege admin secret Inst4l4c10n3s\r
user name backups privilege admin secret c0rp0backup!\r
service password-encryption\r


line vty 0 5\r
exit\r


ip ssh server\r
telnet disable\r


snmp-server community CpeSnmpTlc read-only\r
snmp-server community TELECENTRO-${client_id_7} read-only\r
ip route 0.0.0.0 0.0.0.0 ${dg_mon_7}\r


interface vlan 152\r
 description MONITORIA\r
 ip address ${ip_mon_7} ${mask_mon_7}\r
exit\r


interface gigabitEthernet 1/0/1\r
 description SERVICIO-ADI\r
  switchport general allowed vlan ${vlan_7} untagged\r
  switchport pvid ${vlan_7}\r
  no switchport general allowed vlan 1\r
  spanning-tree bpduguard\r
exit\r


interface gigabitEthernet 1/0/9\r
description UPLINK-A-HUB\r
switchport general allowed vlan 152,${vlan_7} tagged\r
switchport pvid ${vlan_7}\r
spanning-tree\r
exit\r

interface gigabitEthernet 1/0/2\r
shutdown\r
exit\r
interface gigabitEthernet 1/0/3\r
shutdown\r
exit\r
interface gigabitEthernet 1/0/4\r
shutdown\r
exit\r
interface gigabitEthernet 1/0/5\r
shutdown\r
exit\r
interface gigabitEthernet 1/0/6\r
shutdown\r
exit\r
interface gigabitEthernet 1/0/7\r
shutdown\r
exit\r
interface gigabitEthernet 1/0/8\r
shutdown\r
exit\r


interface vlan 1\r
  shutdown\r
exit\r


spanning-tree\r
spanning-tree mode rstp\r
system-time ntp UTC-03:00 192.168.15.74 192.168.15.74 12\r


end\r


copy running-config startup-config\r`

        var link = document.getElementById('downloadlink7');
        link.style.display = 'block';
        link.download = `${client_id_7} - SG3210_ADI.txt`;
        link.href = makeTextFile(output);
    }, false);
})();

