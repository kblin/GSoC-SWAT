/*
   Unix SMB/CIFS implementation.
   User/Group specific flags

   Copyright (C) Andrew Tridgell 2001-2003

   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
SambaFlags = {};
/* User flags for "userAccountControl" */
SambaFlags.UF_SCRIPT  =   0x00000001  /* NT or Lan Manager Login script must be executed */
SambaFlags.UF_ACCOUNTDISABLE =  0x00000002
SambaFlags.UF_00000004   = 0x00000004
SambaFlags.UF_HOMEDIR_REQUIRED =  0x00000008

SambaFlags.UF_LOCKOUT  =  0x00000010
SambaFlags.UF_PASSWD_NOTREQD =  0x00000020
SambaFlags.UF_PASSWD_CANT_CHANGE =  0x00000040
SambaFlags.UF_ENCRYPTED_TEXT_PASSWORD_ALLOWED = 0x00000080

SambaFlags.UF_TEMP_DUPLICATE_ACCOUNT = 0x00000100 /* Local user account in usrmgr */
SambaFlags.UF_NORMAL_ACCOUNT =  0x00000200
SambaFlags.UF_00000400  =  0x00000400
SambaFlags.UF_INTERDOMAIN_TRUST_ACCOUNT = 0x00000800

SambaFlags.UF_WORKSTATION_TRUST_ACCOUNT = 0x00001000
SambaFlags.UF_SERVER_TRUST_ACCOUNT  = 0x00002000
SambaFlags.UF_00004000  =  0x00004000
SambaFlags.UF_00008000  =  0x00008000

SambaFlags.UF_DONT_EXPIRE_PASSWD =  0x00010000
SambaFlags.UF_MNS_LOGON_ACCOUNT  = 0x00020000
SambaFlags.UF_SMARTCARD_REQUIRED =  0x00040000
SambaFlags.UF_TRUSTED_FOR_DELEGATION = 0x00080000

SambaFlags.UF_NOT_DELEGATED  = 0x00100000
SambaFlags.UF_USE_DES_KEY_ONLY =  0x00200000
SambaFlags.UF_DONT_REQUIRE_PREAUTH =  0x00400000
SambaFlags.UF_PASSWORD_EXPIRED =  0x00800000
SambaFlags.UF_TRUSTED_TO_AUTHENTICATE_FOR_DELEGATION = 0x01000000
SambaFlags.UF_NO_AUTH_DATA_REQUIRED  = 0x02000000
SambaFlags.UF_PARTIAL_SECRETS_ACCOUNT = 0x04000000
SambaFlags.UF_USE_AES_KEYS    =             0x08000000

SambaFlags.UF_MACHINE_ACCOUNT_MASK = ( SambaFlags.UF_INTERDOMAIN_TRUST_ACCOUNT | SambaFlags.UF_WORKSTATION_TRUST_ACCOUNT |  SambaFlags.UF_SERVER_TRUST_ACCOUNT )

SambaFlags.UF_ACCOUNT_TYPE_MASK = ( SambaFlags.UF_TEMP_DUPLICATE_ACCOUNT | SambaFlags.UF_NORMAL_ACCOUNT | SambaFlags.UF_INTERDOMAIN_TRUST_ACCOUNT |  SambaFlags.UF_WORKSTATION_TRUST_ACCOUNT | SambaFlags.UF_SERVER_TRUST_ACCOUNT )

SambaFlags.UF_SETTABLE_BITS = ( SambaFlags.UF_SCRIPT | SambaFlags.UF_ACCOUNTDISABLE | SambaFlags.UF_HOMEDIR_REQUIRED  | SambaFlags.UF_LOCKOUT | SambaFlags.UF_PASSWD_NOTREQD | SambaFlags.UF_PASSWD_CANT_CHANGE | SambaFlags.UF_ACCOUNT_TYPE_MASK |  SambaFlags.UF_DONT_EXPIRE_PASSWD | SambaFlags.UF_MNS_LOGON_ACCOUNT | SambaFlags.UF_ENCRYPTED_TEXT_PASSWORD_ALLOWED | SambaFlags.UF_SMARTCARD_REQUIRED | SambaFlags.UF_TRUSTED_FOR_DELEGATION | SambaFlags.UF_NOT_DELEGATED |  SambaFlags.UF_USE_DES_KEY_ONLY  | SambaFlags.UF_DONT_REQUIRE_PREAUTH )

