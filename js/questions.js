var options = {
	"1":"RCDS & Unabhängige",
	"2":"LHG",
	"3":"GHG&Piraten",
	"4":"SDS&Die LISTE",
	"5":"Juso-HSG",
	"6":"Fachschaft Informatik"
};

var topics = {
	"1":"Themenkomplex 1: Wohnraum und Stadtentwicklung",
	"2":"Themenkomplex 2: Kultur",
	"3":"Themenkomplex 3: Mobilität",
	"4":"Themenkomplex 4: Bürgerbeteiligung",
	"5":"Themenkomplex 5: Verschiedenes",
}

var questions = [
	{
		"title":"Frage 1.1",
		"topic":"1",
		"question":"Die Stadt plant massiven Wohnungsbau. Welche Pläne bestehen bzgl. studentisch bezahlbaren Wohnraums?",
		"answer":"1"
	},
	{
		"title":"Frage 1.2",
		"topic":"2",
		"question":"Wie planen Sie, Bonn für Studenten auch in Zukunft noch attraktiver zu machen?",
		"answer":"1"
	},
	{
		"title":"Frage 2.1",
		"topic":"1",
		"question":"Was wird aus der Ermekeilkaserne? Ist eine Nutzung für die Universität oder studentisches Wohnen mittel- bis langfristig denkbar?",
		"answer":"1"
	},
	{
		"topic":"1",
		"question":"Die Pläne rund um das Viktoria-Viertel wurden von Anwohnern, Ladenbesitzern, der illegalen Hausbesetzung und anderen Protesten ausgebremst. Der aktuelle Zustand des Karrees kann für niemanden ideal sein. Wie wird es in dieser Sache weitergehen?",
		"answer":"1"
	},
	{
		"topic":"1",
		"question":"Das Victoriakarree war für einige Zeit für Privatinvestoren, sowie für die Universität interessant. Trotzdem gibt es aus verschiedenen Gründen Probleme bei der Realisierung, weshalb das Gebäude seit mehreren Monaten leer steht. Was ist die Position der Stadt zur Situation im Victoriakarree?",
		"answer":"2"
	},
	{
		"topic":"1",
		"question":"Welche Pläne verfolgen Sie im Viktoriakarree? Sehen Sie den Standort weiterhin als lebendiges und studentisches Viertel?",
		"answer":"3"
	},
	{
		"topic":"1",
		"question":"Bonn hatte als Wirtschaftsstandort in letzter Zeit Probleme (besonders prominent: Der Wegzug von Haribo kurz vor Ihrer Amtsübernahme). Wie sieht die Zukunft der Arbeitsplätze für Akademiker aus? Wie will die Stadt Studierte auch nach ihrem Abschluss als Bürger der Bundesstadt halten?",
		"answer":"1"
	},
	{
		"topic":"1",
		"question":"Warum legt die Stadt einen Fokus auf Großprojekte, aber hat nicht etwa Geld für kleine Projekte, Läden, Schwimmbäder (Frankenbad, Pantheon, Eurotheater)?",
		"answer":"4"
	},
	{
		"topic":"1",
		"question":"Weswegen werden kleine Läden aus dem Gebäudekomplex am Hauptbahnhof rausgeworfen? Warum so viele Prestigebauten? (z.B. Einkaufszentrum, Viktoria-Viertel, großes Schwimmbad etc.)",
		"answer":"4"
	},
	{
		"topic":"1",
		"question":"Warum sind die Mieten so hoch und was wollen Sie dagegen unternehmen?",
		"answer":"4"
	},
	{
		"topic":"1",
		"question":"Wie stehen Sie zu dem Projekt \"Wohnen für Hilfe\"? Können Sie sich vorstellen, das Projekt zu unterstützen?",
		"answer":"3"
	},
	{
		"topic":"1",
		"question":"Kann sich die Stadt Bonn vorstellen, den Ausbau des Projekts \"Wohnen für Hilfe\", das bisher alleine von der Studierendenschaft getragen wird, finanziell zu unterstützen oder sogar langfristig zu übernehmen, wie etwa in Köln?",
		"answer":"5"
	},
	{
		"topic":"1",
		"question":"Die Lage auf dem Bonner Wohnungsmarkt ist prekär: Menschen mit niedrigem und mittlerem Einkommen sowie Studierende finden immer schwieriger eine bezahlbare Wohnung nahe der Innenstadt. Aufgabe der Stadtverwaltung ist es, dem entgegenzuwirken. Nun wird Am Erzberger Ufer das ehemalige Studentenwohnheim bald abgerissen. Wie rechtfertigen Sie es angesichts der beschriebenen Lage, dort ein weiteres Hotel zu planen statt die Fläche für sozialen Wohnungsbau oder bezahlbare Wohnungen für Studierende zu nutzen?",
		"answer":"5"
	},
	{
		"topic":"1",
		"question":" In Bad Godesberg fehlt es seit Jahren an Entwicklung in den Bereichen Infrastruktur, kulturelles Leben und Sicherheit. Wenngleich die Statistiken bisweilen dem Eindruck widersprechen, ist das Gefühl des Abstiegs bei vielen Bürgern präsent. Welche konkreten Planungen betreiben Sie, um Investitionen nicht weiter hauptsächlich entlang der B9 und im Stadtzentrum zu fokussieren?",
		"answer":"5"
	},
	{
		"topic":"1",
		"question":"Die Ministerien bedeuten einen enormen wirtschaftlichen Faktor für Bonn, nicht zuletzt seit dem Zuzug der UNO. In Ihrer Kandidatur zum Oberbürgermeister im September letzten Jahres hingegen war der notwendige Kontakt nach Berlin nicht ersichtlich. Wie glauben Sie, in dieser Sache an den entscheidenden Stellen aktiv werden zu können, um gegen einen weiteren Abzug zu werben?",
		"answer":"5"
	},
// 	{
// 		"topic":"1",
// 		"question":"Bonn ist attraktiv für internationale Studenten und Wissenschaftler, auch wegen der hier angesiedelten internationalen Organisationen. Für diese ist Bonn besonders wegen des Status als Bundesstadt und der hier vertretenen Ministerien attraktiv, was durch die schleichende Abwanderung einiger Ministerien gefährdet sein könnte. Was gedenkt die Stadt zu tun<br>1. um Bonn als Wissenschaftsstandort für internationale Studenten und Wissenschaftler weiterhin attraktiv zu gestalten?<br>2. in Bezug auf das Berlin/Bonn-Gesetz?",
// 		"answer":""
// 	},
	{
		"topic":"1",
		"question":"Ein Argument der CDU-geführten Ratsmehrheit im Bürgerentscheid zum Kurfürstenbad war, dass die Sanierung der Stadtteilbäder Millionenbeträge verschlingen würde, die in der Gestaltung der Bonner Bäderlandschaft fehlen würden. Wie wollen Sie aber den Bürgern ohne vorhandenen Wirtschaftsplan erklären, dass der angedachte Bau in Dottendorf - Bau und Unterhalt vor Augen - finanziell sinnvoller sein soll, trotz bestehender Konkurrenz in naher Umgebung? Wie möchten Sie nach dem Beschluss eines Schwimmbadneubaus sicherstellen, dass die Stadtwerke sowohl diesen, als auch die Anschaffung von Niederflurstraßenbahnen, welche 2019 nötig wird, finanzieren können? Wie sieht es nach dem Beschluss des Schwimmbadneubaus mit der Zukunft anderer Freibäder (z.B. Melbbad) aus?",
		"answer":"5"
	},
	{
		"topic":"1",
		"question":"Wie sähe eine mögliche zukünftige Campuserweiterung der Uni Bonn aus? Gibt es auch Erwägungen, die die Verlegung von Standorten in andere Stadtteile vorsehen?",
		"answer":"5"
	},
	{
		"topic":"1",
		"question":"Durch die Bauarbeiten an dem Parkhaus an der Uni soll Hofgartenwiese über einen unbestimmten Zeitraum teils nicht nutzbar sein. Gibt es inzwischen eine Konkretisierung dieses Zeitraums? Wurden auch eventuelle Alternativlösungen besprochen?",
		"answer":"2"
	},
	{
		"topic":"1",
		"question":"Inwiefern ist die Zentralisierung der Bonner Campi mit den tatsächlichen und infrastruktuellen Gegebenheiten der Stadt vereinbar?",
		"answer":"2"
	},
	{
		"topic":"1",
		"question":"Welche Maßnahmen zieht die Stadt in Erwägung, um auf die verschiedenen universitären Baustellen zu reagieren?",
		"answer":"2"
	},
	{
		"topic":"1",
		"question":"Halten Sie die Modekette Primark, die hauptsächlich für Wegwerfmentalität, übersteigerten Konsumismus und gesundheits- und umweltschädliche Herstellungsbedingungen steht, für ein geeignetes Aushängeschild der Stadt Bonn",
		"answer":"3"
	},
	{
		"topic":"2",
		"question":"Sie haben in Ihrem Wahlkampf versprochen, Bonn bliebe laut. Seitdem sind trotzdem Kulturveranstaltungen wegen Anwohnerbeschwerden abgesagt worden. Studentische Veranstaltungen werden auf mancher städtischer Fläche (z.B. nahe dem Alten Zoll) teilweise aus Furcht vor Anwohnern vorauseilend untersagt. Wie steht es also um Bonns Lautbleiben?",
		"answer":"1"
	},
	{
		"topic":"2",
		"question":"Was halten sie von einem Cannabis-Social-Club?",
		"answer":"4"
	},
	{
		"topic":"2",
		"question":"Warum haben sie die Räumung des Bonner Liz als selbstverwalteten Freiraum der Menschen jenseits ökonomischer Zwänge und gern gesehenes Projekt in der Nachbarschaft gebilligt? Warum auf einmal ein Ende der Toleranz-Politik?",
		"answer":"4"
	},
	{
		"topic":"2",
		"question":"Welchen Stellenwert hat die studentische und „kleine“ Kultur für Sie in Bonn, gerade auch im Angesicht der finanziellen Förderung und des weiteren Ausbaus von Einrichtungen der sog. „Hochkultur“?",
		"answer":"3"
	},
	{
		"topic":"3",
		"question":"Wie stehen sie zum Bau einer Bonner Seilbahn?",
		"answer":"5"
	},
	{
		"topic":"3",
		"question":"Was sind die städtischen Pläne für ein nachhaltiges Verkehrskonzept, insbesondere mit Blick auf den Ausbau der Fahrradinfrastruktur und den Bau der Seilbahn? ",
		"answer":"3"
	},
	{
		"topic":"3",
		"question":"Mit der positiven Machbarkeitsstudie zur Seilbahn ist die Realisierung wesentlich realistischer geworden. Die Studierenden auf dem Venusberg würden von der neuen Anbindung profitieren. Kann die Stadt zu diesem Zeitpunkt schon Zuschläge (wie etwa beim Flughafenbus) für Studierende und damit eine zusätzliche finanzielle Belastung ausschließen?",
		"answer":"2"
	},
	{
		"topic":"3",
		"question":"Wann bekommt Bonn ein Fahrradverleihsystem?",
		"answer":"5"
	},
	{
		"topic":"3",
		"question":"Wie geht es mit den Bauarbeiten am Hauptbahnhof weiter?: Steht die Stadt im Dialog mit der Bahn, um eine Verbesserung der Situation am Gleis 1 des Hauptbahnhofs zu bewirken?",
		"answer":"5"
	},
	{
		"topic":"3",
		"question":"Wie sieht es mit der Fahrrad- und Fußgängerfreundlichkeit am Hauptbahnhof aus? Wie fänden sie es, wenn kein privater Nahverkehr mehr das neu gestaltete Bahnhofsumfeld abwerten würde?",
		"answer":"5"
	},
	{
		"topic":"3",
		"question":"Bonn möchte 2020 Fahrradhauptstadt sein. Der diesjährige Fahrradklimatest gibt an Bonn die Note 4,1! Damit haben wir uns nicht nur leicht verschlechtert, sondern liegen im hinteren Mittelfeld auf Platz 22 von 39. Welche zusätzlichen Maßnahmen sind nun geplant?",
		"answer":"6"
	},
	{
		"topic":"4",
		"question":"Ihre klare Position in der Bäderfrage und die unmittelbare Werbung für eine Seite wurden z.T. sehr kritisch gesehen. Wie sehr sollte der Oberbürgermeister, sollten Sie in politische Debatten eingreifen und selbst Stellung beziehen?",
		"answer":"1"
	},
	{
		"topic":"4",
		"question":"Warum wurde im Falle des Bürgerentscheids zum Kurfürstenbad das Neutralitätsgebot gebrochen und für die eigene Position geworben?",
		"answer":"4"
	},
	{
		"topic":"5",
		"question":"In der Öffentlichkeit entsteht gerne der Eindruck, dass sich Stadtrat und Verwaltung bei Problemen gerne den Schwarzen Peter zuschieben. Sie sitzen beiden vor: Teilen Sie diesen Eindruck und was kann die Rolle eines Oberbürgermeisters in solchen Konflikten sein?",
		"answer":"1"
	},
	{
		"topic":"5",
		"question":"Wird es wieder Studiengebühren geben? (da wahrscheinlich schwarz/gelb)",
		"answer":"4"
	},
	{
		"topic":"5",
		"question":"Macht die Stadt genug für Obdachlose oder Drogenabhängige? Wie groß sind Präventions- und Nachbetreuungsangebote und reichen diese aus? Falls diese ausreichen, warum ist dann die Not dieser Menschen in bestimmten Stadtteilen omnipräsent?",
		"answer":"4"
	},
	{
		"topic":"5",
		"question":"Können Sie sich vorstellen, dass das Projekt \"KinderSt.E.R.N\" in Zukunft von der Stadt gefördert wird? Was spricht bisher dagegen?",
		"answer":"3"
	},
	{
		"topic":"5",
		"question":"Das Kooperationsprojekt \"KinderSTERN\" zwischen Universität, Studierendenwerk und Studierendenschaft entlastet die Stadt bei der Erfüllung ihrer KiTa-Platz-Pflicht. Wieso ist die Stadt bisher nicht bereit, das Projekt mit zu unterstützen?",
		"answer":"5"
	},
	{
		"topic":"5",
		"question":"Was ist Ihre Lieblingsfarbe?",
		"answer":"6"
	}
	
];