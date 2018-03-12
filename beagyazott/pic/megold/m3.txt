;**********************************************************
;* feladat_1.asm
;**********************************************************
;* A program két regiszter (A_1 és A_2) értékét adja össze, majd az
;* eredményt a B regiszterpár értékéhez (B_H és B_L) adja hozzá
;**********************************************************

	list p=18f452

   include "p18f452.inc"		; A processzorfüggõ deklarációkat tartalmazó include fájl

Rst_vect						; Reset vektor, tápbekapcsoláskor, resetkor innen indul
	org		0x0000
   movlw 0x00
   movwf TRISC
   movlw 0x0A
   movwf PORTC

Start

							; A program kezdete
	org		0x0040

    bcf PORTC,4    
    bcf PORTC,5
    bcf PORTC,6
    bcf PORTC,7

    btfsc PORTC,0
    bsf PORTC,4
    btfsc PORTC,1
    bsf PORTC,5
    btfsc PORTC,2
    bsf PORTC,6
    btfsc PORTC,3
    bsf PORTC,7
    goto vege

vege
    nop
    goto Start


hiba
   nop

	end
