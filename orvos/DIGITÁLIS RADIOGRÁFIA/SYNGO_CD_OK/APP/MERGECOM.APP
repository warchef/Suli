
##########################################################################################
#  Generic Concept Service Lists
##########################################################################################


##########################################################################################
# Service list for SCP mode
##########################################################################################

[Storage_SCP_Service_List]
SERVICES_SUPPORTED      = 15
SERVICE_1               = STANDARD_XRAY_ANGIO
SYNTAX_LIST_1           = Full_Jpeg_Syntax_List
SERVICE_2               = STANDARD_SEC_CAPTURE
SYNTAX_LIST_2           = Full_Jpeg_Syntax_List
SERVICE_3               = STANDARD_US
SYNTAX_LIST_3           = Jpeg_Lossy_RLE_Syntax_List
SERVICE_4               = STANDARD_US_MF
SYNTAX_LIST_4           = Jpeg_Lossy_RLE_Syntax_List
SERVICE_5               = STANDARD_NM
SYNTAX_LIST_5           = Uncompressed_Syntax_List
SERVICE_6               = PRIVATE_MEDCOM_CSA_NON_IMAGE
SYNTAX_LIST_6           = Uncompressed_Syntax_List
SERVICE_7               = STANDARD_ECHO
SYNTAX_LIST_7           = Verify_Syntax_List

#new services
SERVICE_8               = STANDARD_US_RETIRED
SYNTAX_LIST_8           = Full_Jpeg_Syntax_List
SERVICE_9               = STANDARD_US_MF_RETIRED
SYNTAX_LIST_9           = Full_Jpeg_Syntax_List
SERVICE_10              = STANDARD_WAVEFORM_12_LEAD_ECG
SYNTAX_LIST_10          = Uncompressed_Syntax_List
SERVICE_11              = STANDARD_WAVEFORM_AMBULATORY_ECG
SYNTAX_LIST_11          = Uncompressed_Syntax_List
SERVICE_12              = STANDARD_WAVEFORM_BASIC_VOICE_AU
SYNTAX_LIST_12          = Uncompressed_Syntax_List
SERVICE_13              = STANDARD_WAVEFORM_CARDIAC_EP
SYNTAX_LIST_13          = Uncompressed_Syntax_List
SERVICE_14              = STANDARD_WAVEFORM_GENERAL_ECG
SYNTAX_LIST_14          = Uncompressed_Syntax_List
SERVICE_15              = STANDARD_WAVEFORM_HEMODYNAMIC
SYNTAX_LIST_15          = Uncompressed_Syntax_List


##########################################################################################
# Service list for SCU mode
##########################################################################################

[Storage_SCU_Service_List]
SERVICES_SUPPORTED      = 60

# XA 
SERVICE_1               = STANDARD_XRAY_ANGIO
SYNTAX_LIST_1           = Jpeg_Lossless_Syntax_List
SERVICE_2               = STANDARD_XRAY_ANGIO
SYNTAX_LIST_2           = Jpeg_Lossy_Extended_Syntax_List
SERVICE_3               = STANDARD_XRAY_ANGIO
SYNTAX_LIST_3           = Jpeg_Lossy_Baseline_Syntax_List
SERVICE_4               = STANDARD_XRAY_ANGIO
SYNTAX_LIST_4           = Uncompressed_ELE_Syntax_List
SERVICE_5               = STANDARD_XRAY_ANGIO
SYNTAX_LIST_5           = Uncompressed_EBE_Syntax_List
SERVICE_6               = STANDARD_XRAY_ANGIO
SYNTAX_LIST_6           = Uncompressed_ILE_Syntax_List

# SC
SERVICE_7               = STANDARD_SEC_CAPTURE
SYNTAX_LIST_7           = Jpeg_Lossless_Syntax_List
SERVICE_8               = STANDARD_SEC_CAPTURE
SYNTAX_LIST_8           = Jpeg_Lossy_Extended_Syntax_List
SERVICE_9               = STANDARD_SEC_CAPTURE
SYNTAX_LIST_9           = Jpeg_Lossy_Baseline_Syntax_List
SERVICE_10              = STANDARD_SEC_CAPTURE
SYNTAX_LIST_10          = Uncompressed_ELE_Syntax_List
SERVICE_11              = STANDARD_SEC_CAPTURE
SYNTAX_LIST_11          = Uncompressed_EBE_Syntax_List
SERVICE_12              = STANDARD_SEC_CAPTURE
SYNTAX_LIST_12          = Uncompressed_ILE_Syntax_List

