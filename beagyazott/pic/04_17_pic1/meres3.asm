;3.feladat
	list p=18f452
	include "p18f452.inc"
tmp	equ	LATD
bitcp macro a,b
	btfsc	LATC,a
	bsf		LATD,b
	btfss	LATC,a
	bcf		LATD,b
endm
org 0x0000
	goto start

org 0x0040
start
	bitcp	0,7
	bitcp	1,6
	bitcp	2,5
	bitcp	3,4
	bitcp	4,3
	bitcp	5,2
	bitcp	6,1
	bitcp	7,0
	movf	LATD,W
	movwf	LATC
veg
	goto veg
end
	
