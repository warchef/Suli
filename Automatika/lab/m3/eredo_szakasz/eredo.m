%1. feladat

Gp = tf([2.6],[1 3.5 1.1 0])

Gt = tf([12],[1 12])

Ge = Gp*Gt

%2. feladat

Gpdt1 = tf([1 1],[0.1 1])

bode(Gpdt1)
