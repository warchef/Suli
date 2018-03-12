;**********************************************************
;* feladat_1.asm
;**********************************************************
;* A program k�t regiszter (A_1 �s A_2) �rt�k�t adja �ssze, majd az
;* eredm�nyt a B regiszterp�r �rt�k�hez (B_H �s B_L) adja hozz�
;**********************************************************

	list p=18f452

   include "p18f452.inc"		; A processzorf�gg� deklar�ci�kat tartalmaz� include f�jl
 FIGYELO equ  0x60
 SZAMOL equ 0x61

Rst_vect						; Reset vektor, t�pbekapcsol�skor, resetkor innen indul
	org		0x0000
   movlw 0x0A
   movwf SZAMOL

Start

							; A program kezdete
	org		0x0040
    
    btfss PORTB,0
    goto null
    goto egy


vege
    nop
    goto Start

null
   nop
   bsf FIGYELO,0
   goto vege

egy
  btfss FIGYELO,0
  goto kifele
  btfss PORTB,0
  goto kifele
  nop 
  incf SZAMOL
  nop
kifele
   bcf FIGYELO,0
   goto vege

hiba
   nop

	end
