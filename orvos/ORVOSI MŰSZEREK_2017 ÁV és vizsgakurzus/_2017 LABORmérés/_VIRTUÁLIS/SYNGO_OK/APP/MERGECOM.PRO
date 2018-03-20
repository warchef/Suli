#============================================================================
#   
#                       ==== MergeCOM-3 System Profile ===
#                        ==== for Siemens AG MedCom ====
#
#       The location of this file is provided in the MERGECOM_3_PROFILE
#       parameter of the [MergeCOM3] section of the MERGE.INI file
#
#       You will found a description of all parameters in the MergeCOM
#       delivered version of this file:
#         O:\MedCom\extern\i586-WinNT4.00\merge\mc3apps\Mergecom.pro
#
#============================================================================
#
#  Contains the following sections:
#    [ASSOC_PARMS]      - MergeCOM association parameters
#    [DIMSE_PARMS]      - DIMSE Layer parameters
#    [DUL_PARMS]        - Upper Layer parameters
#    [TRANSPORT_PARMS]  - Transport Layer parameters
#    [MESSAGE_PARMS]    - Message parameters


#============================================================================
#                    MergeCOM-3 KERNEL CONFIGURATION SECTION
#============================================================================
[ASSOC_PARMS]
    LICENSE                               = DBA5-B34KT
    IMPLEMENTATION_CLASS_UID              = 1.3.12.2.1107.5.4.9.40
    IMPLEMENTATION_VERSION                = ACOM_PC_40             # 16 characters maximum
    LOCAL_APPL_CONTEXT_NAME               = 1.2.840.10008.3.1.1.1
    ACCEPT_ANY_CONTEXT_NAME               = Yes
    ACCEPT_ANY_APPLICATION_TITLE          = Yes
    ACCEPT_DIFFERENT_IC_UID               = Yes
    ACCEPT_DIFFERENT_VERSION              = Yes
    ACCEPT_ANY_PROTOCOL_VERSION           = No
    ACCEPT_ANY_PRESENTATION_CONTEXT       = No
    ACCEPT_MULTIPLE_PRES_CONTEXTS         = Yes
    ACCEPT_ANY_HOSTNAME                   = No
    AUTO_ECHO_SUPPORT                     = Yes
    HARD_CLOSE_TCP_IP_CONNECTION          = No
    PDU_MAXIMUM_LENGTH                    = 28672


#----------------------------------------------------------------------------
    # Transfer Syntax UIDs - Use <none> to prevent using a given syntax (implicit little endian ALWAYS used)    
    IMPLICIT_LITTLE_ENDIAN_SYNTAX         = 1.2.840.10008.1.2
    IMPLICIT_BIG_ENDIAN_SYNTAX            = <none>
    EXPLICIT_LITTLE_ENDIAN_SYNTAX         = 1.2.840.10008.1.2.1
    EXPLICIT_BIG_ENDIAN_SYNTAX            = 1.2.840.10008.1.2.2

    # Encapsulated transfer syntax UIDs
    RLE_SYNTAX                            = 1.2.840.10008.1.2.5
    JPEG_BASELINE_SYNTAX                  = 1.2.840.10008.1.2.4.50
    JPEG_EXTENDED_2_4_SYNTAX              = 1.2.840.10008.1.2.4.51
#   JPEG_EXTENDED_3_5_SYNTAX              = 1.2.840.10008.1.2.4.52
#   JPEG_SPEC_NON_HIER_3_5_SYNTAX         = 1.2.840.10008.1.2.4.53
#   JPEG_SPEC_NON_HIER_6_7_SYNTAX         = 1.2.840.10008.1.2.4.54
#   JPEG_FULL_PROG_NON_HIER_10_11_SYNTAX  = 1.2.840.10008.1.2.4.55
#   JPEG_FULL_PROG_NON_HIER_11_13_SYNTAX  = 1.2.840.10008.1.2.4.56
#   JPEG_LOSSLESS_NON_HIER_14_SYNTAX      = 1.2.840.10008.1.2.4.57
#   JPEG_LOSSLESS_NON_HIER_15_SYNTAX      = 1.2.840.10008.1.2.4.58
#   JPEG_EXTENDED_HIER_16_18_SYNTAX       = 1.2.840.10008.1.2.4.59
#   JPEG_EXTENDED_HIER_17_19_SYNTAX       = 1.2.840.10008.1.2.4.60
#   JPEG_SPEC_HIER_20_22_SYNTAX           = 1.2.840.10008.1.2.4.61
#   JPEG_SPEC_HIER_21_23_SYNTAX           = 1.2.840.10008.1.2.4.62
#   JPEG_FULL_PROG_HIER_24_26_SYNTAX      = 1.2.840.10008.1.2.4.63
#   JPEG_FULL_PROG_HIER_25_27_SYNTAX      = 1.2.840.10008.1.2.4.64
#   JPEG_LOSSLESS_HIER_28_SYNTAX          = 1.2.840.10008.1.2.4.65
#   JPEG_LOSSLESS_HIER_29_SYNTAX          = 1.2.840.10008.1.2.4.66
    JPEG_LOSSLESS_HIER_14_SYNTAX          = 1.2.840.10008.1.2.4.70

    # Private Transfer Syntaxes
    PRIVATE_SYNTAX_1_SYNTAX               = <none>
    PRIVATE_SYNTAX_1_LITTLE_ENDIAN        = Yes
    PRIVATE_SYNTAX_1_EXPLICIT_VR          = Yes
    PRIVATE_SYNTAX_1_ENCAPSULATED         = No
    PRIVATE_SYNTAX_2_SYNTAX               = <none>
    PRIVATE_SYNTAX_2_LITTLE_ENDIAN        = Yes
    PRIVATE_SYNTAX_2_EXPLICIT_VR          = Yes
    PRIVATE_SYNTAX_2_ENCAPSULATED         = No