/* Group flags for "groupType" */
SambaFlags.GROUP_TYPE_BUILTIN_LOCAL_GROUP = 0x00000001
SambaFlags.GROUP_TYPE_ACCOUNT_GROUP  = 0x00000002
SambaFlags.GROUP_TYPE_RESOURCE_GROUP = 0x00000004
SambaFlags.GROUP_TYPE_UNIVERSAL_GROUP = 0x00000008
SambaFlags.GROUP_TYPE_APP_BASIC_GROUP = 0x00000010
SambaFlags.GROUP_TYPE_APP_QUERY_GROUP = 0x00000020
SambaFlags.GROUP_TYPE_SECURITY_ENABLED = 0x80000000

  /* 0x80000005 -2147483643 */
SambaFlags.GTYPE_SECURITY_BUILTIN_LOCAL_GROUP = ( SambaFlags.GROUP_TYPE_BUILTIN_LOCAL_GROUP| SambaFlags.GROUP_TYPE_RESOURCE_GROUP|  SambaFlags.GROUP_TYPE_SECURITY_ENABLED )
  /* 0x80000004 -2147483644 */
SambaFlags.GTYPE_SECURITY_DOMAIN_LOCAL_GROUP = (  SambaFlags.GROUP_TYPE_RESOURCE_GROUP|  SambaFlags.GROUP_TYPE_SECURITY_ENABLED )
  /* 0x80000002 -2147483646 */
SambaFlags.GTYPE_SECURITY_GLOBAL_GROUP = ( SambaFlags.GROUP_TYPE_ACCOUNT_GROUP|  SambaFlags.GROUP_TYPE_SECURITY_ENABLED )
  /* 0x80000008 -2147483640 */
  console.log(SambaFlags.GTYPE_SECURITY_GLOBAL_GROUP);
SambaFlags.GTYPE_SECURITY_UNIVERSAL_GROUP = ( SambaFlags.GROUP_TYPE_UNIVERSAL_GROUP| SambaFlags.GROUP_TYPE_SECURITY_ENABLED )
SambaFlags.GTYPE_DISTRIBUTION_GLOBAL_GROUP = 0x00000002 /* 2 */
SambaFlags.GTYPE_DISTRIBUTION_DOMAIN_LOCAL_GROUP = 0x00000004 /* 4 */
SambaFlags.GTYPE_DISTRIBUTION_UNIVERSAL_GROUP = 0x00000008 /* 8 */

/* Account flags for "sAMAccountType" */
SambaFlags.ATYPE_NORMAL_ACCOUNT  =  0x30000000 /* 805306368 */
SambaFlags.ATYPE_WORKSTATION_TRUST =   0x30000001 /* 805306369 */
SambaFlags.ATYPE_INTERDOMAIN_TRUST =  0x30000002 /* 805306370 */
SambaFlags.ATYPE_SECURITY_GLOBAL_GROUP =  0x10000000 /* 268435456 */
SambaFlags.ATYPE_SECURITY_LOCAL_GROUP = 0x20000000 /* 536870912 */
SambaFlags.ATYPE_SECURITY_UNIVERSAL_GROUP =  SambaFlags.ATYPE_SECURITY_GLOBAL_GROUP
SambaFlags.ATYPE_DISTRIBUTION_GLOBAL_GROUP = 0x10000001 /* 268435457 */
SambaFlags.ATYPE_DISTRIBUTION_LOCAL_GROUP = 0x20000001 /* 536870913 */
SambaFlags.ATYPE_DISTRIBUTION_UNIVERSAL_GROUP = SambaFlags.ATYPE_DISTRIBUTION_GLOBAL_GROUP

SambaFlags.ATYPE_ACCOUNT = SambaFlags.ATYPE_NORMAL_ACCOUNT  /* 0x30000000 805306368 */
SambaFlags.ATYPE_GLOBAL_GROUP = SambaFlags.ATYPE_SECURITY_GLOBAL_GROUP /* 0x10000000 268435456 */
SambaFlags.ATYPE_LOCAL_GROUP = SambaFlags.ATYPE_SECURITY_LOCAL_GROUP /* 0x20000000 536870912 */

/* "instanceType" */
SambaFlags.INSTANCE_TYPE_IS_NC_HEAD = 0x00000001
SambaFlags.INSTANCE_TYPE_UNINSTANT = 0x00000002
SambaFlags.INSTANCE_TYPE_WRITE = 0x00000004
SambaFlags.INSTANCE_TYPE_NC_ABOVE = 0x00000008
SambaFlags.INSTANCE_TYPE_NC_COMING = 0x00000010
SambaFlags.INSTANCE_TYPE_NC_GOING = 0x00000020

