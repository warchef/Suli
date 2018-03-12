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

	goto	Start

Start							; A program kezdete
	org		0x0040

	movf	A_1, 0				; A_1 betöltése a munkaregiszterbe (W)
	addwf	A_2, 0				; A_2 W-hez adása, eredmény W-be
	btfsc	STATUS, C			; Carry flag (átvitel) vizsgálata,
	incf	B_H, 1				; ha volt Carry, B_H növelése,
	addwf	B_L, 1				; ha nem volt, az eredményt B_L-hez adjuk
	btfsc	STATUS, C			; Carry flag (átvitel) vizsgálata,
	incf	B_H, 1				; ha volt Carry, B_H növelése
	goto	Start				; Újrakezdés

	end
