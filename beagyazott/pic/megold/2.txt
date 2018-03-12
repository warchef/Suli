	list p=18f452

	include "p18f452.inc"		; A processzorfüggõ deklarációkat tartalmazó include fájl

    PORTA_valtozo equ 0x60

Rst_vect						; Reset vektor, tápbekapcsoláskor, resetkor innen indul
	org		0x0000				; a program végrehajtása

    movlw 0x00
    movwf PORTB
    movlw 0x00
    movwf PORTA_valtozo

Start							; A program kezdete
	org		0x0040

	bcf		ADCON1, PCFG3		; RA0 digitális lábbá való konfigurálása
	bsf		ADCON1, PCFG2
	bsf		ADCON1, PCFG1
	clrf	LATB				; LATB minden bitje indulás után 0 lesz
	movlw	0x00				; PORTB minden bitje kimenet
	movwf	TRISB
	bsf		STATUS, C			; Beállítjuk 1-be a C flaget, hogy az elsõ léptetésnél
								; ez az egyes kerüljön PORTB0-ra

Check_RA0
	btfss	PORTA_valtozo, 0			; RA0 vizsgálata
	goto	Check_RA0			; Ha 0, várunk
Rotate_L						; Ha 1, indul a folyamat
	rlcf	PORTB, 1			; Forgatás balra
	btfss	PORTB, 7			; Addig, amíg a legfelsõ helyértékre nem érkezik az 1-es
	goto	Rotate_L
Rotate_R
	rrncf	PORTB, 1			; Forgatás jobbra
	btfss	PORTB, 0			; Addig, amíg a legalsó helyértékre nem érkezik az 1-es
	bra		Rotate_R			; Másik lehetõség (goto helyett) feltétel nélküli ugrásra
	goto	Check_RA0			; A folyamat újraindul

   end