# US
SERVICE_13              = STANDARD_US
SYNTAX_LIST_13          = RLE_Syntax_List
SERVICE_14              = STANDARD_US
SYNTAX_LIST_14          = Jpeg_Lossy_Extended_Syntax_List
SERVICE_15              = STANDARD_US
SYNTAX_LIST_15          = Jpeg_Lossy_Baseline_Syntax_List
SERVICE_16              = STANDARD_US
SYNTAX_LIST_16          = Uncompressed_ELE_Syntax_List
SERVICE_17              = STANDARD_US
SYNTAX_LIST_17          = Uncompressed_EBE_Syntax_List
SERVICE_18              = STANDARD_US
SYNTAX_LIST_18          = Uncompressed_ILE_Syntax_List



# US_MF
SERVICE_19              = STANDARD_US_MF
SYNTAX_LIST_19          = RLE_Syntax_List
SERVICE_20              = STANDARD_US_MF
SYNTAX_LIST_20          = Jpeg_Lossy_Baseline_Syntax_List
SERVICE_21              = STANDARD_US_MF
SYNTAX_LIST_21          = Jpeg_Lossy_Extended_Syntax_List
SERVICE_22              = STANDARD_US_MF
SYNTAX_LIST_22          = Uncompressed_ELE_Syntax_List
SERVICE_23              = STANDARD_US_MF
SYNTAX_LIST_23          = Uncompressed_EBE_Syntax_List
SERVICE_24              = STANDARD_US_MF
SYNTAX_LIST_24          = Uncompressed_ILE_Syntax_List

# NM
SERVICE_25              = STANDARD_NM
SYNTAX_LIST_25          = Uncompressed_ELE_Syntax_List
SERVICE_26              = STANDARD_NM
SYNTAX_LIST_26          = Uncompressed_EBE_Syntax_List
SERVICE_27              = STANDARD_NM
SYNTAX_LIST_27          = Uncompressed_ILE_Syntax_List

# NON_IMAGE
SERVICE_28              = PRIVATE_MEDCOM_CSA_NON_IMAGE
SYNTAX_LIST_28          = Uncompressed_ELE_Syntax_List
SERVICE_29              = PRIVATE_MEDCOM_CSA_NON_IMAGE
SYNTAX_LIST_29          = Uncompressed_ILE_Syntax_List
SERVICE_30              = PRIVATE_MEDCOM_CSA_NON_IMAGE
SYNTAX_LIST_30          = Uncompressed_EBE_Syntax_List

# US retired
SERVICE_31              = STANDARD_US_RETIRED
SYNTAX_LIST_31          = Jpeg_Lossless_Syntax_List
SERVICE_32              = STANDARD_US_RETIRED
SYNTAX_LIST_32          = Jpeg_Lossy_Extended_Syntax_List
SERVICE_33              = STANDARD_US_RETIRED
SYNTAX_LIST_33          = Jpeg_Lossy_Baseline_Syntax_List
SERVICE_34              = STANDARD_US_RETIRED
SYNTAX_LIST_34          = Uncompressed_ELE_Syntax_List
SERVICE_35              = STANDARD_US_RETIRED
SYNTAX_LIST_35          = Uncompressed_EBE_Syntax_List
SERVICE_36              = STANDARD_US_RETIRED
SYNTAX_LIST_36          = Uncompressed_ILE_Syntax_List

# US_MF retired
SERVICE_37              = STANDARD_US_MF_RETIRED
SYNTAX_LIST_37          = Jpeg_Lossless_Syntax_List
SERVICE_38              = STANDARD_US_MF_RETIRED
SYNTAX_LIST_38          = Jpeg_Lossy_Baseline_Syntax_List
SERVICE_39              = STANDARD_US_MF_RETIRED
SYNTAX_LIST_39          = Jpeg_Lossy_Extended_Syntax_List
SERVICE_40              = STANDARD_US_MF_RETIRED
SYNTAX_LIST_40          = Uncompressed_ELE_Syntax_List
SERVICE_41              = STANDARD_US_MF_RETIRED
SYNTAX_LIST_41          = Uncompressed_EBE_Syntax_List
SERVICE_42              = STANDARD_US_MF_RETIRED
SYNTAX_LIST_42          = Uncompressed_ILE_Syntax_List

