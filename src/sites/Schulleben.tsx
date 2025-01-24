import Frame from "../components/Frame/Frame.tsx";
import {
    Article,
    Bold,
    Container,
    Email,
    ImageArticle,
    Link,
    Liste,
    SubSubTitle,
    SubTitle,
    Title,
} from "../components/ArticleComponents/ArticleComponents.tsx";

export function Schulleben() {
    return (
        <Frame>
            <Container>
                <Title>Das Gymnasium Oberwil</Title>
                <Article>
                    Das Gymnasium Oberwil ist eine Schule der Sekundarstufe II,
                    die von rund 1000 Schülerinnen und Schülern besucht wird.
                    Sie führt nach der obligatorischen Schulzeit in 4 Jahren zur
                    Matura (Maturabteilung) und in 3 Jahren zum
                    Fachmittelschulausweis und in einem weiteren Jahr zur
                    Fachmaturität (FMS).
                    <br />
                    <br />
                    An der Maturabteilung werden alle im Kanton BL geführten
                    Schwerpunktfächer angeboten, ebenso eine zweisprachige
                    Matura auf Englisch; für Französisch und Spanisch gibt es
                    eine spezielle Förderung durch Austauschsemester.
                    <br />
                    <br />
                    Das Gymnasium Oberwil ist in der Region bekannt für sein
                    reges kulturelles Engagement.
                </Article>
            </Container>
        </Frame>
    );
}

export function Leitbild() {
    return (
        <Frame>
            <Container>
                <Title>Leitbild Gymnasium Oberwil</Title>
                <Article>
                    Das Gymnasium Oberwil ist eine Schule der Sekundarstufe II
                    mit einer FMS- und einer Maturitätsabteilung. Wir haben
                    folgende pädagogische Ziele:
                    <Liste
                        points={[
                            "Schüler*innen auf ein Studium auf der Tertiärstufe vorbereiten",
                            "breite Allgemeinbildung vermitteln und zukunftsorientierte Kompetenzen fördern",
                            "Eigenständigkeit und Selbstvertrauen, Neugierde und Kreativität, Verantwortungsbewusstsein und Toleranz entwickeln",
                        ]}
                    />
                    Wir gehen sorgfältig mit unserer Umwelt, unseren Mitmenschen
                    und uns selber um.
                    <SubTitle>lernen</SubTitle>
                    <Liste
                        points={[
                            "Im Zentrum unserer Schule stehen Menschen, die lernen und sich bilden möchten.",
                            "Wir verstehen Lernen als Prozess, der Kreativität fördert und zu kritischem Denken sowie verantwortungsvollem Handeln führt.",
                            "Wir legen neben dem Fachwissen Wert auf das Wahrnehmen, Analysieren und Verstehen von Zusammenhängen.",
                            "Wir schaffen ein Lernumfeld, in dem alle ihre Fähigkeiten, Fertigkeiten und Begabungen entdecken können und Leistungen erbringen wollen.",
                        ]}
                    />
                    <SubTitle>gemeinsam</SubTitle>
                    <Liste
                        points={[
                            "Wir begegnen einander mit Respekt, Vertrauen und Wertschätzung.",
                            "Wir unterstützen einander in der täglichen Arbeit.",
                            "Wir pflegen eine Schulkultur, die Erfolge ermöglicht und Scheitern zulässt.",
                            "Wir diskutieren konstruktiv.",
                            "Wir kommunizieren offen, direkt und klar.",
                        ]}
                    />
                    <SubTitle>entwickeln</SubTitle>
                    <Liste
                        points={[
                            "Wir verständigen uns über gemeinsame Qualitätsansprüche und -ziele.",
                            "Wir reflektieren und evaluieren unsere Arbeit regelmässig (und richten unser Handeln danach).",
                            "Wir fördern Prozesse der Schulentwicklung und ermöglichen die Mitwirkung aller Interessensgruppen.",
                            "Wir erhalten oder verbessern die Qualität des Lernens durch Schulentwicklung und Weiterbildung.",
                            "Wir berücksichtigen bei der Gestaltung von Schule und Unterricht Erkenntnisse aus der Praxis und der wissenschaftlichen Forschung.",
                            "Wir setzen uns konstruktiv mit gesellschaftlichen und bildungspolitischen Entwicklungen auseinander.",
                        ]}
                    />
                    <SubTitle>sichtbar</SubTitle>
                    <Liste
                        points={[
                            "Wir präsentieren die Vielfalt unserer Schule nach aussen.",
                            "Wir geben der Öffentlichkeit bei Schulanlässen Einblicke in unsere Arbeit.",
                            "Wir pflegen den Kontakt zu Eltern, Ehemaligen, anderen Schulen, zu Hochschulen, zur Berufswelt sowie zum gesellschaftlichen Umfeld.",
                        ]}
                    />
                </Article>
            </Container>
        </Frame>
    );
}

export function Mitwirkungsstruktur() {
    return (
        <Frame>
            <Container>
                <Title>
                    Mitwirkungsstruktur und Geschäftsordnung am Gymnasium
                    Oberwil
                </Title>
                <Article>
                    Die Zusammenarbeit der verschiedenen Organisationseinheiten
                    am Gymnasium Oberwil sind in diesem PDF gegliedert. Klicken
                    Sie auf den Link unten, um das PDF zu öffnen.
                    <br />
                    <Link
                        alternate={"Geschäftsordnung/Mitwirkungsstruktur"}
                        isPdf
                    >
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/20230325_Gesch%C3%A4ftsordnung_Mitwirkungsstruktur_Gymnasium_Oberwil_final.pdf
                    </Link>
                </Article>
            </Container>
        </Frame>
    );
}

export function Schulrat() {
    return (
        <Frame>
            <Container>
                <Title>Schulrat</Title>
                <Article>
                    <SubTitle>Präsidentin</SubTitle>
                    Yasmin Weber-Kägi
                    <SubTitle>Vize-Präsidentin</SubTitle>
                    Karin Müller
                    <SubTitle>Mitglieder</SubTitle>
                    Kimrobin Elena Birrer <br /> Philipp Bollinger <br />{" "}
                    Stefanie Stadler Elmer
                    <br /> Roland Stöckli <br /> Csaba Zvekan
                    <SubTitle>Vertretung der Lehrer:innen</SubTitle>
                    Annette Haberstock <br /> Gabriela Vetsch
                    <SubTitle>Vertretung der Schüler:innen</SubTitle>
                    Noée Arnold Rieke Schweighauser
                </Article>
            </Container>
        </Frame>
    );
}

