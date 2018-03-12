	list p=18f452
	include "p18f452.inc"

szamol equ 0x60
	org 0x0000
init
	movlw	0xFF
	movwf	TRISB
	clrf	PORTB
cik
	btfss	PORTB,0
	goto	cik
	incf	szamol
cik2
	btfsc	PORTB,0
	goto	cik2
	goto	cik
end
