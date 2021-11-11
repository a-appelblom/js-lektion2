# Lektion 2 i javascript

Vi har gått igenom DOM.

Hur vi hämtar element från vår HTML samt hur vi skapar och lägger till element i DOM-trädet

Vi har även tittat på hur vi lägger till styling och attribut på våra elemet samt hur vi itererar genom en lista av element.

## Lektion 2 Övningar

### Grunden

Skapa de vanliga tre filerna. HTML, CSS och JS.

I din HTML länka in din css och och ditt script.

Försiktigt här. Om scriptet laddas in innan HTML har renderat klart kommer de selectors ni använder i JS-filen att bli undefined.

Skapa en enkel header med en Heading-tag (h).

Prova nu att hämta denna tag i din JS-fil och logga den i konsolen.

Det finns flera metoder för att åstadkomma detta med.
Exempelvis `querySelector()` eller `getElementById()` om det elementet har ett id.

Skapa nu en main tag och testa att i denna tag skapa ett antal (5-10) element.
Gör detta med hjälp av en loop som skapar dess element i din JS-fil
Spara denna lista i en variabel

Använd en forEach för att sätta en olik bakgrund på vartannat element i din list.
Gör detta antingen med att sätta en ny klass på elementet eller genom att sätta ett style attribut direkt.
Kom ihåg att en forEach tar en callback-funktion som argument och du kan där få med både element och index och i funktionen kan vilken logik som helst användas.

Skapa en a tagg och en img tagg.
Gör så att img taggen ligger i a taggen.
med JS sätt en Href till valfri sida på a taggen. Sätt sedan ett src attribut och ett alt attribut på din img tagg.

### Utmaningen

Nu när det börjar kännas lite varmt i kläderna gör vi något mer konkret.

Jag har skapat en enkel HTML sida länkad i Dagens lektions repo.

Utmaningen är att försöka återskapa den sidan utan att göra något i html filen.

Är det en utmaning så prova att göra det gradvis. Skapa eller kopiera HTML och del för del byt ut elementen mot de som skapas i javascript.

Tänk på att all kod ni märker att ni repeterar ofta, bryt ut det till en hjälpfunktion om möjligt.

Jag finns tillgänglig för att hjälpa till hela dagen, bara att säga till.