export function Schuladministration() {
    return (
        <Frame>
            <Container>
                <Title>Schuladministration</Title>
                <Article>
                    Simone Jaccoud
                    <br />
                    Sarah Schilling
                    <br />
                    Nathalie Schmid
                    <br />
                    Dragana Vulin <br /> <br />
                    <Email>sekretariat.gymow@sbl.ch</Email>
                </Article>
            </Container>
        </Frame>
    );
}

export function SOGO() {
    return (
        <Frame>
            <Container>
                <Title>SOGO</Title>
                <Article>
                    Die SOGO, Schülerorganisation Gymnasium Oberwil, ist eine
                    Organisation, welche jeder Klasse ermöglicht Probleme oder
                    Verbesserungsvorschläge vorzuschlagen.
                    <br />
                    <br />
                    Jede Klasse stellt eine/n Klassenvertreter/in für die
                    Sitzungen und diese leitet alle Anliegen und Vorschläge an
                    das Präsidium weiter. Das Präsidium bespricht alles mit
                    einem der Schulleiter. Eine Woche nach der ersten Sitzung
                    gibt es eine Nachbesprechungssitzung mit einem der
                    Schulleiter und allen Klassenverter/innen.
                    <br />
                    <br />
                    Die SOGO gibt den Schülern eine Stimme und sorgt dafür, dass
                    Schüleranliegen wenn möglich umgesetzt werden.
                </Article>
            </Container>
        </Frame>
    );
}

export function Dienste() {
    return (
        <Frame>
            <Container>
                <Title>Dienste</Title>
                <Article>
                    <SubTitle>Hausdienste</SubTitle>Nadja Hofer <br />
                    Jan Kiefer <br />
                    Cédric Nobel
                    <SubTitle>Assistent:innen</SubTitle>
                    Raphael Girod (Chemie) <br />
                    Anja Sacchet (Chemie) <br />
                    Marc Suter (Physik) <br /> Stefanie Schmid Nuoffer
                    (Biologie) <br /> Susanne Christe (Biologie) <br /> Melanie
                    Krabe (Biologie)
                    <SubTitle>Informatik</SubTitle>
                    Frank Grossenbacher (Informatik)
                    <br />
                    Sascha Zimmerli (Informatik)
                    <SubTitle>Mediothek</SubTitle>
                    Erika Bättig Knotek <br />
                    Sarah Döbeli
                    <SubTitle>Verpflegung</SubTitle>
                    <Link alternate={"Eingliederungsstätte Baselland ESB"}>
                        https://www.esb-bl.ch/
                    </Link>
                </Article>
            </Container>
        </Frame>
    );
}

export function Intern() {
    return (
        <Frame>
            <Container>
                <Title>Interne Beratung</Title>
                <Article>
                    <SubTitle>Schlichtungsstelle</SubTitle>
                    Entstehen im Zusammenhang mit dem Schulunterricht zwischen
                    Lehrpersonen und Schülerinnen oder Schülern Konflikte, die
                    von den Beteiligten nicht gelöst werden können, so kann ein
                    Mitglied der Schlichtungsstelle zur Vermittlung beigezogen
                    werden.
                    <SubSubTitle>Mitglieder der Schlichtungsstelle</SubSubTitle>
                    Frau I. Gilli
                    <br />
                    Herr M. Imboden
                    <SubTitle>Lerncoaching</SubTitle>
                    Beim Lerncoaching werden Schüler und Schülerinnen
                    individuell in folgenden Bereichen unterstützt:
                    <Liste
                        points={[
                            "Entwicklung eigener Lernstrategien anhand des aktuellen Unterrichtsmaterials, um effizienter und nachhaltiger lernen zu können",
                            "Prüfungsvorbereitungen",
                            "Planung und Organisation des Schulalltags",
                            "Standortbestimmung, Zielsetzung",
                        ]}
                    />
                    <SubSubTitle>Mitglieder vom Lerncoaching</SubSubTitle>
                    Ruth Kunz Häfliger (Sprachen, Geschichte) <br />
                    Barbara von Wartburg (Sprachen, Geschichte) <br />
                    Eva Hofstetter (Biologie, Geografie) <br />
                    Pascal Stauber (Mathematik)
                    <br />
                    <br />
                    LC ist keine Nachhilfe. Es geht nicht um die Beantwortung
                    von fachlichen Fragen, sondern um die Entwicklung von
                    generellen Lernstrategien.
                    <br />
                    <br />
                    eitere Infos finden sich im folgenden PDF <br />
                    <Link alternate={"Infos zum Lerncoaching"} isPdf>
                        https://www.gymoberwil.ch/fileadmin/sources/downloads/schulleben/beratung/lerncoaching_2021.pdf
                    </Link>
                    <SubTitle>Stresscoaching</SubTitle>
                    Haben Sie Prüfungsangst oder Blackouts und Stress beim
                    Lernen ? Oder haben Sie Einschlafprobleme und brauchen mehr
                    Entspannung? Gerne coache ich Sie, was Sie alles gegen
                    Stress tun können und wie Sie in gestressten Situationen
                    ruhig werden und einen klaren Kopf bewahren.
                    <br />
                    <br />
                    Bitte senden Sie für die Terminfindung eine E-mail an{" "}
                    <Email>daniela.bui@sbl.ch</Email>
                    <SubTitle>BRAVO</SubTitle>
                    Liebe Schülerinnen und Schüler, liebe Lehrpersonen des
                    Gymnasiums Oberwil
                    <br />
                    <br />
                    Ich stehe gerne bei psychologischen Fragestellungen und
                    persönlichen Anliegen mit der BeRAtungsstelle Vor Ort
                    (BRAVO) zur Verfügung
                    <Liste
                        points={[
                            "Am Montag von 10:15 bis 16:00 Uhr im Zimmer T2  007 am Gymnasium Oberwil",
                            "Kontakt: Olivia Manicolo (Psychologin und Psychotherapeutin)",
                            <Email>olivia.manicolo@sbl.ch</Email>,
                            "Alle Gespräche sind vertraulich, freiwillig und kostenlos.",
                        ]}
                    />
                    <br />
                    Das Angebot BRAVO ersetzt keine Psychotherapie. Bei
                    psychologischen und psychiatrischen Notfällen wenden Sie
                    sich bitte an den Notfall der Psychiatrie BL (Kinder und
                    Jugendliche: +41 61 553 55 55, Erwachsene: +41 61 553 56 56)
                    <SubTitle>flow - Coaching für Schüler:innen</SubTitle>
                    Möchten Sie wieder einmal richtig im Flow sein? Wollen Sie
                    herausfinden, was Ihnen Freude macht und was Ihnen Energie
                    gibt? Was zehrt an Ihren Kräften? Was überfordert Sie?
                    Brauchen Sie Unterstützung bei schwierigen Entscheidungen,
                    in Konflikten oder strengen Zeiten?
                    <br />
                    <br />
                    Melden Sie sich gerne per Mail und wir suchen einen
                    Zeitpunkt für ein Gespräch: barbara.vonwartburg@sbl.ch
                    <br />
                    <br />
                    Barbara von Wartburg (Coach, Lerncoach, LP für Spanisch und
                    Deutsch)
                </Article>
            </Container>
        </Frame>
    );
}

