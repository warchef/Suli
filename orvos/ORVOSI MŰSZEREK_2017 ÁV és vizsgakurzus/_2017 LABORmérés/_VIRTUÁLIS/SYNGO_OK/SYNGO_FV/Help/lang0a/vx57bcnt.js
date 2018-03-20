//---------------------------------------------------------------------------
// This script is based on the work of Dieter Bungers - http://www.infovation.de
// The original example for the "Cross Browser Expanding and Collapsing TOC"
// was published on http://www.siteexperts.com/tips/techniques/ts03/index.htm
//---------------------------------------------------------------------------

var tocTab = new Array();var ir=0;
tocTab[ir++] = new Array ("1", "Ayuda en l�nea de syngo fastView", "welcmtpc.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.1", "�Qu� es syngo fastView?", "newitem2.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.1.1", "Introducci�n", "intro.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.1.2", "�mbito de aplicaci�n", "purpose1.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.1.3", "Contacto", "kontakt.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.2", "Funciones  ", "newitem.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.3", "Requisitos del sistema", "sysreq.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.3.1", "Software", "software.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.3.2", "Hardware", "hardware.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.4", "Instalaci�n", "install.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.4.1", "Preinstalado en CD o DVD", "cdordvd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.4.2", "Instalaci�n desde la web/Internet en su disco duro", "instnet.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.4.3", "CD de instalaci�n para la instalaci�n en el disco duro", "instcd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.5", "Primeros pasos", "start2.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.5.1", "Inicio de syngo fastView", "fvstart.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.5.2", "Interfaz de usuario", "ui.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.5.2.1", "Ventana principal", "mainwndw.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.5.2.2", "Lista de pacientes", "brwcont.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6", "Visualizaci�n de datos de pacientes en el explorador", "displpat.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.1", "Im�genes en CD", "imacd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2", "Im�genes de un directorio", "imadir.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.2.1", "Cuadro de di�logo \"Buscar carpeta\"", "brwdir.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.2.1.1", "Sustituci�n de datos de pacientes", "replace.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2.1.2", "Introducci�n de datos de pacientes", "brwadd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2.2", "Cuadro de di�logo \"Abrir archivo\"'", "dlgopnfl.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.2.2.1", "Selecci�n de un DICOMDIR", "dcdiropn.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2.2.2", "Selecci�n de im�genes individuales", "ima1sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7", "Carga y cierre de im�genes", "patopcl.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.1", "Carga de im�genes mediante la lista de pacientes", "brwopen.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.1.1", "Sustituci�n simult�nea de im�genes existentes en la ventana principal", "ldrepl.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.1.2", " Agregaci�n a las im�genes existentes en la ventana principal", "ldappend.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.1.3", "Selecci�n de una �nica imagen de una serie", "ima2sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.2", "Carga de im�genes mediante \"Abrir archivo\"", "fileopn.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.3", "Procesamiento de im�genes durante la carga", "ldparprc.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.4", "Detenci�n del proceso de carga", "cnclload.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.5", "Cierre de im�genes", "patclose.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.6", "Campo de informaci�n de pacientes", "patinfo.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8", "Visualizaci�n de im�genes", "imadisp.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.8.1", "Representaci�n en modo \"Series en pila\" y \"Series en tira\"", "stckstrp.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8.2", "Representaci�n de distintas subdivisiones de dise�o  ", "lytsel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8.3", "Ocultar y mostrar el texto de las im�genes  ", "txthid.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8.4", "Ocultar y mostrar syngo Grafik", "graphhid.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9", "Navegaci�n", "navowv.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.9.1", "Navegaci�n: una imagen de una serie", "navima.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.2", "Navegaci�n: de una serie a otra", "navser.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.3", "Navegaci�n: de un estudio a otro", "navstdy.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.4", "Navegaci�n: de una fila a otra", "navrow.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.5", "Navegaci�n: p�gina a p�gina", "navpag.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.6", "Cine: secuencias de im�genes de series", "movovw.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.9.6.1", "Cine autom�tico", "movauto.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.6.2", "Cine interactivo", "movinter.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.10", "Selecci�n de im�genes", "imasel.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.10.1", "Selecci�n sencilla", "ima4sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.10.2", "Selecci�n m�ltiple", "serselmt.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.10.3", "Selecci�n de intervalos", "ima3sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11", "Procesamiento de im�genes", "imaprc.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.1", "Windowing", "wndwovw.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.1.1", "Windowing con el rat�n", "wndwmous.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.1.2", "Windowing con el teclado", "wndwkey.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.1.3", "Valor de ventana preferido", "wndwdef1.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.2", "Modo \"Zoom\" y modo \"Encuadre\"", "zoompan.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.2.1", "Zoom: aumento/disminuci�n", "wndwdef2.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.2.2", "Encuadre", "pan.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.3", "Factores de aumento y disminuci�n", "zoomovw.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.3.1", "Aumentar en 1.25", "zoom125.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.3.2", "Disminuir por 0.8", "zoom08.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.4", "Medidas de distancias  ", "tooldist.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.5", "Lupa", "mgnifgls.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.6", "Copia de una imagen ", "imacpy.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.12", "Salida de im�genes", "imasave.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.12.1", "Guardar como BITMAP", "savebmp.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.12.2", "Guardar como JPEG", "savejpeg.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.12.3", "Guardar como AVI", "saveavi.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.13", "Enlaces", "links.htm", "", "cicon11.gif", "cicon11.gif");
isContent = true,
isIndex = false,
showNumbers = false,
textSizes = new Array(1, 1, 0.7, 0.7),
tocBehaviour = new Array(1,1),
tocScroll=false,
tocLinks = new Array(1,0);
var isIE = navigator.appName.toLowerCase().indexOf("explorer") > -1;
var mdi = (isIE) ? textSizes[1]:textSizes[3];
var sml = (isIE) ? textSizes[2]:textSizes[4];
var oldCurrentNumber = "", oldLastVisitNumber = "";
var toDisplay = new Array();
for (ir=0; ir<tocTab.length; ir++) {
toDisplay[ir] = tocTab[ir][0].split(".").length==1;
}
function reDisplay(currentNumber,tocChange,noLink,e) {
if (isIndex && (toc.location.href.substring(toc.location.href.lastIndexOf("/")+1,toc.location.href.length) != "vx57bidx.htm")) { isIndex=false; isContent=true; }
if (currentNumber == "navIndex") { isContent=false; }
if (currentNumber == "navContent") { isIndex=false; isContent=true; }
if (e) {
ctrlKeyDown = (isIE) ? e.ctrlKey : (e.modifiers==2);
if (tocChange && ctrlKeyDown) tocChange = 2;
}
var currentNumArray = currentNumber.split(".");
var currentLevel = currentNumArray.length-1;
var currentIndex = 0;
var scrollY=0, addScroll=tocScroll;
if (currentNumber == "") currentNumber = top.location.href.substring(top.location.href.lastIndexOf("?")+1,top.location.href.length);
for (i=0; i<tocTab.length; i++) {
if ((tocTab[i][0] == currentNumber) || (tocTab[i][2] == currentNumber && tocTab[i][2] != "")) {
currentIndex = i;
currentNumber = tocTab[i][0];
currentNumArray = currentNumber.split(".");
currentLevel = currentNumArray.length-1;
break;
}
}
if (currentIndex < tocTab.length-1) {
nextLevel = tocTab[currentIndex+1][0].split(".").length-1;
currentIsExpanded = nextLevel > currentLevel && toDisplay[currentIndex+1];
}
else currentIsExpanded = false;
theHref = (noLink) ? "" : tocTab[currentIndex][2];
theTarget = tocTab[currentIndex][3];
for (i=1; i<tocTab.length; i++) {
if (tocChange) {
thisNumber = tocTab[i][0];
thisNumArray = thisNumber.split(".");
thisLevel = thisNumArray.length-1;
isOnPath = true;
if (thisLevel > 0) {
for (j=0; j<thisLevel; j++) {
isOnPath = (j>currentLevel) ? false : isOnPath && (thisNumArray[j] == currentNumArray[j]);
}
}
toDisplay[i] = (tocChange == 1) ? isOnPath : (isOnPath || toDisplay[i]);
if (thisNumber.indexOf(currentNumber+".")==0 && thisLevel > currentLevel) {
if (currentIsExpanded) toDisplay[i] = false;
else toDisplay[i] = (thisLevel == currentLevel+1);
}
}
}
if (!isContent && !isIndex) {
toc.location.href = "vx57bidx.htm";
isIndex = true;
}
if (isContent) {
toc.document.write("<html>\n\r<head></head>\n\r<style type=\"text/css\">\n\r       SPAN.heading1 { font-family: Arial,Helvetica; font-weight: normal; font-size: 10pt; color: #000000; text-decoration: none }\n\r       SPAN.heading2 { font-family: Arial,Helvetica; font-weight: normal; font-size: 9pt; color: #000000; text-decoration: none }\n\r       SPAN.heading3 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading4 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading5 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading6 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r\n\r       SPAN.hilight1 { font-family: Arial,Helvetica; font-weight: normal; font-size: 10pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight2 { font-family: Arial,Helvetica; font-weight: normal; font-size: 9pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight3 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight4 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight5 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight6 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r</style>\n\r<body bgcolor=\"#FFFFFF\">\n\r<font face=\"Arial,Helvetica\" size=\"4\"><b>Ayuda en l�nea de syngo fastView</b></font><br>\n\r<font face=\"Arial,Helvetica\" size=\"2\">\n\r<a href=\"javaScript:parent.reDisplay(\'navIndex\',0,0);\">�ndice de palabras clave</a>\n\r</font><br><br><br>\n\r\n\r  <!-- Place holder for the TOC, do not delete the line below -->\n\r  ");}for (i=0; i<tocTab.length; i++) {
if (toDisplay[i]) {
thisNumber = tocTab[i][0];
thisNumArray = thisNumber.split(".");
thisLevel = thisNumArray.length-1;
isCurrent = (i == currentIndex);
if (i < tocTab.length-1) {
nextLevel = tocTab[i+1][0].split(".").length-1;
img = (thisLevel >= nextLevel) ? tocTab[i][4] : ((toDisplay[i+1]) ? tocTab[i][5] : tocTab[i][4]);
}
else img = tocTab[i][4];
if (isContent) {
thisTextClass = ((thisNumber==currentNumber)?("hilight"):("heading"));
if (addScroll) scrollY+=((thisLevel<2)?mdi:sml)*25;
if (isCurrent) addScroll=false;
toc.document.write("<table border=0 cellspacing=0 cellpadding=2>");
toc.document.write("<tr><td width=" + ((thisLevel+1) * 20) + " align=right valign=top>");
toc.document.write("<a href=\"javaScript:history.go(0)\" onMouseDown=\"parent.reDisplay('" + thisNumber + "'," + tocBehaviour[0] + "," + tocLinks[0] + ",event)\">");
toc.document.write("<img src=\"" + img + "\" border=0></a>");
toc.document.write("</td><td align=left>");
toc.document.write("<a href=\"javaScript:history.go(0)\" onMouseDown=\"parent.reDisplay('" + thisNumber + "'," + tocBehaviour[1] + "," + tocLinks[1] + ",event)\">");
toc.document.write("<span class=\""  + thisTextClass + ((thisLevel>5) ? 6 : thisLevel+1) + "\">");
toc.document.write( ((showNumbers)?(thisNumber+" "):"") + tocTab[i][1]);
toc.document.write("</span></a>");
toc.document.writeln("</td></tr></table>");
} //isContent
}
}
if (!noLink) {
oldLastVisitNumber = oldCurrentNumber;
oldCurrentNumber = currentNumber;
}
if (isContent) {
toc.document.write("\n\r\n\r<hr><font face=\"Arial,Helvetica\" size=\"1\">&copy; 2005  Siemens Medical Solutions SW</font>\n\r</body>\n\r</html>\n\r");
toc.document.close();
if (tocScroll) toc.scroll(0,scrollY);
}
if (theHref)
if (theTarget=="top") top.location.href = theHref;
else if (theTarget=="parent") parent.location.href = theHref;
else if (theTarget=="blank") open(theHref,"");
else content.location.href = theHref;
}
