;****************************************************************************************
;* feladat_3.asm
;****************************************************************************************
;* A program indirekt c�mz�s felhaszn�l�s�val �tm�solja
;* a BANK0 60h-7Fh ter�letet a BANK1 180h-19Fh ter�letre
;****************************************************************************************

	list p=18f452

	include "p18f452.inc"	; A processzorf�gg� deklar�ci�kat tartalmaz� include f�jl

Counter		equ 0x50		; V�ltoz�k elhelyez�se az �ltal�nos felhaszn�l�s�

Rst_vect					; Reset vektor, t�pbekapcsol�skor, resetkor innen indul
	org	0x0000				; a program v�grehajt�sa

	goto	Start

Start						; A program kezdete
	org	0x0040

	movlw	.32				; A Counter v�ltoz� felt�lt�se:
	movwf	Counter			; 32 b�jtot kell �tm�solni

	lfsr	FSR0, 0x60		; A m�soland� ter�let kezd�c�me
	lfsr	FSR1, 0x180		; A felt�ltend� ter�let kezd�c�me
Next
	movf	POSTINC0, 0		; A POSTINC0 regiszter megc�mz�s�vel a soron k�vetkez� m�soland�
							; adat bet�lt�se W-be (automatikus c�m-inkrement�l�ssal)
	movwf	POSTINC1		; A POSTINC1 regiszter megc�mz�s�vel a W-be t�lt�tt adatnak a
							; soron k�vetkez� helyre val� ki�r�sa (automatikus c�m-inkrement�l�ssal)
	decfsz	Counter, 1		; A ciklussz�ml�l� cs�kkent�se
	goto	Next			; Ism�tl�s, ha a ciklussz�ml�l� nem nulla

Stop						; K�sz a m�sol�s, egyhelyben j�r�s
	goto	Stop

	end