export function Extern() {
    return (
        <Frame>
            <Container>
                <Title>Externe Beratung</Title>
                <Article>
                    <SubTitle>Laufbahnberatung</SubTitle>
                    <SubSubTitle>
                        Laufbahnzentrum Pratteln Berufs-, Studien- und
                        Laufbahnberatung
                    </SubSubTitle>
                    Schlossstrasse 1 <br /> 4133 Pratteln <br /> Tel. 061 552 29
                    00
                    <br />
                    <Link>www.lbz.bl.ch</Link>
                    <SubSubTitle>Studienberatung Basel (Infothek)</SubSubTitle>
                    Steinengraben 5 <br />
                    4057 Basel <br />
                    Tel. 061 267 29 30 <br />
                    <SubSubTitle>
                        Berufswahlinformationen an der Schule
                    </SubSubTitle>
                    Berufswahlmappen und Informationen über Studienrichtungen in
                    der Mediothek
                    <SubTitle>Jugendberatung</SubTitle>
                    <SubSubTitle>
                        Anonyme Beratungen, ohne persönlichen Kontakt
                    </SubSubTitle>
                    <Bold>Die dargebotene Hand</Bold> Tel. 143
                    <br />
                    <Bold>Telefonhilfe für Kinder und Jugendliche</Bold> Tel.
                    147
                    <SubSubTitle>Beratung, mit Voranmeldung</SubSubTitle>
                    Schulpsychologischer Dienst Baselland <br />
                    Frau Christine Tschäppat <br />
                    Gorenmattstrasse 19 <br />
                    4102 Binningen <br />
                    Tel. 061 426 92 00 <br />
                    Fax 061 426 92 19 <br />
                    <Link>www.schulpsycholgie.bl.ch</Link>
                    <SubTitle>Beratung Kantonsspital Bruderholz</SubTitle>
                    <SubSubTitle>
                        Informationsangebot der Frauenklinik für Jugendliche ab
                        Oktober 2011
                    </SubSubTitle>
                    Die Frauenklinik bietet am Kantonsspital Bruderholz eine
                    offene Sprechstunde für Jugendliche an. Die Jugendlichen
                    müssen sich nicht voranmelden, sondern können einfach
                    "einlaufen". Es wird für Anonymität garantiert.
                    <SubSubTitle>HPV-Hotline</SubSubTitle>
                    (Informationen über Veränderungen am Gebärmutterhals,
                    Impfung) Ab sofort können die Jugendlichen unter dieser
                    Nummer jederzeit anrufen und Fragen über HPV und andere
                    Geschlechtskrankheiten stellen.
                    <br />
                    <br />
                    Tel: 061 436 22 70 <br />
                    E-Mail: <Email>frauenklinik@ksbh.ch</Email>
                    <br /> <br />
                    Es besteht auch die Möglichkeit, Fragen per E-Mail zu
                    stellen, über diese Adresse oder über die Website{" "}
                    <Link>www.firstlove.ch</Link>.
                    <br />
                    Diese Website wird professionell von einer Gynäkologin des
                    Kantonsspitals Luzern geführt.
                    <SubTitle>Gewaltberatung</SubTitle>
                    <SubSubTitle>Opferhilfe beider Basel</SubSubTitle>
                    Steinenring 53 <br />
                    4051 Basel <br />
                    Tel. 061 205 09 10 <br />
                    <Link>www.opferhilfe.bb.ch</Link>
                    <SubTitle>Suchtberatung</SubTitle>
                    <SubSubTitle>
                        Zentrum für Abhängigkeitserkrankungen
                    </SubSubTitle>
                    Psychiatrie Baselland <br />
                    Bienentalstrasse 7 <br />
                    4410 Liestal <br />
                    Tel 061 553 58 58 <br />
                    <Link alternate={"Psychiatrie Baselland"}>
                        https://www.pbl.ch/zuweisende/schwerpunkte-erwachsenenpsychiatrie/schwerpunkt-abhaengigkeitserkrankungen
                    </Link>
                    <SubSubTitle>Suchthilfe Region Basel Drop-In</SubSubTitle>
                    Mühlhauserstr. 113 <br />
                    4056 Basel <br />
                    <Link alternate={"Suchthilfe Region Basel"}>
                        https://www.suchthilfe.ch/fuer-betroffene/
                    </Link>
                    <SubSubTitle>
                        Zentrum für Abhängigkeitserkrankungen
                    </SubSubTitle>
                    Baselstr. 1 <br />
                    4153 Reinach <br />
                    Tel. 061 553 58 80 <br />
                    <Link
                        alternate={
                            "Ambulatorium Abhängigkeitserkrankungen Reinach"
                        }
                    >
                        https://www.pbl.ch/ambulatorium-abhaengigkeitserkrankungen-reinach
                    </Link>
                    <SubTitle>Weitere Beratungsstellen</SubTitle>
                    <SubSubTitle>AIDS-Hilfe beider Basel</SubSubTitle>
                    Clarastr. 4 <br />
                    4058 Basel <br />
                    Tel. 061 692 21 22 <br />
                    <Link>https://ahbb.ch/</Link>
                    <SubSubTitle>Poliklinik Frauenklinik Basel</SubSubTitle>
                    Spitalstr. 21 <br />
                    4056 Basel <br />
                    Tel. 061 265 93 93 <br />
                    <Link alternate={"Frauenklinik"}>
                        https://www.unispital-basel.ch/frauenklinik
                    </Link>
                    <SubSubTitle>
                        Ausbildungsbeiträge und Stipendien
                    </SubSubTitle>
                    Amt für Berufsbildung und Berufsberatung <br />
                    Rosenstrasse 25 <br />
                    4410 Liestal <br />
                    Tel. 061 552 28 80 <br />
                    <Link alternate={"Berufsbildung"}>
                        https://www.baselland.ch/politik-und-behorden/direktionen/bildungs-kultur-und-sportdirektion/bildung/sekundarstufe-ii/berufsbildung
                    </Link>
                </Article>
            </Container>
        </Frame>
    );
}

