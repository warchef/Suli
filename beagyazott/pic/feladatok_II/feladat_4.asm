;****************************************************************************************
;* feladat_4.asm
;****************************************************************************************
;* A program TIMER1 megszak�t�s�nak haszn�lat�val PORTB0 �llapot�t
;* TIME*10ms-onk�nt invert�lja. A program TIME=0-ra nem m�k�dik!
;* A PicDem2 Plus panel �rajele 4MHz, a programban ezt vett�k alapul
;****************************************************************************************

	list p=18f452

	include "p18f452.inc"	; A processzorf�gg� deklar�ci�kat tartalmaz� include f�jl

TIME		equ 0x60		; V�ltoz�k elhelyez�se az �ltal�nos felhaszn�l�s�
TIME_WORK	equ 0x70		; regiszterek ter�let�n

Rst_vect					; Reset vektor, t�pbekapcsol�skor, resetkor innen indul
	org	0x0000				; a program v�grehajt�sa

	goto	Start

Int_vect					; Megszak�t�s vektor. Ha enged�lyezett megszak�t�s van,
	org	0x0008				; innen folytat�dik a program v�grehajt�sa
							; Megszak�t�s-forr�s azonos�t�sa:
	btfss	PIE1, TMR1IE	; ha TMR0IE �s TMR0IF is 1, akkor TIMER1-t�l j�tt
	reset					; megszak�t�s, k�l�nben nem.
	btfss	PIR1, TMR1IF	; Mivel csak TIMER1 megszak�t�sa van enged�lyezve,
	reset					; ez�rt ha nem t�le j�tt megszak�t�s, akkor resetel�nk
	bra		TMR1_ISR		; Ugr�s TIMER1 megszak�t�s�nak kiszolg�l� rutinj�ra

Start						; A program kezdete
	org	0x0040
							; PORTB be�ll�t�sa
	bcf		LATB, 0
;	bcf		TRISB, 0		; Itt ez lenne az egyszer�bb megold�s, a portl�b ir�ny�nak
							; be�ll�t�s�ra, az al�bbi maszkol�s
	movlw	0xFE			; t�bb bit egyszerre t�rt�n� be�ll�t�s�ra hat�kony
	andwf	TRISB, 1		; PORTB0-t kimenett� konfigur�ljuk

							; Timer1 be�ll�t�sa
	bsf		T1CON, TMR1ON	; TIMER1 enged�lyez�se
	movlw	0xD8			; TIMER1 felt�lt�se �gy, hogy 10ms ut�n csorduljon t�l:
	movwf	TMR1H			; (65536-TMR1Preload)*(1/1MHz)=10 ms, innen:
	movlw	0xF0			; TMR1Preload = 65536 - 10ms*1MHz = 55536 = 0xD8F0
	movwf	TMR1L			; TMR1L �r�s�val TMR1H pufferbe �rt �rt�k is t�lt�dik.
							; A felt�lt�si sorrend fontos!
							; Megszak�t�sok be�ll�t�sa
	bcf		PIR1, TMR1IF	; TIMER1 megszak�t�s flagj�nek t�rl�se
	bsf		PIE1, TMR1IE	; TIMER1 megszak�t�s enged�lyez�se
	bsf		INTCON, PEIE	; Perif�ria megszak�t�sok enged�lyezve
	bsf		INTCON, GIE		; Glob�lis megszak�t�s-enged�lyez�s

	movff	TIME, TIME_WORK	; TIME m�sol�sa TIME_WORK-be, hogy TIME tartalma
							; ne s�r�lj�n

Stop						; �r�k helyben j�r�s, itt lehetne a f�program
	goto	Stop

	org		0x0200

TMR1_ISR					; Timer1 megszak�t�s�nak kiszolg�l�sa
	movlw	0xD8			; Timer1 felt�lt�se az el�bbiekben kisz�m�tott �rt�kkel
	movwf	TMR1H
	movlw	0xF0
	movwf	TMR1L
	decfsz	TIME_WORK, 1
	goto	No_activity
	btg		PORTB, 0		; Tev�kenys�gek (most csak RB0 invert�l�sa)
							; Ide j�hetn�nek egy�b tev�kenys�gek...
	movff	TIME, TIME_WORK	; TIME_WORK felt�lt�se TIME �rt�k�vel
No_activity
	bcf	PIR1, TMR1IF		; Timer1 megszak�t�sa kiszolg�lva, megszak�t�s bitet t�r�lj�k
	retfie					; Visszat�r�s megszak�t�sb�l (mindig "retfie" paranccsal!)

	end
