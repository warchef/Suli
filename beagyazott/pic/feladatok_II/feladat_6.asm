;****************************************************************************************
;* feladat_6.asm
;****************************************************************************************
;* A program soros porton megszakítással vesz, ha beérkezett egy bájt,
;* visszaküldi eggyel megnövelve. Beállítások: 9600, 8, N, 1
;****************************************************************************************

	list p=18f452

	include "p18f452.inc"	; A processzorfüggõ deklarációkat tartalmazó include fájl

Rst_vect					; Reset vektor, tápbekapcsoláskor, resetkor innen indul
	org	0x0000				; a program végrehajtása

	goto	Start

Int_vect					; Megszakítás vektor. Ha engedélyezett megszakítás van,
	org	0x0008				; innen folytatódik a program végrehajtása
	
	btfss	PIE1, RCIE		; USART-tól jött a megszakítás?
	goto	Other_Int		; Nem, máshonnan.
	btfss	PIR1, RCIF		; USART-tól jött a megszakítás?
	goto	Other_Int		; Nem, máshonnan.

	movlw	06h				; Vételi hiba ellenõrzése
	andwf	RCSTA, W
	btfss	STATUS, Z
	goto	Rcv_Error		; Vételi hiba (túlfutási vagy kerethiba)

	movf	RCREG, W		; Vett adat beolvasása
	incf	WREG			; Megnövelése
	movwf	TXREG			; Adási regiszterbe töltése
	goto	ISR_End			; Vége a megszakítás kiszolgálásának
	
Rcv_Error
	bcf		RCSTA, CREN		; A hibák törlése az USART ki/be kapcsolásával
	bsf		RCSTA, CREN
	goto	ISR_End			; Vége a megszakítás kiszolgálásának

Other_Int
	goto	Other_Int		; Mivel csak USART vételi megszakítása engedélyezett, és nem onnan
							; jött megszakítás, ezért megszakítjuk a programvégrehajtás szekvenciáját
ISR_End
	retfie					; Visszatérés a megszakításból.

Start						; A program kezdete
	org	0x0050

	bcf		TRISC, 6		; RC6/TX kimenet

	bsf		TXSTA, BRGH		; Magas bitsebesség kiválasztása
	movlw	.25				; SPBRG feltöltése (9600bps 4MHz órajel esetén)
	movwf	SPBRG			; Katalógus: 9600bps=4MHz/(16(SPBRG+1)), innen SPBRG=25
	
	bsf		RCSTA, SPEN		; Soros port engedélyezése
	bsf		RCSTA, CREN		; Folyamatos vétel engedélyezése
	bsf		TXSTA, TXEN		; Adás engedélyezése

	bcf		PIR1, RCIF		; Vételi megszakítás törlése
	bsf		PIE1, RCIE		; Vételi megszakítás engedélyezése
	bsf		INTCON, PEIE	; Periféria megszakítások engedélyezése
	bsf		INTCON, GIE		; Globális megszakítás engedélyezés

Stop						; Egyhelyben járás, várakozás megszakításra
	goto	Stop

	end