export function Blickfeld() {
    return (
        <Frame>
            <Container>
                <Title>Blickfeld</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/2/e/csm_Nr_43_af6585821c.jpg",
                    ]}
                >
                    Die Publikation blickfeld erscheint seit 2001 zweimal pro
                    Schuljahr, jeweils im Frühling und Herbst. Sie bietet einen
                    Rück- und Ausblick auf das Schulleben, berichtet über
                    aktuelle Entwicklungen und Projekte, beleuchtet
                    Veranstaltungen und porträtiert ausgewählte Personen aus der
                    Schüler- und Lehrerschaft. Zudem würdigt sie besondere
                    Erfolge in verschiedenen Disziplinen. Als Ersatz für den
                    traditionellen Jahresbericht wird blickfeld an Eltern,
                    Mitglieder des Fördervereins, Behörden sowie an Lehrpersonen
                    und interessierte Einzelpersonen verteilt.
                </ImageArticle>
            </Container>
        </Frame>
    );
}

export function Theater() {
    return (
        <Frame>
            <Container>
                <Title>Theatergruppe Gym Oberwil</Title>
                <Article>
                    Die Theatergruppe Gym Oberwil hat eine lange Tradition. Bis
                    2014 hat der Germanist und Regisseur Kaspar Geiger über 25
                    Jahre eine Theatertradition begründet und gepflegt, die
                    sogar überregional bekannt geworden ist. Diese wird seither
                    leicht modifiziert weitergeführt. Seit 2015 wird die
                    Theatergruppe Gym Oberwil als «Freifach Theater» von einer
                    kleinen Gruppe von Lehrkräften der Schule mit
                    Zusatzqualifikationen im Bereich Theater abwechselnd
                    geleitet. Die Gruppe besteht aus Patrick Deslarzes (Anglist
                    und Schauspieler), Martin Hahnemann (Schauspieler),
                    Marie-Louise Hauser (Schauspielerin), Hannes Veraguth
                    (Germanist und Regisseur) und Stefan Toth (Biologe und
                    Theaterschaffender in den Bereichen Produktionsleitung,
                    Evenetmanagment, Bühnentechnik). Das «Freifach Theater»
                    steht allen Jahrgängen und Abteilungen (Matur und FMS)
                    offen. Jedes Jahr realisieren die Schülerinnen und Schüler
                    entweder im Winter / Frühling oder im Spätsommer ein
                    Theaterprojekt und präsentieren die Aufführung an fünf
                    Abenden der Öffentlichkeit.
                    <br />
                    <br />
                    Die Qualität der Aufführungen ist seit Jahren sehr hoch und
                    wurde in der Vergangenheit verschiedentlich honoriert (2005:
                    Aufführung «Die Räuber» am Jugendtheatertreffen Berlin;
                    2008: Gewinner «Theateroskar» Schülertheatertreffen Zürich
                    mit «Orestie»; 2009 Final Schülertheatertreffen Zürich mit
                    «Viel Lärm um nichts»; 2019: Aufführung «Barbaren» am
                    Theatertreffen der Schweizer Gymnasien «SCHAU» in Zürich;
                    diverse gute Rezensionen regionaler Zeitungen). Dies ist
                    einerseits auf das enorme Engagement der Schülerinnen und
                    Schüler zurückzuführen, anderseits auf unser bewährtes
                    Konzept eines Kultur-Vermittlungsprojekts, durch welches in
                    den Produktionen der Theatergruppe Gym Oberwil hinter und
                    vor der Bühne stets professionelle Künstler:innen aus der
                    freien Szene mitarbeiten. So wird das Spiel der Schülerinnen
                    und Schüler in einen professionellen Rahmen gestellt, d.h.
                    es werden je nach Projekt z. Bsp. Kostüme, Maske,
                    Bühnenbild, Schauspielcoaching, Grafik, Lichtdesign, Musik
                    und / oder Tanz von professionellen, freischaffenden
                    Künstlern (mit)gestaltet resp. geleitet. Die Erfahrung
                    zeigt, dass durch Theaterprojekte, wie sie am Gymnasium
                    Oberwil stattfinden können, alle Beteiligten ganz
                    Wesentliches lernen und lebenslange positive Erinnerungen
                    mitnehmen. Für einige waren diese sogar wegweisend für ihre
                    Berufswahl – sie sind selbst Theaterschaffende geworden. Die
                    vielen Eindrücke und Erfahrungen, welche die Schülerinnen
                    und Schüler während der intensiven Probe- und
                    Aufführungszeit machen, geben der ganzen Gruppe zudem einen
                    besonderen Zusammenhalt. (Hannes Veraguth, 2023)
                </Article>
            </Container>
        </Frame>
    );
}

export function FMSTheater() {
    return (
        <Frame>
            <Container>
                <Title>Das FMS-Theaterprojekt</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/d/b/csm_2023_runter_auf_null_plakat_e99fd706b3.jpg",
                    ]}
                >
                    Im Rahmen der Projektarbeit entsteht seit Jahren an der FMS
                    Oberwil auch regelmässig ein grosses Theaterprojekt.
                    Innerhalb von kurzer Zeit wird dabei unter sachkundiger
                    Führung ein Theater auf die Beine gestellt. Die
                    Schüler*innen übernehmen dabei verschiedenste Aufgaben von
                    der Lichtsteuerung, der Erstellung der Requisiten und
                    Bühnenbildern hin zur musikalischen Begleitung und natürlich
                    auch dem eigentlichen Schauspielern. Das Projekt gipfelt
                    dann jeweils in mehreren öffentlichen Aufführungen zwischen
                    den Ski- und Frühjahresferien.
                </ImageArticle>
            </Container>
        </Frame>
    );
}

