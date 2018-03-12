%1
% �ll�tson el� k�t, elt�r� f�zis� �s frekvenci�j� periodikus koszinusz jelet,
% amit a k�s�bbiekben, mint modul�l� jelet haszn�l. Mivel a MatLab csak 
% mintav�telezett sz�mmint�kon k�pes dolgozni, meg kell adnunk az anal�g jelek 
% feldolgoz�s�hoz a mintav�tellel kapcsolatos param�tereket:



N = 10000;
tw = 5e-3;
fs = N/tw;
td = tw/N;
t=0:td:tw-td;

% A;

fi1 = 0;
f1 = 1000;
A1 = 2;
x1 = A1 *cos(2*pi*f1*t+fi1);
% plot(t,x1);
% grid;
% drawfft(x1,fs);
% B;

f2 = 1600;
fi2 = -pi/4;
A2=1;
x2 = A2*cos(2*pi*f2*t+fi2);
% plot(t,x2);
% grid;
% drawfft(x2,fs);

% C;
x=x1+x2;
plot(t,x);
grid;
drawfft(x,fs);

