	list p=18f452
	include "p18f452.inc"

A_1		equ 0x60			
A_2		equ 0x61			
B_1		equ 0x71

	org		0x0000	
Start					
	movf	A_1,W
	cpfseq	A_2
	goto	komp	
	clrf	B_1
	goto	veg
komp
	movf	A_1,W
	cpfslt	A_2
	incf	B_1
	incf	B_1
veg
	goto	veg
	end