export function Kulturagenda() {
    return (
        <Frame>
            <Container>
                <Title>Kulturagenda</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/d/6/csm_Kulturagenda_jpeg_6a46c03a26.jpg",
                    ]}
                >
                    Die Kulturagenda listet alle kulturellen Events, welche am
                    Gymnasium Oberwil durchgeführt werden, auf. Jedes Semester
                    wird sie wieder neu veröffentlicht.
                    <SubTitle>Download der Kulturagenda</SubTitle>
                    <Link alternate={"Kulturagenda"} isPdf>
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/ka41_1_auf_1_Web.pdf
                    </Link>
                </ImageArticle>
            </Container>
        </Frame>
    );
}

export function NeuePavillonKonzerte() {
    return (
        <Frame>
            <Container>
                <Title>Neue Pavillon Konzerte</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/c/2/csm_neue_pavillon_konzerte_2024_25_97b1b34bd5.jpg",
                    ]}
                >
                    Die Neuen Pavillon Konzerte (seit 2019) sind eine exklusive,
                    nicht kommerzielle Konzertreihe in der akustisch
                    hervorragenden, an einen Pavillon erinnernden Aula des
                    Gymnasiums Oberwil. Der wun­derschöne neue Saal aus Holz
                    verfügt über eine ausgezeichnete Infrastruktur (u.a. einen
                    Konzertflü­gel Steinway D). Die Neuen Pavillon Konzerte
                    verstehen sich als Nachfolgerin der Ikarus Pavillon
                    Konzerte, die vom verstorbenen Klarinettisten Urs Brügger,
                    Lehrbeauftragter am Gymnasium Ober­wil, im Expo-Pavillon
                    hinter dem Hauptgebäude organisiert worden sind. Ziel der
                    Konzertreihe ist es, der Bevölkerung im Leimental sowie den
                    Lernenden, Unterrichtenden und Mitarbeitenden des
                    Gym­nasiums einen hochwertigen Musikgenuss zu ermöglichen.
                    <br />
                    <br />
                    Es finden jeweils drei Konzerte pro Saison mit
                    unterschiedlichen Schwerpunkten statt, wobei die
                    Konzertreihe insbesondere dem Barock und der Musik des 20.
                    und 21. Jahrhunderts verpflichtet ist. Sehr gerne bieten wir
                    jungen Musikerinnen und Musikern eine Plattform, um sich
                    einem interessierten Publikum präsentieren zu können. In der
                    Saison 22/23 fand ein viel beachtetes und rege besuchtes
                    Barockfestival statt, in der Saison 23/24 ging ein
                    Klavierfestival mit moderner und zeitgenössischer Musik über
                    die Bühne und die Saison 24/25 ist fast ganz den Streichern
                    gewidmet, die sich der Musik von Johann Sebastian Bach bis
                    zum 21. Jahrhundert annehmen.
                    <br />
                    <br />
                    Die Besetzung der Neuen Pavillon Konzerte ist jeweils sehr
                    hochkarätig. Zu Gast waren bisher Beat Schönegg (Klavier und
                    Komposition), Laura Schmid (Blockflöte) und das Ensemble
                    d’Istinto, Leila Schayegh (Violine) und Martin Zimmermann
                    (Cembalo), Béatrice Chrysomalis (Violine), Orestis
                    Chrysomalis (Klavier und Komposition) und Erich Plüss
                    (Violoncello und Komposition), Egidius Streiff (Violine) und
                    Werner Bärtschi (Klavier und Komposition), Christophe Coin
                    (Violoncello) und Martin Zimmermann (Cembalo), Maurice
                    Steger (Blockflöte) und Sebastian Wienand (Cembalo), das
                    Omen-Quartett (Laura Schmid, Céline Pasche, Claudius Kamp,
                    Max Volbers), das Klavierduo Huber Thomet sowie Schülerinnen
                    und Schüler der Talentförderung Baselland und Basel-Stadt.
                    <br />
                    <br />
                    Finanziell unterstützt wird die Konzertreihe von der
                    Raiffeisenbank Leimental, der Gemeinde Oberwil sowie von
                    Kulturelles.BL. Das Gymnasium stellt den wunderbaren Saal
                    und die Infrastruktur zur Ver­fügung, der Förderverein des
                    Gymnasiums spricht sporadisch eine Defizitgarantie.
                    Organisiert wer­den die Konzerte von Markus Zürcher
                    (Künstlerische Leitung) und Beat Wyss (Administrative
                    Lei­tung), beide Lehrer am Gymnasium Oberwil. Die Flyer und
                    Plakate gestaltet Judith Eckert.
                    <br />
                    <br />
                    Der „Paganini der Blockflöte“ Maurice Steger im November
                    2022 über die Neuen Pavillon Konzerte:
                    <br />
                    <br />
                    Was da passiert ist einzigartig und hat einen
                    Qualitätsanspruch der Extraklasse. Vom bereits
                    ange­freundeten Publikum über die hervorragende Akustik bis
                    zur ungezwungenen Atmosphäre, die dann eben grosse
                    Konzentration ermöglicht. Publikum Bravi!
                    <SubTitle>Die Konzerte 2024/25</SubTitle>
                    <Liste
                        points={[
                            "Sonntag, 03.11.2024 um 17.00 Uhr: Duo Poltéra Hoppe",
                            "Sonntag, 24.11.2024 um 17.00 Uhr: Egidius Streiff",
                            "Sonntag, 30.3.2025 um 17.00 Uhr: Norea Trio",
                        ]}
                    />
                </ImageArticle>
            </Container>
        </Frame>
    );
}