# Waveform 12 Lead ECG
SERVICE_43              = STANDARD_WAVEFORM_12_LEAD_ECG
SYNTAX_LIST_43          = Uncompressed_ELE_Syntax_List
SERVICE_44              = STANDARD_WAVEFORM_12_LEAD_ECG
SYNTAX_LIST_44          = Uncompressed_EBE_Syntax_List
SERVICE_45              = STANDARD_WAVEFORM_12_LEAD_ECG
SYNTAX_LIST_45          = Uncompressed_ILE_Syntax_List

# Waveform Ambulatory ECG
SERVICE_46              = STANDARD_WAVEFORM_AMBULATORY_ECG
SYNTAX_LIST_46          = Uncompressed_ELE_Syntax_List
SERVICE_47              = STANDARD_WAVEFORM_AMBULATORY_ECG
SYNTAX_LIST_47          = Uncompressed_EBE_Syntax_List
SERVICE_48              = STANDARD_WAVEFORM_AMBULATORY_ECG
SYNTAX_LIST_48          = Uncompressed_ILE_Syntax_List

# Waveform General ECG
SERVICE_49              = STANDARD_WAVEFORM_GENERAL_ECG
SYNTAX_LIST_49          = Uncompressed_ELE_Syntax_List
SERVICE_50              = STANDARD_WAVEFORM_GENERAL_ECG
SYNTAX_LIST_50          = Uncompressed_EBE_Syntax_List
SERVICE_51              = STANDARD_WAVEFORM_GENERAL_ECG
SYNTAX_LIST_51          = Uncompressed_ILE_Syntax_List

# Waveform Basic Voice AU
SERVICE_52              = STANDARD_WAVEFORM_BASIC_VOICE_AU
SYNTAX_LIST_52          = Uncompressed_ELE_Syntax_List
SERVICE_53              = STANDARD_WAVEFORM_BASIC_VOICE_AU
SYNTAX_LIST_53          = Uncompressed_EBE_Syntax_List
SERVICE_54              = STANDARD_WAVEFORM_BASIC_VOICE_AU
SYNTAX_LIST_54          = Uncompressed_ILE_Syntax_List

# Waveform Hemodynamic
SERVICE_55              = STANDARD_WAVEFORM_HEMODYNAMIC
SYNTAX_LIST_55          = Uncompressed_ELE_Syntax_List
SERVICE_56              = STANDARD_WAVEFORM_HEMODYNAMIC
SYNTAX_LIST_56          = Uncompressed_EBE_Syntax_List
SERVICE_57              = STANDARD_WAVEFORM_HEMODYNAMIC
SYNTAX_LIST_57          = Uncompressed_ILE_Syntax_List

# Waveform Cardiac Electrophysiology Storage
SERVICE_58              = STANDARD_WAVEFORM_CARDIAC_EP
SYNTAX_LIST_58          = Uncompressed_ELE_Syntax_List
SERVICE_59              = STANDARD_WAVEFORM_CARDIAC_EP
SYNTAX_LIST_59          = Uncompressed_EBE_Syntax_List
SERVICE_60              = STANDARD_WAVEFORM_CARDIAC_EP
SYNTAX_LIST_60          = Uncompressed_ILE_Syntax_List


[Query_Service_List]
SERVICES_SUPPORTED      = 1
SERVICE_1               = STUDY_ROOT_QR_FIND
SYNTAX_LIST_1           = Uncompressed_Syntax_List


[Move_Service_List]
SERVICES_SUPPORTED      = 1
SERVICE_1               = STUDY_ROOT_QR_MOVE
SYNTAX_LIST_1           = Uncompressed_Syntax_List                 #Full_Syntax_List


