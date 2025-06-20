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

	var client_id_6 = 0;
        var ip_host_6 = 0;
        var ip_dg_6 = 0;
        var linea_1_6 = 0;
        var linea_2_6 = 0;
        var linea_3_6 = 0;
        var sip_trunk_6 = 0;


    var create = document.getElementById('create6');

    create.addEventListener('click', function () {

        console.log("DOS");
        var client_id_6 = document.getElementById('client_id_6').value;
        var ip_host_6 = document.getElementById('ip_host_6').value;
        var ip_dg_6 = document.getElementById('ip_dg_6').value;
        var linea_1_6 = document.getElementById('linea_1_6').value;
        var linea_2_6 = document.getElementById('linea_2_6').value;
        var linea_3_6 = document.getElementById('linea_3_6').value;
        var sip_trunk_6 = document.getElementById('sip_trunk_6').value;
        

        var output = `;**************\r
;** Ini File **\r
;**************\r
\r
;Board: Mediant 800B\r
;HW Board Type: 69  FK Board Type: 72\r
;Serial Number: 11755940\r
;Slot Number: 1\r
;Software Version: 7.00A.040.004\r
;DSP Software Version: 5014AE3_R => 700.40\r
;Board IP Address: 10.10.10.1\r
;Board Subnet Mask: 255.255.255.0\r
;Board Default Gateway: 0.0.0.0\r
;Ram size: 496M   Flash size: 64M   Core speed: 500Mhz\r
;Num of DSP Cores: 3  Num DSP Channels: 150\r
;Num of physical LAN ports: 4\r
;Profile: NONE \r
;;;Key features:;Board Type: Mediant 800B ;PSTN Protocols: ISDN IUA=2 CAS ;E1Trunks=2 ;T1Trunks=2 ;System features: ;DATA features: ;Channel Type: RTP DspCh=150 ;HA ;IP Media: VXML ;Coders: G723 G729 GSM-FR G727 G722 ;DSP Voice features: IpmDetector ;Security: IPSEC MediaEncryption StrongEncryption EncryptControlProtocol ;Control Protocols: SIP MSFT ;Default features:;Coders: G711 G726;\r
\r
;------  HW components------\r
;\r
; Slot # : Module type : # of ports\r
;----------------------------------------------\r
;      1 : FALC56      : 2\r
;      2 : FXS         : 4\r
;      3 : Empty\r
;----------------------------------------------\r
\r
\r
[SYSTEM Params]\r
\r
NTPServerUTCOffset = -10800\r
NTPUpdateInterval = 87300\r
;VpFileLastUpdateTime is hidden but has non-default value\r
TLSPkeySize = 2048\r
NTPServerIP = '0.0.0.0'\r
;AUPDNETWORKSOURCE is hidden but has non-default value\r
;LastConfigChangeTime is hidden but has non-default value\r
\r
[BSP Params]\r
\r
PCMLawSelect = 1\r
UdpPortSpacing = 10\r
EnterCpuOverloadPercent = 99\r
ExitCpuOverloadPercent = 95\r
\r
[Analog Params]\r
\r
PolarityReversalType = 1\r
MinFlashHookTime = 100\r
\r
[ControlProtocols Params]\r
\r
AdminStateLockControl = 0\r
\r
[MGCP Params]\r
\r
\r
[MEGACO Params]\r
\r
EP_Num_0 = 0\r
EP_Num_1 = 1\r
EP_Num_2 = 1\r
EP_Num_3 = 0\r
EP_Num_4 = 0\r
\r
[PSTN Params]\r
\r
ProtocolType_0 = 1\r
ProtocolType_1 = 7\r
TerminationSide_0 = 0\r
TerminationSide_1 = 1\r
FramingMethod = b\r
LineCode = 2\r
CASTablesNum = 2\r
CASFileName_0 = 'R2_MFTable_ARG_ANI.dat'\r
CASFileName_1 = 'R2_MFTable_ARG_ANI.dat'\r
CASFileName_2 = ''\r
CASFileName_3 = ''\r
CASFileName_4 = ''\r
CASFileName_5 = ''\r
CASFileName_6 = ''\r
CASFileName_7 = ''\r
EnablePSTNDebug = 1\r
\r
[SS7 Params]\r
\r
\r
[Voice Engine Params]\r
\r
FaxTransportMode = 0\r
V22ModemTransportType = 0\r
V23ModemTransportType = 0\r
V32ModemTransportType = 0\r
V34ModemTransportType = 0\r
RFC2833TxPayloadType = 101\r
V34FAXTRANSPORTTYPE = 0\r
CallProgressTonesFilename = 'argentina_tonos.dat'\r
\r
[WEB Params]\r
\r
LogoWidth = '145'\r
HTTPSCipherString = 'RC4:EXP'\r
\r
[SIP Params]\r
\r
GWDEBUGLEVEL = 5\r
;ISPRACKREQUIRED is hidden but has non-default value\r
ENABLEEARLYMEDIA = 1\r
REDUNDANTROUTINGMODE = 0\r
MSLDAPPRIMARYKEY = 'telephoneNumber'\r
ENERGYDETECTORCMD = 587202560\r
ANSWERDETECTORCMD = 10486144\r
;GWAPPCONFIGURATIONVERSION is hidden but has non-default value\r
\r
[SCTP Params]\r
\r
\r
[IPsec Params]\r
\r
\r
[Audio Staging Params]\r
\r
\r
[SNMP Params]\r
\r
ifAlias_0 = 'Interface Alias.'\r
ifAlias_1 = 'Interface Alias.'\r
ifAlias_2 = 'Interface Alias.'\r
ifAlias_3 = 'Interface Alias.'\r
ifAlias_4 = 'Interface Alias.'\r
ifAlias_5 = 'Interface Alias.'\r
ifAlias_6 = 'Virtual LAN Interface'\r
ifAlias_7 = 'Interface Alias.'\r
ifAlias_8 = 'Interface Alias.'\r
ifAlias_9 = 'Interface Alias.'\r
ifAlias_10 = 'Interface Alias.'\r
ifAlias_11 = 'Interface Alias.'\r
ifAlias_12 = 'Interface Alias.'\r
ifAlias_13 = 'Interface Alias.'\r
ifAlias_14 = 'Interface Alias.'\r
ifAlias_15 = 'Interface Alias.'\r
ifAlias_16 = 'Interface Alias.'\r
ifAlias_17 = 'Interface Alias.'\r
ifAlias_18 = 'Interface Alias.'\r
ifAlias_19 = 'Interface Alias.'\r
ifAlias_20 = 'Interface Alias.'\r
ifAlias_21 = 'Interface Alias.'\r
ifAlias_22 = 'Interface Alias.'\r
ifAlias_23 = 'Interface Alias.'\r
ifAlias_24 = 'Interface Alias.'\r
ifAlias_25 = 'Interface Alias.'\r
ifAlias_26 = 'Interface Alias.'\r
ifAlias_27 = 'Interface Alias.'\r
ifAlias_28 = 'Interface Alias.'\r
ifAlias_29 = 'Interface Alias.'\r
ifAlias_30 = 'Interface Alias.'\r
ifAlias_31 = 'Interface Alias.'\r
ifAlias_32 = 'Interface Alias.'\r
ifAlias_33 = 'Interface Alias.'\r
ifAlias_34 = 'Interface Alias.'\r
ifAlias_35 = 'Interface Alias.'\r
ifAlias_36 = 'Interface Alias.'\r
ifAlias_37 = 'Interface Alias.'\r
ifAlias_38 = 'Interface Alias.'\r
ifAlias_39 = 'Interface Alias.'\r
ifAlias_40 = 'Interface Alias.'\r
ifAlias_41 = 'Interface Alias.'\r
ifAlias_42 = 'Interface Alias.'\r
ifAlias_43 = 'Interface Alias.'\r
ifAlias_44 = 'Interface Alias.'\r
ifAlias_45 = 'Interface Alias.'\r
ifAlias_46 = 'Interface Alias.'\r
ifAlias_47 = 'Interface Alias.'\r
ifAlias_48 = 'Interface Alias.'\r
ifAlias_49 = 'Interface Alias.'\r
ifAlias_50 = 'Interface Alias.'\r
ifAlias_51 = 'Interface Alias.'\r
ifAlias_52 = 'Interface Alias.'\r
ifAlias_53 = 'Interface Alias.'\r
ifAlias_54 = 'Interface Alias.'\r
ifAlias_55 = 'Interface Alias.'\r
ifAlias_56 = 'Interface Alias.'\r
ifAlias_57 = 'Interface Alias.'\r
ifAlias_58 = 'Interface Alias.'\r
ifAlias_59 = 'Interface Alias.'\r
\r
[ PhysicalPortsTable ]\r
\r
FORMAT PhysicalPortsTable_Index = PhysicalPortsTable_Port, PhysicalPortsTable_Mode, PhysicalPortsTable_SpeedDuplex, PhysicalPortsTable_PortDescription, PhysicalPortsTable_GroupMember, PhysicalPortsTable_GroupStatus;\r
PhysicalPortsTable 0 = "GE_4_1", 1, 4, "User Port #0", "GROUP_1", "Active";\r
PhysicalPortsTable 1 = "GE_4_2", 1, 4, "User Port #1", "GROUP_2", "Active";\r
PhysicalPortsTable 2 = "GE_4_3", 1, 4, "User Port #2", "GROUP_3", "Active";\r
PhysicalPortsTable 3 = "GE_4_4", 0, 4, "User Port #3", "None", "  ";\r
\r
[\ \PhysicalPortsTable ]\r
\r
\r
[ EtherGroupTable ]\r
\r
FORMAT EtherGroupTable_Index = EtherGroupTable_Group, EtherGroupTable_Mode, EtherGroupTable_Member1, EtherGroupTable_Member2;\r
EtherGroupTable 0 = "GROUP_1", 1, "GE_4_1", "";\r
EtherGroupTable 1 = "GROUP_2", 1, "GE_4_2", "";\r
EtherGroupTable 2 = "GROUP_3", 1, "GE_4_3", "";\r
EtherGroupTable 3 = "GROUP_4", 0, "", "";\r
\r
[\\EtherGroupTable ]\r
\r
\r
[ DeviceTable ]\r
\r
FORMAT DeviceTable_Index = DeviceTable_VlanID, DeviceTable_UnderlyingInterface, DeviceTable_DeviceName, DeviceTable_Tagging;\r
DeviceTable 0 = 1, "GROUP_1", "vlan 1", 0;\r
DeviceTable 1 = 2, "GROUP_2", "Notebook", 0;\r
DeviceTable 2 = 3, "GROUP_3", "Local", 0;\r
\r
[\\DeviceTable ]\r
\r
\r
[ InterfaceTable ]\r
\r
FORMAT InterfaceTable_Index = InterfaceTable_ApplicationTypes, InterfaceTable_InterfaceMode, InterfaceTable_IPAddress, InterfaceTable_PrefixLength, InterfaceTable_Gateway, InterfaceTable_InterfaceName, InterfaceTable_PrimaryDNSServerIPAddress, InterfaceTable_SecondaryDNSServerIPAddress, InterfaceTable_UnderlyingDevice;\r
InterfaceTable 0 = 5, 10, ${ip_host_6}, 30, ${ip_dg_6}, "Voice", 0.0.0.0, 0.0.0.0, "vlan 1";\r
InterfaceTable 1 = 0, 10, 10.10.10.1, 24, 0.0.0.0, "Notebook", 0.0.0.0, 0.0.0.0, "Notebook";\r
InterfaceTable 2 = 5, 10, 172.16.1.1, 30, 0.0.0.0, "Local", 0.0.0.0, 0.0.0.0, "Local";\r
\r
[\\InterfaceTable ]\r
\r
\r
[ DspTemplates ]\r
\r
;\r
;  *** TABLE DspTemplates *** \r
; This table contains hidden elements and will not be exposed.\r
; This table exists on board and will be saved during restarts.\r
;\r
\r
[\\DspTemplates ]\r
\r
\r
[ WebUsers ]\r
\r
FORMAT WebUsers_Index = WebUsers_Username, WebUsers_Password, WebUsers_Status, WebUsers_PwAgeInterval, WebUsers_SessionLimit, WebUsers_SessionTimeout, WebUsers_BlockTime, WebUsers_UserLevel, WebUsers_PwNonce;\r
WebUsers 0 = "Admin", "$1$kvGr8PGmr/r7r/itrviol8DDl8CdkMORm5nNn8/LnISJgNKE04bRiYCNj4yJ3dvxoKfw/POjo/ut/Pqo/qv6tuc=", 1, 0, 2, 15, 60, 200, "af05c981f4cd437db03ebc31190d7600";\r
WebUsers 1 = "User", "$1$ADg0Y2ZhMj4yMWxpODo0O25ycCZ2IS0mdn0pIyp+KC57F0dARhMRQhAaTxwdTxlMTQlVAFIBAwMBXQgLXV1cW1o=", 1, 0, 2, 15, 60, 50, "4936aad6367bec5622926883e46e4463";\r
\r
[\\WebUsers ]\r
\r
\r
[ TLSContexts ]\r
\r
FORMAT TLSContexts_Index = TLSContexts_Name, TLSContexts_TLSVersion, TLSContexts_ServerCipherString, TLSContexts_ClientCipherString, TLSContexts_OcspEnable, TLSContexts_OcspServerPrimary, TLSContexts_OcspServerSecondary, TLSContexts_OcspServerPort, TLSContexts_OcspDefaultResponse;\r
TLSContexts 0 = "default", 0, "RC4:EXP", "ALL:!ADH", 0, , , 2560, 0;\r
\r
[\\TLSContexts ]\r
\r
\r
[ CpMediaRealm ]\r
\r
FORMAT CpMediaRealm_Index = CpMediaRealm_MediaRealmName, CpMediaRealm_IPv4IF, CpMediaRealm_IPv6IF, CpMediaRealm_PortRangeStart, CpMediaRealm_MediaSessionLeg, CpMediaRealm_PortRangeEnd, CpMediaRealm_IsDefault, CpMediaRealm_QoeProfile, CpMediaRealm_BWProfile;\r
CpMediaRealm 0 = "DefaultRealm", "Voice", "", 6000, 5953, 65529, 1, "", "";\r
CpMediaRealm 1 = "Local", "Local", "", 6000, 5953, 65529, 0, "", "";\r
\r
[\\CpMediaRealm ]\r
\r
\r
[ SBCRoutingPolicy ]\r
\r
FORMAT SBCRoutingPolicy_Index = SBCRoutingPolicy_Name, SBCRoutingPolicy_LCREnable, SBCRoutingPolicy_LCRAverageCallLength, SBCRoutingPolicy_LCRDefaultCost, SBCRoutingPolicy_LdapServerGroupName;\r
SBCRoutingPolicy 0 = "Default_SBCRoutingPolicy", 0, 1, 0, "";\r
\r
[\\SBCRoutingPolicy ]\r
\r
\r
[ SRD ]\r
\r
FORMAT SRD_Index = SRD_Name, SRD_BlockUnRegUsers, SRD_MaxNumOfRegUsers, SRD_EnableUnAuthenticatedRegistrations, SRD_SharingPolicy, SRD_UsedByRoutingServer, SRD_SBCOperationMode, SRD_SBCRoutingPolicyName;\r
SRD 0 = "DefaultSRD", 0, -1, 1, 0, 0, 0, "Default_SBCRoutingPolicy";\r
\r
[\\SRD ]\r
\r
\r
[ SIPInterface ]\r
\r
FORMAT SIPInterface_Index = SIPInterface_InterfaceName, SIPInterface_NetworkInterface, SIPInterface_ApplicationType, SIPInterface_UDPPort, SIPInterface_TCPPort, SIPInterface_TLSPort, SIPInterface_SRDName, SIPInterface_MessagePolicyName, SIPInterface_TLSContext, SIPInterface_TLSMutualAuthentication, SIPInterface_TCPKeepaliveEnable, SIPInterface_ClassificationFailureResponseType, SIPInterface_PreClassificationManSet, SIPInterface_EncapsulatingProtocol, SIPInterface_MediaRealm, SIPInterface_SBCDirectMedia, SIPInterface_BlockUnRegUsers, SIPInterface_MaxNumOfRegUsers, SIPInterface_EnableUnAuthenticatedRegistrations, SIPInterface_UsedByRoutingServer;\r
SIPInterface 0 = "SIPInterface_0", "Voice", 0, 5060, 5060, 5061, "DefaultSRD", "", "default", -1, 0, 500, -1, 0, "", 0, -1, -1, -1, 0;\r
SIPInterface 1 = "Local", "Local", 0, 5060, 5060, 5061, "DefaultSRD", "", "default", -1, 0, 500, -1, 0, "Local", 0, -1, -1, -1, 0;\r
\r
[\\SIPInterface ]\r
\r
\r
[ ProxySet ]\r
\r
FORMAT ProxySet_Index = ProxySet_ProxyName, ProxySet_EnableProxyKeepAlive, ProxySet_ProxyKeepAliveTime, ProxySet_ProxyLoadBalancingMethod, ProxySet_IsProxyHotSwap, ProxySet_SRDName, ProxySet_ClassificationInput, ProxySet_TLSContextName, ProxySet_ProxyRedundancyMode, ProxySet_DNSResolveMethod, ProxySet_KeepAliveFailureResp, ProxySet_GWIPv4SIPInterfaceName, ProxySet_SBCIPv4SIPInterfaceName, ProxySet_SASIPv4SIPInterfaceName, ProxySet_GWIPv6SIPInterfaceName, ProxySet_SBCIPv6SIPInterfaceName, ProxySet_SASIPv6SIPInterfaceName;\r
ProxySet 0 = "ProxySet_0", 0, 60, 0, 0, "DefaultSRD", 0, "", -1, -1, "", "SIPInterface_0", "", "", "", "", "";\r
ProxySet 1 = "SBC", 0, 60, 0, 0, "DefaultSRD", 0, "", -1, -1, "", "SIPInterface_0", "", "", "", "", "";\r
\r
[\\ProxySet ]\r
\r
\r
[ IPGroup ]\r
\r
FORMAT IPGroup_Index = IPGroup_Type, IPGroup_Name, IPGroup_ProxySetName, IPGroup_SIPGroupName, IPGroup_ContactUser, IPGroup_SipReRoutingMode, IPGroup_AlwaysUseRouteTable, IPGroup_SRDName, IPGroup_MediaRealm, IPGroup_ClassifyByProxySet, IPGroup_ProfileName, IPGroup_MaxNumOfRegUsers, IPGroup_InboundManSet, IPGroup_OutboundManSet, IPGroup_RegistrationMode, IPGroup_AuthenticationMode, IPGroup_MethodList, IPGroup_EnableSBCClientForking, IPGroup_SourceUriInput, IPGroup_DestUriInput, IPGroup_ContactName, IPGroup_Username, IPGroup_Password, IPGroup_UUIFormat, IPGroup_QOEProfile, IPGroup_BWProfile, IPGroup_MediaEnhancementProfile, IPGroup_AlwaysUseSourceAddr, IPGroup_MsgManUserDef1, IPGroup_MsgManUserDef2, IPGroup_SIPConnect, IPGroup_SBCPSAPMode, IPGroup_DTLSContext, IPGroup_CreatedByRoutingServer, IPGroup_UsedByRoutingServer, IPGroup_SBCOperationMode, IPGroup_SBCRouteUsingRequestURIPort, IPGroup_SBCKeepOriginalCallID;\r
IPGroup 0 = 0, "IPGroup_0", "ProxySet_0", "", "", -1, 0, "DefaultSRD", "", 1, "", -1, -1, -1, 0, 0, "", 0, -1, -1, "", "", "$1$gQ==", 0, "", "", "", 0, "", "", 0, 0, "", 0, 0, -1, 0, 0;\r
IPGroup 1 = 0, "SBC", "SBC", "", "", -1, 0, "DefaultSRD", "", 1, "", -1, -1, -1, 0, 0, "", 0, -1, -1, "", "", "$1$gQ==", 0, "", "", "", 0, "", "", 0, 0, "", 0, 0, -1, 0, 0;\r
\r
[\\IPGroup ]\r
\r
\r
[ PREFIX ]\r
\r
FORMAT PREFIX_Index = PREFIX_RouteName, PREFIX_DestinationPrefix, PREFIX_DestAddress, PREFIX_SourcePrefix, PREFIX_ProfileName, PREFIX_MeteringCodeName, PREFIX_DestPort, PREFIX_DestIPGroupName, PREFIX_TransportType, PREFIX_SrcTrunkGroupID, PREFIX_DestSIPInterfaceName, PREFIX_CostGroup, PREFIX_ForkingGroup, PREFIX_CallSetupRulesSetId, PREFIX_ConnectivityStatus;\r
PREFIX 0 = "PRI1 a FXS1", "*", "172.16.1.1", "*", "", "", 0, "", -1, 11, "Local", "", -1, -1, "Not Available";\r
PREFIX 1 = "PRI2 a FXS2", "*", "172.16.1.1", "*", "", "", 0, "", -1, 12, "Local", "", -1, -1, "Not Available";\r
PREFIX 2 = "FXS1 a PRI1", "*", "172.16.1.1", "*", "", "", 0, "", -1, 21, "Local", "", -1, -1, "Not Available";\r
PREFIX 3 = "FXS2 a PRI2", "*", "172.16.1.1", "*", "", "", 0, "", -1, 22, "Local", "", -1, -1, "Not Available";\r
PREFIX 4 = "FXS3 a SBC", "*", "", "*", "", "", 0, "SBC", -1, 23, "SIPInterface_0", "", -1, -1, "Not Available";\r
\r
[\\PREFIX ]\r
\r
\r
[ TrunkGroup ]\r
\r
FORMAT TrunkGroup_Index = TrunkGroup_TrunkGroupNum, TrunkGroup_FirstTrunkId, TrunkGroup_FirstBChannel, TrunkGroup_LastBChannel, TrunkGroup_FirstPhoneNumber, TrunkGroup_ProfileName, TrunkGroup_LastTrunkId, TrunkGroup_Module;\r
TrunkGroup 0 = 11, 0, 1, 31, "", "", 0, 1;\r
TrunkGroup 1 = 12, 1, 1, 31, "", "", 1, 1;\r
TrunkGroup 2 = 21, 255, 1, 1, "${linea_1_6}", "", 255, 2;\r
TrunkGroup 3 = 22, 255, 2, 2, "${linea_2_6}", "", 255, 2;\r
TrunkGroup 4 = 23, 255, 3, 3, "${linea_3_6}", "", 255, 2;\r
TrunkGroup 5 = 24, 255, 4, 4, "", "", 255, 2;\r
\r
[\\TrunkGroup ]\r
\r
\r
[ NumberMapIp2Tel ]\r
\r
FORMAT NumberMapIp2Tel_Index = NumberMapIp2Tel_ManipulationName, NumberMapIp2Tel_DestinationPrefix, NumberMapIp2Tel_SourcePrefix, NumberMapIp2Tel_SourceAddress, NumberMapIp2Tel_SrcHost, NumberMapIp2Tel_DestHost, NumberMapIp2Tel_NumberType, NumberMapIp2Tel_NumberPlan, NumberMapIp2Tel_RemoveFromLeft, NumberMapIp2Tel_RemoveFromRight, NumberMapIp2Tel_LeaveFromRight, NumberMapIp2Tel_Prefix2Add, NumberMapIp2Tel_Suffix2Add, NumberMapIp2Tel_IsPresentationRestricted, NumberMapIp2Tel_SrcIPGroupName;\r
NumberMapIp2Tel 0 = "", "*", "*", "172.16.1.1", "*", "*", 255, 255, 2, 0, 255, "", "", 255, "Any";\r
\r
[\\NumberMapIp2Tel ]\r
\r
\r
[ NumberMapTel2Ip ]\r
\r
FORMAT NumberMapTel2Ip_Index = NumberMapTel2Ip_ManipulationName, NumberMapTel2Ip_DestinationPrefix, NumberMapTel2Ip_SourcePrefix, NumberMapTel2Ip_NumberType, NumberMapTel2Ip_NumberPlan, NumberMapTel2Ip_RemoveFromLeft, NumberMapTel2Ip_RemoveFromRight, NumberMapTel2Ip_LeaveFromRight, NumberMapTel2Ip_Prefix2Add, NumberMapTel2Ip_Suffix2Add, NumberMapTel2Ip_IsPresentationRestricted, NumberMapTel2Ip_SrcTrunkGroupID, NumberMapTel2Ip_DestIPGroupName;\r
NumberMapTel2Ip 0 = "FXS1 a PRI1", "*", "*", 255, 255, 0, 0, 255, "11", "", 255, 21, "Any";\r
NumberMapTel2Ip 1 = "FXS2 a PRI2", "*", "*", 255, 255, 0, 0, 255, "12", "", 255, 22, "Any";\r
NumberMapTel2Ip 2 = "PRI1 a FXS1", "*", "*", 255, 255, 0, 0, 255, "21", "", 255, 11, "Any";\r
NumberMapTel2Ip 3 = "PRI2 a FXS2", "*", "*", 255, 255, 0, 0, 255, "22", "", 255, 12, "Any";\r
\r
[\\NumberMapTel2Ip ]\r
\r
\r
[ PstnPrefix ]\r
\r
FORMAT PstnPrefix_Index = PstnPrefix_RouteName, PstnPrefix_DestPrefix, PstnPrefix_TrunkGroupId, PstnPrefix_SourcePrefix, PstnPrefix_SourceAddress, PstnPrefix_ProfileName, PstnPrefix_SrcIPGroupName, PstnPrefix_DestHostPrefix, PstnPrefix_SrcHostPrefix, PstnPrefix_SrcSIPInterfaceName, PstnPrefix_TrunkId, PstnPrefix_CallSetupRulesSetId, PstnPrefix_DestType;\r
PstnPrefix 0 = "PRI1 a FXS1", "21", 21, "", "172.16.1.1", "", "", "", "", "Any", -1, -1, 0;\r
PstnPrefix 1 = "PRI2 a FXS2", "22", 22, "", "172.16.1.1", "", "", "", "", "Any", -1, -1, 0;\r
PstnPrefix 2 = "FXS1 a PRI1", "11", 11, "", "172.16.1.1", "", "", "", "", "Any", -1, -1, 0;\r
PstnPrefix 3 = "FXS2 a PRI2", "12", 12, "", "172.16.1.1", "", "", "", "", "Any", -1, -1, 0;\r
PstnPrefix 4 = "SBC a FXS3", "*", 23, "", "", "", "", "", "", "SIPInterface_0", -1, -1, 0;\r
\r
[\\PstnPrefix ]\r
\r
\r
[ ProxyIp ]\r
\r
FORMAT ProxyIp_Index = ProxyIp_ProxySetId, ProxyIp_ProxyIpIndex, ProxyIp_IpAddress, ProxyIp_TransportType;\r
ProxyIp 0 = "1", 0, "${sip_trunk_6}", 0;\r
\r
[\\ProxyIp ]\r
\r
\r
[ EnableCallerId ]\r
\r
FORMAT EnableCallerId_Index = EnableCallerId_IsEnabled, EnableCallerId_Module, EnableCallerId_Port, EnableCallerId_PortType;\r
EnableCallerId 0 = 1, 2, 1, "FXS";\r
EnableCallerId 1 = 1, 2, 2, "FXS";\r
EnableCallerId 2 = 1, 2, 3, "FXS";\r
EnableCallerId 3 = 1, 2, 4, "FXS";\r
\r
[\\EnableCallerId ]\r
\r
\r
[ CodersGroup0 ]\r
\r
FORMAT CodersGroup0_Index = CodersGroup0_Name, CodersGroup0_pTime, CodersGroup0_rate, CodersGroup0_PayloadType, CodersGroup0_Sce, CodersGroup0_CoderSpecific;\r
CodersGroup0 0 = "g711Alaw64k", 20, 255, -1, 0, "";\r
\r
[\\CodersGroup0 ]\r
\r
\r
[ GwRoutingPolicy ]\r
\r
FORMAT GwRoutingPolicy_Index = GwRoutingPolicy_Name, GwRoutingPolicy_LCREnable, GwRoutingPolicy_LCRAverageCallLength, GwRoutingPolicy_LCRDefaultCost, GwRoutingPolicy_LdapServerGroupName;\r
GwRoutingPolicy 0 = "GwRoutingPolicy", 0, 1, 0, "";\r
\r
[\\GwRoutingPolicy ]\r
\r
\r
[ ResourcePriorityNetworkDomains ]\r
\r
FORMAT ResourcePriorityNetworkDomains_Index = ResourcePriorityNetworkDomains_Name, ResourcePriorityNetworkDomains_Ip2TelInterworking;\r
ResourcePriorityNetworkDomains 1 = "dsn", 1;\r
ResourcePriorityNetworkDomains 2 = "dod", 1;\r
ResourcePriorityNetworkDomains 3 = "drsn", 1;\r
ResourcePriorityNetworkDomains 5 = "uc", 1;\r
ResourcePriorityNetworkDomains 7 = "cuc", 1;\r
\r
[\\ResourcePriorityNetworkDomains ]\r
\r
\r
[ DhcpServer ]\r
\r
FORMAT DhcpServer_Index = DhcpServer_InterfaceName, DhcpServer_StartIPAddress, DhcpServer_EndIPAddress, DhcpServer_SubnetMask, DhcpServer_LeaseTime, DhcpServer_DNSServer1, DhcpServer_DNSServer2, DhcpServer_NetbiosNameServer, DhcpServer_NetbiosNodeType, DhcpServer_NTPServer1, DhcpServer_NTPServer2, DhcpServer_TimeOffset, DhcpServer_TftpServer, DhcpServer_BootFileName, DhcpServer_ExpandBootfileName, DhcpServer_OverrideRouter, DhcpServer_SipServer, DhcpServer_SipServerType;\r
DhcpServer 0 = "Notebook", 10.10.10.10, 10.10.10.100, 255.255.255.0, 1440, 0.0.0.0, 0.0.0.0, 0.0.0.0, 0, 0.0.0.0, 0.0.0.0, 0, "", "", 1, 0.0.0.0, "", 0;\r
\r
[\\DhcpServer ]\r
\r
\r
[ DhcpClients ]\r
\r
;\r
;  *** TABLE DhcpClients *** \r
; This table contains hidden elements and will not be exposed.\r
; This table exists on board and will be saved during restarts.\r
;\r
\r
[\\DhcpClients ]\r`

        var link = document.getElementById('downloadlink6');
        link.style.display = 'block';
        link.download = `${client_id_6} - audiocodes.ini`;
        link.href = makeTextFile(output);
	
    }, false);
})();

