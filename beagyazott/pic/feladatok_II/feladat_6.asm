;****************************************************************************************
;* feladat_6.asm
;****************************************************************************************
;* A program soros porton megszak�t�ssal vesz, ha be�rkezett egy b�jt,
;* visszak�ldi eggyel megn�velve. Be�ll�t�sok: 9600, 8, N, 1
;****************************************************************************************

	list p=18f452

	include "p18f452.inc"	; A processzorf�gg� deklar�ci�kat tartalmaz� include f�jl

Rst_vect					; Reset vektor, t�pbekapcsol�skor, resetkor innen indul
	org	0x0000				; a program v�grehajt�sa

	goto	Start

Int_vect					; Megszak�t�s vektor. Ha enged�lyezett megszak�t�s van,
	org	0x0008				; innen folytat�dik a program v�grehajt�sa
	
	btfss	PIE1, RCIE		; USART-t�l j�tt a megszak�t�s?
	goto	Other_Int		; Nem, m�shonnan.
	btfss	PIR1, RCIF		; USART-t�l j�tt a megszak�t�s?
	goto	Other_Int		; Nem, m�shonnan.

	movlw	06h				; V�teli hiba ellen�rz�se
	andwf	RCSTA, W
	btfss	STATUS, Z
	goto	Rcv_Error		; V�teli hiba (t�lfut�si vagy kerethiba)

	movf	RCREG, W		; Vett adat beolvas�sa
	incf	WREG			; Megn�vel�se
	movwf	TXREG			; Ad�si regiszterbe t�lt�se
	goto	ISR_End			; V�ge a megszak�t�s kiszolg�l�s�nak
	
Rcv_Error
	bcf		RCSTA, CREN		; A hib�k t�rl�se az USART ki/be kapcsol�s�val
	bsf		RCSTA, CREN
	goto	ISR_End			; V�ge a megszak�t�s kiszolg�l�s�nak

Other_Int
	goto	Other_Int		; Mivel csak USART v�teli megszak�t�sa enged�lyezett, �s nem onnan
							; j�tt megszak�t�s, ez�rt megszak�tjuk a programv�grehajt�s szekvenci�j�t
ISR_End
	retfie					; Visszat�r�s a megszak�t�sb�l.

Start						; A program kezdete
	org	0x0050

	bcf		TRISC, 6		; RC6/TX kimenet

	bsf		TXSTA, BRGH		; Magas bitsebess�g kiv�laszt�sa
	movlw	.25				; SPBRG felt�lt�se (9600bps 4MHz �rajel eset�n)
	movwf	SPBRG			; Katal�gus: 9600bps=4MHz/(16(SPBRG+1)), innen SPBRG=25
	
	bsf		RCSTA, SPEN		; Soros port enged�lyez�se
	bsf		RCSTA, CREN		; Folyamatos v�tel enged�lyez�se
	bsf		TXSTA, TXEN		; Ad�s enged�lyez�se

	bcf		PIR1, RCIF		; V�teli megszak�t�s t�rl�se
	bsf		PIE1, RCIE		; V�teli megszak�t�s enged�lyez�se
	bsf		INTCON, PEIE	; Perif�ria megszak�t�sok enged�lyez�se
	bsf		INTCON, GIE		; Glob�lis megszak�t�s enged�lyez�s

Stop						; Egyhelyben j�r�s, v�rakoz�s megszak�t�sra
	goto	Stop

	end