[Verify_Service_List]
SERVICES_SUPPORTED      = 1
SERVICE_1               = STANDARD_ECHO
SYNTAX_LIST_1           = Verify_Syntax_List




    
##########################################################################################
#
#  Generic Concept Syntax Lists
#
##########################################################################################


# used for echo
[Verify_Syntax_List]
SYNTAXES_SUPPORTED      = 1
SYNTAX_1                = IMPLICIT_LITTLE_ENDIAN


##########################################################################################
# Syntax lists for SCP mode
# All syntaxes to be supported for each service can be defined in their jointly lists.
##########################################################################################

# contains all noncompressed and compressed syntaxes
[Full_Syntax_List]
SYNTAXES_SUPPORTED      = 7
SYNTAX_1                = JPEG_LOSSLESS_HIER_14
SYNTAX_2                = JPEG_EXTENDED_2_4
SYNTAX_3                = JPEG_BASELINE
SYNTAX_4                = RLE
SYNTAX_5                = EXPLICIT_LITTLE_ENDIAN
SYNTAX_6                = EXPLICIT_BIG_ENDIAN
SYNTAX_7                = IMPLICIT_LITTLE_ENDIAN

# contains all noncompressed and compressed syntaxes excluding RLE
[Full_Jpeg_Syntax_List]
SYNTAXES_SUPPORTED      = 6
SYNTAX_1                = JPEG_LOSSLESS_HIER_14
SYNTAX_2                = JPEG_EXTENDED_2_4
SYNTAX_3                = JPEG_BASELINE
SYNTAX_4                = EXPLICIT_LITTLE_ENDIAN
SYNTAX_5                = EXPLICIT_BIG_ENDIAN
SYNTAX_6                = IMPLICIT_LITTLE_ENDIAN

# contains all noncompressed and compressed syntaxes excluding Jpeg Lossless
[Jpeg_Lossy_RLE_Syntax_List]
SYNTAXES_SUPPORTED      = 6
SYNTAX_1                = JPEG_EXTENDED_2_4
SYNTAX_2                = JPEG_BASELINE
SYNTAX_3                = RLE
SYNTAX_4                = EXPLICIT_LITTLE_ENDIAN
SYNTAX_5                = EXPLICIT_BIG_ENDIAN
SYNTAX_6                = IMPLICIT_LITTLE_ENDIAN

# Uncompressed Syntax List
[Uncompressed_Syntax_List]
SYNTAXES_SUPPORTED      = 3
SYNTAX_1                = EXPLICIT_LITTLE_ENDIAN
SYNTAX_2                = EXPLICIT_BIG_ENDIAN
SYNTAX_3                = IMPLICIT_LITTLE_ENDIAN


##########################################################################################
# Syntax lists for SCU mode. 
# All syntaxes to be supported shall be defined in the separat lists to be all supported.
##########################################################################################


# Uncompressed Implicit Little Endian Syntax List
[Uncompressed_ILE_Syntax_List]
SYNTAXES_SUPPORTED      = 1
SYNTAX_1                = IMPLICIT_LITTLE_ENDIAN

# Uncompressed Explicit Little Endian Syntax List
[Uncompressed_ELE_Syntax_List]
SYNTAXES_SUPPORTED      = 1
SYNTAX_1                = EXPLICIT_LITTLE_ENDIAN

# Uncompressed Explicit Big Endian Syntax List
[Uncompressed_EBE_Syntax_List]
SYNTAXES_SUPPORTED      = 1
SYNTAX_1                = EXPLICIT_BIG_ENDIAN

# JPEG lossless syntax
[Jpeg_Lossless_Syntax_List]
SYNTAXES_SUPPORTED      = 1
SYNTAX_1                = JPEG_LOSSLESS_HIER_14

# JPEG lossy baseline (8bit)
[Jpeg_Lossy_Baseline_Syntax_List]
SYNTAXES_SUPPORTED      = 1
SYNTAX_1                = JPEG_BASELINE

# JPEG lossy extended (12bit)
[Jpeg_Lossy_Extended_Syntax_List]
SYNTAXES_SUPPORTED      = 1
SYNTAX_1                = JPEG_EXTENDED_2_4

# RLE Syntax List
[RLE_Syntax_List]
SYNTAXES_SUPPORTED      = 1
SYNTAX_1                = RLE