/* "systemFlags" */
SambaFlags.SYSTEM_FLAG_CR_NTDS_NC =  0x00000001
SambaFlags.SYSTEM_FLAG_CR_NTDS_DOMAIN =  0x00000002
SambaFlags.SYSTEM_FLAG_CR_NTDS_NOT_GC_REPLICATED = 0x00000004
SambaFlags.SYSTEM_FLAG_SCHEMA_BASE_OBJECT =  0x00000010
SambaFlags.SYSTEM_FLAG_ATTR_IS_RDN =  0x00000020
SambaFlags.SYSTEM_FLAG_DISALLOW_MOVE_ON_DELETE = 0x02000000
SambaFlags.SYSTEM_FLAG_DOMAIN_DISALLOW_MOVE = 0x04000000
SambaFlags.SYSTEM_FLAG_DOMAIN_DISALLOW_RENAME = 0x08000000
SambaFlags.SYSTEM_FLAG_CONFIG_ALLOW_LIMITED_MOVE = 0x10000000
SambaFlags.SYSTEM_FLAG_CONFIG_ALLOW_MOVE = 0x20000000
SambaFlags.SYSTEM_FLAG_CONFIG_ALLOW_RENAME = 0x40000000
SambaFlags.SYSTEM_FLAG_DISALLOW_DELETE = 0x80000000

/* schemaFlags_Ex */
SambaFlags.SCHEMA_FLAG_ATTR_IS_CRITICAL = 0x0000001

/* "searchFlags" */
SambaFlags.SEARCH_FLAG_ATTINDEX = 0x0000001
SambaFlags.SEARCH_FLAG_PDNTATTINDEX = 0x0000002
SambaFlags.SEARCH_FLAG_ANR =  0x0000004
SambaFlags.SEARCH_FLAG_PRESERVEONDELETE = 0x0000008
SambaFlags.SEARCH_FLAG_COPY = 0x0000010
SambaFlags.SEARCH_FLAG_TUPLEINDEX = 0x0000020
SambaFlags.SEARCH_FLAG_SUBTREEATTRINDEX = 0x0000040
SambaFlags.SEARCH_FLAG_CONFIDENTIAL = 0x0000080
SambaFlags.SEARCH_FLAG_NEVERVALUEAUDIT = 0x0000100
SambaFlags.SEARCH_FLAG_RODC_ATTRIBUTE = 0x0000200

/* "domainFunctionality", "forestFunctionality" and "domainControllerFunctionality" in the rootDSE */
SambaFlags.DS_DOMAIN_FUNCTION_2000 = 0
SambaFlags.DS_DOMAIN_FUNCTION_2003_MIXED = 1 /* Not a valid/meaningful
        * domainControllerFunctionality
        * Level */
SambaFlags.DS_DOMAIN_FUNCTION_2003 = 2
SambaFlags.DS_DOMAIN_FUNCTION_2008 = 3
SambaFlags.DS_DOMAIN_FUNCTION_2008_R2 = 4

/* sa->systemFlags on attributes */
SambaFlags.DS_FLAG_ATTR_NOT_REPLICATED  =  0x00000001
SambaFlags.DS_FLAG_ATTR_REQ_PARTIAL_SET_MEMBER = 0x00000002
SambaFlags.DS_FLAG_ATTR_IS_CONSTRUCTED  =  0x00000004

/* 7.1.1.2.2.1.2.1.1           nTDSDSA Object options flags */
SambaFlags.DS_NTDSDSA_OPT_IS_GC        =            0x00000001
SambaFlags.DS_NTDSDSA_OPT_DISABLE_INBOUND_REPL  =    0x00000002
SambaFlags.DS_NTDSDSA_OPT_DISABLE_OUTBOUND_REPL  =  0x00000004
SambaFlags.DS_NTDSDSA_OPT_DISABLE_NTDSCONN_XLATE =  0x00000008
SambaFlags.DS_NTDSDSA_OPT_DISABLE_SPN_REGISTRATION = 0x00000010

