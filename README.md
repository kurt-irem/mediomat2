## Getting Started

1.  Install Visual Studio Code -> https://code.visualstudio.com/

2.  Install Node.js LTS -> https://nodejs.org/en

3.  Clone das Repositorie -> Klicke dafür auf den evtl. grünen Button mit der Aufschrift "<>Code". Wenn du auf den Button gedrückt hast, dann öffnet sich ein overlay-fenster. HTTPS ist schon vor ausgewählt. Du siehst ein Textfeld bzw. Inputfeld mit diesem Text - "https://github.com/officiallycedric/". Neben dem Textfeld ist ein Icon, womit du diesen Text kopieren kannst. Kopiere den Text in dem Textfeld.

4.  Lege einen neuen Ordner auf deinem Computer an.

5.  Öffne Visual Studio Code.

6.  Öffne in Visual Studio Code den in Abschnitt 4 angelegten Ordner.

7.  Öffne das Terminal in Visual Studio Code -> Klicke dazu auf den Reiter "Terminal" und dann auf "New Terminal". Es sollte sich nun das Terminal fenster öffnen.

8.  Clone das bereits kopierte repositorie im Terminal. Dazu schreibe im Terminal -> "git clone" (nur git clone schreiben, ohne "") und füge dahinter das kopierte repositorie ein.
    Das Terminal sollte nun ungefähr so aussehen:

        mein-pc@uni dein-erstellter-ordner % git clone https://github.com/officiallycedric/...

9.  Drücke nun die enter Taste. Nun wird das Repository in deinen Ordner kopiert.

10. Navigiere in das nun erstellte Repositorie. schreibe dazu im Termin die Buchstaben "ls" und drücke Enter. Dir wird nun der Name des repositories aufgelistet und evtl. noch weitere Dateien. Schreibe nun in das Terminal "cd" und dahinter den Namen des repositories. Es sollte nun ungefähr so in deinem Terminal aussehen:

    mein-pc@uni dein-erstellter-ordner % cd name-vom-repositorie

Drücke dann die Entertaste. Jetzt solltest du in dem Repositorie navigiert sein. Wenn jetzt der name des repositories anstatt dein-erstellter-ordner steht, hast du alles richtig gemacht.

11. Schreibe nun im Terminal den Befehl -> "npm install". Jetzt werden alle Pakete für die Anwendung heruntergeladen. Dies kann kurz dauern.

12. Wenn alles installiert wurde, dann schreibe jetzt in dem Terminal den Befehl -> "npm rub dev". Jetzt wird die Anwendung gestartet. Du wirst dann in dem Terminal den Begriff "localhost:3000" sehen. Klicke auf diesen Link und die Anwendung öffnet sich in einem Browsertab.

Viel Spaß mit unserer Anwendung :D
