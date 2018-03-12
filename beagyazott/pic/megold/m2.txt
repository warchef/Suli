;**********************************************************
;* feladat_1.asm
;**********************************************************
;* A program két regiszter (A_1 és A_2) értékét adja össze, majd az
;* eredményt a B regiszterpár értékéhez (B_H és B_L) adja hozzá
;**********************************************************

	list p=18f452

   include "p18f452.inc"		; A processzorfüggõ deklarációkat tartalmazó include fájl
 FIGYELO equ  0x60
 SZAMOL equ 0x61

Rst_vect						; Reset vektor, tápbekapcsoláskor, resetkor innen indul
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
