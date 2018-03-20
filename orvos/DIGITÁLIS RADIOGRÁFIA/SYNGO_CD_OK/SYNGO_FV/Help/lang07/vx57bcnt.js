//---------------------------------------------------------------------------
// This script is based on the work of Dieter Bungers - http://www.infovation.de
// The original example for the "Cross Browser Expanding and Collapsing TOC"
// was published on http://www.siteexperts.com/tips/techniques/ts03/index.htm
//---------------------------------------------------------------------------

var tocTab = new Array();var ir=0;
tocTab[ir++] = new Array ("1", "syngo fastView Online-Hilfe", "welcmtpc.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.1", "Was ist syngo fastView?", "newitem2.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.1.1", "Einleitung", "intro.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.1.2", "Anwendungsbereich", "purpose1.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.1.3", "Kontakt", "kontakt.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.2", "Funktionen ", "newitem.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.3", "Systemanforderungen", "sysreq.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.3.1", "Software", "software.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.3.2", "Hardware", "hardware.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.4", "Installation", "install.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.4.1", "Vorinstalliert auf CD oder DVD", "cdordvd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.4.2", "Aus Web/Internet zur Installation auf Ihrer Festplatte", "instnet.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.4.3", "Installations-CD zur Installation auf Ihrer Festplatte", "instcd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.5", "Erste Schritte", "start2.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.5.1", "So starten Sie syngo fastView", "fvstart.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.5.2", "Benutzeroberfl&auml;che", "ui.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.5.2.1", "Hauptfenster", "mainwndw.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.5.2.2", "Patientenliste", "brwcont.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6", "Darstellen der Patientendaten im Browser", "displpat.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.1", "Bilder auf CD", "imacd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2", "Bilder von einem Verzeichnis", "imadir.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.2.1", "Dialog 'Ordner suchen'", "brwdir.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.2.1.1", "Ersetzen von Patientendaten", "replace.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2.1.2", "Zuf&uuml;gen von Patientendaten", "brwadd.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2.2", "Dialog 'Datei &ouml;ffnen'", "dlgopnfl.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.6.2.2.1", "Auswahl eines DICOMDIR", "dcdiropn.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.6.2.2.2", "Auswahl von Einzelbildern", "ima1sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7", "Laden und Schlie&szlig;en von Bildern", "patopcl.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.1", "Laden von Bildern &uuml;ber die Patientenliste", "brwopen.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.1.1", "Gleichzeitiges Ersetzen schon vorhandener Bilder im Hauptfenster", "ldrepl.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.1.2", " Zuf&uuml;gen zu schon vorhandenen Bildern im Hauptfenster", "ldappend.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.1.3", "Auswahl von Einzelbildern einer Serie", "ima2sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.2", "Laden von Bilder &uuml;ber 'Datei &ouml;ffnen'", "fileopn.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.3", "Bearbeiten der Bilder w&auml;hrend des Ladens", "ldparprc.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.4", "Stoppen des Ladevorgangs", "cnclload.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.7.5", "Schlie&szlig;en von Bildern", "patclose.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.7.6", "Patienten-Info-Feld", "patinfo.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8", "Anzeigen von Bildern", "imadisp.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.8.1", "Darstellung im 'Bildstapel- und Galerie-Modus'", "stckstrp.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8.2", "Darstellung verschiedener Layoutunterteilungen", "lytsel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8.3", "Ein- und Ausblenden des Bildtextes", "txthid.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.8.4", "Ein- und Ausblenden der syngo Grafik", "graphhid.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9", "Navigieren", "navowv.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.9.1", "Navigieren -  Bilder einer Serie", "navima.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.2", "Navigieren - von Serie zu Serie", "navser.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.3", "Navigieren - von Studie zu Studie", "navstdy.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.4", "Navigieren - Reihe f&uuml;r Reihe", "navrow.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.5", "Navigieren - Seite f&uuml;r Seite", "navpag.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.6", "Kino - Bildsequenzen von Serien", "movovw.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.9.6.1", "Auto-Kino", "movauto.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.9.6.2", "Interaktives Kino", "movinter.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.10", "Ausw&auml;hlen von Bildern", "imasel.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.10.1", "Einfachauswahl", "ima4sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.10.2", "Mehrfachauswahl", "serselmt.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.10.3", "Bereichsauswahl", "ima3sel.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11", "Bearbeiten von Bildern", "imaprc.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.1", "Fensterung", "wndwovw.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.1.1", "Fensterung mit der Maus", "wndwmous.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.1.2", "Fensterung mit der Tastatur", "wndwkey.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.1.3", "Vorzugsfensterwerte", "wndwdef1.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.2", "'Zoom' Modus und 'Verschieben' Modus", "zoompan.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.2.1", "Zoom - Vergr&ouml;&szlig;ern/Verkleinern", "wndwdef2.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.2.2", "Verschieben", "pan.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.3", "Vergr&ouml;&szlig;erung- und Verkleinerungsfaktoren", "zoomovw.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.3.1", "Vergr&ouml;&szlig;erungsfaktor 1,25", "zoom125.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.3.2", "Verkleinerungsfaktor 0,8", "zoom08.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.11.4", "Distanzmessung", "tooldist.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.5", "Vergr&ouml;&szlig;erungsglas", "mgnifgls.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.11.6", "Kopieren eines Bildes ", "imacpy.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.12", "Bildausgabe", "imasave.htm", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.12.1", "Speichern als BITMAP", "savebmp.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.12.2", "Speichern als JPEG", "savejpeg.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.12.3", "Speichern als AVI", "saveavi.htm", "", "cicon11.gif", "cicon11.gif");
tocTab[ir++] = new Array ("1.13", "Links", "links.htm", "", "cicon11.gif", "cicon11.gif");
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
toc.document.write("<html>\n\r<head></head>\n\r<style type=\"text/css\">\n\r       SPAN.heading1 { font-family: Arial,Helvetica; font-weight: normal; font-size: 10pt; color: #000000; text-decoration: none }\n\r       SPAN.heading2 { font-family: Arial,Helvetica; font-weight: normal; font-size: 9pt; color: #000000; text-decoration: none }\n\r       SPAN.heading3 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading4 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading5 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading6 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r\n\r       SPAN.hilight1 { font-family: Arial,Helvetica; font-weight: normal; font-size: 10pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight2 { font-family: Arial,Helvetica; font-weight: normal; font-size: 9pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight3 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight4 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight5 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight6 { font-family: Arial,Helvetica; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r</style>\n\r<body bgcolor=\"#FFFFFF\">\n\r<font face=\"Arial,Helvetica\" size=\"4\"><b>syngo fastView Online-Hilfe</b></font><br>\n\r<font face=\"Arial,Helvetica\" size=\"2\">\n\r<a href=\"javaScript:parent.reDisplay(\'navIndex\',0,0);\">Schlüsselwortindex</a>\n\r</font><br><br><br>\n\r\n\r  <!-- Place holder for the TOC, do not delete the line below -->\n\r  ");}
for (i=0; i<tocTab.length; i++) {
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