/* wellknown GUID strings for AD objects. See MS-ADTS 7.1.1.4 */
SambaFlags.DS_GUID_COMPUTERS_CONTAINER      =             "AA312825768811D1ADED00C04FD8D5CD"
SambaFlags.DS_GUID_DELETED_OBJECTS_CONTAINER =            "18E2EA80684F11D2B9AA00C04F79F805"
SambaFlags.DS_GUID_DOMAIN_CONTROLLERS_CONTAINER =          "A361B2FFFFD211D1AA4B00C04FD7D83A"
SambaFlags.DS_GUID_FOREIGNSECURITYPRINCIPALS_CONTAINER =  "22B70C67D56E4EFB91E9300FCA3DC1AA"
SambaFlags.DS_GUID_INFRASTRUCTURE_CONTAINER     =         "2FBAC1870ADE11D297C400C04FD8D5CD"
SambaFlags.DS_GUID_LOSTANDFOUND_CONTAINER       =         "AB8153B7768811D1ADED00C04FD8D5CD"
SambaFlags.DS_GUID_MICROSOFT_PROGRAM_DATA_CONTAINER  =    "F4BE92A4C777485E878E9421D53087DB"
SambaFlags.DS_GUID_NTDS_QUOTAS_CONTAINER        =         "6227F0AF1FC2410D8E3BB10615BB5B0F"
SambaFlags.DS_GUID_PROGRAM_DATA_CONTAINER       =         "09460C08AE1E4A4EA0F64AEE7DAA1E5A"
SambaFlags.DS_GUID_SYSTEMS_CONTAINER            =         "AB1D30F3768811D1ADED00C04FD8D5CD"
SambaFlags.DS_GUID_USERS_CONTAINER              =         "A9D1CA15768811D1ADED00C04FD8D5CD"

/* wellknown GUIDs for optional directory features */
SambaFlags.DS_GUID_FEATURE_RECYCLE_BIN  =      "766ddcd8-acd0-445e-f3b9-a7f9b6744f2a"

/* dsHeuristics character indexes see MS-ADTS 7.1.1.2.4.1.2 */

SambaFlags.DS_HR_SUPFIRSTLASTANR             =        0x00000001
SambaFlags.DS_HR_SUPLASTFIRSTANR             =        0x00000002
SambaFlags.DS_HR_DOLISTOBJECT                =        0x00000003
SambaFlags.DS_HR_DONICKRES                   =        0x00000004
SambaFlags.DS_HR_LDAP_USEPERMMOD             =        0x00000005
SambaFlags.DS_HR_HIDEDSID                    =        0x00000006
SambaFlags.DS_HR_BLOCK_ANONYMOUS_OPS         =        0x00000007
SambaFlags.DS_HR_ALLOW_ANON_NSPI             =        0x00000008
SambaFlags.DS_HR_USER_PASSWORD_SUPPORT       =        0x00000009
SambaFlags.DS_HR_TENTH_CHAR                  =        0x0000000A
SambaFlags.DS_HR_SPECIFY_GUID_ON_ADD         =        0x0000000B
SambaFlags.DS_HR_NO_STANDARD_SD              =        0x0000000C
SambaFlags.DS_HR_ALLOW_NONSECURE_PWD_OPS     =        0x0000000D
SambaFlags.DS_HR_NO_PROPAGATE_ON_NOCHANGE    =        0x0000000E
SambaFlags.DS_HR_COMPUTE_ANR_STATS           =        0x0000000F
SambaFlags.DS_HR_ADMINSDEXMASK               =        0x00000010
SambaFlags.DS_HR_KVNOEMUW2K                  =        0x00000011
SambaFlags.DS_HR_LDAP_BYPASS_UPPER_LIMIT_BOUNDS  =    0x00000012

/* mS-DS-ReplicatesNCReason */
SambaFlags.NTDSCONN_KCC_GC_TOPOLOGY    =   0x00000001
SambaFlags.NTDSCONN_KCC_RING_TOPOLOGY    =   0x00000002
SambaFlags.NTDSCONN_KCC_MINIMIZE_HOPS_TOPOLOGY       =   0x00000004
SambaFlags.NTDSCONN_KCC_STALE_SERVERS_TOPOLOGY       =   0x00000008
SambaFlags.NTDSCONN_KCC_OSCILLATING_CONNECTION_TOPOLOGY =0x00000010
SambaFlags.NTDSCONN_KCC_INTERSITE_GC_TOPOLOGY   =   0x00000020
SambaFlags.NTDSCONN_KCC_INTERSITE_TOPOLOGY      =        0x00000040
SambaFlags.NTDSCONN_KCC_SERVER_FAILOVER_TOPOLOGY     =   0x00000080
SambaFlags.NTDSCONN_KCC_SITE_FAILOVER_TOPOLOGY       =   0x00000100
SambaFlags.NTDSCONN_KCC_REDUNDANT_SERVER_TOPOLOGY    =   0x00000200