#============================================================================
#                     DIMSE LAYER CONFIGURATION SECTIONS
#============================================================================
[DIMSE_PARMS]
    SEND_SOP_CLASS_UID                    = YES
    SEND_SOP_INSTANCE_UID                 = YES
    INITIATOR_NAME                        = <NONE>
    RECEIVER_NAME                         = <NONE>
    SEND_LENGTH_TO_END                    = NO
    SEND_RECOGNITION_CODE                 = NO
    SEND_MSG_ID_RESPONSE                  = NO
    SEND_ECHO_PRIORITY                    = NO
    SEND_RESPONSE_PRIORITY                = NO


#============================================================================
#                     UPPER LAYER CONFIGURATION SECTION
#============================================================================
[DUL_PARMS]
    ARTIM_TIMEOUT                         = 240        # The number of seconds to use as a timeout waiting for association request or waiting for the peer to shut down an association.
    ASSOC_REPLY_TIMEOUT                   = 240        # The number of seconds to wait for reply to associate request.
    RELEASE_TIMEOUT                       = 120        # The number of seconds to wait for reply to associate release.
    WRITE_TIMEOUT                         = 120        # The number of seconds to wait for a network write to be accepted.
    CONNECT_TIMEOUT                       = 120        # The number of seconds to wait for a network connect to be accepted.
    INACTIVITY_TIMEOUT                    = 120        # The number of seconds to wait for data between TCP/IP packets on a call to MC_Read_Message().


#============================================================================
#                    MergeCOM-3 MESSAGE CONFIGURATION SECTION
#============================================================================
[MESSAGE_PARMS]
    LARGE_DATA_STORE                      = FILE
    LARGE_DATA_SIZE                         = 500000
    DICTIONARY_ACCESS                     = MEM
   
#    DICTIONARY_FILE = <ClearCase drive>:\acomnet\Clients\Common\extMerge\Mrgcom3.dct
DICTIONARY_FILE = E:\Client\bin\Debug\mrgcom3.dct

#    MSG_INFO_FILE = <ClearCase drive>:\acomnet\Clients\Common\extMerge\Mrgcom3.msg
MSG_INFO_FILE = E:\Client\bin\Debug\mrgcom3.msg

#    TEMP_FILE_DIRECTORY = <ClearCase drive>:\acomnet\Clients\Bin\Common\MergeTemp
TEMP_FILE_DIRECTORY = E:\Client\bin\Debug\MergeTemp

    OBOW_BUFFER_SIZE                      = 131072
    WORK_BUFFER_SIZE                      = 1050000
    ELIMINATE_ITEM_REFERENCES             = No
    FORCE_OPEN_EMPTY_ITEM                 = Yes
    EMPTY_PRIVATE_CREATOR_CODES           = Yes
    UNKNOWN_VR_CODE                       = UN
    ALLOW_INVALID_PRIVATE_CREATOR_CODES   = No
    CALLBACK_MIN_DATA_SIZE                = 1
    EXPORT_UN_VR_TO_NETWORK               = Yes
    EXPORT_PRIVATE_ATTRIBUTES_TO_NETWORK  = Yes
    REMOVE_PADDING_CHARS                  = No


#============================================================================
#                    MergeCOM-3 MEDIA CONFIGURATION SECTION
#============================================================================
[MEDIA_PARMS]
    EXPORT_UN_VR_TO_MEDIA                 = Yes
    EXPORT_PRIVATE_ATTRIBUTES_TO_MEDIA    = Yes


#============================================================================
#                    MergeCOM-3 TRANSPORT LAYER PARAMETERS SECTION
#============================================================================
[TRANSPORT_PARMS]
    TCPIP_LISTEN_PORT                     = 104
    MAX_PENDING_CONNECTIONS               = 10
    TCPIP_SEND_BUFFER_SIZE                = 33280 
    TCPIP_RECEIVE_BUFFER_SIZE             = 33280 

