;****************************************************************************************
;* feladat_4.asm
;****************************************************************************************
;* A program TIMER1 megszakításának használatával PORTB0 állapotát
;* TIME*10ms-onként invertálja. A program TIME=0-ra nem mûködik!
;* A PicDem2 Plus panel órajele 4MHz, a programban ezt vettük alapul
;****************************************************************************************

	list p=18f452

	include "p18f452.inc"	; A processzorfüggõ deklarációkat tartalmazó include fájl

TIME		equ 0x60		; Változók elhelyezése az általános felhasználású
TIME_WORK	equ 0x70		; regiszterek területén

Rst_vect					; Reset vektor, tápbekapcsoláskor, resetkor innen indul
	org	0x0000				; a program végrehajtása

	goto	Start

Int_vect					; Megszakítás vektor. Ha engedélyezett megszakítás van,
	org	0x0008				; innen folytatódik a program végrehajtása
							; Megszakítás-forrás azonosítása:
	btfss	PIE1, TMR1IE	; ha TMR0IE és TMR0IF is 1, akkor TIMER1-tõl jött
	reset					; megszakítás, különben nem.
	btfss	PIR1, TMR1IF	; Mivel csak TIMER1 megszakítása van engedélyezve,
	reset					; ezért ha nem tõle jött megszakítás, akkor resetelünk
	bra		TMR1_ISR		; Ugrás TIMER1 megszakításának kiszolgáló rutinjára

Start						; A program kezdete
	org	0x0040
							; PORTB beállítása
	bcf		LATB, 0
;	bcf		TRISB, 0		; Itt ez lenne az egyszerûbb megoldás, a portláb irányának
							; beállítására, az alábbi maszkolás
	movlw	0xFE			; több bit egyszerre történõ beállítására hatékony
	andwf	TRISB, 1		; PORTB0-t kimenetté konfiguráljuk

							; Timer1 beállítása
	bsf		T1CON, TMR1ON	; TIMER1 engedélyezése
	movlw	0xD8			; TIMER1 feltöltése úgy, hogy 10ms után csorduljon túl:
	movwf	TMR1H			; (65536-TMR1Preload)*(1/1MHz)=10 ms, innen:
	movlw	0xF0			; TMR1Preload = 65536 - 10ms*1MHz = 55536 = 0xD8F0
	movwf	TMR1L			; TMR1L írásával TMR1H pufferbe írt érték is töltõdik.
							; A feltöltési sorrend fontos!
							; Megszakítások beállítása
	bcf		PIR1, TMR1IF	; TIMER1 megszakítás flagjének törlése
	bsf		PIE1, TMR1IE	; TIMER1 megszakítás engedélyezése
	bsf		INTCON, PEIE	; Periféria megszakítások engedélyezve
	bsf		INTCON, GIE		; Globális megszakítás-engedélyezés

	movff	TIME, TIME_WORK	; TIME másolása TIME_WORK-be, hogy TIME tartalma
							; ne sérüljön

Stop						; Örök helyben járás, itt lehetne a fõprogram
	goto	Stop

	org		0x0200

TMR1_ISR					; Timer1 megszakításának kiszolgálása
	movlw	0xD8			; Timer1 feltöltése az elõbbiekben kiszámított értékkel
	movwf	TMR1H
	movlw	0xF0
	movwf	TMR1L
	decfsz	TIME_WORK, 1
	goto	No_activity
	btg		PORTB, 0		; Tevékenységek (most csak RB0 invertálása)
							; Ide jöhetnének egyéb tevékenységek...
	movff	TIME, TIME_WORK	; TIME_WORK feltöltése TIME értékével
No_activity
	bcf	PIR1, TMR1IF		; Timer1 megszakítása kiszolgálva, megszakítás bitet töröljük
	retfie					; Visszatérés megszakításból (mindig "retfie" paranccsal!)

	end
