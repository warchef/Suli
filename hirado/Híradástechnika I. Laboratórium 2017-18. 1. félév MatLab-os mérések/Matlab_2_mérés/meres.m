%1
% Állítson elõ két, eltérõ fázisú és frekvenciájú periodikus koszinusz jelet,
% amit a késõbbiekben, mint moduláló jelet használ. Mivel a MatLab csak 
% mintavételezett számmintákon képes dolgozni, meg kell adnunk az analóg jelek 
% feldolgozásához a mintavétellel kapcsolatos paramétereket:



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

