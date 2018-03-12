;**********************************************************
;* feladat_1.asm
;**********************************************************
;* A program k�t regiszter (A_1 �s A_2) �rt�k�t adja �ssze, majd az
;* eredm�nyt a B regiszterp�r �rt�k�hez (B_H �s B_L) adja hozz�
;**********************************************************

	list p=18f452

   include "p18f452.inc"		; A processzorf�gg� deklar�ci�kat tartalmaz� include f�jl

Rst_vect						; Reset vektor, t�pbekapcsol�skor, resetkor innen indul
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
