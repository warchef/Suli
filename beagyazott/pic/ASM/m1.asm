;**********************************************************
;* feladat_1.asm
;**********************************************************
;* A program két regiszter (A_1 és A_2) értékét adja össze, majd az
;* eredményt a B regiszterpár értékéhez (B_H és B_L) adja hozzá
;**********************************************************

	list p=18f452

	include "p18f452.inc"		; A processzorfüggõ deklarációkat tartalmazó include fájl

A_1		equ 0x60				; Változók elhelyezése az általános felhasználású
A_2		equ 0x61				; területre
B_H		equ 0x70
B_L		equ 0x71

Rst_vect						; Reset vektor, tápbekapcsoláskor, resetkor innen indul
	org		0x0000				; a program végrehajtása
Start
   movlw 0x00
   movwf TRISB   
   movwf PORTB



							; A program kezdete
	org		0x0040

	movf	A_1,0
    cpfseq  A_2
    goto tovabb
    goto egyenlo
tovabb
    cpfsgt  A_2
    goto tovabb_2			
    goto nagyobb_A_2
tovabb_2
    cpfslt A_2
    goto hiba
    goto nagyobb_A_1

vege
    nop
    goto Start

egyenlo
    movlw 0x00
    movwf PORTB
    goto vege

nagyobb_A_1

    movlw 0x01
    movwf PORTB
    goto vege

nagyobb_A_2
 

    movlw 0x02
    movwf PORTB
    goto vege
  

hiba

	end
