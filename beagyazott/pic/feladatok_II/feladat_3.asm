;****************************************************************************************
;* feladat_3.asm
;****************************************************************************************
;* A program indirekt címzés felhasználásával átmásolja
;* a BANK0 60h-7Fh területet a BANK1 180h-19Fh területre
;****************************************************************************************

	list p=18f452

	include "p18f452.inc"	; A processzorfüggõ deklarációkat tartalmazó include fájl

Counter		equ 0x50		; Változók elhelyezése az általános felhasználású

Rst_vect					; Reset vektor, tápbekapcsoláskor, resetkor innen indul
	org	0x0000				; a program végrehajtása

	goto	Start

Start						; A program kezdete
	org	0x0040

	movlw	.32				; A Counter változó feltöltése:
	movwf	Counter			; 32 bájtot kell átmásolni

	lfsr	FSR0, 0x60		; A másolandó terület kezdõcíme
	lfsr	FSR1, 0x180		; A feltöltendõ terület kezdõcíme
Next
	movf	POSTINC0, 0		; A POSTINC0 regiszter megcímzésével a soron következõ másolandó
							; adat betöltése W-be (automatikus cím-inkrementálással)
	movwf	POSTINC1		; A POSTINC1 regiszter megcímzésével a W-be töltött adatnak a
							; soron következõ helyre való kiírása (automatikus cím-inkrementálással)
	decfsz	Counter, 1		; A ciklusszámláló csökkentése
	goto	Next			; Ismétlés, ha a ciklusszámláló nem nulla

Stop						; Kész a másolás, egyhelyben járás
	goto	Stop

	end