export function Sportliches() {
    return (
        <Frame>
            <Container>
                <Title>Sportliches am Gym Oberwil</Title>
                <Article>
                    Verschiedene Auswahlteams («Selections») vertreten unsere
                    Schule (Gym und FMS) an kantonalen und schweizerischen
                    Wettkämpfen. Die Teams werden jeweils ca. 2 Monate vor den
                    Wettkämpfen zusammengestellt und trainieren nach Möglichkeit
                    ein paar Mal gemeinsam.
                    <SubTitle>Spieler*innen</SubTitle>
                    Für die Teams bevorzugt berücksichtigt werden interessierte
                    Schülerinnen und Schüler, die das Spiel/die Sportart
                    wettkampfmässig betreiben. Es kommen aber auch solche in
                    Betracht, die sich ohne Vereinszugehörigkeit über besondere
                    Leistungen ausweisen können. Bei den Sportspielen ist in der
                    Regel der erste Wettkampf ein kantonales Turnier. Das
                    Siegerteam dieses Turniers gewinnt die Teilnahmeberechtigung
                    an den Schweizer Mittelschulmeisterschaften.
                    <br /> Auf den Steckbriefen in der Vitrine im der Turnhalle
                    erfahren Sie mehr über die Besonderheiten der einzelnen
                    Selections. Setzen Sie sich mit den Verantwortlichen für
                    Training und Coaching in Verbindung und nehmen Sie an den
                    Probetrainings teil!
                </Article>
            </Container>
        </Frame>
    );
}
export function Fussball() {
    return (
        <Frame>
            <Container>
                <Title>Fussball (Damen und Herren)</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/e/7/csm_Fussball_Herren_2023_a9ac70c25d.jpg",
                    ]}
                >
                    <SubTitle>Training und Coaching</SubTitle>
                    Damen: Lea Maestrini <Email>lea.maestrini@sbl.ch</Email> /
                    Daniela Bui <Email>daniela.bui@sbl.ch</Email>
                    <br />
                    Herren: Res Brunner <Email>andreas.brunner@sbl.ch</Email>
                    <SubTitle>
                        Zeitpunkt der Basellandschaftlichen
                        Mittelschulmeisterschaften
                    </SubTitle>
                    Damen: Jeweils im Januar (Halle), jeweils im Mai (Rasen){" "}
                    <br />
                    Herren: Jeweils im Januar (Halle), jeweils im April (Rasen)
                    <SubTitle>
                        Zeitpunkt der Schweizerischen Mittelschulmeisterschaften
                    </SubTitle>
                    Falls die Qualifikation erfolgreich absolviert wurde: Die
                    Durchführung einer SMSM ist noch nicht gesichert. ewus
                    rjdghfeugrhfveqgh vrrgjhuqverghuvredk iubherjbh
                    <SubTitle>
                        Anzahl der Trainings vor den Wettkämpfen
                    </SubTitle>
                    ca. 2<SubTitle>Teamgrösse</SubTitle>
                    ca. 10 SpielerInnen
                    <SubTitle>
                        Voraussetzungen für Interessierte Schüler/innen
                    </SubTitle>
                    Damen: Juniorinnen B oder höhere Liga, Schülerinnen mit
                    gutem Spielverständnis und sicherer Balltechnik, Freude am
                    Fussball <br /> Herren: Team wird jedes Jahr für das
                    Rasenturnier im Mai neu zusammengestellt.
                </ImageArticle>
            </Container>
        </Frame>
    );
}

export function Gymnasiade() {
    return (
        <Frame>
            <Container>
                <Title>Gymnasiade</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/2/1/csm_2023-09-19_12-58-38-Pano_b6520dcb1a.jpg",
                        "https://www.gymoberwil.ch/fileadmin/_processed_/4/5/csm_2023-09-19_12-31-52-2_d52e59311e.jpg",
                        "https://www.gymoberwil.ch/fileadmin/_processed_/3/4/csm_2022-09-20_12-24-17-2_d7d1000bc1.jpg",
                    ]}
                >
                    Jedes Jahr findet an einem (normalerweise sonnigen) Dienstag
                    im September im Stadion Schützenmatte die Gymnasiade statt.
                    Es handelt sich um einen Gruppenwettkampf in Leichtathletik,
                    bei welchem das stärkste Gymnasium gesucht wird.
                    <SubTitle>In folgenden Disziplinen wird gestartet</SubTitle>
                    Frauen: 100 m, 4x100 m, Schwedenstaffel, Weisprung,
                    Hochsprung, Kugelstossen, Speerwurf, 2000 m <br />
                    Herren: 100 m, 4x100 m, Schwedenstaffel, Weisprung,
                    Hochsprung, Kugelstossen, Speerwurf, 3000 m <br />
                    <br />
                    Oberwil stellt jedes Jahr ein Frauen- und ein Männerteam.
                    <SubTitle>Weitere Infos</SubTitle>
                    Zur Gymnasiade: <Link>www.gymnasiade.ch</Link> <br />
                    Fotos:{" "}
                    <Link>
                        https://www.picdrop.com/marcokunz/MPdWkM3EwX
                    </Link>{" "}
                    <br /> <br />
                    Möchten Sie im nächsten Jahr auch dabei sein und das Gym
                    vertreten? Melden Sie sich bitte unverbindlich bei Frau A.
                    Kohler <Email>andrea.kohler@sbl.ch</Email> oder Herr M. Kunz{" "}
                    <Email>marco.kunz@sbl.ch</Email>
                </ImageArticle>
            </Container>
        </Frame>
    );
}
export function Schneesportlager() {
    return (
        <Frame>
            <Container>
                <Title>Schneesportlager</Title>
                <Article>
                    Die Fachschaft Sport organisiert jedes Jahr in der 1. Woche
                    der Fasnachtsferien ein SnowCamp. <br /> In diesem
                    freiwilligen Schullager steht der Schneesport im Zentrum.
                    Den Tag geniessen Sie in Kleingruppen auf den Pisten des
                    jeweiligen Skigebietes und profitieren von den wertvollen
                    Tipps der ausgebildeten Jugend & Sportleiterinnen und
                    -leiter, welche zu einem Grossteil der Fachschaft Sport
                    entstammen. <br />
                    <br /> Jeweils um die Herbstferien herum wird via Aushang
                    über den Lagerort, die Lagerkosten und das Anmeldeprozedere
                    informiert. Aber warten Sie mit Ihrer Anmeldung nicht zu
                    lange. Das SnowCamp ist in der Regel ziemlich rasch
                    ausgebucht.
                </Article>
            </Container>
        </Frame>
    );
}
export function Tenero() {
    return (
        <Frame>
            <Container>
                <Title>Sportwoche in Tenero</Title>
                <Article>
                    Kurz vor den Sommerferien findet jedes Jahr in Tenero das
                    Sportlager des Gymasiums Oberwil statt. Seit 2017 verbringen
                    die ersten Klassen der Maturabteilung und die zweiten
                    Klassen der FMS-Abteilung jeweils gemeinsam eine sportlich
                    herausfordernde und spannende Woche am Lago Maggiore im
                    «Centro Sportivo Tenero». <br />
                    <br />
                    Aus ca. 30 Sportarten wird eine Schwerpunktsportart gewählt
                    und mehrere Schnuppersportarten. Im Schwerpunktsport bietet
                    sich die Möglichkeit, eine Sportart vertieft kennenzulernen
                    und auch persönliche Fortschritte zu erzielen. Mit den
                    Schnuppersportarten können verschiedene Interessen abgedeckt
                    und viele neue Sportarten ausprobiert und entdeckt werden.{" "}
                    <br />
                    <br />
                    Anreise ist jeweils am Montag am Morgen, die Rückreise wird
                    am Freitag am Nachmittag angetreten. Geschlafen wird in
                    grossen, festinstallierten Zelten, welche jeweils ca. 20
                    Personen fassen. Die Verpflegung wird durch das Centro
                    organisiert.
                </Article>
            </Container>
        </Frame>
    );
}
export function Unihockey() {
    return (
        <Frame>
            <Container>
                <Title>Unihockey (Damen und Herren)</Title>
                <Article>
                    Damen: Lia Cadisch <Email>lia.cadisch@sbl.ch</Email> <br />
                    Herren: Patrick Bänteli{" "}
                    <Email>patrick.baenteli@sbl.ch</Email>
                    <SubTitle>
                        Zeitpunkt der Basellandschaftlichen
                        Mittelschulmeisterschaften
                    </SubTitle>
                    Jeweils im Januar
                    <SubTitle>
                        Zeitpunkt der Schweizerischen Mittelschulmeisterschaften
                    </SubTitle>
                    Falls die Qualifikation erfolgreich absolviert wurde:
                    Jeweils im März/April
                    <SubTitle>
                        Anzahl der Trainings vor den Wettkämpfen
                    </SubTitle>
                    ca. 2<SubTitle>Teamgrösse</SubTitle>
                    ca. 10
                    <SubTitle>
                        Voraussetzungen für interessierte Schüler*innen
                    </SubTitle>
                    Junioren/innen U14/U17 oder höhere Ligen, ehemalige
                    Spieler*innen etc...
                </Article>
            </Container>
        </Frame>
    );
}
export function Volleyball() {
    return (
        <Frame>
            <Container>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/6/2/csm_volleyteam_2023_260579d3d8.jpg",
                        "https://www.gymoberwil.ch/fileadmin/_processed_/9/2/csm_volleyball_herren_2023_8406da37b9.jpg",
                    ]}
                >
                    <Title>Volleyball (Damen und Herren)</Title>
                    <Article>
                        <SubTitle>Training und Coaching</SubTitle>
                        Damen: Daniela Bui <Email>
                            daniela.bui@sbl.ch
                        </Email>{" "}
                        <br />
                        Herren: Christoph Wechsler{" "}
                        <Email>christoph.wechsler@sbl.ch</Email>
                        <SubTitle>
                            Zeitpunkt der Basellandschaftlichen
                            Mittelschulmeisterschaften
                        </SubTitle>
                        Jeweils im Februar
                        <Email>
                            Zeitpunkt der Schweizerischen
                            Mittelschulmeisterschaften
                        </Email>
                        Falls die Qualifikation erfolgreich absolviert wurde:
                        Jeweils im März
                        <SubTitle>
                            Anzahl der Trainings vor den Wettkämpfen
                        </SubTitle>
                        ca. 2<SubTitle>Teamgrösse</SubTitle>: ca. 9
                        <SubTitle>
                            Voraussetzungen für Interessierte Schüler/innen
                        </SubTitle>
                        Teilnahme an offizieller Meisterschaft / besondere
                        Begabung im Volleyball
                    </Article>
                </ImageArticle>
            </Container>
        </Frame>
    );
}
export function Mediothek() {
    return (
        <Frame>
            <Container>
                <Title>Mediothek</Title>
                <Article>
                    Die Mediothek ist für Schülerinnen und Schüler, Lehrpersonen
                    und weitere Mitarbeitende{" "}
                    <Bold>
                        das zentrale Informationszentrum des Gymnasiums.
                    </Bold>{" "}
                    Vor Ort steht eine grosse Auswahl an unterschiedlichen
                    Medien zur Verfügung und es können Recherchen in auswärtigen
                    Katalogen und Datenbanken durchgeführt werden. Sie ist
                    ausserdem ein Raum zum Arbeiten und Lesen, für Ausstellungen
                    von Matur-, Fachmatur- und Projektarbeiten sowie ein Ort des
                    Rückzuges während eines langen Arbeitstages. Besonders
                    häufig werden der Computer- und Fernsehraum genutzt, sei es
                    für den Unterricht oder zum Zeitvertreib.
                    <br />
                    <br />
                    Frau Erika Bättig und Frau Sarah Döbeli helfen Ihnen gerne
                    bei der Suche nach Medien für Vorträge oder schriftliche
                    Arbeiten und auch zu Themen von persönlichem Interesse.
                    <br />
                    <br />
                    Auch Schulungen zur Recherche in den Online-Katalogen sind
                    auf Anfrage jederzeit möglich.
                    <SubTitle>Mediothek im Detail</SubTitle>
                    Unser Medienbestand umfasst ca. 35'000 Medien, die im{" "}
                    <Link alternate={"Online-Katalog"}>
                        https://medio-gymow.sbl.ch/
                    </Link>{" "}
                    ausgewiesen sind.
                    <br />
                    <Liste
                        points={[
                            "Sachbücher",
                            "deutsche, französische, italienische, spanische und englische Belletristik",
                            "nanoo.tv (Lehrerschaft)",
                            "Filme auf DVD",
                            "Hörbücher",
                            "Musik CD",
                            "Comic",
                            "Zeitungen und Zeitschriften",
                            "Berufswahlmappen",
                            "Maturaarbeiten und ausgewählte FMS-Abschlussarbeiten",
                            "Fotokameras, Laptops, Ton-Aufnahmegeräte, Podcast Equipment",
                            "Diverse Spiele",
                        ]}
                    />
                    <SubTitle>Recherche im Detail</SubTitle>
                    Recherchierwebseite für Berufs- und Mittelschulbibliotheken
                    der Schweiz: <Link>www.digithek.ch</Link>.
                    <br />
                    Lizenzierte Datenbanken, welche Sie via Schulnetz kostenlos
                    nutzen können: <br />
                    <Liste
                        points={[
                            "Brockhaus",
                            "Keystone (Fotoarchiv, Bildarchiv, Grafiken)",
                            "KLL (Kindler Literatur Lexikon) via Munzinger",
                            "Munzinger Archiv (Personen, Länder, Chronik)",
                            "Römpp online (Chemie, Biologie, Umwelt)",
                            "Spektrum der Wissenschaft",
                            "Spektrum Die Woche",
                            "Swissdox (Medienarchiv)",
                        ]}
                    />
                    Viele andere Datenbanken ohne Lizenz sind auf Digithek
                    vorhanden. Für weitere Recherchen in Bibliothekskatalogen
                    anderer Institute: <Link>https://swisscovery.slsp.ch</Link>
                    <SubTitle>Öffnungszeiten</SubTitle>
                    Montag bis Freitag: 07.45 - 16.30 Uhr <br />
                    Samstag: geschlossen
                    <br />
                    <br />
                    Tel. 061 552 18 44
                    <br />
                    Mediothek: <Email>mediothek.gymow@sbl.ch</Email>
                </Article>
            </Container>
        </Frame>
    );
}
export function CucinaCollinare() {
    return (
        <Frame>
            <Container>
                <Title>Cucina Collinare</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/9/c/csm_Cucina_Collinare_866518d853.jpg",
                        "https://www.gymoberwil.ch/fileadmin/_processed_/9/4/csm_esb_logo_1d3308f031.jpg",
                    ]}
                >
                    <SubTitle>Unser Angebot</SubTitle>
                    Die Cucina lässt seinen Kund:innen in der
                    abwechslungsreichen, saisonal-regionalen Küche die Wahl, so
                    dass unser Angebot von vegetarischer Kost über Mahlzeiten
                    mit Fleisch oder Fisch bis hin zu trendigem, jedoch
                    hausgemachtem Fastfood reicht. Wir leisten damit einen
                    Beitrag zu einer gesundheitsbewussten Ernährung, gehen aber
                    auch offen auf die Wünsche der Schüler:innen sowie auf
                    diejenigen des Lehrkörpers ein. Täglich wechselnd bieten wir
                    ein vegetarisches, ein Fleisch-/Fischmenu und ein
                    Pastagericht an. Zusätzlich stehen frische, knackige Salate
                    vom Buffet, kreative Sandwiches, Schnitzelburger, Souvlaki,
                    Hamburger, Pizza, Muffins, Schoggiweggli, warme und kalte
                    Kaffeegetränke, Softdrinks sowie eine Auswahl an
                    Kioskartikeln für unsere Gäste bereit.
                    <SubTitle>Menuplanung</SubTitle>
                    <Link alternate={"Menüplan vom 27.01. - 31.01.2025"}>
                        https://www.gymoberwil.ch/fileadmin/sources/downloads/schulleben/cantina/woche_05.pdf
                    </Link>{" "}
                    <br />
                    <Link alternate={"Menüplan vom 20.01. - 24.01.2025"}>
                        https://www.gymoberwil.ch/fileadmin/sources/downloads/schulleben/cantina/woche_04.pdf
                    </Link>
                    <br />
                    <SubTitle>Unsere Preise</SubTitle>
                    <Link alternate={"Preisliste zum Downloaden"}>
                        https://www.gymoberwil.ch/fileadmin/sources/downloads/schulleben/cantina/Preisliste_Cucina_Collinare.pdf
                    </Link>
                    <SubTitle>Unser Träger</SubTitle>
                    Die Cucina ist ein Betrieb des ESB in Liestal{"  "}
                    <Link>https://www.esb-bl.ch/</Link>, der professionell
                    Menschen in schwierigen Lebenssituationen im Wohnen, in der
                    Freizeit, bei der Arbeit und im sozialen Alltag begleitet.
                    <SubTitle>Unsere Öffnungszeiten</SubTitle>
                    Montag bis Freitag: 07:30 - 15:30 Uhr <br />
                    Mittagessen: 11:30 - 13:30 Uhr
                    <SubTitle>Telefon</SubTitle>
                    +41 61 965 28 99
                </ImageArticle>
            </Container>
        </Frame>
    );
}
export function Foerderverein() {
    return (
        <Frame>
            <Container>
                <Title>Förderverein</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/sources/downloads/schulleben/foerderverein/F%C3%B6rderverein_jpeg.JPG",
                    ]}
                >
                    Sein Ziel ist die Förderung der Zusammengehörigkeit aller am
                    Gymnasium Oberwil interessierten Personen, insbesondere
                    seiner ehemaligen Schüler/innen und Lehrer/innen. <br />
                    <br /> Der Förderverein kann:{" "}
                    <Liste
                        points={[
                            "Projekte und Initiativen des Gymnasium Oberwil ideell und finanziell unterstützen",
                            "an Veranstaltungen des Gymnasium Oberwil mitwirken",
                            "zur Berufs- und Studienberatung beitragen",
                            "einzelnen Schüler/innen materielle Hilfe leisten",
                            "die Anliegen der Schule in der Öffentlichkeit unterstützen",
                        ]}
                    />{" "}
                    <br />
                    Der Verein wurde am 6. September 2005 gegründet. Die ersten
                    Mitgliederversammlung haben am 29. März 2006 und am 21. März
                    2007 stattgefunden. <br /> Kontakt:{" "}
                    <Email>sekretariat.gymow@sbl.ch</Email>
                    <SubTitle>Vorstand</SubTitle>
                    <SubSubTitle>Präsident</SubSubTitle>
                    Stephan Auer
                    <SubSubTitle>Vizepräsidentin</SubSubTitle>
                    Monika Lichtin
                    <SubSubTitle>Kassier</SubSubTitle>
                    Oliver Balmer
                    <SubSubTitle>Kassier</SubSubTitle>
                    Klaus Killenberger
                    <br />
                    Jonas Zimmermann
                    <SubSubTitle>Beisitz</SubSubTitle>
                    Oliver Balmer <br />
                    Philipp Bollinger <br />
                    Philipp Jordi <br />
                    Marc Rohner <br />
                    Hannes Veraguth <br />
                    <SubTitle>Dokumente</SubTitle>
                    <Link isPdf alternate={"Beitrittserklärung"}>
                        https://www.gymoberwil.ch/fileadmin/sources/downloads/schulleben/foerderverein/beitrittserkl%C3%A4rung_f%C3%B6rderverein.pdf
                    </Link>{" "}
                    <br />
                    <Link isPdf alternate={"Statuten des Fördervereins"}>
                        https://www.gymoberwil.ch/fileadmin/sources/downloads/schulleben/foerderverein/statuten_2015_09_09.pdf
                    </Link>
                    <br />
                    <Link alternate={"Vorlage Einzahlungsschein"} isPdf>
                        https://www.gymoberwil.ch/fileadmin/sources/downloads/schulleben/foerderverein/jpeg_esr.JPG
                    </Link>
                </ImageArticle>
            </Container>
        </Frame>
    );
}
