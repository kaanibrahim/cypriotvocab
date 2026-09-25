// FOR TESTING
function displayText(text){
    const para = document.createElement("p");
    para.innerHTML = text;
    document.getElementById("results").appendChild(para);
}

// LIST OF WORD PAIRS
// Example words
// words = [["apple", "elma"], ["book", "kitap"], ["car", "araba"], ["dog", "köpek"], ["house", "ev"], ["water", "su"], ["food", "yemek"], ["school", "okul"]];

/*
words = [{
    cypriot: "τραφικέϊτο",
    turkish: "Araç sinyali; yön göstergesi",
    greek: "Φλας αυτοκινήτου; δείκτης πορείας",
    english: "Indicator; turn signal on a vehicle"
}, {
    cypriot: "παγκέττον",
    turkish: "Emniyet şeridi",
    greek: "Λωρίδα έκτακτης ανάγκης",
    english: "Hard shoulder"
}, {
    cypriot: "Πατίχα",
    turkish: "Karpuz",
    greek: "Καρπούζι",
    english: "Watermelon"
}, {
    cypriot: "Çangar suyu",
    turkish: "Soğumuş ya da kahvesi az konulmuş kahve",
    greek: "Κρύος ή πολύ αραιός καφές",
    english: "Cold or weak coffee"
}]
*/

words = [{
    cypriot: "τραφικέϊτο",
    turkish: "Araç sinyali; yön göstergesi",
    greek: "Φλας αυτοκινήτου; δείκτης πορείας",
    english: "Indicator; turn signal on a vehicle"
}, {
    cypriot: "παγκέττον",
    turkish: "Emniyet şeridi",
    greek: "Λωρίδα έκτακτης ανάγκης",
    english: "Hard shoulder"
}, {
    cypriot: "Πατίχα",
    turkish: "Karpuz",
    greek: "Καρπούζι",
    english: "Watermelon"
}, {
    cypriot: "Çangar suyu",
    turkish: "Soğumuş ya da kahvesi az konulmuş kahve",
    greek: "Κρύος ή πολύ αραιός καφές",
    english: "Cold or weak coffee"
}, {
    cypriot: "Sardalya",
    turkish: "Konservesi ve tuzlaması yapılan, gümüş renginde küçük bir balık; sardalya",
    greek: "Μικρό ασημένιο ψάρι που γίνεται κονσέρβα ή παστό· σαρδέλα",
    english: "Sardine; a small silver fish often canned or salted"
}, {
    cypriot: "Çardella",
    turkish: "Konservesi ve tuzlaması yapılan, gümüş renginde küçük bir balık; sardalya",
    greek: "Μικρό ασημένιο ψάρι που γίνεται κονσέρβα ή παστό· σαρδέλα",
    english: "Sardine; a small silver fish often canned or salted"
}, {
    cypriot: "Gabi",
    turkish: "Kıbrıslı erkek için kullanılan olumsuz anlamlı ifade",
    greek: "Αρνητικός χαρακτηρισμός για Κύπριο άντρα",
    english: "Negative term used for a Cypriot man"
}, {
    cypriot: "Yedi garnını s*keyim",
    turkish: "Yedi sülaleye yönelik çok ağır küfür",
    greek: "Πολύ βαριά βρισιά προς τις προηγούμενες γενιές κάποιου",
    english: "Very vulgar curse aimed at someone’s ancestry"
}, {
    cypriot: "Götüğünün rokkası",
    turkish: "Kaba argo ifade; kişiye yönelik aşağılayıcı söz",
    greek: "Χοντρή αργκό έκφραση· προσβλητικός χαρακτηρισμός",
    english: "Rude slang insult; offensive expression"
}, {
    cypriot: "Götünün iç lastiği",
    turkish: "Kaba argo ifade; kişiye yönelik aşağılayıcı söz",
    greek: "Χοντρή αργκό έκφραση· προσβλητικός χαρακτηρισμός",
    english: "Rude slang insult; offensive expression"
}, {
    cypriot: "Anağın rokkası",
    turkish: "Anneye yönelik çok kaba argo küfür",
    greek: "Πολύ χοντρή βρισιά που αναφέρεται στη μητέρα κάποιου",
    english: "Very rude vulgar insult referring to someone’s mother"
}, {
    cypriot: "Kemiklik",
    turkish: "Tekmelik; futbolda kaval kemiğini koruyan ekipman",
    greek: "Επικαλαμίδα· προστατευτικό ποδιού στο ποδόσφαιρο",
    english: "Shin guard; football leg protector"
}, {
    cypriot: "Uyuku",
    turkish: "Uyku; uykun/uykum/uykusu anlamında kullanılan biçim",
    greek: "Ύπνος· τύπος που χρησιμοποιείται για «ο ύπνος σου/μου/του»",
    english: "Sleep; form used for your/my/his or her sleep"
}, {
    cypriot: "Eytimim",
    turkish: "Kendi eğitimim",
    greek: "Η δική μου εκπαίδευση",
    english: "My own education"
}, {
    cypriot: "Genmli",
    turkish: "İskemle; sandalye",
    greek: "Καρέκλα",
    english: "Chair"
}, {
    cypriot: "Bayda dakma",
    turkish: "Çelme Atmak",
    greek: "τρικλοποδώ",
    english: "To trip someone"
}, {
    cypriot: "ρε/ρα",
    turkish: "Birine samimi şekilde seslenirken kullanılan ifade; 'dostum', 'be', 'ya' gibi. Günlük konuşmada ara söz olarak da çok yaygındır",
    greek: "Προσφώνηση σε οικείο ύφος, παρόμοια με το «ρε/ρα». Χρησιμοποιείται και πολύ συχνά ως επιφώνημα σε καθημερινές προτάσεις",
    english: "Casual form of address, similar to 'dude', 'mate', or 'hey'. Also very commonly used as an interjection in everyday speech"
},
{
    cypriot: "βρε/βρα",
    turkish: "Birine samimi şekilde seslenirken kullanılan ifade; 'dostum', 'be', 'ya' gibi. Günlük konuşmada ara söz olarak da çok yaygındır",
    greek: "Προσφώνηση σε οικείο ύφος, παρόμοια με το «ρε/ρα». Χρησιμοποιείται και πολύ συχνά ως επιφώνημα σε καθημερινές προτάσεις",
    english: "Casual form of address, similar to 'dude', 'mate', or 'hey'. Also very commonly used as an interjection in everyday speech"
},
{
    cypriot: "ωρέ/ωρή",
    turkish: "Birine samimi şekilde seslenirken kullanılan ifade; 'dostum', 'be', 'ya' gibi. Günlük konuşmada ara söz olarak da çok yaygındır",
    greek: "Προσφώνηση σε οικείο ύφος, παρόμοια με το «ρε/ρα». Χρησιμοποιείται και πολύ συχνά ως επιφώνημα σε καθημερινές προτάσεις",
    english: "Casual form of address, similar to 'dude', 'mate', or 'hey'. Also very commonly used as an interjection in everyday speech"
},
{
    cypriot: "σιόρ",
    turkish: "Birine seslenirken veya cümle içinde ara söz olarak kullanılan ifade; genellikle sıkıntı, bıkkınlık veya sinir ifade eder",
    greek: "Προσφώνηση ή επιφώνημα που χρησιμοποιείται συχνά σε στιγμές εκνευρισμού ή απογοήτευσης",
    english: "Casual address or interjection, usually used in frustration or annoyance"
},
{
    cypriot: "μάστρε",
    turkish: "Usta, müzisyen, zanaatkâr veya otorite sahibi birine hitap ederken kullanılan saygılı/samimi seslenme",
    greek: "Προσφώνηση προς άτομο με κύρος, δεξιοτεχνία ή εξουσία, όπως τεχνίτη, μουσικό ή μάστορα",
    english: "Form of address for someone with authority or considerable skill, such as a craftsman, musician, or master"
},
{
    cypriot: "κουμπάρε",
    turkish: "Birine samimi şekilde seslenirken kullanılan ifade; 'dostum', 'kardeşim', 'be' gibi. Cümle içinde ara söz olarak da kullanılır",
    greek: "Οικεία προσφώνηση, παρόμοια με το «ρε» ή «φίλε». Χρησιμοποιείται και ως επιφώνημα σε καθημερινές προτάσεις",
    english: "Casual form of address, similar to 'mate', 'friend', or 'dude'. Also used as an interjection in everyday speech"
},
{
    cypriot: "εφέντη",
    turkish: "Erkeklere eski usul, saygılı şekilde hitap etmek için kullanılan ifade; Türkçedeki 'efendi' kullanımıyla benzerdir",
    greek: "Παλαιότερη σεβαστική προσφώνηση προς άντρες, συγγενής με τη λέξη «αφέντης»",
    english: "Old-fashioned respectful form of address for men, similar to Turkish 'efendi'"
},
{
    cypriot: "θκειέ/θκειά",
    turkish: "Yaşça büyük kişilere saygılı şekilde hitap etmek için kullanılan eski usul ifade; bazen kişiyi yaşlı ima ettiği için olumsuz karşılanabilir",
    greek: "Παλαιότερη προσφώνηση προς μεγαλύτερους ανθρώπους ως ένδειξη σεβασμού· μερικές φορές μπορεί να θεωρηθεί προσβλητική επειδή υπονοεί ηλικία",
    english: "Old-fashioned respectful address for older people; can sometimes be taken badly because it implies the person is old"
},
{
    cypriot: "Bayda dakma",
    turkish: "Çelme Atmak",
    greek: "τρικλοποδώ",
    english: "To trip someone"
}, {
    cypriot: "Zeflemek",
    turkish: "Dalga Geçmek; Alaya Almak",
    greek: "κοροϊδεύω",
    english: "To mock; to make fun of"
}, {
    cypriot: "Gurtarmak",
    turkish: "Yemeği Tabağa Dökmek",
    greek: "σερβίρω στο πιάτο",
    english: "To serve food onto a plate"
}, {
    cypriot: "Sipor",
    turkish: "Spor",
    greek: "σπορ",
    english: "Sport"
}, {
    cypriot: "Babira",
    turkish: "Ördek",
    greek: "πάπια",
    english: "Duck"
}, {
    cypriot: "Papira",
    turkish: "Ördek",
    greek: "πάπια",
    english: "Duck"
},
{
    cypriot: "πιθκιαύλιν",
    turkish: "Kamıştan Yapılmış Kaval",
    greek: "πιθκιαύλιν",
    english: "Reed flute"
}, {
    cypriot: "πλερώννω",
    turkish: "Ödemek",
    greek: "πληρώνω",
    english: "To pay"
}, {
    cypriot: "πκιερώννω",
    turkish: "Ödemek",
    greek: "πληρώνω",
    english: "To pay"
}, {
    cypriot: "πκιορώννω",
    turkish: "Ödemek",
    greek: "πληρώνω",
    english: "To pay"
}, {
    cypriot: "γλέπω",
    turkish: "Görmek; Bakmak",
    greek: "βλέπω",
    english: "To see; to look"
}, {
    cypriot: "αμπλέπω",
    turkish: "Görmek; Bakmak",
    greek: "βλέπω",
    english: "To see; to look"
}, {
    cypriot: "θωρώ",
    turkish: "Görmek; Bakmak",
    greek: "βλέπω",
    english: "To see; to look"
}, {
    cypriot: "πολοούμαι",
    turkish: "Cevap Vermek",
    greek: "απαντώ",
    english: "To respond"
}, {
    cypriot: "βαώννω",
    turkish: "Kapatmak",
    greek: "κλείνω",
    english: "To shut; to close"
}, {
    cypriot: "λαμπρόν",
    turkish: "Ateş",
    greek: "φωτιά",
    english: "Fire"
}, {
    cypriot: "αντακώννω",
    turkish: "Başlamak",
    greek: "αρχίζω",
    english: "To begin"
}, {
    cypriot: "τελεύκω",
    turkish: "Bitirmek",
    greek: "τελειώνω",
    english: "To finish"
}, {
    cypriot: "κλώννω",
    turkish: "Dönmek",
    greek: "γυρίζω",
    english: "To turn"
}, {
    cypriot: "Gogoşa",
    turkish: "Korku",
    greek: "Φόβος",
    english: "Fear"
}, {
    cypriot: "Öttürmek",
    turkish: "İshal olmak",
    greek: "Να έχεις διάρροια",
    english: "To have diarrhea"
}, {
    cypriot: "Öttürüg",
    turkish: "İshal",
    greek: "Διάρροια",
    english: "Diarrhea"
}, {
    cypriot: "Evey/Övey",
    turkish: "Üvey",
    greek: "θετός",
    english: "Step person"
}, {
    cypriot: "Eylen/Övlen/Üylen",
    turkish: "Öğlen",
    greek: "Μεσημέρι",
    english: "Noon"
}, {
    cypriot: "Övretmek",
    turkish: "Öğretmek",
    greek: "Να διδάσκω",
    english: "Τo teach"
}, {
    cypriot: "Övükle/Öyükle",
    turkish: "Seçmek, ayırmak",
    greek: "Επιλέγω, διαχωρίζω",
    english: "To select, to seperate"
}, {
    cypriot: "Öyün",
    turkish: "Zaman, yemek zamanı",
    greek: "Ώρα, ώρα για φαγητό",
    english: "Time, meal time"
}, {
    cypriot: "Özlenmek",
    turkish: "Yemeğin tam kıvamına gelmesi",
    greek: "Το φαγητό να φτάσει στο σωστό σημείο",
    english: "The food reaching the perfect consistency"
}, {
    cypriot: "Ebistad",
    turkish: "Ustabaşı",
    greek: " Επιστάτης",
    english: "Foreman"
}, {
    cypriot: "Efendi Eli",
    turkish: "Meryem Ana Eli Otu",
    greek: "Το ρόδο της Ιεριχούς",
    english: "Rose of Jericho"
}, {
    cypriot: "Efse",
    turkish: "Baf ve Limasol göçmenleri",
    greek: "Μετανάστες από την Πάφο και τη Λεμεσό",
    english: "Immigrants from Paphos and Limassol"
}, {
    cypriot: "Lokkaro",
    turkish: "Arsız, Aç gözlü",
    greek: " Λοκκαρός ",
    english: "Shameless, Greedy"
}, {
    cypriot: "Ebistad",
    turkish: "Ustabaşı",
    greek: " Επιστάτης",
    english: "Foreman"
}, {
    cypriot: "Efendi Eli",
    turkish: "Meryem Ana Eli Otu",
    greek: "Το ρόδο της Ιεριχούς",
    english: "Rose of Jericho"
}, {
    cypriot: "Efse",
    turkish: "Baf ve Limasol göçmenleri",
    greek: "Μετανάστες από την Πάφο και τη Λεμεσό",
    english: "Immigrants from Paphos and Limassol"
}, {
    cypriot: "Galamagi",
    turkish: "İçecek tüketiminde kullanılan pipet",
    greek: "Καλαμάκι",
    english: "Drinking straw"
}, {
    cypriot: "Σουσουνάριν",
    turkish: "Ses çıkaran çıngıraklı bebek oyuncağı",
    greek: "Κουδουνίστρα",
    english: "A baby toy that makes a rattling sound"
}, {
    cypriot: "Susunarin",
    turkish: "Ses çıkaran çıngıraklı bebek oyuncağı",
    greek: "Κουδουνίστρα",
    english: "A baby toy that makes a rattling sound"
}, {
    cypriot: "Millos",
    turkish: "Hafif Nemi Çekmiş; Hafif Islanmış",
    greek: "μιλλός",
    english: "Slightly damp; lightly moistened"
}, {
    cypriot: "Matsa",
    turkish: "Deste; Demet",
    greek: "μάτσα",
    english: "Bundle; bunch"
}, {
    cypriot: "İsgemli",
    turkish: "Hasır Sandalye",
    greek: "ισγέμλι",
    english: "Wicker chair; straw chair"
}, {
    cypriot: "Saravallagi",
    turkish: "Eskiden Kıbrıs’ta Üstü Açık Kamyonet Tarzı Otobüs",
    greek: "σαραβαλλάγι",
    english: "Open-top pickup-style buses (historically in Cyprus)",
}, {
    cypriot: "Mantin",
    turkish: "Kurdele",
    greek: "μαντίν",
    english: "Ribbon"
}, {
    cypriot: "Yetişir!",
    turkish: "Yeter! Yeter artık!",
    greek: "Φτάνει! Αρκετά!",
    english: "Enough! That’s enough!"
}, {
    cypriot: "Gara Yennar",
    turkish: "Kara Kış",
    greek: "Βαρύς Χειμώνας",
    english: "Harsh winter"
}, {
    cypriot: "Yennar",
    turkish: "Kış",
    greek: "Χειμώνας",
    english: "Winter"
},
{
    cypriot: "Tribba",
    turkish: "Tıpa",
    greek: "Τάπα",
    english: "Stopper, plug"
}, {
    cypriot: "Götünün Tribbası",
    turkish: "Saçma, Alakasız Mantık (Kaba İfade)",
    greek: "Ανοησία / Άσχετη Λογική (Χοντρή Έκφραση)",
    english: "Nonsense logic (rude expression)",
},
{
    cypriot: "Gaylolmak",
    turkish: "İkna Olmak",
    greek: "Πείθομαι",
    english: "To be convinced"
}, {
    cypriot: "Meymele mesmele",
    turkish: "Ağırdan Almak, Yavaş Yavaş",
    greek: "Σιγά-σιγά, Με Το Πάσο Μου",
    english: "Slowly; taking it easy"
}, {
    cypriot: "Demincek",
    turkish: "Az Önce",
    greek: "Μόλις Πριν",
    english: "Just now; a moment ago"
},
{
    cypriot: "Rubinet",
    turkish: "Vana",
    greek: "Βαλβίδα / Βάνα",
    english: "Valve; tap"
}, {
    cypriot: "Alaf",
    turkish: "Sıcak Rüzgâr",
    greek: "Ζεστός Άνεμος",
    english: "Hot wind"
},
{
    cypriot: "Çala padem",
    turkish: "Çağla Badem",
    greek: "Χλωρό Αμύγδαλο",
    english: "Green almond"
}, {
    cypriot: "Çala",
    turkish: "Çağla",
    greek: "Χλωρός (Άγουρος Καρπός)",
    english: "Unripe (green) fruit"
}, {
    cypriot: "Padem",
    turkish: "Badem",
    greek: "Αμύγδαλο",
    english: "Almond"
},
{
    cypriot: "Batiha",
    turkish: "Karpuz",
    greek: "Καρπούζι",
    english: "Watermelon"
}, {
    cypriot: "Battiha",
    turkish: "Karpuz",
    greek: "Καρπούζι",
    english: "Watermelon"
},
{
    cypriot: "Stillos",
    turkish: "Elektrik Direği; Börülce Direği",
    greek: "Στύλος (Ηλεκτρικός / Για Φασόλια)",
    english: "Pole (electric / for runner beans)",
}, {
    cypriot: "Cıncırak",
    turkish: "Salıncak",
    greek: "Κούνια",
    english: "Swing"
},
{
    cypriot: "Iskarta",
    turkish: "İşe Yaramaz",
    greek: "Άχρηστο",
    english: "Useless; scrap"
}, {
    cypriot: "Abajur",
    turkish: "Avize",
    greek: "Πολυέλαιος",
    english: "Chandelier"
},
{
    cypriot: "Abpos etmek",
    turkish: "Şaşırmak",
    greek: "Ξαφνιάζω",
    english: "To be surprised"
}, {
    cypriot: "Abohor",
    turkish: "Cihangir (Köy İsmi)",
    greek: "Τζιαχάνγκιρ (Όνομα Χωριού)",
    english: "Cihangir (village name)"
},
{
    cypriot: "Acebam",
    turkish: "Acaba",
    greek: "Άραγε",
    english: "I wonder; perhaps"
}, {
    cypriot: "Acebamda",
    turkish: "Acaba Da",
    greek: "Άραγε Και",
    english: "I wonder, too; perhaps as well"
},
{
    cypriot: "Aculya",
    turkish: "Lapsana Çiçeği",
    greek: "Λαψάνα (Φυτό)",
    english: "Nipplewort (Lapsana plant)"
},
{
    cypriot: "Afalık yapmak",
    turkish: "Erkeklenmek; Sertleşmek",
    greek: "Το Παίζω Μάγκας",
    english: "To act tough; to act macho"
}, {
    cypriot: "Afangya",
    turkish: "Gaziköy (Köy İsmi)",
    greek: "Αφανγκιά (Όνομα Χωριού)",
    english: "Gaziköy (village name)"
},
{
    cypriot: "Aftaginido",
    turkish: "Araba",
    greek: "Αυτοκίνητο",
    english: "Car"
}, {
    cypriot: "Agsona",
    turkish: "Dingil",
    greek: "Άξονας",
    english: "Axle"
},
{
    cypriot: "Akran",
    turkish: "Yaşıt",
    greek: "Συνομήλικος",
    english: "Peer; same age"
}, {
    cypriot: "Aksona gardan",
    turkish: "Aks; Şaft",
    greek: "Άξονας; Άτρακτος",
    english: "Axle; driveshaft"
},
{
    cypriot: "Alizovra",
    turkish: "Güneş Yılanı (Yılan Türü)",
    greek: "Ηλιοφίδι (Είδος Φιδιού)",
    english: "Sun snake (a snake species)"
}, {
    cypriot: "Alugundi",
    turkish: "Vesvese",
    greek: "Αδικαιολόγητη Έγνοια",
    english: "Misgiving; anxiety"
},
{
    cypriot: "Ambelibulya",
    turkish: "Pulya (Baykuş)",
    greek: "Κουκουβάγια",
    english: "Owl"
}, {
    cypriot: "Amyanto",
    turkish: "Beyaz Asbest",
    greek: "Αμίαντος",
    english: "Asbestos"
},
{
    cypriot: "Andiz",
    turkish: "Servi",
    greek: "Κυπαρίσσι",
    english: "Cypress"
}, {
    cypriot: "Androbi",
    turkish: "Ayıp! Yeter!",
    greek: "Ντροπή! Φτάνει!",
    english: "Shame! Enough!"
},
{
    cypriot: "Androsh",
    turkish: "Takoz",
    greek: "Σφήνα / Τάκος",
    english: "Wedge; chock"
}, {
    cypriot: "Andrukla",
    turkish: "Sandal Ağacı",
    greek: "Σανδαλόξυλο",
    english: "Sandalwood"
},
{
    cypriot: "Angarya",
    turkish: "Zorla İş Yaptırmak; Angarya",
    greek: "Αγγαρεία",
    english: "Forced labor; chore"
}, {
    cypriot: "Angolem",
    turkish: "Taşpınar (Köy İsmi)",
    greek: "Ανγκόλεμ (Όνομα Χωριού)",
    english: "Taşpınar (village name)"
},
{
    cypriot: "Angud",
    turkish: "Salak; Aptal",
    greek: "Χαζός",
    english: "Idiot; fool"
}, {
    cypriot: "Anguri",
    turkish: "Salatalık",
    greek: "Αγγούρι",
    english: "Cucumber"
},
{
    cypriot: "Ansızın",
    turkish: "Aniden",
    greek: "Ξαφνικά",
    english: "Suddenly"
},
{
    cypriot: "Argaca",
    turkish: "Akçay (Yer Adı)",
    greek: "Αργάτζια (Τοπωνύμιο)",
    english: "Akçay (place name)"
}, {
    cypriot: "Argaci",
    turkish: "Küçük Su Yolu",
    greek: "Μικρό Αυλάκι Νερού",
    english: "Small water channel"
},
{
    cypriot: "Avlasdo",
    turkish: "Baştan Savma Yapmak; Özensiz Yapmak",
    greek: "Το Κάνω Πρόχειρα",
    english: "To do carelessly; to half-do"
},
{
    cypriot: "Aya",
    turkish: "Dilekkaya (Köy İsmi)",
    greek: "Άγια (Όνομα Χωριού)",
    english: "Dilekkaya (village name)"
}, {
    cypriot: "Ayakça",
    turkish: "Pedal",
    greek: "Πεντάλ",
    english: "Pedal"
},
{
    cypriot: "Ayanni",
    turkish: "Aydın (Köy İsmi)",
    greek: "Αγιάννη (Όνομα Χωριού)",
    english: "Aydın (village name)"
}, {
    cypriot: "Ayguru",
    turkish: "Esentepe (Köy/Bel. İsmi)",
    greek: "Αϊγκούρου (Τοπωνύμιο)",
    english: "Esentepe (place name)"
},
{
    cypriot: "Ayorgi",
    turkish: "Karaoğlanoğlu (Yer Adı)",
    greek: "Αϊ-Γιώργης (Τοπωνύμιο)",
    english: "Karaoğlanoğlu (place name)"
}, {
    cypriot: "Ayoz",
    turkish: "Kutsal",
    greek: "Ιερός",
    english: "Holy"
},
{
    cypriot: "Azgan",
    turkish: "Dikenli Çalı",
    greek: "Αγκαθωτός Θάμνος",
    english: "Thorny bush"
}, {
    cypriot: "Azulevgi",
    turkish: "Kıskanç",
    greek: "Ζηλιάρης",
    english: "Jealous"
},
{
    cypriot: "Balıkidro",
    turkish: "Balıkesir (Köy İsmi)",
    greek: "Μπαλικίθρο (Τοπωνύμιο)",
    english: "Balıkesir (village name)"
},
{
    cypriot: "Banaiyamu",
    turkish: "Aman Allahım!",
    greek: "Παναγία Μου!",
    english: "Oh my God!"
}, {
    cypriot: "Banya",
    turkish: "Avcı Grubu",
    greek: "Ομάδα Κυνηγών",
    english: "Hunter group"
},
{
    cypriot: "Bardon",
    turkish: "Pardon",
    greek: "Συγγνώμη",
    english: "Pardon; excuse me"
}, {
    cypriot: "Bazlamak",
    turkish: "Boğazlamak; Öldürmek",
    greek: "Σφάζω",
    english: "To slaughter; to kill"
},
{
    cypriot: "Bedmez",
    turkish: "Pekmez",
    greek: "Πετιμέζι",
    english: "Grape molasses"
},
{
    cypriot: "Belemek",
    turkish: "Kirletmek",
    greek: "Λερώνω",
    english: "To dirty"
}, {
    cypriot: "Benilemek",
    turkish: "Korkmak",
    greek: "Φοβάμαι",
    english: "To be afraid"
},
{
    cypriot: "Bibinca",
    turkish: "Tavuğun İnce Tüyleri",
    greek: "Λεπτά Πούπουλα Κότας",
    english: "Fine chicken feathers"
}, {
    cypriot: "Bigatsa",
    turkish: "Çulluk (Yaban Kuşu)",
    greek: "Μπεκάτσα",
    english: "Woodcock"
},
{
    cypriot: "Bigavli",
    turkish: "Uzun Değnek",
    greek: "Μακρύ Ραβδί",
    english: "Long stick"
}, {
    cypriot: "Birçıngıcık",
    turkish: "Biraz",
    greek: "Λίγο",
    english: "A little"
},
{
    cypriot: "Bitevi",
    turkish: "Bitişik",
    greek: "Κολλητά",
    english: "Adjacent; next to"
},
{
    cypriot: "Boca etmek",
    turkish: "Çevirip Boşaltmak",
    greek: "Αδειάζω Αναποδογυρίζοντας",
    english: "To pour out by tipping over"
}, {
    cypriot: "Bohca",
    turkish: "Kumaş Çanta; Bohça",
    greek: "Μπόγος / Υφασμάτινη Τσάντα",
    english: "Cloth bundle/bag"
},
{
    cypriot: "Bolibif",
    turkish: "Preslenmiş Et (Konserve)",
    greek: "Κονσέρβα Κρέατος",
    english: "Corned beef (pressed meat)"
}, {
    cypriot: "Boliga",
    turkish: "Bol Miktarda",
    greek: "Άφθονα",
    english: "Plenty; a lot"
},
{
    cypriot: "Bomilarga",
    turkish: "Domates",
    greek: "Ντομάτα",
    english: "Tomato"
}, {
    cypriot: "Bondigo",
    turkish: "Fare",
    greek: "Ποντίκι",
    english: "Mouse"
},
{
    cypriot: "Bondo",
    turkish: "Kalas",
    greek: "Μαδέρι",
    english: "Plank"
}, {
    cypriot: "Bongleya",
    turkish: "Küçük Kalmış; Büyümemiş",
    greek: "Μικροκαμωμένο",
    english: "Undersized; stunted"
},
{
    cypriot: "Boro",
    turkish: "Konsol",
    greek: "Κονσόλα",
    english: "Console (table/bracket)"
},
{
    cypriot: "Bumbiriya",
    turkish: "Kelebek Cinsi",
    greek: "Είδος Πεταλούδας",
    english: "A type of butterfly"
}, {
    cypriot: "Burnukapan",
    turkish: "Bukalemun",
    greek: "Χαμαιλέοντας",
    english: "Chameleon"
},
{
    cypriot: "Böcü",
    turkish: "Böcek",
    greek: "Έντομο",
    english: "Bug; insect"
}, {
    cypriot: "Böyüce",
    turkish: "Bu Gece",
    greek: "Απόψε",
    english: "Tonight"
},
{
    cypriot: "Caba",
    turkish: "Bedava",
    greek: "Τζάμπα",
    english: "Free (of charge)"
}, {
    cypriot: "Çalka",
    turkish: "Çalkala",
    greek: "Κούνα / Ανακάτεψε",
    english: "Shake; mix"
},
{
    cypriot: "Cayırdatmak",
    turkish: "Patinaj Yapmak",
    greek: "Πατινάρω",
    english: "To skid; to spin wheels"
}, {
    cypriot: "Cebelleşmek",
    turkish: "Uğraşmak",
    greek: "Παλεύω",
    english: "To struggle with"
},
{
    cypriot: "Cellatin",
    turkish: "Yapışkan Bant",
    greek: "Σελοτέιπ",
    english: "Adhesive tape"
}, {
    cypriot: "Ceyran",
    turkish: "Elektrik; Akım",
    greek: "Ρεύμα",
    english: "Electricity; current"
},
{
    cypriot: "Cigla",
    turkish: "Ardıç Kuşu (Kuş Türü)",
    greek: "Τσίχλα",
    english: "Thrush (bird)"
},
{
    cypriot: "Çilimbidi",
    turkish: "Sıska",
    greek: "Λιγνός",
    english: "Skinny"
}, {
    cypriot: "Cilimindiri",
    turkish: "Silindir",
    greek: "Κύλινδρος",
    english: "Cylinder"
},
{
    cypriot: "Cillenmek",
    turkish: "Yuvarlanmak",
    greek: "Κυλιέμαι",
    english: "To roll"
}, {
    cypriot: "Cimcik",
    turkish: "Cimdik",
    greek: "Τσίμπημα",
    english: "Pinch"
},
{
    cypriot: "Cingane",
    turkish: "Roman (Çingene)",
    greek: "Τσιγγάνος / Ρομά",
    english: "Romani (Gypsy)"
}, {
    cypriot: "Çirpi",
    turkish: "İnce Sopa",
    greek: "Λεπτό Ξυλάκι",
    english: "Thin stick"
},
{
    cypriot: "Dabella",
    turkish: "Tabela",
    greek: "Ταμπέλα",
    english: "Signboard"
}, {
    cypriot: "Deyyor",
    turkish: "Diyor",
    greek: "Λέει",
    english: "S/he says"
},
{
    cypriot: "Didsiri",
    turkish: "Çıplak; Islak",
    greek: "Γυμνός; Μούσκεμα",
    english: "Naked; wet"
},
{
    cypriot: "Digomo",
    turkish: "Dikmen (Köy İsmi)",
    greek: "Δίκωμο",
    english: "Dikmen (village name)"
},
{
    cypriot: "Efgaliddo",
    turkish: "Okaliptus Ağacı",
    greek: "Ευκάλυπτος",
    english: "Eucalyptus tree"
}, {
    cypriot: "Egrimboz",
    turkish: "Eğri Büğrü",
    greek: "Στραβός",
    english: "Crooked"
},
{
    cypriot: "Ehali",
    turkish: "Halk; Ahali",
    greek: "Λαός",
    english: "People; locals"
},
{
    cypriot: "Elak",
    turkish: "Acı (Ekşimtrak)",
    greek: "Ξινόπικρο",
    english: "Sour-bitter"
}, {
    cypriot: "Elemye",
    turkish: "Yumak Yapmaya Yarayan Alet",
    greek: "Εργαλείο Για Κουβάρια",
    english: "Tool for making yarn balls"
},
{
    cypriot: "Elengele",
    turkish: "Papatya",
    greek: "Χαμομήλι",
    english: "Chamomile"
}, {
    cypriot: "Elleşmek",
    turkish: "Çekişmek; Kavga Etmek",
    greek: "Μαλώνω",
    english: "To quarrel"
},
{
    cypriot: "Elye",
    turkish: "Doğancı (Yer Adı)",
    greek: "Ελιέ (Τοπωνύμιο)",
    english: "Doğancı (place name)"
},
{
    cypriot: "Entari",
    turkish: "Elbise",
    greek: "Φόρεμα",
    english: "Dress"
}, {
    cypriot: "Fello",
    turkish: "Olta Şamandırası (Mantar)",
    greek: "Φελλός (Φλοτέρ)",
    english: "Cork float (fishing)"
}, {
    cypriot: "obaşdan",
    turkish: "Erkenden, yeni baştan",
    greek: "νωρίς, από την αρχή",
    english: "early, from the beginning"
}, {
    cypriot: "obir",
    turkish: "öbür",
    greek: "ο άλλος",
    english: "the other"
}, {
    cypriot: "ocu",
    turkish: "bir şeyden soğumak, çekinmek, kormak, yılmak, üşümek",
    greek: "φοβάμαι, αποφεύγω, κρυώνω",
    english: "to fear, avoid, lose interest, feel cold"
}, {
    cypriot: "ocut",
    turkish: "yıldırmak, soğutmak, ürkütmek",
    greek: "φοβίζω, αποθαρρύνω",
    english: "to frighten, to discourage"
}, {
    cypriot: "of",
    turkish: "boşta, izinli",
    greek: "ρεπό, άδεια",
    english: "off, on leave"
}, {
    cypriot: "ofdo",
    turkish: "fırın kebabı",
    greek: "φούρνος κεμπάπ",
    english: "oven kebab"
}, {
    cypriot: "ofgala",
    turkish: "",
    greek: "οφκόγαλα",
    english: "milk skim / milk residue"
}, {
    cypriot: "ofto/ohdo/ohto",
    turkish: "tümsek, iki tarlayı birbirinden ayıran sınır.",
    greek: "αναχώματα, όριο χωραφιών",
    english: "mound, field boundary"
}, {
    cypriot: "ogga",
    turkish: "okka",
    greek: "ογγιά",
    english: "okka (old weight unit)"
}, {
    cypriot: "oğlucuk",
    turkish: "oğulcuk",
    greek: "γιοκαλούι",
    english: "little son"
}, {
    cypriot: "oğur",
    turkish: "kabarık, ense, baş ve alında olan et beni.",
    greek: "σάρκινο εξόγκωμα",
    english: "flesh mole / bump"
}, {
    cypriot: "ohdovri",
    turkish: "ohtovri, ekim ayı",
    greek: "Οκτώβρης",
    english: "October"
}, {
    cypriot: "okarı/yokarı",
    turkish: "",
    greek: "πάνω",
    english: "up"
}, {
    cypriot: "okkabardağı",
    turkish: "ölü yıkamada kullanılan büyükçe toprak kap",
    greek: "δοχείο πλύσης νεκρού",
    english: "large washing pot for a corpse"
}, {
    cypriot: "oklağı/oklavı",
    turkish: "oklava",
    greek: "πλάστης",
    english: "rolling pin"
}, {
    cypriot: "okra",
    turkish: "boya elde etmede kullanılan bir tür taş",
    greek: "ώχρα",
    english: "ochre"
}, {
    cypriot: "oksari",
    turkish: "keman yayı",
    greek: "δοξάρι",
    english: "violin bow"
}, {
    cypriot: "oksi",
    turkish: "kuş yakalamak için kurulan bir tür tuzak",
    greek: "ξόβεργα",
    english: "birdlime trap"
}, {
    cypriot: "oksilari",
    turkish: "İngiliz dönemindeki yardımcı polis",
    greek: "βοηθητικός αστυνομικός",
    english: "auxiliary police officer"
}, {
    cypriot: "olak/ovlak",
    turkish: "oğlak",
    greek: "κατσικάκι",
    english: "kid (young goat)"
}, {
    cypriot: "om",
    turkish: "ummak",
    greek: "ελπίζω",
    english: "to hope"
}, {
    cypriot: "ombaşı",
    turkish: "onbaşı",
    greek: "δεκανέας",
    english: "corporal"
}, {
    cypriot: "ombroz",
    turkish: "önde. Sürünün önün",
    greek: "μπροστά",
    english: "in front"
}, {
    cypriot: "omuzlak",
    turkish: "iki tarafına kova asılarak su taşımaya yarayan omuzluk",
    greek: "ζυγός ώμου",
    english: "shoulder yoke"
}, {
    cypriot: "ongar/yongar",
    turkish: "onarmak, düzeltmek",
    greek: "διορθώνω",
    english: "to repair"
}, {
    cypriot: "oncacık",
    turkish: "",
    greek: "λιγάκι",
    english: "a little bit"
}, {
    cypriot: "oncağaz",
    turkish: "çok az, o kadarzık",
    greek: "πολύ λίγο",
    english: "very little"
}, {
    cypriot: "onkar",
    turkish: "tedavi etmek",
    greek: "θεραπεύω",
    english: "to treat"
}, {
    cypriot: "onnuk",
    turkish: "bir kuruşun dörtte biri, on para, onluk",
    greek: "δεκάρα",
    english: "ten-para coin"
}, {
    cypriot: "onnuksuz",
    turkish: "paralıksız, meteliksiz",
    greek: "άφραγκος",
    english: "penniless"
}, {
    cypriot: "onucuk bunucuk",
    turkish: "değersiz şeyler, onunla bununla",
    greek: "ψιλοπράματα",
    english: "trivial things"
}, {
    cypriot: "onutmak",
    turkish: "unutmak",
    greek: "ξεχνώ",
    english: "to forget"
}, {
    cypriot: "oracıkta/oraşda/oraşta",
    turkish: "orada",
    greek: "εκεί",
    english: "there"
}, {
    cypriot: "oragcı",
    turkish: "arpa buğday biçen kişi",
    greek: "θεριστής",
    english: "reaper"
}, {
    cypriot: "orfana",
    turkish: "temizlikçi, hizmetçi",
    greek: "καθαρίστρια",
    english: "cleaner, maid"
}, {
    cypriot: "ornihari",
    turkish: "korkak tavuk",
    greek: "φοβητσιάρης",
    english: "scared chicken"
}, {
    cypriot: "orofi/oro",
    turkish: "hellim suyu",
    greek: "ορός χαλουμιού",
    english: "halloumi whey"
}, {
    cypriot: "kardamın",
    turkish: "kakule baharatı",
    greek: "κάρδαμο",
    english: "cardamom"
}, {
    cypriot: "ortakarısı",
    turkish: "düğünlerde erkekleri eğlendiren kadın veya sex işçisi",
    greek: "γυναίκα διασκέδασης",
    english: "entertainer woman / sex worker"
}, {
    cypriot: "ortancıl",
    turkish: "ortanca, ortada bulunan",
    greek: "μεσαίος",
    english: "middle"
}, {
    cypriot: "osumona",
    turkish: "gereksizce, uygunsuz yere",
    greek: "άσκοπα",
    english: "needlessly"
}, {
    cypriot: "osun",
    turkish: "olsun, o zaman ki",
    greek: "ας είναι",
    english: "let it be"
}, {
    cypriot: "osu/oşu",
    turkish: "o ki, yani, şu ki",
    greek: "που, δηλαδή",
    english: "that, meaning"
}, {
    cypriot: "otboğan",
    turkish: "Cuscuta Campestris",
    greek: "κουσκούττα",
    english: "dodder plant"
}, {
    cypriot: "otomohil/tomopil",
    turkish: "",
    greek: "αυτοκίνητο",
    english: "car"
}, {
    cypriot: "oturak",
    turkish: "sele",
    greek: "καλάθι",
    english: "basket"
}, {
    cypriot: "ovcalamak",
    turkish: "ufak parçalara ayırmak, ovmak",
    greek: "τρίβω",
    english: "to rub, to crumble"
}, {
    cypriot: "ovmaca",
    turkish: "küçük hamur parçalarıyla yapılan çorba",
    greek: "σούπα με ζυμαράκια",
    english: "soup with small dough pieces"
}, {
    cypriot: "oğramak/ovramak",
    turkish: "uğramak",
    greek: "περνώ, επισκέπτομαι",
    english: "to stop by"
}, {
    cypriot: "ovraşmak",
    turkish: "uğraşmak",
    greek: "ασχολούμαι",
    english: "to deal with"
}, {
    cypriot: "ovul",
    turkish: "oğul",
    greek: "γιος",
    english: "son"
}, {
    cypriot: "ovunmak",
    turkish: "açlıktan bayılacak duruma gelmek",
    greek: "λιποθυμώ από πείνα",
    english: "to faint from hunger"
}, {
    cypriot: "ovur/uvur",
    turkish: "uğur",
    greek: "γούρι",
    english: "good luck, charm"
}, {
    cypriot: "oysam",
    turkish: "oysa ki",
    greek: "ενώ, παρ' όλα αυτά",
    english: "whereas, however"
}, {
    cypriot: "telefoniyen",
    turkish: "telefon ile",
    greek: "με τηλέφωνο",
    english: "by phone"
}, {
    cypriot: "ödenmek",
    turkish: "maaşını almak",
    greek: "να πάρει το μισθό του",
    english: "getting paid"
}, {
    cypriot: "ödünü kusmak",
    turkish: "çok korkmak",
    greek: "να φοβάσαι πολύ",
    english: "fearing a lot"
}, {
    cypriot: "ödürlü etmek",
    turkish: "korkutmak",
    greek: "να τρομάζω",
    english: "scaring"
}, {
    cypriot: "öfelemek",
    turkish: "meyveleri ağaçtan toplamak",
    greek: "να μαζέψει τα φρούτα από το δέντρο",
    english: "picking fruits from tree"
}, {
    cypriot: "öfürmek",
    turkish: "üflemek",
    greek: "φυσάω",
    english: "blowing"
}, {
    cypriot: "öğüncek",
    turkish: "kendi kendini öven, çok övünen",
    greek: "αυτοεπαίνεσαι, πολύ καυχησιάρης",
    english: "self-praising, boastful person"
}, {
    cypriot: "öğüngen",
    turkish: "kendi kendini öven",
    greek: "αυτοεπαίνεσαι",
    english: "self-praising person"
}, {
    cypriot: "öldürünmek",
    turkish: "çok çalışmak, çabalamak",
    greek: "δουλεύοντας πολύ, καταβάλλοντας τεράστια προσπάθεια. Προέρχεται από τη λέξη «πεθαίνω».",
    english: "working so much, exerting massive effort. It is referred from the word ‘dying’."
}, {
    cypriot: "ölüyucu/ölüycü/ölücü/ölüyücü",
    turkish: "ölü yıkayıcı",
    greek: "νεκροθάφτης ",
    english: "corpse washer "
}, {
    cypriot: "önge",
    turkish: "okkanın dörtte biri",
    greek: "το ένα τέταρτο του οκκάνιου",
    english: " a quarter of an ounce"
}, {
    cypriot: "önüne",
    turkish: "önce, ilkin",
    greek: "πρώτα, αρχικά",
    english: "primarily, initially"
}, {
    cypriot: "örmek/ürmek",
    turkish: "(köpek) havlamak",
    greek: "(σκύλος) να γαβγίζει",
    english: "(dog) barking"
}, {
    cypriot: "ören",
    turkish: "karpuz kavun ekmek için hazırlanan tarla, ova",
    greek: "το χωράφι που προετοιμάζεται για τη σπορά καρπουζιών και πεπονιών, η πεδιάδα",
    english: "field, plain prepared for planting watermelons and melons"
}, {
    cypriot: "örgüç",
    turkish: "devenin sırtındaki çıkıntı",
    greek: "η προεξοχή στην πλάτη του καμήλου",
    english: "hump on a camle’s back"
}, {
    cypriot: "örgülemek",
    turkish: "örmek, dokumak",
    greek: "πλέκω, υφαίνω",
    english: "to knit, to weave"
}, {
    cypriot: "örmek",
    turkish: "Gavulya(Sütleğen) gibi bitkilerin sap kısmı",
    greek: "Το στέλεχος φυτών όπως το γάλα",
    english: "The stem of plants such as Milkweed"
}, {
    cypriot: "Gavulya",
    turkish: "Sütleğen. Bilimsel adı: Euphorbia",
    greek: "Ευφόρβια. Επιστημονική ονομασία: Euphorbia",
    english: "Spurge. Scientific name: Euphorbia"
}, {
    cypriot: "örtlemek",
    turkish: "hayvanın daha fazla otlaması için ipini uzatmak",
    greek: "να μακρύνεις το σχοινί του ζώου για να βόσκει περισσότερο",
    english: "to lengthen the animal's rope so it can graze more"
}, {
    cypriot: "öşürlemek",
    turkish: "bir şeyin birazını çalmak, aşırmak",
    greek: "να κλέβεις λίγο από κάτι, να υπερχρεώνεις",
    english: "to pilfer, to pinch"
}, {
    cypriot: "ötöygün/ötöğün/ötögün/ötöğögün",
    turkish: "evvelki gün",
    greek: "προηγούμενη μέρα",
    english: "the day before yesterday"
}, //calisir bundan sonrasi.
{
    cypriot: "Cırlavık",
    turkish: "Ağustos böceği",
    greek: "Τζιτζίκι",
    english: "Cicada"
}, {
    cypriot: "Gamini",
    turkish: "Duman altı",
    greek: "Καπνιστός",
    english: "Smoked"
}, {
    cypriot: "Canım asıldı",
    turkish: "Canım çekti",
    greek: "Λαχτάρησα κάτι",
    english: "I craved (something)"
}, {
    cypriot: "Gırgır",
    turkish: "Elektrikli süpürge",
    greek: "Ηλεκτρική σκούπα",
    english: "Vacuum cleaner"
}, {
    cypriot: "Uçak alanı",
    turkish: "Havalimanı",
    greek: "Αεροδρόμιο",
    english: "Airport"
}, {
    cypriot: "Basılmak",
    turkish: "Araba altında kalmak / ezilmek",
    greek: "Να σε πατήσει αυτοκίνητο",
    english: "To be run over by a car"
}, {
    cypriot: "Amiyondo",
    turkish: "Spor ayakkabı (Polemidya söyleyişi)",
    greek: "Αθλητικό παπούτσι",
    english: "Sneaker (Polemidya usage)"
}, {
    cypriot: "Kurdela",
    turkish: "Kurdele",
    greek: "Κορδέλα",
    english: "Ribbon"
}, {
    cypriot: "Bullik",
    turkish: "Büllük (penis)",
    greek: "Υβριστικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Çakulet",
    turkish: "Çikolata",
    greek: "Σοκολάτα",
    english: "Chocolate"
}, {
    cypriot: "Yemiş",
    turkish: "Abur cubur",
    greek: "Σνακ / λιχουδιές",
    english: "Snacks"
}, {
    cypriot: "Cuva",
    turkish: "Conta takımı (İngilizcesi: gasket set)",
    greek: "Σετ παρεμβυσμάτων (gasket set)",
    english: "Gasket set"
}, {
    cypriot: "Raundabaout / Raundabaunt",
    turkish: "Çember",
    greek: "Κυκλικός κόμβος",
    english: "Roundabout"
}, {
    cypriot: "Tomofil",
    turkish: "Otomobil",
    greek: "Αυτοκίνητο",
    english: "Car"
}, {
    cypriot: "Gatsara",
    turkish: "Bayatladı",
    greek: "Μπαγιάτεψε",
    english: "It went stale"
}, {
    cypriot: "Dömbelek",
    turkish: "Dümbelek",
    greek: "Τουμπελέκι",
    english: "Goblet drum"
}, {
    cypriot: "Skattaro / Iskatoro",
    turkish: "Vücudun üstünde et çıkar (cilt hastalığı)",
    greek: "Δερματική πάθηση με εξόγκωμα",
    english: "Skin condition with a bump"
}, {
    cypriot: "Drabano",
    turkish: "Matkap",
    greek: "Τρυπάνι",
    english: "Drill"
}, {
    cypriot: "Miyafon",
    turkish: "Mikrofon",
    greek: "Μικρόφωνο",
    english: "Microphone"
}, {
    cypriot: "Gakgadi",
    turkish: "Sümük",
    greek: "Μύξα",
    english: "Mucus"
}, {
    cypriot: "Zerdali ağacı",
    turkish: "Kayısı ağacı",
    greek: "Δέντρο βερίκοκου",
    english: "Apricot tree"
}, {
    cypriot: "Zerdali (Gayısı)",
    turkish: "Kayısı",
    greek: "Βερίκοκο",
    english: "Apricot"
}, {
    cypriot: "Karpız",
    turkish: "Karpuz",
    greek: "Καρπούζι",
    english: "Watermelon"
}, {
    cypriot: "Dumadez",
    turkish: "Domadez / Domates",
    greek: "Ντομάτα",
    english: "Tomato"
}, {
    cypriot: "Hartdadak",
    turkish: "Aniden",
    greek: "Ξαφνικά",
    english: "Suddenly"
}, {
    cypriot: "Menemurla",
    turkish: "Zayıf, çelimsiz, güçsüz",
    greek: "Αδύναμος / ισχνός",
    english: "Weak / frail"
}, {
    cypriot: "Golan",
    turkish: "Kemer (belt)",
    greek: "Ζώνη",
    english: "Belt"
}, {
    cypriot: "Dringa",
    turkish: "Tıka basa dolu (ucuna kadar dolu)",
    greek: "Γεμάτος μέχρι πάνω",
    english: "Filled to the brim"
}, {
    cypriot: "Yampuri",
    turkish: "Yamuk",
    greek: "Στραβός",
    english: "Crooked"
}, {
    cypriot: "Bulli suyu",
    turkish: "Tavuk suyu",
    greek: "Ζωμός κοτόπουλου",
    english: "Chicken broth"
}, {
    cypriot: "Magi",
    turkish: "Tavuk suyu (bulyon/küp)",
    greek: "Κύβος ζωμού κοτόπουλου",
    english: "Chicken stock cube"
}, {
    cypriot: "Hover / Huver",
    turkish: "Elektrikli süpürge",
    greek: "Ηλεκτρική σκούπα",
    english: "Vacuum cleaner"
}, {
    cypriot: "Yağmır",
    turkish: "Yağmur",
    greek: "Βροχή",
    english: "Rain"
}, {
    cypriot: "Hamır",
    turkish: "Hamur",
    greek: "Ζύμη",
    english: "Dough"
}, {
    cypriot: "Mamır",
    turkish: "Mamur",
    greek: "Καλοφτιαγμένος / τακτοποιημένος",
    english: "Well-kept / neat"
}, {
    cypriot: "Gavır(mak)",
    turkish: "Kavur(mak)",
    greek: "Καβουρδίζω",
    english: "To roast"
}, {
    cypriot: "Öğlen",
    turkish: "Öğle",
    greek: "Μεσημέρι",
    english: "Noon"
}, {
    cypriot: "Gibin",
    turkish: "Gibi",
    greek: "Σαν / όπως",
    english: "Like / as"
}, {
    cypriot: "Urum",
    turkish: "Rum",
    greek: "Ρωμιός",
    english: "Greek (person)"
}, {
    cypriot: "Triforoz",
    turkish: "Mizmiz",
    greek: "Γκρινιάρης / μίζερος",
    english: "Whiny / fussy"
}, {
    cypriot: "Bale gudalya bale gudalya",
    turkish: "Gene kaşık gene kaşık",
    greek: "Ξανά κουτάλι ξανά κουτάλι",
    english: "Again spoon, again spoon (repetitively)"
}, {
    cypriot: "Patarya",
    turkish: "Pil",
    greek: "Μπαταρία",
    english: "Battery"
}, {
    cypriot: "Patariya",
    turkish: "Pil",
    greek: "Μπαταρία",
    english: "Battery"
}, {
    cypriot: "Yediğin bullez",
    turkish: "Saçmalıyorsun",
    greek: "Λες ανοησίες",
    english: "You’re talking nonsense"
}, {
    cypriot: "ASFALYALARI ATMAK",
    turkish: "Sinirim bozuldu",
    greek: "Μου χάλασαν τα νεύρα",
    english: "I lost my temper"
}, {
    cypriot: "ASFALYA",
    turkish: "Sigorta",
    greek: "Ασφάλεια / ασφάλεια ρεύματος",
    english: "Fuse"
}, {
    cypriot: "Appudiri gibi gezmek",
    turkish: "Evsiz gibi gezmek (dışarılarda çok kalmak)",
    greek: "Τριγυρνώ σαν άστεγος",
    english: "Wander around like a homeless person"
}, {
    cypriot: "Gurdislemek",
    turkish: "Gurcalamak demektir",
    greek: "Σημαίνει «σκαλίζω / ψαχουλεύω»",
    english: "Means ‘to rummage / poke around’"
}, {
    cypriot: "Uhanam",
    turkish: "Vay be",
    greek: "Ω μπράβο / Πω πω",
    english: "Wow"
}, {
    cypriot: "Evrodo",
    turkish: "Annesi babası belli olmayan (piç)",
    greek: "Υβριστικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Gabudi",
    turkish: "Kalkanlı köyü",
    greek: "Καλκανλί (χωριό)",
    english: "Kalkanlı village"
}, {
    cypriot: "Gara fatma",
    turkish: "Bok böceği",
    greek: "Σκαθαράκι κοπριάς",
    english: "Dung beetle"
}, {
    cypriot: "Gabare",
    turkish: "Kerhane",
    greek: "Οίκος ανοχής",
    english: "Brothel"
}, {
    cypriot: "Aş evi",
    turkish: "Mutfak",
    greek: "Κουζίνα",
    english: "Kitchen"
}, {
    cypriot: "Mappro",
    turkish: "Selviden düşen topçuklar",
    greek: "Μικροί καρποί από κυπαρίσσι",
    english: "Small cypress cones/balls"
}, {
    cypriot: "Garnı",
    turkish: "Sülale",
    greek: "Σόι / γενιά",
    english: "Lineage / family"
}, {
    cypriot: "Orsobu garnılı",
    turkish: "Orospu sülaleli",
    greek: "Υβριστικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Cırlavik",
    turkish: "Cırcır böceği",
    greek: "Τζιτζίκι",
    english: "Cicada"
}, {
    cypriot: "Sallama",
    turkish: "Yalan söyleme",
    greek: "Μην λες ψέματα",
    english: "Don’t lie"
}, {
    cypriot: "Muccos",
    turkish: "Mastürbasyon",
    greek: "Αυνανισμός",
    english: "Masturbation"
}, {
    cypriot: "Bunamak",
    turkish: "Yaşlanmak",
    greek: "Γερνάω / παραφρονώ στα γεράματα",
    english: "To grow old (senility)"
}, {
    cypriot: "Gurkuncello",
    turkish: "Kadın cinsel organı",
    greek: "Υβριστικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Gurkuda",
    turkish: "Kadın cinsel organı",
    greek: "Υβριστικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Ananın gurkuncellosu",
    turkish: "Annenin cinsel organı",
    greek: "Υβριστικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Şeher",
    turkish: "Şehir",
    greek: "Πόλη",
    english: "City"
}, {
    cypriot: "Banukla",
    turkish: "Zehir çıkarasın (beddua)",
    greek: "Να φαρμακωθείς (κατάρα)",
    english: "May you be poisoned (curse)"
}, {
    cypriot: "Peki",
    turkish: "Kapı kilidi",
    greek: "Κλειδαριά",
    english: "Door lock"
}, {
    cypriot: "Pekilemek",
    turkish: "Kapıyı kilitlemek",
    greek: "Κλειδώνω την πόρτα",
    english: "To lock the door"
}, {
    cypriot: "Minalayalar",
    turkish: "Kıbrıslıların 12 ayın hava durumunu ölçme yöntemi",
    greek: "Παραδοσιακή παρατήρηση καιρού 12 μηνών",
    english: "Traditional 12-month weather observing method"
}, {
    cypriot: "Guzguni",
    turkish: "Simsiyah (kapkara)",
    greek: "Κατάμαυρος",
    english: "Pitch-black"
}, {
    cypriot: "Garacocco",
    turkish: "Çörekotu",
    greek: "Μαυροκούκι (Nigella sativa)",
    english: "Black seed (Nigella sativa)"
}, {
    cypriot: "Cıncırak",
    turkish: "Çocuk bahçesindeki salıncak",
    greek: "Κούνια παιδικής χαράς",
    english: "Playground swing"
}, {
    cypriot: "Καρτζ̌ίν",
    turkish: "Karşısı / ön taraf",
    greek: "Μπροστά / απέναντι",
    english: "In front / opposite"
}, {
    cypriot: "Gendro",
    turkish: "Bir şeyin merkezi",
    greek: "Κέντρο",
    english: "Center"
}, {
    cypriot: "İzmirillo",
    turkish: "Demir kesme aleti",
    greek: "Κόφτης σιδήρου",
    english: "Iron cutter"
}, {
    cypriot: "Cırlavuk (böceği)",
    turkish: "Cır cır öten; çok konuşan kimse",
    greek: "Φλύαρος / που μιλά συνεχώς",
    english: "Very talkative person"
}, {
    cypriot: "Hıyarto",
    turkish: "Tanıdıklar arasında hitap: ‘hıyar’ (şakalaşma)",
    greek: "Χαϊδευτική/πειραχτική προσφώνηση «αγγούρι»",
    english: "Playful teasing address (‘cucumber/idiot’)"
}, {
    cypriot: "Yerro / Yero",
    turkish: "Yaşlı adam",
    greek: "Γέρος",
    english: "Old man"
}, {
    cypriot: "Dartalli",
    turkish: "Bok",
    greek: "Υβριστικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Garafatma",
    turkish: "Karafatma (Blaps lethifera)",
    greek: "Καραφατμέ / κατσαρίδα εδάφους",
    english: "Darkling beetle (Blaps lethifera)"
}, {
    cypriot: "Gımıldanmış",
    turkish: "Deli",
    greek: "Τρελός",
    english: "Crazy"
}, {
    cypriot: "Gurkuda (kertenkele çeşiti)",
    turkish: "Kertenkele türü",
    greek: "Είδος σαύρας",
    english: "A kind of lizard"
}, {
    cypriot: "παμπακοβίλλης (pambakovillis)",
    turkish: "pamuk + billo (penis) → iktidarsız (cinsel yetersizlik, hastalık)",
    greek: "παμπάτσιν (βαμβάκι) + βίλλος (πέος)",
    english: "cotton + penis → sexually impotent"
}, {
    cypriot: "κούσβος (kuzvos)",
    turkish: "küsbe (öğütülmüş susam artığı, Osmanlıca)",
    greek: "κούσβος",
    english: "stupid, unintelligent"
}, {
    cypriot: "κκερχανετζής (kerhanedjis)",
    turkish: "kerhaneci (genelev sahibi/çalışanı/sakini)",
    greek: "κκερχανετζής",
    english: "male prostitute"
}, {
    cypriot: "κεντικελένης (kendikelenis)",
    turkish: "kendi gelen (davet edilmeden gelen kişi)",
    greek: "κεντικελένης",
    english: "rascal, bad-mannered person"
}, {
    cypriot: "μαννός (mannos)",
    turkish: "yumuşak (eski Yunanca manós’tan)",
    greek: "μαννός",
    english: "idiot, moron"
}, {
    cypriot: "κκλιντζίρος (kilinjiros) / κούλλουφος (kullufos)",
    turkish: "çilingir (kilitçi) / kul (erkek köle), külfet (yük)",
    greek: "κκλιντζίρος / κούλλουφος",
    english: "dirty, unkempt person"
}, {
    cypriot: "κουρβανάς (kurvanas)",
    turkish: "korvanas (güvenli kasa, Yunanca kökenli)",
    greek: "κουρβανάς",
    english: "simple, uneducated person"
}, {
    cypriot: "αμπάλατος (ambalatos)",
    turkish: "ablâd/balîd (aptal - Arapça)",
    greek: "αμπάλατος",
    english: "idiot, inconsiderate person"
}, {
    cypriot: "πιπεζεβέγκης (pezevengis)",
    turkish: "pezevenk",
    greek: "πιπεζεβέγκης",
    english: "pimp (of his wife)"
}, {
    cypriot: "Miyotenas-Μιοτενας",
    turkish: "ilginiz için teşekkür ederiz. Hazır burdaykan bir etrafa bakın madem:)",
    greek: "Σας ευχαριστούμε για το ενδιαφέρον σας. Ενώ είστε εδώ, ρίξτε μια ματιά:)",
    english: "thank you for your interest. Since you are here, let's take a look a bit"
}, {
    cypriot: "Bodilya",
    turkish: "Tüp gaz",
    greek: "υγραέριο",
    english: "bottled gas / LPG"
}, {
    cypriot: "Bavatsini",
    turkish: "Beyaz dut",
    greek: "λευκή μουριά",
    english: "white mulberry"
}, {
    cypriot: "mapora",
    turkish: "selvi ağacı yemişi",
    greek: "καρπός κυπαρισσιού",
    english: "cypress fruit"
}, {
    cypriot: "batsi gitmek",
    turkish: "ödeşmek (karşılıklı hesaplaşmak)",
    greek: "ξεπληρώνω λογαριασμούς",
    english: "to settle accounts / pay off"
}, {
    cypriot: "cartlağı çekmek",
    turkish: "ölmek",
    greek: "πεθαίνω",
    english: "to die"
}, {
    cypriot: "Bircez",
    turkish: "birkaç",
    greek: "μερικά",
    english: "a few / several"
}, {
    cypriot: "Gutto",
    turkish: "Şişman",
    greek: "χοντρός",
    english: "fat"
}, {
    cypriot: "gabirgas etmek",
    turkish: "yanmak, genelde güneşten",
    greek: "καίγομαι (από ήλιο)",
    english: "to get burned (by the sun)"
}, {
    cypriot: "kaz/kazn",
    turkish: "kaz (benzetme)",
    greek: "χήνα (μεταφορικά για αφελή)",
    english: "goose (metaphorically naive person)"
}, {
    cypriot: "Butti, Butticik",
    turkish: "am, amcık",
    greek: "μουνί",
    english: "pussy"
}, {
    cypriot: "Bavatsini",
    turkish: "beyaz dut",
    greek: "λευκή μουριά",
    english: "white mulberry"
},
{
    cypriot: "sillarga",
    turkish: "sulu kuş (özellikle tarlalarda yaşayan bir tür)",
    greek: "υδρόβιο πουλί",
    english: "wetland bird"
}, {
    cypriot: "Gonnoro",
    turkish: "gonnara bitkisi, Ziziphus lotus",
    greek: "ποντζιά (είδος θάμνου)",
    english: "lotus tree, jujube bush"
}, {
    cypriot: "tingonoz",
    turkish: "kurnaz, açıkgöz",
    greek: "πονηρός",
    english: "clever, sly"
}, {
    cypriot: "tappos etmek",
    turkish: "hızlı hızlı gitmek",
    greek: "τρέχω γρήγορα",
    english: "to go quickly"
}, {
    cypriot: "Balarislemek",
    turkish: "hızlı hızlı gitmek",
    greek: "τρέχω βιαστικά",
    english: "to hurry, to rush"
},
{
    cypriot: "şilla",
    turkish: "leş, orospu",
    greek: "πόρνη, κουφάρι",
    english: "whore, carcass"
}, {
    cypriot: "şillo",
    turkish: "köpek",
    greek: "σκύλος",
    english: "dog"
}, {
    cypriot: "maccez etmek",
    turkish: "ezmek",
    greek: "λιώνω, συνθλίβω",
    english: "to crush, to squash"
}, {
    cypriot: "losarga",
    turkish: "kuluçkaya yatmış tavuk",
    greek: "κότα που κάθεται σε αυγά",
    english: "broody hen"
}, {
    cypriot: "siligundiri",
    turkish: "bir çeşit arı, sarı arı",
    greek: "είδος μέλισσας, κίτρινη μέλισσα",
    english: "a kind of bee, yellow bee"
},
{
    cypriot: "bunar",
    turkish: "pınar",
    greek: "ποταμός",
    english: "stream"
}, {
    cypriot: "onda",
    turkish: "orada",
    greek: "εκεί",
    english: "there"
}, {
    cypriot: "genni/geğni",
    turkish: "kendini/kendisini",
    greek: "εαυτός/αυτός",
    english: "him/her/themself"
}, {
    cypriot: "betmez",
    turkish: "pekmez",
    greek: "Μελάσα",
    english: "molasses"
}, {
    cypriot: "soğra",
    turkish: "sonra",
    greek: "τότε",
    english: "then/after"
}, {
    cypriot: "geşmek",
    turkish: "geçmek",
    greek: "περάστε",
    english: "to pass"
}, {
    cypriot: "orrayt",
    turkish: "pekala",
    greek: "Εντάξει",
    english: "all right"
}, {
    cypriot: "diğne/diyne",
    turkish: "dinle",
    greek: "Άκου",
    english: "listen"
}, {
    cypriot: "böğün/böyün",
    turkish: "bugün",
    greek: "Σήμερα",
    english: "today"
}, {
    cypriot: "huturaf",
    turkish: "fotoğraf",
    greek: "φωτογραφία",
    english: "photograph"
}, {
    cypriot: "furma",
    turkish: "hurma",
    greek: "ημερομηνίες",
    english: "date palm"
}, {
    cypriot: "fulya",
    turkish: "hülya",
    greek: "όνειρο, πόθος",
    english: "dream(in terms of longing)"
}, {
    cypriot: "fesfese",
    turkish: "vesvese",
    greek: "αυταπάτη",
    english: "misgiving"
}, {
    cypriot: "köv",
    turkish: "köy",
    greek: "χωριό",
    english: "village"
}, {
    cypriot: "mahana",
    turkish: "bahane",
    greek: "πρόσχημα",
    english: "excuse"
}, {
    cypriot: "gaşmak",
    turkish: "kaçmak",
    greek: "ξεφύγετε, φύγετε",
    english: "to escape, to go"
}, {
    cypriot: "havlı",
    turkish: "avlu",
    greek: "αυλή",
    english: "courtyard"
}, {
    cypriot: "annamak",
    turkish: "anlamak",
    greek: "κατανόηση του",
    english: "to understand"
}, {
    cypriot: "dükyan",
    turkish: "dükkan",
    greek: "κατάστημα",
    english: "shop, workplace"
}, {
    cypriot: "eyi",
    turkish: "iyi",
    greek: "Καλή",
    english: "good"
}, {
    cypriot: "karpız",
    turkish: "karpuz",
    greek: "Καρπούζι",
    english: "watermelon"
}, {
    cypriot: "gavın",
    turkish: "kavun",
    greek: "Πεπόνι",
    english: "melon"
}, {
    cypriot: "hamır",
    turkish: "hamur",
    greek: "ζύμη",
    english: "dough"
}, {
    cypriot: "böyük",
    turkish: "büyük",
    greek: "μεγάλο",
    english: "big"
}, {
    cypriot: "buba",
    turkish: "baba",
    greek: "Πατέρας",
    english: "father"
}, {
    cypriot: "enmek",
    turkish: "inmek",
    greek: "κατέβα",
    english: "descent"
}, {
    cypriot: "popaz",
    turkish: "papaz",
    greek: "πάστορα",
    english: "priest"
}, {
    cypriot: "bunda",
    turkish: "burada",
    greek: "εδώ",
    english: "here"
}, {
    cypriot: "behane",
    turkish: "bahane",
    greek: "δικαιολογία",
    english: "excuse"
}, {
    cypriot: "ehali",
    turkish: "ahali",
    greek: "Γειτονιά",
    english: "community"
}, {
    cypriot: "böyce",
    turkish: "bu gece",
    greek: "απόψε",
    english: "tonight"
}, {
    cypriot: "zorunan",
    turkish: "zorla",
    greek: "αναγκαστική",
    english: "forcibly, forced"
}, {
    cypriot: "zere",
    turkish: "zira",
    greek: "επειδή",
    english: "because"
}, {
    cypriot: "ıstad/istad",
    turkish: "stad",
    greek: "γήπεδο",
    english: "stad"
}, {
    cypriot: "ıstadyum/istadyum",
    turkish: "stadyum",
    greek: "γήπεδο",
    english: "stadium"
}, {
    cypriot: "genleri/genneri",
    turkish: "onlar, onları, kendileri",
    greek: "αυτοί, οι ίδιοι",
    english: "they, them, themselves"
}, {
    cypriot: "gaşa",
    turkish: "meyve kasası",
    greek: "κιβώτιο φρούτων",
    english: "fruit case"
}, {
    cypriot: "manivella",
    turkish: "kaldıraç",
    greek: "μοχλός",
    english: "lever"
}, {
    cypriot: "garasakal",
    turkish: "Türkiyeli",
    greek: "οποιοσδήποτε από την Τουρκία",
    english: "Anyone from Turkey"
}, {
    cypriot: "gavcar",
    turkish: "Çakşır out, bilimsel adı ile Ferula communis",
    greek: "ένα φυτό του οποίου η επιστημονική ονομασία είναι Ferula communis",
    english: "a plant whose scientific name is Ferula communis"
}, {
    cypriot: "videz",
    turkish: "vites",
    greek: "γρανάζι",
    english: "gear"
}, {
    cypriot: "sella",
    turkish: "sele",
    greek: "σέλα",
    english: "bike saddle"
}, {
    cypriot: "gafgarit",
    turkish: "bir tür yabani ot çeşidi",
    greek: "ένα είδος άγριου βοτάνου",
    english: "a wild herb kind"
}, {
    cypriot: "zivzizahar",
    turkish: "sivrisinek",
    greek: "κουνούπι",
    english: "mosquito"
}, {
    cypriot: "hanay",
    turkish: "iki katlı evin üst katı",
    greek: "άνω όροφος διώροφης κατοικίας",
    english: " upper floor of a two-storey house"
}, {
    cypriot: "çört",
    turkish: "elinden iş gelmeyen",
    greek: "που δεν μπορούν να κάνουν τίποτα",
    english: "a person who can do nothing"
}, {
    cypriot: "şiribilla",
    turkish: "incecik",
    greek: "λεπτό",
    english: "thin"
}, {
    cypriot: "çöp",
    turkish: "pipet",
    greek: "πιπέτα",
    english: "pipette"
}, {
    cypriot: "gumbre",
    turkish: "beton",
    greek: "σκυρόδεμα",
    english: "beton"
}, {
    cypriot: "babu",
    turkish: "araba",
    greek: "αυτοκίνητο",
    english: "car"
}, {
    cypriot: "dabaca",
    turkish: "dağınık saçlı biri",
    greek: "κάποιος με ακατάστατα μαλλιά",
    english: "anyone who has a messy hair"
}, {
    cypriot: "Noluyoruk be",
    turkish: "Appden atarım",
    greek: "Τι γίνεται ρε;",
    english: "What’s going on?"
}, {
    cypriot: "Ne",
    turkish: "Me",
    greek: "Τι;",
    english: "What?"
}, {
    cypriot: "Gartana",
    turkish: "Kart kadın",
    greek: "Γριά γυναίκα",
    english: "Old woman"
}, {
    cypriot: "Gartana",
    turkish: "Yaşlı kadın. Gart ana",
    greek: "Ηλικιωμένη γυναίκα",
    english: "Elderly woman"
}, {
    cypriot: "Kokona",
    turkish: "Yaşlı kadın",
    greek: "Κυρία, ηλικιωμένη γυναίκα",
    english: "Lady, elderly woman"
}, {
    cypriot: "avroşilla/avroşillo",
    turkish: "ada soğanı",
    greek: "αγριοκρέμμυδο, σκορπίδι",
    english: "wild onion, scilla"
},
{
    cypriot: "garto",
    turkish: "çeyrek",
    greek: "τρίμηνο",
    english: "quarter"
}, {
    cypriot: "gıraso",
    turkish: "bir çeşit makine yağı",
    greek: "ένα είδος μηχανέλαιου",
    english: "one kind of machine oil"
}, {
    cypriot: "gorona",
    turkish: "araba diferansiyeli",
    greek: "διαφορικό αυτοκινήτου",
    english: "car diferential"
}, {
    cypriot: "gumbaro",
    turkish: "arkadaş",
    greek: "φίλος",
    english: "friend"
}, {
    cypriot: "gumbaro",
    turkish: "sağdıç",
    greek: "κουμπάρος",
    english: "groosman"
}, {
    cypriot: "gurumbo",
    turkish: "sürekli sakız çiğneyen kimse",
    greek: "άτομο που μασάει συνεχώς τσίχλα",
    english: "someone who chews gum constantly"
}, {
    cypriot: "fandi",
    turkish: "oyun kağıdında bacak, vale",
    greek: "πόδι στο τραπουλόχαρτο, βαλές",
    english: "leg on the playing card, jack"
}, {
    cypriot: "farina",
    turkish: "beyaz un",
    greek: "λευκό αλεύρι",
    english: "white flour"
}, {
    cypriot: "farsetta",
    turkish: "kunduracı bıçağı",
    greek: "μαχαίρι τσαγκάρη",
    english: "shoemaker's knife"
}, {
    cypriot: "kuarto",
    turkish: "kağıt oyunlarında dörtlü",
    greek: "τετραπλασιάστε στα παιχνίδια καρτών",
    english: "quadruple in card games"
}, {
    cypriot: "lazmari/lazmarin",
    turkish: "bir tür çiçek, biberiye",
    greek: "ένα είδος λουλουδιού, δεντρολίβανο",
    english: "a kind of flower, rosemary"
}, {
    cypriot: "linzara",
    turkish: "balıkçı ipi",
    greek: "πετονιά",
    english: "fishing rope"
}, {
    cypriot: "martelli",
    turkish: "demirden yapılmış ortasına tahta sap geçirilen araç, duvarcı çekici",
    greek: "εργαλείο από σίδηρο με ξύλινη λαβή στο κέντρο, σφυρί χτίστη",
    english: "tool made of iron with a wooden handle in the centre, bricklayer's hammer"
}, {
    cypriot: "pistola",
    turkish: "boya tabancası",
    greek: "πιστόλι βαφής",
    english: "paint pistol"
}, {
    cypriot: "punyo",
    turkish: "yumruk",
    greek: "γροθιά",
    english: "punch"
}, {
    cypriot: "randi",
    turkish: "balık ağlarında yanlamasına atılan iplik",
    greek: "νήμα που πετιέται πλαγίως σε αλιευτικά δίχτυα",
    english: "thread thrown sideways in fishing nets"
}, {
    cypriot: "ratsa",
    turkish: "silsile, soykütüğü",
    greek: "σειρά, γενεαλογία",
    english: "series, genealogy"
}, {
    cypriot: "siya etmek",
    turkish: "kovmak",
    greek: "να αποβάλει",
    english: "to expel"
}, {
    cypriot: "sumada",
    turkish: "acı badem esansından yapılan bir tür içecek",
    greek: "ένα είδος ποτού που παρασκευάζεται από απόσταγμα πικραμύγδαλου",
    english: "a type of drink made from bitter almond essence"
}, {
    cypriot: "şanoyo çıkmak",
    turkish: "sahneye çıkmak",
    greek: "ανεβαίνοντας στη σκηνή",
    english: "going on stage"
}, {
    cypriot: "şanoyo çıkmak",
    turkish: "restorant veya eğlence mekanlarında müşterilere eşlik etmek, konsomatrislik yapmak",
    greek: "συνοδεία πελατών σε εστιατόρια ή χώρους ψυχαγωγίας, εργασία ως οικοδέσποινα",
    english: "accompanying customers in restaurants or entertainment venues, working as a hostess"
}, {
    cypriot: "tartalli",
    turkish: "öküz pisliği",
    greek: "σκατά βόδι",
    english: "ox poo"
}, {
    cypriot: "barabonti",
    turkish: "yalancı, dolandırıcı, hileci",
    greek: "ψεύτης, απατεώνας, απατεώνας",
    english: "liar, swindler, cheater"
}, {
    cypriot: "cukka",
    turkish: "cebine, kendi çıkarına",
    greek: "στην τσέπη του, για το δικό του συμφέρον.",
    english: "in his pocket, in his own interest."
}, {
    cypriot: "cukka etmek",
    turkish: "cebine indirmek, sürekli kendini düşürmek",
    greek: "τσέπη αυτό, συνεχώς μειώνοντας τον εαυτό σας",
    english: "pocket it, constantly lowering yourself"
}, {
    cypriot: "gatsuni",
    turkish: "çok yaşlı kimse",
    greek: "πολύ ηλικιωμένο άτομο",
    english: "someone very old"
}, {
    cypriot: "gorona",
    turkish: "rütbe",
    greek: "Κατάταξη",
    english: "Rank"
}, {
    cypriot: "gartana/kartana",
    turkish: "yaşlı kadın",
    greek: "ηλικιωμένη γυναίκα",
    english: " over-aged woman"
}, {
    cypriot: "kıranto",
    turkish: "orta yaşlı; saçına, bıyğına kır düşmüş kimse",
    greek: "",
    english: "Middle Aged Personμεσήλικας"
}, {
    cypriot: "paçolli",
    turkish: "kılık kıyafeti düzgün olmayan",
    greek: "με ακατάλληλη ενδυμασία",
    english: "with improper attire"
}, {
    cypriot: "nesten?/(?)",
    turkish: "ne istersin? Sözde soru olarak ta kullanılır.",
    greek: "Τι θέλεις; Χρησιμοποιείται επίσης ως λεγόμενη ερώτηση",
    english: "What do you want? Also used as a so-called question"
}, {
    cypriot: "yuro/euro atmak",
    turkish: "tur atmak",
    greek: "ξεναγηθείτε",
    english: "taking a tour"
}, {
    cypriot: "naylon",
    turkish: "naylon poşetin kısaltması olarak kullanılır",
    greek: "χρησιμοποιείται ως συντομογραφία για nylon bag",
    english: "used as an abbreviation for nylon bag"
}, {
    cypriot: "gözeklen",
    turkish: "dikkat et, kendini koru",
    greek: "προσέξτε, προστατέψτε τον εαυτό σας",
    english: "be careful, protect yourself"
}, {
    cypriot: "tikkat",
    turkish: "dikkat",
    greek: "προσοχή",
    english: "attention, caution"
}, {
    cypriot: "masgara",
    turkish: "maskara",
    greek: "μάσκαρα",
    english: "mascara"
}, {
    cypriot: "yetişir!",
    turkish: "tamam artık!, yeter!, daha fazla yapma/konuşma!",
    greek: "Αρκετά! Μην πεις/κάνεις τίποτε άλλο!",
    english: "It’s enough!, Don’t talk/do anymore!"
}, {
    cypriot: "Νάμπου",
    turkish: "nasıl gidiyor",
    greek: "Πώς πάει;",
    english: "what’s up?"
}, {
    cypriot: "Νάμπου κάμνεις;",
    turkish: "nasıl gidiyor",
    greek: "Πώς πάει;",
    english: "what’s up?"
}, {
    cypriot: "Καπίρα",
    turkish: "kızarmış ekmek",
    greek: "Φρυγανιά",
    english: "toasted bread"
}, {
    cypriot: "ζίζιρος",
    turkish: "Ağustos böceği",
    greek: "τζίτζικας",
    english: "cicada"
}, {
    cypriot: "gabira",
    turkish: "kızarmış ekmek",
    greek: "Φρυγανιά",
    english: "toasted bread"
}, {
    cypriot: "gombinacı",
    turkish: "üçkağıtçı,entrikacı",
    greek: "Απατεώνας",
    english: "trickster"
}, {
    cypriot: "barbet",
    turkish: "favori(sakal ile saçın kesişimi)",
    greek: "το συνδεδεμένο μέρος των μαλλιών και της γενειάδας",
    english: "the connected part of hair and beard"
}, {
    cypriot: "παρπέττα",
    turkish: "favori(sakal ile saçın kesişimi)",
    greek: "το συνδεδεμένο μέρος των μαλλιών και της γενειάδας",
    english: "the connected part of hair and beard"
}, {
    cypriot: "cellabiya",
    turkish: "askılı tulum",
    greek: "ολόσωμη φόρμα με τιράντες",
    english: "jumpsuit with straps"
}, {
    cypriot: "cıvınmak",
    turkish: "sıkıntıda olmak, kıvranmak",
    greek: "να είναι σε δυσκολία, να είναι σε δύσκολη θέση",
    english: "to be in distress, to writhe"
}, {
    cypriot: "yuro",
    turkish: "daire",
    greek: "κύκλος",
    english: "circle"
}, {
    cypriot: "cahdetmek",
    turkish: "hırslanmak",
    greek: "γίνετε φιλόδοξοι",
    english: "getting ambitious"
}, {
    cypriot: "letsa",
    turkish: "gevşek",
    greek: "χαλαρό",
    english: "slack"
}, {
    cypriot: "ofdirikord/oftirikord",
    turkish: "aramızda kalsın",
    greek: "Ας μείνει μεταξύ μας",
    english: "off the record"
}, {
    cypriot: "bondoboksi",
    turkish: "küçük çocuk",
    greek: "μικρό αγόρι",
    english: "small child"
}, {
    cypriot: "gombina",
    turkish: "üçkağıt,entrika",
    greek: "τέχνασμα, ίντριγκα",
    english: "humbug, intrigue"
}, {
    cypriot: "Antinattes",
    turkish: "patatesler için bir kızartma yöntemi. Patatesler bir tencerede bolca yağ ile, yapılırken güçlü bir şekilde sallanarak kızartılır.",
    greek: "μέθοδος τηγανίσματος πατάτας. Οι πατάτες τηγανίζονται σε ένα τηγάνι με πολύ λάδι, ανακινώντας δυνατά κατά τη διάρκεια της διαδικασίας.",
    english: "Cooking mode for potatoes, fried in a pot with a lot of oil, which shake them vigorously during cooking"
}, {
    cypriot: "babay",
    turkish: "baybay",
    greek: "αντίο",
    english: "goodbye"
}, {
    cypriot: "cizro/zirziro",
    turkish: "Ağustos böceği",
    greek: "Τζιτζίκι",
    english: "Cicada"
}, {
    cypriot: "Da Vinvi",
    turkish: "Leonardo Davincinin de satın almış olduğu spesifik bir lefkara işi deseni",
    greek: "Ένα συγκεκριμένο σχέδιο lefkara που αγοράστηκε από τον Leonardo Davinci",
    english: "a specific Lefkara design that Leonardo Davinci had also purchased"
}, {
    cypriot: "bulaşık hapı",
    turkish: "bulaşık tableti",
    greek: "ταμπλέτα πλυντηρίου πιάτων",
    english: "dishwasher tablet"
}, {
    cypriot: "pencereyi arala",
    turkish: "pencereyi biraz aç",
    greek: "ανοίξτε λίγο το παράθυρο",
    english: "open the window slightly"
}, {
    cypriot: "gındırmak",
    turkish: "aralamak",
    greek: "διάστημα",
    english: "spacing"
}, {
    cypriot: "matcez etmek",
    turkish: "ezmek",
    greek: "σύνθλιψη",
    english: "crush"
}, {
    cypriot: "ilan",
    turkish: "yılan",
    greek: "φίδι",
    english: "snake"
}, {
    cypriot: "gibriagi",
    turkish: "Kıbrıslı",
    greek: "Κυπριακή",
    english: "Cypriot"
}, {
    cypriot: "Kokona",
    turkish: "yaşlı kadın",
    greek: "ηλικιωμένη γυναίκα",
    english: "old woman"
}, {
    cypriot: "gartana",
    turkish: "yaşlı kadın",
    greek: "ηλικιωμένη γυναίκα",
    english: "old woman"
}, {
    cypriot: "baza",
    turkish: "bazı kağıt oyunlarında oyuncunun oyun esnasında bir elden topladığı kağıt sayısı.",
    greek: "σε ορισμένα παιχνίδια καρτών, ο αριθμός των καρτών που συλλέγει ένας παίκτης από ένα χέρι κατά τη διάρκεια του παιχνιδιού.",
    english: "in some card games, the number of cards a player collects from a hand during the game."
}, {
    cypriot: "garabina",
    turkish: "lafazan",
    greek: "ρητορική",
    english: "natterer"
}, {
    cypriot: "mayna",
    turkish: "bırakmak, son vermek",
    greek: "να φύγω, να βάλω ένα τέλος",
    english: "to give up, put an end to"
}, {
    cypriot: "mayna etmek",
    turkish: "bir aracın veya insanın işe yaramaz hale gelmesi.",
    greek: "όταν ένα όχημα ή ένα άτομο καθίσταται άχρηστο.",
    english: "when a vehicle or a person is becomes useless."
}, {
    cypriot: "leva etmek",
    turkish: "boşaltmak, dökmek",
    greek: "αδειάστε, χύστε",
    english: "emptying, pouring"
}, {
    cypriot: "susda/susta",
    turkish: "amörtisör",
    greek: "αμορτισέρ",
    english: "shock absorber"
}, {
    cypriot: "zoppa",
    turkish: "sakat, biçimsiz",
    greek: "ανάπηρος, παραμορφωμένος",
    english: "disabled, misshapen"
}, {
    cypriot: "alina/galina",
    turkish: "Dişi Hindi",
    greek: "θηλυκή γαλοπούλα",
    english: "female turkey"
}, {
    cypriot: "babira",
    turkish: "ördek",
    greek: "Πάπια",
    english: "duck"
}, {
    cypriot: "babira",
    turkish: "ördek gibi yürüyen kişi",
    greek: "άτομο που περπατάει σαν πάπια",
    english: "anyone who walks like a duck"
}, {
    cypriot: "baranga",
    turkish: "derme çatma yapı, baraka",
    greek: "πρόχειρη κατασκευή, υπόστεγο",
    english: "makeshift structure, shed"
}, {
    cypriot: "birbandi",
    turkish: "serseri, giyimine dikkat etmeyen",
    greek: "αλήτης, άτομο που δεν φροντίζει τα ρούχα του",
    english: "tramp, who doesn't take care of his clothes"
}, {
    cypriot: "bomilarga",
    turkish: "domates",
    greek: "ντομάτα",
    english: "tomato"
}, {
    cypriot: "botsa",
    turkish: "şişe",
    greek: "μπουκάλι",
    english: "bottle"
}, {
    cypriot: "bronzo",
    turkish: "boru, delik",
    greek: "σωλήνας, διάτρηση",
    english: "tube, hole"
}, {
    cypriot: "bronzo",
    turkish: "bir işi başarma",
    greek: "επίτευξη μιας θέσης εργασίας",
    english: "accomplishing something"
}, {
    cypriot: "diril",
    turkish: "matkap",
    greek: "Τρυπάνι",
    english: "drill"
}, {
    cypriot: "galo",
    turkish: "erkek hindi",
    greek: "αρσενική γαλοπούλα",
    english: "male turkey"
}, {
    cypriot: "garafan",
    turkish: "adaçayı",
    greek: "Φασκόμηλο",
    english: "sage"
}, {
    cypriot: "παρέα",
    turkish: "dost grubu",
    greek: "Φιλική παρέα",
    english: "friend group"
}, {
    cypriot: "προλαββαίνω/προφτάννω κάτι",
    turkish: "bir şeye yetişmek. Örn; ödevi yetiştirdim-ödevi yapabildim, ödev yetişti",
    greek: "προλαβαίνω/προφτάνω κάτι. Παράδειγμα; Επρόλαβα/Επρόφτασα τζι ετέλειωσα/έκαμα την εργασίαν-Πρόλαβα/Πρόφτασα να τελειώσω/κάνω την εργασία.",
    english: "to catch up with something"
}, {
    cypriot: "yetiştirmek",
    turkish: "bir şeye yetişmek. Örn; ödevi yetiştirdim-ödevi yapabildim, ödev yetişti",
    greek: "προλαβαίνω/προφτάνω κάτι. Π.χ; Επρόλαβα/Επρόφτασα τζι ετέλειωσα/έκαμα την εργασίαν-Πρόλαβα/Πρόφτασα να τελειώσω/κάνω την εργασία.",
    english: "to catch up with something"
}, {
    cypriot: "bayvan",
    turkish: "be hayvan. Birine seslenmek için kullanılan argo söz.",
    greek: "Το 'be' είναι ένας τρόπος κλήσης, το 'hayvan' σημαίνει ζώο. Είναι μια αργκό λέξη για να φωνάξεις κάποιον. ",
    english: "‘be’ is a way of calling, ‘hayvan’ means animal. It is a slang word for calling out somebody"
}, {
    cypriot: "aş",
    turkish: "aç",
    greek: "Ανοίξτε το",
    english: "open"
}, {
    cypriot: "Argasdi/ Argasti",
    turkish: "Sürüngen, saçak halindeki kökleri derinlere giden muzır ot. Bilimsel adı: Elymus Repens",
    greek: "Ερπετό, επιβλαβές φυτό με ρίζες που πηγαίνουν βαθιά. Επιστημονική ονομασία: Elymus Repens",
    english: "Reptile, harmful plant with roots that go deep. Scintific name: Elymus Repens"
}, {
    cypriot: "ἄρκαστη",
    turkish: "Sürüngen, saçak halindeki kökleri derinlere giden muzır ot. Bilimsel adı: Elymus Repens",
    greek: "Ερπετό, επιβλαβές φυτό με ρίζες που πηγαίνουν βαθιά. Επιστημονική ονομασία: Elymus Repens",
    english: "Reptile, harmful plant with roots that go deep. Scintific name: Elymus Repens"
}, {
    cypriot: "böyün",
    turkish: "bugün",
    greek: "Σήμερα",
    english: "today"
}, {
    cypriot: "hover",
    turkish: "elektrikli süpürge",
    greek: "",
    english: "hoover"
}, {
    cypriot: "cemile",
    turkish: "begonvil",
    greek: "μπουκαμβίλια",
    english: "bougainvillea"
}, {
    cypriot: "Παπουτσόσυκο",
    turkish: "Yerli Kaktus türü",
    greek: "Τοπικό είδος κάκτου",
    english: "Local cactus type"
}, {
    cypriot: "kandounin",
    turkish: "sokak",
    greek: "στενό",
    english: "alley/corner"
}, {
    cypriot: "karaolos",
    turkish: "salyangoz",
    greek: "σαλιγκάρι",
    english: "snail"
}, {
    cypriot: "kastia",
    turkish: "işkence",
    greek: "βασανιστήρια",
    english: "tortures"
}, {
    cypriot: "kourva",
    turkish: "dönemeç",
    greek: "στροφή",
    english: "turn"
}, {
    cypriot: "lamintzana",
    turkish: "büyük kavanoz",
    greek: "δοχείο",
    english: "large jar"
}, {
    cypriot: "lavezin",
    turkish: "tencere",
    greek: "κατσαρόλα",
    english: "stock-pot"
}, {
    cypriot: "pomparo",
    turkish: "pompalamak",
    greek: "αντλώ",
    english: "to pump"
}, {
    cypriot: "rembelos",
    turkish: "serseri",
    greek: "αλήτης",
    english: "punk/tramp"
}, {
    cypriot: "skarparis",
    turkish: "ayakkabıcı",
    greek: "τσαγκάρης",
    english: "shoemaker"
}, {
    cypriot: "sior",
    turkish: "efendi",
    greek: "κύριος",
    english: "sir (interjection)"
}, {
    cypriot: "ambousta",
    turkish: "kutu",
    greek: "κουτί",
    english: "box/case"
}, {
    cypriot: "fallaro",
    turkish: "kafası karışmak",
    greek: "μπερδεύομαι",
    english: "to get confused"
}, {
    cypriot: "faraona",
    turkish: "inci keklik",
    greek: "φραγκόκοτα",
    english: "guineafowl"
}, {
    cypriot: "fkioron",
    turkish: "çiçek",
    greek: "λουλούδι",
    english: "flower"
}, {
    cypriot: "foundana",
    turkish: "çeşme",
    greek: "βρύση",
    english: "drinking fountain"
}, {
    cypriot: "karkola",
    turkish: "yatak",
    greek: "κρεβάτι",
    english: "bed"
}, {
    cypriot: "katsella",
    turkish: "inek",
    greek: "αγελάδα",
    english: "cow"
}, {
    cypriot: "landa",
    turkish: "durgun su",
    greek: "στάσιμα νερά",
    english: "stagnant water"
}, {
    cypriot: "laportaro",
    turkish: "şikayet etmek",
    greek: "καταγγέλλω",
    english: "to report an offence"
}, {
    cypriot: "lasmarin",
    turkish: "biberiye",
    greek: "δεντρολίβανο",
    english: "rosemary"
}, {
    cypriot: "dyspyrko",
    turkish: "kıskanmak",
    greek: "ζηλεύω",
    english: "to grudge"
}, {
    cypriot: "kostonno",
    turkish: "morartmak",
    greek: "μελανιάζω",
    english: "to bruise"
}, {
    cypriot: "marapella",
    turkish: "yabani erik",
    greek: "δαμάσκηνο",
    english: "damson plum"
}, {
    cypriot: "palaro",
    turkish: "güçlendirmek",
    greek: "ενισχύω",
    english: "to power up"
}, {
    cypriot: "pomilorin",
    turkish: "domates",
    greek: "ντομάτα",
    english: "tomato"
}, {
    cypriot: "pournella",
    turkish: "erik",
    greek: "δαμάσκηνο",
    english: "plum"
}, {
    cypriot: "siourkazoume",
    turkish: "sakinleşmek",
    greek: "ηρεμώ",
    english: "to calm"
}, {
    cypriot: "amanda",
    turkish: "sessizlik",
    greek: "ηρεμία",
    english: "quietness"
}, {
    cypriot: "flandjin",
    turkish: "karaciğer",
    greek: "συκώτι",
    english: "liver"
}, {
    cypriot: "flaouna",
    turkish: "paskalya çöreği",
    greek: "φλαούνα",
    english: "Easter brioche"
}, {
    cypriot: "flokkos",
    turkish: "paspas",
    greek: "σφουγγαρίστρα",
    english: "mop"
}, {
    cypriot: "foukou",
    turkish: "mangal",
    greek: "φουκού",
    english: "brazier"
}, {
    cypriot: "glipparo",
    turkish: "kaçmak",
    greek: "ξεφεύγω",
    english: "to avoid/escape"
}, {
    cypriot: "koumandaria",
    turkish: "tatlı şarap",
    greek: "κουμανδαρία",
    english: "sweet dessert wine"
}, {
    cypriot: "kouza",
    turkish: "kavanoz",
    greek: "στάμνα",
    english: "jar"
}, {
    cypriot: "mindjis",
    turkish: "zayıf",
    greek: "λεπτός",
    english: "lean"
}, {
    cypriot: "pezounin",
    turkish: "güvercin",
    greek: "περιστέρι",
    english: "pigeon"
}, {
    cypriot: "podina",
    turkish: "bot",
    greek: "μπότα",
    english: "boot"
}, {
    cypriot: "protsa",
    turkish: "çatal",
    greek: "πιρούνι",
    english: "fork"
}, {
    cypriot: "sende",
    turkish: "tavan arası",
    greek: "πατάρι",
    english: "loft"
}, {
    cypriot: "vlanga",
    turkish: "sabır",
    greek: "υπομονή",
    english: "patience"
}, {
    cypriot: "zampa",
    turkish: "uyluk",
    greek: "μηρός",
    english: "thigh"
}, {
    cypriot: "kouliazo",
    turkish: "süzmek",
    greek: "φιλτράρω",
    english: "to filter"
}, {
    cypriot: "koumera",
    turkish: "sağdıç",
    greek: "κουμέρα",
    english: "maid of honour"
}, {
    cypriot: "pouloustrina",
    turkish: "yeni yıl harçlığı",
    greek: "πουλουστρίνα",
    english: "New Year's monetary gift"
}, {
    cypriot: "rotsa",
    turkish: "taş",
    greek: "πέτρα",
    english: "stone"
}, {
    cypriot: "splinga",
    turkish: "iğne",
    greek: "καρφίτσα",
    english: "pin"
}, {
    cypriot: "tatsa",
    turkish: "leke",
    greek: "λεκές",
    english: "stain"
}, {
    cypriot: "tsaera",
    turkish: "sandalye",
    greek: "καρέκλα",
    english: "chair"
}, {
    cypriot: "tsiminia",
    turkish: "baca",
    greek: "καμινάδα",
    english: "chimney"
}, {
    cypriot: "tsoura",
    turkish: "keçi",
    greek: "κατσίκα",
    english: "goat"
}, {
    cypriot: "foutouniazoume",
    turkish: "öfkeye kapılmak",
    greek: "θυμώνουμε",
    english: "to get enraged"
}, {
    cypriot: "kallidjin",
    turkish: "nal",
    greek: "πετάλι",
    english: "horseshoe"
}, {
    cypriot: "koukoumas",
    turkish: "kumbara",
    greek: "κουμπαράς",
    english: "piggybank"
}, {
    cypriot: "kouspos",
    turkish: "kazma",
    greek: "τσάπα",
    english: "pickaxe"
}, {
    cypriot: "mandilia",
    turkish: "havlu",
    greek: "πετσέτα",
    english: "towel"
}, {
    cypriot: "mpoukkono",
    turkish: "ağzı tıkamak",
    greek: "μπουκώνω",
    english: "to fill/close the mouth"
}, {
    cypriot: "ploumizo",
    turkish: "süslemek",
    greek: "στολίζω",
    english: "to decorate"
}, {
    cypriot: "pounga",
    turkish: "cep",
    greek: "τσέπη",
    english: "pocket"
}, {
    cypriot: "rousoudin",
    turkish: "kızamık",
    greek: "ιλαρά",
    english: "measles"
}, {
    cypriot: "stouppono",
    turkish: "tıkanmak",
    greek: "βουλώνω",
    english: "to clog"
}, {
    cypriot: "zivania",
    turkish: "arak",
    greek: "ζιβανία",
    english: "type of arak"
}, {
    cypriot: "bumburislenme",
    turkish: "karıncalanma",
    greek: "φαγούρα",
    english: "tingle"
}, {
    cypriot: "uşana",
    turkish: "rahim",
    greek: "μήτρα",
    english: "womb"
}, {
    cypriot: "lagani",
    turkish: "birikmiş su",
    greek: "συσσωρευμένο νερό",
    english: "accumulated water"
}, {
    cypriot: "lukgo",
    turkish: "delik",
    greek: "τρύπα",
    english: "hole"
}, {
    cypriot: "Chofta/Choftes",
    turkish: "Saçmalık veya yalan",
    greek: "Μαλακίες ή ψέματα",
    english: "bullshit or lies"
}, {
    cypriot: "liveri",
    turkish: "uzun, ağır, ucu keskin ve üçgen, çukur kazmaya yarayan demir",
    greek: "μακρύ και βαρύ σίδερο με αιχμηρή και τριγωνική άκρη, που χρησιμοποιείται για το σκάψιμο λάκκων",
    english: "long and heavy iron with a sharp and triangular tip, used for digging holes"
}, {
    cypriot: "leva",
    turkish: "levye",
    greek: "λοστό",
    english: "Crowbar"
}, {
    cypriot: "ciboyi",
    turkish: "önü çengelli, hayvanları ayağından yakalamaya yarayan alet",
    greek: "εργαλείο με αγκιστρωτή πρόσοψη, που χρησιμοποιείται για να πιάνει τα ζώα από το πόδι",
    english: "a tool with a hooked front, used to catch animals by the foot"
}, {
    cypriot: "hellimli",
    turkish: "içinde hellim barındıran poğaça türü unlu mamül",
    greek: "αρτοσκευάσματα τύπου ζαχαροπλαστικής που περιέχουν χαλούμι",
    english: "pastry type bakery product containing halloumi"
}, {
    cypriot: "ariya",
    turkish: "matkap",
    greek: "Τρυπάνι",
    english: "Drill"
}, {
    cypriot: "formika",
    turkish: "kek kalıbı",
    greek: "φόρμα για κέικ",
    english: "cake mould"
}, {
    cypriot: "Langufa",
    turkish: "Çukur",
    greek: "Λάκκος",
    english: "Pit"
}, {
    cypriot: "Kıstırık",
    turkish: "Mandal, maşa",
    greek: "Μανταλάκια, λαβίδες",
    english: "Clothespins, tongs"
}, {
    cypriot: "dilihti",
    turkish: "Yabani ıspanaktan yapılan bir börek",
    greek: "Μια πίτα από άγριο σπανάκι",
    english: "A pie made from wild spinach"
}, {
    cypriot: "dirihti",
    turkish: "Yabani ıspanaktan yapılan bir börek",
    greek: "Μια πίτα από άγριο σπανάκι",
    english: "A pie made from wild spinach"
}, {
    cypriot: "dirifti",
    turkish: "Yabani ıspanaktan yapılan bir börek",
    greek: "Μια πίτα από άγριο σπανάκι",
    english: "A pie made from wild spinach"
}, {
    cypriot: "Drada",
    turkish: "Büyük yük gemisi/Obur",
    greek: "Μεγάλο φορτηγό πλοίο /Φαγάνας",
    english: "Large Cargo ship/glutton or overeater"
}, {
    cypriot: "Afa",
    turkish: "Herif/Adam",
    greek: "τύπος",
    english: "bloke"
}, {
    cypriot: "Isbor",
    turkish: "Spor",
    greek: "Αθλητισμός",
    english: "Sport"
}, {
    cypriot: "Dangos",
    turkish: "Aşırı yağlı yemek",
    greek: "Υπερβολικά λιπαρά τρόφιμα",
    english: "Excessively fatty food"
}, {
    cypriot: "Guspo",
    turkish: "Capa, Kazma",
    greek: "Αξίνα",
    english: "Pickaxe"
}, {
    cypriot: "Garavolli",
    turkish: "Salyangoz",
    greek: "Σαλιγκάρι",
    english: "Snail"
}, {
    cypriot: "Ablos",
    turkish: "Rütbesiz, sıradan, önemsiz",
    greek: "Ασήμαντος, απλός, ασήμαντος",
    english: "Insignificant, ordinary, trivial"
}, {
    cypriot: "Abosafi",
    turkish: "Karar vermek",
    greek: "Λήψη απόφασης",
    english: "To make a decision"
}, {
    cypriot: "Abohti/Abofdi",
    turkish: "Bir tür pastırma",
    greek: "Ένα είδος παστουρμά",
    english: "A type of cured meat"
}, {
    cypriot: "Abrıl",
    turkish: "Nisan ayı",
    greek: "Απρίλιος",
    english: "April"
}, {
    cypriot: "Acamı",
    turkish: "Tecrübesiz, işinde yeni olan(kişi)",
    greek: "Άπειρος, νέος στη δουλειά (άτομο)",
    english: "Inexperienced, novice (person)"
}, {
    cypriot: "Pataniya",
    turkish: "Bataniye",
    greek: "Κουβέρτα",
    english: "Blanket"
}, {
    cypriot: "Fanella",
    turkish: "Tişört",
    greek: "Φανέλα",
    english: "T-shirt"
}, {
    cypriot: "Babuç",
    turkish: "Terlik/Sandal",
    greek: "Παντόφλα/Σανδάλι",
    english: "Slippers/Sandals"
}, {
    cypriot: "Babutsa",
    turkish: "Yerli Kaktus türü",
    greek: "Τοπικό είδος κάκτου",
    english: "Local cactus type"
}, {
    cypriot: "Ziligurti",
    turkish: "Zehir cikarasin",
    greek: "Φτύνω δηλητήριο",
    english: "Spit poison"
}, {
    cypriot: "Hasba cikar",
    turkish: "Usandim Elinden",
    greek: "Δεν αντέχω άλλο μαζί σου!",
    english: "I'm fed up with you"
}, {
    cypriot: "Gondea",
    turkish: "Türkmenköy",
    greek: "Τουρκοχώρι",
    english: "Turkmenkoy (a place)"
}, {
    cypriot: "Gazafana",
    turkish: "Ozan Köy",
    greek: "Χωριό Οζάν",
    english: "Ozan Village"
}, {
    cypriot: "Siro",
    turkish: "Bilinmiyor",
    greek: "Άγνωστο",
    english: "Unknown"
}, {
    cypriot: "Ziziro",
    turkish: "Ağustos Böceği",
    greek: "Τζίτζικας",
    english: "Cicada"
}, {
    cypriot: "Zirzirolar",
    turkish: "Ağustos böcekleri",
    greek: "Τζιτζίκια",
    english: "Cicadas"
}, {
    cypriot: "Garacocco",
    turkish: "Siyah susam",
    greek: "Μαύρο σουσάμι",
    english: "Black sesame"
}, {
    cypriot: "Selenduruna",
    turkish: "Küçük Kertenkele",
    greek: "Μικρή σαύρα",
    english: "Small lizard"
}, {
    cypriot: "Alizavra",
    turkish: "Büyük Kertenkele",
    greek: "Σαύρα",
    english: "Large lizard"
}, {
    cypriot: "Gusbo",
    turkish: "Kazma",
    greek: "Καλέμι",
    english: "Pickaxe"
}, {
    cypriot: "Abondele",
    turkish: "Kafa karışıklığı",
    greek: "Σύγχυση",
    english: "Confusion"
}, {
    cypriot: "Angoni",
    turkish: "Torun",
    greek: "Εγγόνι",
    english: "Grandchild"
}, {
    cypriot: "Langirti",
    turkish: "Yüksek ani ses",
    greek: "Δυνατός ξαφνικός ήχος",
    english: "High sudden noise"
}, {
    cypriot: "Uruba",
    turkish: "Kıyafet(ler)",
    greek: "Ρούχα",
    english: "Clothes"
}, {
    cypriot: "Kapella",
    turkish: "Şapka",
    greek: "Καπέλο",
    english: "Hat"
}, {
    cypriot: "Boru",
    turkish: "Korna",
    greek: "Κόρνα",
    english: "Horn"
}, {
    cypriot: "Buji",
    turkish: "Araba parçası",
    greek: "Μπουζί",
    english: "Car part"
}, {
    cypriot: "Gabo",
    turkish: "Araba kaportası",
    greek: "Καπό αυτοκινήτου",
    english: "Car body"
}, {
    cypriot: "Deyigirmi",
    turkish: "Araba tekerleği, Jant",
    greek: "Τροχός αυτοκινήτου, Ζάντα",
    english: "Car wheel, Rims"
}, {
    cypriot: "Trapez",
    turkish: "Bilinmiyor",
    greek: "Άγνωστο",
    english: "Unknown"
}, {
    cypriot: "Gudalya",
    turkish: "Bilinmiyor",
    greek: "Άγνωστο",
    english: "Unknown"
}, {
    cypriot: "Caki",
    turkish: "Bilinmiyor",
    greek: "Άγνωστο",
    english: "Unknown"
}, {
    cypriot: "Dacca",
    turkish: "Bilinmiyor",
    greek: "Άγνωστο",
    english: "Unknown"
}, {
    cypriot: "Mavro Yerimo",
    turkish: "Bilinmiyor",
    greek: "Άγνωστο",
    english: "Unknown"
}, {
    cypriot: "Pasadempo",
    turkish: "Kabak çekirdeği",
    greek: "Κολοκυθόσπορος",
    english: "Pumpkin seed"
}, {
    cypriot: "Şasurdi",
    turkish: "Aklı karışık",
    greek: "Συγχυσμένος",
    english: "Confused"
}, {
    cypriot: "Şasurdis",
    turkish: "Aklı karışık",
    greek: "Συγχυσμένος",
    english: "Confused"
}, {
    cypriot: "Desteban",
    turkish: "Köy Bekçisi",
    greek: "Φύλακας χωριού",
    english: "Village guard"
}, {
    cypriot: "Goccinogologo",
    turkish: "Kırmızı popo",
    greek: "Κόκκινος κώλος",
    english: "Red bottom"
}, {
    cypriot: "Goccino",
    turkish: "Kırmızı",
    greek: "Κόκκινο",
    english: "Red"
}, {
    cypriot: "Gologo",
    turkish: "Popo",
    greek: "Κώλος",
    english: "Bottom"
}, {
    cypriot: "Fiskilik",
    turkish: "Disk",
    greek: "Δίσκος",
    english: "Disc"
}, {
    cypriot: "Mezdeki",
    turkish: "Baf sakızı",
    greek: "Τσίχλα από την Πάφο",
    english: "Bath gum"
}, {
    cypriot: "Gatsaris",
    turkish: "Tavukların kıllarını yakma",
    greek: "Κάψιμο φτερών κοτόπουλου",
    english: "Burning chicken feathers"
}, {
    cypriot: "Dilliro",
    turkish: "Üretken ancak tembel insan",
    greek: "Παραγωγικός τεμπέλης άνθρωπος",
    english: "Productive lazy person"
}, {
    cypriot: "Gokko",
    turkish: "Şeker",
    greek: "Ζάχαρη",
    english: "Sugar"
}, {
    cypriot: "Çatoz",
    turkish: "Serdarlı",
    greek: "Σερδαρλή",
    english: "Serdarli (a place)"
}, {
    cypriot: "Siona",
    turkish: "Yaban arısı",
    greek: "Αγριομέλισσα",
    english: "Wild wasp"
}, {
    cypriot: "Lapatoz",
    turkish: "Boğaziçi",
    greek: "Βόσπορος",
    english: "Bosphorus"
}, {
    cypriot: "Gurumanastir",
    turkish: "Çukurova",
    greek: "Τσουκούροβα",
    english: "Cukurova (a place)"
}, {
    cypriot: "Diriil",
    turkish: "Yonca",
    greek: "Τριφύλλι",
    english: "Clover"
}, {
    cypriot: "Bogurmek",
    turkish: "Bağırmak",
    greek: "Φωνάζω",
    english: "Shout"
}, {
    cypriot: "Solina",
    turkish: "Su borusu",
    greek: "Σωλήνας νερού",
    english: "Water pipe"
}, {
    cypriot: "Molehiya",
    turkish: "Geleneksel ıspanak yemeği",
    greek: "Παραδοσιακό πιάτο με σπανάκι",
    english: "Traditional spinach dish"
}, {
    cypriot: "Tayfalmak",
    turkish: "Bunalmak",
    greek: "Αγχωθείτε",
    english: "To be overwhelmed"
}, {
    cypriot: "Orasda",
    turkish: "Oradaki cisim",
    greek: "Αντικείμενο εκεί",
    english: "That object there"
}, {
    cypriot: "Bendo",
    turkish: "Asır altın",
    greek: "Καθαρός χρυσός",
    english: "Pure gold"
}, {
    cypriot: "Ora",
    turkish: "Orada",
    greek: "εκεί πέρα",
    english: "over there"
},
{
    cypriot: "Mora",
    turkish: "Paşaköy",
    greek: "Πασάκιοι",
    english: "Pasakoy (a place)"
}, {
    cypriot: "Bodamya",
    turkish: "Akça",
    greek: "Χρήμα",
    english: "Money"
}, {
    cypriot: "Isviç",
    turkish: "Kontak anahtarı",
    greek: "Κλειδί ανάφλεξης",
    english: "Ignition key"
}, {
    cypriot: "Bastarda",
    turkish: "Ailesi bilinmeyen",
    greek: "Άτομο άγνωστης καταγωγής",
    english: "Of unknown family"
}, {
    cypriot: "Vordo",
    turkish: "Fellah",
    greek: "Αγρότης",
    english: "Peasant"
}, {
    cypriot: "Guello",
    turkish: "Salak",
    greek: "Βλάκας",
    english: "Fool"
}, {
    cypriot: "Kukuletta",
    turkish: "Şapka",
    greek: "Καπέλο",
    english: "Hat"
}, {
    cypriot: "Kapison",
    turkish: "Kapüşon",
    greek: "Κουκούλα",
    english: "Hoody"
}, {
    cypriot: "Midem",
    turkish: "Madem",
    greek: "Αφού",
    english: "Since"
}, {
    cypriot: "Drabez",
    turkish: "Masa",
    greek: "Τραπέζι",
    english: "Table"
}, {
    cypriot: "Masappa",
    turkish: "Taşlı Kova",
    greek: "Κουβάς από πέτρα",
    english: "Stone bucket"
}, {
    cypriot: "Gamasa",
    turkish: "Gerizekalı",
    greek: "Ηλίθιος",
    english: "Stupid"
}, {
    cypriot: "Gindir",
    turkish: "Arala, aralık",
    greek: "Χάσμα, διάστημα",
    english: "Gap, interval"
}, {
    cypriot: "Kıs",
    turkish: "Kes/kapat",
    greek: "Κόψτε/Κλείστε",
    english: "Cut/Close"
}, {
    cypriot: "Oftirikord",
    turkish: "Aramızda kalsın",
    greek: "Ας μείνει μεταξύ μας",
    english: "Let's keep it between us"
}, {
    cypriot: "Guli",
    turkish: "Köpek",
    greek: "Σκύλος",
    english: "Dog"
}, {
    cypriot: "Tumali",
    turkish: "Polis",
    greek: "Αστυνομικός",
    english: "Police"
}, {
    cypriot: "Ikanmak",
    turkish: "Yıkanmak",
    greek: "Πλένω",
    english: "To wash"
}, {
    cypriot: "Sonram",
    turkish: "Sonra",
    greek: "Μετά",
    english: "After"
}, {
    cypriot: "Ikladim",
    turkish: "Ayıklamak",
    greek: "Να καθαρίσω",
    english: "To sober up"
}, {
    cypriot: "Ikla",
    turkish: "Ayıkla",
    greek: "Καθαρίζω",
    english: "Sober up"
}, {
    cypriot: "Pambik",
    turkish: "Pamuk",
    greek: "Βαμβάκι",
    english: "Cotton"
}, {
    cypriot: "Gara",
    turkish: "Siyah",
    greek: "Μαύρο",
    english: "Black"
}, {
    cypriot: "Bura",
    turkish: "İşaret edilen yer",
    greek: "Υποδεικνυόμενος τόπος",
    english: "Indicated place"
}, {
    cypriot: "Cakizdez",
    turkish: "Yeşil Turşu Zeytin",
    greek: "Πράσινες ελιές τουρσί",
    english: "Green pickled olives"
}, {
    cypriot: "Cav",
    turkish: "Heyecan sesi",
    greek: "Ήχος ενθουσιασμού",
    english: "Excitement sound"
}, {
    cypriot: "Genne",
    turkish: "O kişiye",
    greek: "Σε αυτό το άτομο",
    english: "To that person"
}, {
    cypriot: "Gey",
    turkish: "Giy",
    greek: "Φοράω",
    english: "Wear"
}, {
    cypriot: "Geymek",
    turkish: "Giyindim",
    greek: "Ντύθηκα",
    english: "I dressed"
}, {
    cypriot: "Sok",
    turkish: "Koymak/yerleştir",
    greek: "Βάζω",
    english: "To put"
}, {
    cypriot: "Gologaz",
    turkish: "Yerli Yemek",
    greek: "Τοπικό φαγητό",
    english: "Local Taro dish"
}, {
    cypriot: "Hellim",
    turkish: "Süt ürünü ama peynir değil",
    greek: "Προϊόν γάλακτος αλλά όχι τυρί",
    english: "Dairy product but not cheese"
}, {
    cypriot: "Cakirdak",
    turkish: "Don'daki pisliğin kakac olması",
    greek: "Η βρωμιά στον πάγο που γίνεται κόπρανα",
    english: "Dirt on the ice being poop"
}, {
    cypriot: "Frammo",
    turkish: "Bilinmiyor",
    greek: "Άγνωστο",
    english: "Unknown"
}, {
    cypriot: "Dosan",
    turkish: "İkinci el",
    greek: "Δεύτερο χέρι",
    english: "Second hand"
}, {
    cypriot: "Digne",
    turkish: "Dinle",
    greek: "Άκου",
    english: "Listen"
}, {
    cypriot: "Barbadutsa",
    turkish: "Bebek Yürütücü",
    greek: "Περιπατητής μωρού",
    english: "Baby walker"
}, {
    cypriot: "Gufi",
    turkish: "Yerel Zehirli Yılan",
    greek: "Τοπικό δηλητηριώδες φίδι",
    english: "Local poisonous snake"
}, {
    cypriot: "Bildircin",
    turkish: "Yerel Kuş türü",
    greek: "Τοπικό είδος πουλιού",
    english: "Local bird type"
}, {
    cypriot: "Murro",
    turkish: "Moron",
    greek: "Ηλίθιος",
    english: "Moron"
}, {
    cypriot: "Banna",
    turkish: "Hayvan Tedavisi",
    greek: "Θεραπεία ζώων",
    english: "Animal treatment"
}, {
    cypriot: "Seftali",
    turkish: "Tüpte yapılan Yerli Kebab",
    greek: "Τοπικό κεμπάπ φτιαγμένο σε σωλήνα",
    english: "Local kebab made from tripe"
}, {
    cypriot: "Bullez",
    turkish: "Küçük yerli sebze",
    greek: "Μικρό τοπικό λαχανικό",
    english: "Small local vegetable"
}, {
    cypriot: "Badadez bullez",
    turkish: "Patates ve küçük yerli sebzeden yapılan yemek",
    greek: "Πιάτο από πατάτες και μικρά τοπικά λαχανικά",
    english: "Dish made from potatoes and small local vegetables"
}, {
    cypriot: "Kologaz",
    turkish: "Yerli Sebze",
    greek: "Τοπικό λαχανικό",
    english: "Local vegetable"
}, {
    cypriot: "Dribidez",
    turkish: "Üç delikli şişe",
    greek: "Μπουκάλι με τρεις τρύπες",
    english: "Three-holed bottle"
}, {
    cypriot: "Dango",
    turkish: "Çirkin",
    greek: "Άσχημος",
    english: "Ugly"
}, {
    cypriot: "Nesdeng?",
    turkish: "Ne istiyorsun?",
    greek: "Τι θέλεις;",
    english: "What do you want?"
}, {
    cypriot: "Giccaccik",
    turkish: "Kız",
    greek: "Κορίτσι",
    english: "Girl"
}, {
    cypriot: "Pust Pezevenk",
    turkish: "Yerel argo kalıp",
    greek: "Τοπική αργκό",
    english: "Local slang"
}, {
    cypriot: "Napan",
    turkish: " Ne yapiyorsun",
    greek: "Γεια",
    english: "What Are You up to? (but used as hello generally)"
}, {
    cypriot: "Ispaho",
    turkish: "İp",
    greek: "Σχοινί",
    english: "Rope"
}, {
    cypriot: "Belo",
    turkish: "Kırmak",
    greek: "Σπάω",
    english: "Break"
}, {
    cypriot: "Gaco",
    turkish: "Lefkara işinde kare sınırlara yapılan el işi variyasyonu",
    greek: "Είδος χειροτεχνίας με τετράγωνα όρια στη δουλειά της Λευκάρ",
    english: "Lefkara square-bordered handicraft variation"
}, {
    cypriot: "Davinci",
    turkish: "Leonardo Da Vinci’nin Son akşam yemeğinde kullandığı Kıbrıs’tan satın alınan",
    greek: "Αγοράστηκε από την Κύπρο, χρησιμοποιήθηκε στο τελευταίο δείπνο του Leonardo Da Vinci",
    english: "Bought from Cyprus, used in Leonardo Da Vinci's Last Supper"
}, {
    cypriot: "Gucci",
    turkish: "Ayakta bilye oyununda atış şekli",
    greek: "Τρόπος ρίψης στο παιχνίδι με μπίλιες",
    english: "Marble game shooting style"
}, {
    cypriot: "Gofti",
    turkish: "Alçalarak bilye atış şekli",
    greek: "Στυλ ρίψης μπίλιας χαμηλά",
    english: "Crouching marble shooting style"
}, {
    cypriot: "Pirili",
    turkish: "Bilye",
    greek: "Μπίλια",
    english: "Marble"
}, {
    cypriot: "Hemeneken",
    turkish: "Yerli oyun",
    greek: "Τοπικό παιχνίδι",
    english: "Local game"
}, {
    cypriot: "Gurgura",
    turkish: "Gırtlak, boğaz",
    greek: "Λαιμός",
    english: "Throat"
}, {
    cypriot: "Lingeri",
    turkish: "Yerli oyun",
    greek: "Τοπικό παιχνίδι",
    english: "Local game"
}, {
    cypriot: "Balligari",
    turkish: "Güçlü kuvvetli",
    greek: "Δυνατός",
    english: "Strong and powerful"
}, {
    cypriot: "Ditsiro",
    turkish: "Çıplak, Fakir",
    greek: "Γυμνός, φτωχός",
    english: "Naked, poor"
}, {
    cypriot: "Millingidi",
    turkish: "Hastalıklı, Zayıf",
    greek: "Αρρωστιάρης, αδύναμος",
    english: "Sickly, weak"
}, {
    cypriot: "Dilbandi",
    turkish: "Kendini bir şey zanneden",
    greek: "Αυτοσημαντικός",
    english: "Self-important"
}, {
    cypriot: "Luana",
    turkish: "Yerli Ot, Yerli yemek çeşiti",
    greek: "Τοπικό χόρτο, τοπικό είδος φαγητού",
    english: "Local herb, local dish variety"
}, {
    cypriot: "Mangallo",
    turkish: "Yerli turşu",
    greek: "Τοπικό τουρσί",
    english: "Local pickle"
}, {
    cypriot: "Gullumbura",
    turkish: "Yerli turp çeşiti, yemek çeşiti",
    greek: "Τοπικό είδος ραπανάκι, είδος φαγητού",
    english: "Local radish type, dish variety"
}, {
    cypriot: "Gullumbara",
    turkish: "Rica üstüne göt σίκεν",
    greek: "Άγνωστο",
    english: "Rude expression, literal translation inappropriate"
}, {
    cypriot: "Gombina",
    turkish: "Entrika",
    greek: "Ιντρίγκα",
    english: "Intrigue"
}, {
    cypriot: "Voli",
    turkish: "Vole (Voliyi vurma)",
    greek: "Βολή",
    english: "Volley (hitting a volley)"
}, {
    cypriot: "İndiregandi",
    turkish: "Rüşvet",
    greek: "Δωροδοκία",
    english: "Bribe"
}, {
    cypriot: "Fenalla",
    turkish: "Kazak, İçlik",
    greek: "Πουλόβερ, εσωτερικό",
    english: "Sweater, undershirt"
}, {
    cypriot: "Tabella",
    turkish: "Tabela",
    greek: "Πινακίδα",
    english: "Signboard"
}, {
    cypriot: "Voppa",
    turkish: "Yerli balık",
    greek: "Τοπικό ψάρι",
    english: "Native fish"
}, {
    cypriot: "Gullurikya",
    turkish: "Pekmezden yapılan yerel tatlı",
    greek: "Τοπικό γλυκό φτιαγμένο από πετιμέζι",
    english: "Local dessert made with molasses"
}, {
    cypriot: "Gulluri",
    turkish: "Simit",
    greek: "Κουλούρι",
    english: "Bagel"
}, {
    cypriot: "Golifa",
    turkish: "Susam, badem, kuru üzüm ve nar taneleriyle karıştırılmış haşlanmış buğday",
    greek: "Σιτάρι με σουσάμι, αμύγδαλα, σταφίδες και ρόδι",
    english: "Boiled wheat with sesame, almonds, raisins, and pomegranate"
}, {
    cypriot: "Bidda badadaz",
    turkish: "Bilinmiyor",
    greek: "Άγνωστο",
    english: "No Turkish translation provided"
}, {
    cypriot: "Badadez köftesi",
    turkish: "Bilinmiyor",
    greek: "Άγνωστο",
    english: "No Turkish translation provided"
}, {
    cypriot: "Mesenjer",
    turkish: "Odacı",
    greek: "Υπάλληλος",
    english: "Bellboy"
}, {
    cypriot: "Bullaga",
    turkish: "Basık yuvarlak. Tam yuvarlak olmayan",
    greek: "Πλατύ στρογγυλό. Όχι απόλυτα στρογγυλό",
    english: "Flattened round, not perfectly round"
}, {
    cypriot: "Aforoz",
    turkish: "Tertiplemek",
    greek: "Οργάνωση",
    english: "Arrange"
}, {
    cypriot: "Borga",
    turkish: "Önlük",
    greek: "Ποδιά",
    english: "Apron"
}, {
    cypriot: "Glaj",
    turkish: "Debriyaj",
    greek: "Συμπλέκτης",
    english: "Clutch"
}, {
    cypriot: "Tekne",
    turkish: "Lavabo",
    greek: "Νιπτήρας",
    english: "Sink"
}, {
    cypriot: "Afdos",
    turkish: "Gizli sevgili, Metres",
    greek: "Ερωμένη, κρυφή αγάπη",
    english: "Mistress, secret lover"
}, {
    cypriot: "Aferina/Aterina",
    turkish: "Küçük boylu bir tür balık",
    greek: "Ένα είδος μικρού ψαριού",
    english: "A type of small fish"
}, {
    cypriot: "Aforiya",
    turkish: "Kısır, verimsiz",
    greek: "Άγονο, μη παραγωγικό",
    english: "Barren, unproductive"
}, {
    cypriot: "Afroza",
    turkish: "Suyla karıştırılıp içildiğinde köpüren sodalı madde",
    greek: "Αναβράζουσα σόδα",
    english: "Effervescent soda"
}, {
    cypriot: "Afyon",
    turkish: "Haşhaş kapsüllerinden yapılan uyuşturucu",
    greek: "Όπιο",
    english: "Opium"
}, {
    cypriot: "Ağrelli/Ayrelli",
    turkish: "Taze sürgünleri yenebilen bir tür ot, kuşkonmaz",
    greek: "Σπαράγγι",
    english: "Asparagus"
}, {
    cypriot: "Ahanadu",
    turkish: "Ölümsüz anlamına gelen bir tür bitki",
    greek: "Αθάνατο φυτό",
    english: "Everlasting plant"
}, {
    cypriot: "Ahlavuna",
    turkish: "Pilavuna",
    greek: "Τοπικό πιάτο με ρύζι",
    english: "Local dish with rice"
}, {
    cypriot: "Ahraciya",
    turkish: "Böğrülceyle yemeği yapılan yabani bir ot",
    greek: "Άγριο φυτό που χρησιμοποιείται στα γεύματα",
    english: "Wild plant used in meals"
}, {
    cypriot: "Ahretti/Ahreddi/Arahti/Arakti",
    turkish: "Yün eğirmeye yarayan alet, kirmen",
    greek: "Εργαλείο περιστροφής μαλλιού",
    english: "Wool spinning tool"
}, {
    cypriot: "Ahristo",
    turkish: "Gevşemiş, verimsiz, kullanılamaz duruma gelmiş şey",
    greek: "Χαλασμένο, άχρηστο",
    english: "Loosened, worn out"
}, {
    cypriot: "Aht",
    turkish: "Yemin, ant",
    greek: "Όρκος",
    english: "Oath"
}, {
    cypriot: "Ahıla vahıla",
    turkish: "Acıma, üzüntü ifade eden sözcükler",
    greek: "Λέξεις που εκφράζουν οίκτο ή λύπη",
    english: "Words expressing pity or sorrow"
}, {
    cypriot: "Akakiya/Agagiya",
    turkish: "Kıbrıs akasyası",
    greek: "Ακακία Κύπρου",
    english: "Cyprus acacia"
}, {
    cypriot: "Aksona/Agsona",
    turkish: "Tekerlek mili, Dingil",
    greek: "Άξονας",
    english: "Axle"
}, {
    cypriot: "Alagadi",
    turkish: "Balıkçıların misinayı sardıkları makara",
    greek: "Μηχανή αλιείας",
    english: "Fishing reel"
}, {
    cypriot: "Babakya/Babatya",
    turkish: "Papazın karısı",
    greek: "Η γυναίκα του παπά",
    english: "Priest's wife"
}, {
    cypriot: "Babatsino",
    turkish: "Bir çeşit meyve, diken dudu, böğürtlen",
    greek: "Ένα είδος φρούτου, βατόμουρο",
    english: "A type of fruit, blackberry"
}, {
    cypriot: "Babay",
    turkish: "Hoşça kal, Güle güle",
    greek: "Αντίο",
    english: "Goodbye"
}, {
    cypriot: "Babbarga",
    turkish: "Verimsiz toprak",
    greek: "Άγονη γη",
    english: "Barren land"
}, {
    cypriot: "Babıç/Babış/Babuş",
    turkish: "Evin içinde giyilen ayakkabı",
    greek: "Παπούτσι εσωτερικού χώρου",
    english: "House shoe"
}, {
    cypriot: "Babillaro",
    turkish: "Erken olgunlaşan incir",
    greek: "Σύκο που ωριμάζει νωρίς",
    english: "Early ripening fig"
}, {
    cypriot: "Babudsa",
    turkish: "Kaktüs, Mısır inciri, kaktüs ve meyvesi",
    greek: "Κάκτος, και ο καρπός του",
    english: "Cactus, prickly pear"
}, {
    cypriot: "Babutsosiga",
    turkish: "Babutsanın meyvesi, babutsa inciri",
    greek: "Φρούτο του κάκτου, σύκο της Μπαμπουτσάς",
    english: "Prickly pear fruit"
}, {
    cypriot: "Baççavura/Paçavura",
    turkish: "Eskimiş bez, çaput, kirli ve yırtık bez",
    greek: "Παλιό πανί, κουρέλι",
    english: "Old cloth, rag"
}, {
    cypriot: "Bado",
    turkish: "Ayakkabı kalıbı, ayakkabının içine konan yükseltici madde, kat",
    greek: "Σόλα παπουτσιού, ένθετο ανύψωσης",
    english: "Shoe insert, insole"
}, {
    cypriot: "Bado",
    turkish: "İpek böcekçiliğinde merteklere asılan iplerin arasına bağlanan 60 cm'lik hasırlar",
    greek: "Ψάθες δεμένες μεταξύ των σπειρών που κρέμονται από τους δοκούς στη μεταξουργία",
    english: "60 cm mats tied between threads hung on beams in silkworm farming"
}, {
    cypriot: "Baduna/Badune",
    turkish: "Düztaban",
    greek: "Επίπεδος",
    english: "Flatfoot"
}, {
    cypriot: "Baduri",
    turkish: "Elek",
    greek: "Κόσκινο",
    english: "Sieve"
}, {
    cypriot: "Bafidi",
    turkish: "Baflı, Baf köyünden olan kişi",
    greek: "Άτομο από την Πάφο",
    english: "Person from Paphos"
}, {
    cypriot: "Bakara/Bagara",
    turkish: "Makara",
    greek: "Τροχαλία",
    english: "Reel"
}, {
    cypriot: "Baggalao/Buggalao",
    turkish: "Tuzlaması yapılan bir tür balık",
    greek: "Ένα είδος αλατισμένου ψαριού",
    english: "A type of salted fish"
}, {
    cypriot: "Bağado",
    turkish: "Dondurma",
    greek: "Παγωτό",
    english: "Ice cream"
}, {
    cypriot: "Balligarya/Ballikarya/Balligari",
    turkish: "Kabadayı",
    greek: "Μπράβος",
    english: "Bully"
}, {
    cypriot: "Ballura/Pallura",
    turkish: "Bir çeşit dikenli bitki",
    greek: "Ένα είδος αγκαθωτού φυτού",
    english: "A type of thorny plant"
}, {
    cypriot: "Bambulli",
    turkish: "Şişlik, su kabarcığı, baloncuk",
    greek: "Οίδημα, υδατική φούσκα, φυσαλίδα",
    english: "Swelling, water bubble, bubble"
}, {
    cypriot: "Bandabuliya",
    turkish: "Belediye çarşısı, kapalı pazar yeri",
    greek: "Δημοτική αγορά, σκεπαστή αγορά",
    english: "Municipal bazaar, covered market place"
}, {
    cypriot: "Bango/Banko",
    turkish: "Tezgah",
    greek: "Πάγκος",
    english: "Counter"
}, {
    cypriot: "Barabahna",
    turkish: "Hayvanların yem yediği ahşaptan yapılmış yer",
    greek: "Ξύλινη θέση που χρησιμοποιούν τα ζώα για φαγητό",
    english: "A place made of wood where animals eat"
}, {
    cypriot: "Barabono",
    turkish: "Şikayet, yakınma",
    greek: "Παράπονο",
    english: "Complaint"
}, {
    cypriot: "Barbadusa/Barbarudsa/Bahbadusa",
    turkish: "Yürüteç",
    greek: "Περπατούρα",
    english: "Walker"
}, {
    cypriot: "Peşgir",
    turkish: "Genellikle mutfakta kullanılan küçük havlu",
    greek: "Πετσέτα κουζίνας",
    english: "Tea towel that is used in the kitchen"
}, {
    cypriot: "Goflamak",
    turkish: "Gaza getirmek",
    greek: "να ενθουσιάσει κάποιον",
    english: "Pump someone up/ Getting someones blood up"
}, {
    cypriot: "Gomma",
    turkish: "Arkadaş/Ahbap",
    greek: "Φίλος/Φίλη",
    english: "Friend"
}, {
    cypriot: "Gannavuri",
    turkish: "Uyuşturucu",
    greek: "Ουσίες",
    english: "Weed Drug"
}, {
    cypriot: "Barella",
    turkish: "Gemilerde pervanelerin takıldığı kısım, pervane yatağı",
    greek: "Θέση του προπέλα σε πλοία, έδραση προπέλας",
    english: "The part where propellers are installed on ships, propeller bearing"
}, {
    cypriot: "Barıd",
    turkish: "Barut",
    greek: "Μπαρούτι",
    english: "Gunpowder"
}, {
    cypriot: "Bariya",
    turkish: "Dost grubu",
    greek: "Φιλική παρέα",
    english: "Friend group"
}, {
    cypriot: "Barra",
    turkish: "Çekip gitme, Defolma",
    greek: "Φύγε",
    english: "Get out of here"
}, {
    cypriot: "Basbalya",
    turkish: "Tokat, şamar",
    greek: "Χαστούκι",
    english: "Slap"
}, {
    cypriot: "Basdiş/Bastiş",
    turkish: "Nikah veya düğünlerde dağıtılan bir tür pasta, pastiş",
    greek: "Ένα είδος κέικ που διανέμεται σε γάμους",
    english: "A type of cake distributed at weddings or weddings"
}, {
    cypriot: "Baso",
    turkish: "Vazgeçme, caymak",
    greek: "Εγκαταλείπω",
    english: "Give up"
}, {
    cypriot: "Bastarda",
    turkish: "Evlilik dışı doğan veya babası belli olmayan çocuk, piç",
    greek: "Εξώγαμο παιδί",
    english: "Bastard"
}, {
    cypriot: "Bastelli/Basdelli/Pastelli",
    turkish: "keçiboynuzu şurubundan yapılan geleneksel bir Kıbrıs tatlısıdır",
    greek: "Παστέλι",
    english: "Pastelli is a traditional Cypriot sweet made of carob syrup."
}, {
    cypriot: "Eyya",
    turkish: "Evet, Dogrudur",
    greek: "Ναι",
    english: "Yes/right/correct"
}, {
    cypriot: "dabaca",
    turkish: "kamış ya da dut ağacı dallarından yapılan ekmek sepeti",
    greek: "καλάθι από καλάμια ή κλαδιά μουριάς",
    english: "basket made of reed or mulberry branches"
}, {
    cypriot: "daf",
    turkish: "T biçimindeki boru ek yeri",
    greek: "σύνδεσμος σχήματος Τ",
    english: "T-shaped pipe joint"
}, {
    cypriot: "dakko",
    turkish: "takoz, sandal desteği",
    greek: "τάκος, στήριγμα για βάρκα",
    english: "chock, boat support"
}, {
    cypriot: "dakko/daggo",
    turkish: "büyük parça, fazla",
    greek: "μεγάλο κομμάτι, υπερβολικό",
    english: "large piece, excess"
}, {
    cypriot: "daksipa",
    turkish: "beklenmedik bir anda ortaya çıkan, ansızın",
    greek: "εμφανιζόμενος ξαφνικά, απρόσμενα",
    english: "suddenly appearing, unexpectedly"
}, {
    cypriot: "dalari/dalar",
    turkish: "nor/peynir/hellim süzmeye yarayan sazdan yapılan kap",
    greek: "δοχείο από καλάμι για σούρωμα τυριού/χαλουμιού",
    english: "vessel made of reed used for straining curd/cheese/hellim"
}, {
    cypriot: "danaş",
    turkish: "akıl almak, fikir sormak",
    greek: "ζητώ συμβουλή, ζητώ γνώμη",
    english: "to seek advice, to ask for an opinion"
}, {
    cypriot: "dane",
    turkish: "tohum, adet, her biri",
    greek: "σπόρος, μονάδα, το καθένα",
    english: "seed, unit, each"
}, {
    cypriot: "daratsa",
    turkish: "evlerin girişindeki küçük oda, teras",
    greek: "μικρό δωμάτιο στην είσοδο του σπιτιού, βεράντα",
    english: "small room at the entrance of a house, terrace"
}, {
    cypriot: "dayak yedi",
    turkish: "oyunda yenilmek, kaybetmek",
    greek: "χάνω σε παιχνίδι",
    english: "to lose in a game"
}, {
    cypriot: "deyyus",
    turkish: "karısını satan veya aldatan",
    greek: "άντρας που πουλάει ή απατά τη γυναίκα του",
    english: "a man who sells or cheats on his wife"
}, {
    cypriot: "deza",
    turkish: "kıvamında, en yüksek noktasında",
    greek: "στην κορυφή του, σε άριστη κατάσταση",
    english: "at its peak, in perfect condition"
}, {
    cypriot: "dırada",
    turkish: "yardımcı balıkçı teknesi, çektiri",
    greek: "βοηθητικό αλιευτικό σκάφος, μικρή ιστιοφόρος βάρκα",
    english: "auxiliary fishing boat, small sailing boat"
}, {
    cypriot: "dırahoma",
    turkish: "Ortodokslarda güveyiye verilen çeyiz",
    greek: "προίκα που δίνεται στον γαμπρό στην Ορθόδοξη παράδοση",
    english: "dowry given to the groom in Orthodox traditions"
}, {
    cypriot: "dıramba/trampa",
    turkish: "değiş tokuş",
    greek: "ανταλλαγή, παζάρι",
    english: "barter, exchange"
}, {
    cypriot: "dırankaşa",
    turkish: "hurda haline gelmiş araba",
    greek: "αυτοκίνητο που έχει μετατραπεί σε παλιοσίδερα",
    english: "car reduced to scrap"
}, {
    cypriot: "dıraşilya",
    turkish: "hayvanların boyunduruğunun altına konan atın bez",
    greek: "πανί τοποθετημένο κάτω από τον ζυγό των ζώων",
    english: "cloth placed under the yoke of animals"
}, {
    cypriot: "diblari",
    turkish: "ikiz kuzu doğuran koyun",
    greek: "προβατίνα που γεννάει δίδυμα αρνάκια",
    english: "ewe that gives birth to twin lambs"
}, {
    cypriot: "dibozido",
    turkish: "büyük su deposu",
    greek: "μεγάλη δεξαμενή νερού",
    english: "large water tank"
}, {
    cypriot: "diftiri",
    turkish: "çıplak, hiçbir şeyi olmayan",
    greek: "γυμνός, χωρίς τίποτα",
    english: "naked, having nothing"
}, {
    cypriot: "diftiros",
    turkish: "yarı çıplak",
    greek: "ημίγυμνος",
    english: "half-naked"
}, {
    cypriot: "dilliro",
    turkish: "dillirgalı",
    greek: "με ντιλίργκα (ειδικός όρος)",
    english: "with dillirga (a specific term)"
}, {
    cypriot: "dimbaro",
    turkish: "davul, trampet, kulak zarı",
    greek: "τύμπανο, ταμπούρο, τύμπανο αυτιού",
    english: "drum, snare drum, eardrum"
}, {
    cypriot: "diployeni",
    turkish: "sakalı iki yana uzayan",
    greek: "γένια που απλώνονται και στις δύο πλευρές",
    english: "beard extending to both sides"
}, {
    cypriot: "diplokuskunos",
    turkish: "çift horgüçlü deve",
    greek: "καμήλα με δύο καμπούρες",
    english: "double-humped camel"
}, {
    cypriot: "dirabez/tırabez",
    turkish: "masa",
    greek: "τραπέζι",
    english: "table"
}, {
    cypriot: "diratsani",
    turkish: "küçük boynuzlu koç",
    greek: "κριάρι με μικρά κέρατα",
    english: "ram with small horns"
}, {
    cypriot: "diribidez",
    turkish: "sacda pişirilen bir çeşit pide",
    greek: "πίτα ψημένη σε μεταλλική πλάκα",
    english: "a type of flatbread cooked on a metal sheet"
}, {
    cypriot: "dirifil/tirifil",
    turkish: "yabani yonca",
    greek: "άγριο τριφύλλι",
    english: "wild clover"
}, {
    cypriot: "diriftari",
    turkish: "hamur parçalarından yapılmış çorba",
    greek: "σούπα φτιαγμένη από κομμάτια ζύμης",
    english: "soup made from pieces of dough"
}, {
    cypriot: "dirifti",
    turkish: "rende",
    greek: "τρίφτης",
    english: "grater"
}, {
    cypriot: "diriftiri",
    turkish: "mala, sıvayı düzeltmeye yarayan alet",
    greek: "σπάτουλα, εργαλείο για την εξομάλυνση σοβά",
    english: "trowel, a tool for smoothing plaster"
}, {
    cypriot: "diriha",
    turkish: "ceketle astar arasına konan kalın kumaş",
    greek: "παχύ ύφασμα τοποθετημένο μεταξύ του σακακιού και της φόδρας",
    english: "thick fabric placed between a jacket and its lining"
}, {
    cypriot: "diriminis",
    turkish: "ölen birinin kırklanana kadar geçen sürede üç aydan gün alması",
    greek: "η περίοδος των τριών μηνών μετά τον θάνατο κάποιου μέχρι την τεσσαρακοστή ημέρα",
    english: "the period within three months after someone's death until the fortieth day"
}, {
    cypriot: "ditsi/gitsa/diçi",
    turkish: "bir tür av kuşu, çok zayıf",
    greek: "ένας τύπος θηραμάτων, πολύ αδύνατος",
    english: "a type of game bird, very thin"
}, {
    cypriot: "ditsiro",
    turkish: "çıplak, çok fakir",
    greek: "γυμνός, πολύ φτωχός",
    english: "naked, very poor"
}, {
    cypriot: "diyanisi",
    turkish: "yağda kızartılmış soğan",
    greek: "τηγανισμένο κρεμμύδι",
    english: "fried onion"
}, {
    cypriot: "dombila/dombula/tombila",
    turkish: "tombala",
    greek: "μπίνγκο",
    english: "bingo"
}, {
    cypriot: "dono/tono",
    turkish: "bir tonluk ağırlık ölçüsü",
    greek: "μονάδα βάρους ίση με έναν τόνο",
    english: "a unit of weight equal to one ton"
}, {
    cypriot: "dono",
    turkish: "demet halinde bükülmüş saz, örülmüş sazdan yapılan sandalye",
    greek: "δέσμη από λυγισμένα καλάμια, καρέκλα φτιαγμένη από πλεκτά καλάμια",
    english: "bundle of bent reeds, chair made of woven reeds"
}, {
    cypriot: "doriyan",
    turkish: "ücretsiz gönüllü çalışan kimse",
    greek: "εθελοντής που εργάζεται χωρίς πληρωμή",
    english: "a volunteer working without pay"
}, {
    cypriot: "döblek/deblek/deflek/dümlek/döplek",
    turkish: "dümbelek, darbuka",
    greek: "τουμπελέκι, νταρμπούκα",
    english: "goblet drum, darbuka"
}, {
    cypriot: "döğen/düven",
    turkish: "harmanda ekinin sap ile tanelerini ayıran alet",
    greek: "εργαλείο που χρησιμοποιείται στο αλώνισμα για να διαχωρίσει το σιτάρι από το στάχυ",
    english: "a tool used in threshing to separate grain from the stalk"
}, {
    cypriot: "dört çar",
    turkish: "zarın dört dört gelmesi",
    greek: "ρίξιμο δύο τεσσάρων στα ζάρια",
    english: "rolling double fours in dice"
}, {
    cypriot: "drabana",
    turkish: "matkap",
    greek: "τρυπάνι",
    english: "drill"
}, {
    cypriot: "draşilla/draşilya",
    turkish: "Bağzıkara da denilen bir tür kuş",
    greek: "ένας τύπος πουλιού που ονομάζεται επίσης Μπαγζικάρα",
    english: "a type of bird also known as Bağzıkara"
}, {
    cypriot: "drohalla/dorobulla",
    turkish: "hellim yapılırken artakalan kırıntılar",
    greek: "υπολείμματα από την παραγωγή χαλουμιού",
    english: "leftover crumbs from making halloumi"
}, {
    cypriot: "drolli",
    turkish: "el arabası, romörk",
    greek: "καροτσάκι, ρυμουλκούμενο",
    english: "wheelbarrow, trailer"
}, {
    cypriot: "durulli",
    turkish: "doruk, üst",
    greek: "κορυφή, πάνω",
    english: "peak, top"
}, {
    cypriot: "durumbono/drumbono/drumbolo",
    turkish: "öne doğru eğilerek kıçını gösterme, kıç ortaya çıkacak şekilde eğilme",
    greek: "κάμψη προς τα εμπρός για να δείξει τα οπίσθια, σκύψιμο που αποκαλύπτει τα οπίσθια",
    english: "bending forward to show the buttocks, leaning so the buttocks are exposed"
}, {
    cypriot: "çabba",
    turkish: "toprağı kazmak için kullanılan alet",
    greek: "ξινάρι",
    english: "pickaxe"
}, {
    cypriot: "çabba",
    turkish: "gemi demiri",
    greek: "άγκυρα",
    english: "anchor"
}, {
    cypriot: "çappık",
    turkish: "çabuk",
    greek: "γρήγορος",
    english: "quick"
}, {
    cypriot: "çakıstez/çakızdez",
    turkish: "belirli işlemlerden geçerek hazırlanan Kıbrıs’a özgü yeşil zeytin",
    greek: "τσακιστές ελιές",
    english: "processed green olives from Cyprus"
}, {
    cypriot: "çakkari",
    turkish: "hayvanların boyuna takılan küçük çan",
    greek: "κουδουνάκι για ζώα",
    english: "small bell worn around the neck of animals"
}, {
    cypriot: "çakraya gelmek",
    turkish: "oyuna gelmek",
    greek: "παγιδεύομαι",
    english: "being tricked"
}, {
    cypriot: "çakrobudilya/çakrobidilya",
    turkish: "yumurta otu",
    greek: "σολανό",
    english: "solanum"
}, {
    cypriot: "çakulet/çukulet/çukulat",
    turkish: "çukulata",
    greek: "σοκολάτα",
    english: "chocolate"
}, {
    cypriot: "çangar",
    turkish: "ayakkabıcı, deri ustası, çangar çizmesi yapan usta",
    greek: "τσαγκάρης, τεχνίτης δερμάτινων ειδών, κατασκευαστής μποτών Çangar",
    english: "shoemaker, leather craftsman, Çangar boot maker"
}, {
    cypriot: "çap",
    turkish: "hile,yalan,dolandırma",
    greek: "απάτη, ψέμα",
    english: "fraud, lie, scam"
}, {
    cypriot: "çapaçulli",
    turkish: "kötü giyimli,pasaklı",
    greek: "κακοντυμένος, απεριποίητος",
    english: "poorly dressed, slovenly"
}, {
    cypriot: "çardelli/sardelli",
    turkish: "bitki türü ve onun çiçeği",
    greek: "είδος φυτού και το άνθος του",
    english: "a type of plant and its flower"
}, {
    cypriot: "çardella",
    turkish: "konserve balık",
    greek: "κονσερβοποιημένο ψάρι",
    english: "canned fish"
}, {
    cypriot: "çat",
    turkish: "birleştirmek, kaynaştırmak",
    greek: "ένωση, σύντηξη",
    english: "join, fuse"
}, {
    cypriot: "çatizma/çatismata",
    turkish: "manilerle yapılan atışma",
    greek: "αντιπαράθεση με μαντινάδες",
    english: "verbal duel with rhymes"
}, {
    cypriot: "çember",
    turkish: "kadın başörtüsü,yemeni",
    greek: "μαντίλι, κεφαλόδεσμος",
    english: "women's headscarf, yemenite headscarf"
}, {
    cypriot: "çerçelli",
    turkish: "hamurdan yapılan bir tatlı",
    greek: "γλυκό από ζύμη",
    english: "dessert made from dough"
}, {
    cypriot: "fesat, hileci, karmakarışık durum",
    turkish: "κακόβουλος, απατεώνας, χαοτική κατάσταση",
    greek: "malicious, deceitful, chaotic situation",
    english: ""
}, {
    cypriot: "çilte",
    turkish: "şilte",
    greek: "στρώμα",
    english: "mattress"
}, {
    cypriot: "çimbile",
    turkish: "değnekle hayvanı dürtmek",
    greek: "τσιμπώ ζώο με ραβδί",
    english: "prod an animal with a stick"
}, {
    cypriot: "çiriş",
    turkish: "yabani pırasa kökünden yapılan yapıştırıcı",
    greek: "κόλλα από άγριο πράσο",
    english: "adhesive made from wild leek"
}, {
    cypriot: "çitari",
    turkish: "bir tür kumaş",
    greek: "είδος υφάσματος",
    english: "a type of fabric"
}, {
    cypriot: "çivit",
    turkish: "gebe kadınların yüz ve vücutlarında oluşan leke",
    greek: "κηλίδες στο πρόσωπο και το σώμα των εγκύων γυναικών",
    english: "spots on the face and body of pregnant women"
}, {
    cypriot: "çizi",
    turkish: "saban demirinin bıraktığı iz, tarlada ekilmek için açılan çukur çizgisi",
    greek: "ίχνος αρότρου, αυλάκι σποράς",
    english: "plow trace, furrow for planting"
}, {
    cypriot: "çorvacı/çorbacı",
    turkish: "osmanlı döneminde rum zenginlerine verilen ünvan",
    greek: "τίτλος που δόθηκε σε πλούσιους Έλληνες κατά την Οθωμανική περίοδο",
    english: "title given to wealthy Greeks during the Ottoman period"
}, {
    cypriot: "çörçöllikya/çörçöludya",
    turkish: "pekmez içine atılan hamur parçalarıyla yapılan bir tür tatlı",
    greek: "γλυκό από κομμάτια ζύμης βουτηγμένα σε πετιμέζι",
    english: "dessert made from dough pieces dipped in molasses"
}, {
    cypriot: "çukko",
    turkish: "madeni para",
    greek: "νόμισμα",
    english: "coin"
}, {
    cypriot: "çul/çulli",
    turkish: "çocuk oyunlarında kazanılan sayı",
    greek: "πόντος σε παιδικό παιχνίδι",
    english: "point in children's games"
}, {
    cypriot: "çunguri",
    turkish: "cimri, eli sıkı",
    greek: "τσιγκούνης",
    english: "stingy"
}, {
    cypriot: "Akkanto",
    turkish: "Isırık",
    greek: "Δάγκωμα",
    english: "Bite; otherwise influenced"
}, {
    cypriot: "Alopos",
    turkish: "Belki",
    greek: "Ίσως",
    english: "Maybe, probably?"
}, {
    cypriot: "Aminiaz",
    turkish: "Hesaplamak",
    greek: "Υπολογίζω",
    english: "Calculate"
}, {
    cypriot: "Amplepo",
    turkish: "Görmek",
    greek: "Βλέπω",
    english: "See"
}, {
    cypriot: "Abusta",
    turkish: "Kutu",
    greek: "Κουτί",
    english: "Box"
}, {
    cypriot: "Anarka",
    turkish: "İnce",
    greek: "Λεπτός",
    english: "Thinly"
}, {
    cypriot: "Anarkovizou",
    turkish: "Göğüsleri ayrık",
    greek: "Με μακρινά στήθη",
    english: "One whose breasts are more distant than usual"
}, {
    cypriot: "Anarkodont",
    turkish: "Seyrek dişli",
    greek: "Αραιά δόντια",
    english: "One who has sparse teeth"
}, {
    cypriot: "Angelossiazomai",
    turkish: "Korkutmak",
    greek: "Φοβίζω",
    english: "I scare"
}, {
    cypriot: "Angelossiasi",
    turkish: "Korku",
    greek: "Τρόμος",
    english: "The terror, e.g., 'Angelossia came to me', meaning 'I got a scare'"
}, {
    cypriot: "Antinasso",
    turkish: "Sallamak",
    greek: "Κουνάω",
    english: "Shake"
}, {
    cypriot: "Antinattes",
    turkish: "Patates kızartma yöntemi",
    greek: "Τρόπος μαγειρέματος πατάτας",
    english: "Cooking mode for potatoes, fried in a pot with a lot of oil, which shake them vigorously during cooking"
}, {
    cypriot: "Axinostrafos",
    turkish: "Ters",
    greek: "Ανάποδα",
    english: "Upside down, inverse"
}, {
    cypriot: "Apopatos",
    turkish: "Latrin",
    greek: "Αποχωρητήριο",
    english: "Latrine"
}, {
    cypriot: "Apparos",
    turkish: "At",
    greek: "Άλογο",
    english: "horse"
}, {
    cypriot: "Apethkia",
    turkish: "Zıplama mesafesi",
    greek: "Απόσταση άλματος",
    english: "An informal unit of measurement of length, corresponding to the distance that a person can travel by jumping forward from a static position"
}, {
    cypriot: "Appidi",
    turkish: "Armut",
    greek: "Αχλάδι",
    english: "The pears"
}, {
    cypriot: "Appithkia",
    turkish: "Armut ağacı",
    greek: "Αχλαδιά",
    english: "The pear tree"
}, {
    cypriot: "Arkajin",
    turkish: "Dere",
    greek: "Ρυάκι",
    english: "The stream"
}, {
    cypriot: "Armarola",
    turkish: "Dolap",
    greek: "Ντουλάπα",
    english: "Wardrobe"
}, {
    cypriot: "Arfali",
    turkish: "Göbek",
    greek: "Αφαλός",
    english: "The belly button; Metaphorically, 'My harfali fell' = I am very hungry"
}, {
    cypriot: "Arfos",
    turkish: "Kardeş",
    greek: "Αδελφός/Αδελφή",
    english: "Brother, sister"
}, {
    cypriot: "Asselia",
    turkish: "Adım uzunluğu",
    greek: "Βήμα",
    english: "Unit of measurement of length equal to one stride; Metaphorically, the short distance, as well as the lack of effort"
}, {
    cypriot: "Ajia",
    turkish: "Ekmek kabuğu",
    greek: "Κρούστα ψωμιού",
    english: "The edge of bread, the crust"
}, {
    cypriot: "Avlagin",
    turkish: "Oluk",
    greek: "Αυλάκι",
    english: "The groove"
}, {
    cypriot: "Aftento",
    turkish: "Yakmak",
    greek: "Ανάβω",
    english: "Light up"
}, {
    cypriot: "I skim",
    turkish: "Hapşırmak",
    greek: "Φτερνίζομαι",
    english: "I sneeze"
}, {
    cypriot: "Bacla",
    turkish: "Kuyruk",
    greek: "Ουρά",
    english: "The tail of the sheep"
}, {
    cypriot: "Boat",
    turkish: "Sıkılmak",
    greek: "Βαριέμαι",
    english: "I'm bored"
}, {
    cypriot: "Vasto",
    turkish: "Tutmak",
    greek: "Κρατώ",
    english: "Hold"
}, {
    cypriot: "Vilomoutsounos",
    turkish: "Çirkin adam",
    greek: "Άσχημος άντρας",
    english: "The Very Ugly Man"
}, {
    cypriot: "Villa",
    turkish: "Erkek cinsel organı",
    greek: "Αρσενικό γεννητικό όργανο",
    english: "The male genital organ"
}, {
    cypriot: "Vitsa",
    turkish: "Değnek",
    greek: "Ράβδος",
    english: "The rod; Metaphorically, the very thin man"
}, {
    cypriot: "Vlanji",
    turkish: "Karaciğer",
    greek: "Συκώτι",
    english: "The liver"
}, {
    cypriot: "Volitzi",
    turkish: "Çatı kirişleri",
    greek: "Δοκάρια στέγης",
    english: "The wooden beam of the roof"
}, {
    cypriot: "Volo",
    turkish: "Çamura saplanmak",
    greek: "Κολλήθηκα στη λάσπη",
    english: "I got stuck in the mud"
}, {
    cypriot: "Bortakos",
    turkish: "Kurbağa",
    greek: "Βάτραχος",
    english: "The frog"
}, {
    cypriot: "Bortos",
    turkish: "Öküz",
    greek: "Βόδι",
    english: "The male ox; Metaphorically, the Fat Man or the man who has no manners"
}, {
    cypriot: "Voukka",
    turkish: "Yanak",
    greek: "Μάγουλο",
    english: "Cheek"
}, {
    cypriot: "Vukkalletikon",
    turkish: "Tombul yanaklı çocuk",
    greek: "Παιδί με χοντρά μάγουλα",
    english: "Kid with chubby cheeks; Metaphorically, the spoiled one"
}, {
    cypriot: "Whelk",
    turkish: "Isırık",
    greek: "Δάγκωμα",
    english: "The bite"
}, {
    cypriot: "Vounoloui",
    turkish: "Tepe",
    greek: "Λόφος",
    english: "The hill"
}, {
    cypriot: "Bandabulya",
    turkish: "Pazar, kapalı Pazar",
    greek: "Μπανταμπουλιά",
    english: "Market, covered market"
}, {
    cypriot: "Banigo",
    turkish: "Mutfak tezgahı",
    greek: "Μπανίγκο",
    english: "Kitchen counter"
}, {
    cypriot: "Bögün",
    turkish: "Bugün",
    greek: "Σήμερα",
    english: "Today"
}, {
    cypriot: "Barya",
    turkish: "Dost, arkadaş gurubu",
    greek: "Παρέα",
    english: "Friend, group of friends"
}, {
    cypriot: "Cira",
    turkish: "Kadın",
    greek: "Τσίρα",
    english: "(Greek) Woman"
}, {
    cypriot: "Ekşi",
    turkish: "Limon",
    greek: "Λεμόνι",
    english: "Lemon"
}, {
    cypriot: "Fica",
    turkish: "Deniz yosunu",
    greek: "Φύκια",
    english: "Seaweed"
}, {
    cypriot: "Gabbella",
    turkish: "Şapka",
    greek: "Γκαπέλα",
    english: "Hat"
}, {
    cypriot: "Guli",
    turkish: "Köpek yavrusu",
    greek: "Κουτάβι",
    english: "Puppy"
}, {
    cypriot: "İstatü",
    turkish: "Statü",
    greek: "Στάτους",
    english: "Status"
}, {
    cypriot: "Lamarina",
    turkish: "Sac",
    greek: "Λαμαρίνα",
    english: "Sheet metal"
}, {
    cypriot: "Lenger",
    turkish: "Kova",
    greek: "Λένγκερ",
    english: "Bucket"
}, {
    cypriot: "Mısmıl",
    turkish: "Sağlam",
    greek: "Γερός",
    english: "Sturdy"
}, {
    cypriot: "Mop",
    turkish: "Paspas",
    greek: "Σφουγγαρίστρα",
    english: "Mop"
}, {
    cypriot: "Penna",
    turkish: "Tükenmez kalem",
    greek: "Πένα",
    english: "Pen"
}, {
    cypriot: "Pünez ",
    turkish: "Raptiye/süzgeç",
    greek: "Πούνες/Σουρωτήρι",
    english: "Thumbtack/Strainer"
}, {
    cypriot: "Pirilli ",
    turkish: "Camdan misket",
    greek: "Μαρμαράκι",
    english: "Marble (glass bead)"
}, {
    cypriot: "Pasadembo ",
    turkish: "Kabak çekirdeği",
    greek: "Σπόρια",
    english: "Pumpkin seed"
}, {
    cypriot: "Seki",
    turkish: "Basamak",
    greek: "Σκαλοπάτι",
    english: "Step"
}, {
    cypriot: "Saggo",
    turkish: "Ceket",
    greek: "Σακάκι",
    english: "Jacket"
}, {
    cypriot: "Solina",
    turkish: "Demir boru, su borusu",
    greek: "Σωλήνας",
    english: "Pipe"
}, {
    cypriot: "Motini",
    turkish: "Araba, otomobil",
    greek: "Αυτοκίνητο",
    english: "Car"
}, {
    cypriot: "Yiro",
    turkish: "Dönmek, tur atmak",
    greek: "Γύρος",
    english: "To turn"
}, {
    cypriot: "Zibil",
    turkish: "Çöp",
    greek: "Σκουπίδι",
    english: "Garbage"
}, {
    cypriot: "Zip",
    turkish: "Fermuar",
    greek: "Φερμουάρ",
    english: "Zipper"
}, {
    cypriot: "ακκάννω",
    turkish: "ısırmak",
    greek: "δαγκώνω",
    english: "bite"
}, {
    cypriot: "άλλωσπως",
    turkish: "başka şekilde",
    greek: "με άλλο τρόπο, αλλιώς",
    english: "otherwise"
}, {
    cypriot: "αλόπως",
    turkish: "belki, muhtemelen",
    greek: "μήπως, πιθανώς",
    english: "perhaps, possibly"
}, {
    cypriot: "αμινιάζω",
    turkish: "hesaplamak",
    greek: "υπολογίζω",
    english: "calculate"
}, {
    cypriot: "αμπλέπω",
    turkish: "görmek",
    greek: "βλέπω",
    english: "see"
}, {
    cypriot: "αμπούστα",
    turkish: "kutu",
    greek: "κουτί",
    english: "box"
}, {
    cypriot: "ανάνοικτος",
    turkish: "açılmamış",
    greek: "αυτός που δεν έχει ανοικτεί ποτέ",
    english: "unopened"
}, {
    cypriot: "ανάρκα",
    turkish: "seyrek",
    greek: "αραιά",
    english: "sparsely"
}, {
    cypriot: "αναρκοβυζού",
    turkish: "aralıklı göğüsler",
    greek: "αυτή που τα στήθη της έχουν μεγαλύτερη απόσταση",
    english: "wide-spaced breasts"
}, {
    cypriot: "αναρκοδόντης",
    turkish: "seyrek dişli",
    greek: "αυτός που έχει αραιά δόντια",
    english: "gap-toothed"
}, {
    cypriot: "αντζελοσσιάζουμαι",
    turkish: "korkmak",
    greek: "τρομάζω",
    english: "get scared"
}, {
    cypriot: "αντζελόσσιαση",
    turkish: "korku",
    greek: "η τρομάρα",
    english: "fright"
}, {
    cypriot: "αντινάσσω",
    turkish: "sallamak",
    greek: "τινάζω",
    english: "shake"
}, {
    cypriot: "αντιναχτές",
    turkish: "sarsarak pişirilmiş patates",
    greek: "τηγανιτές πατάτες που τις κουνάνε δυνατά",
    english: "shaken fried potatoes"
}, {
    cypriot: "αξινόστραφος",
    turkish: "ters, tersine",
    greek: "ανάποδος, αντίστροφος",
    english: "reverse, opposite"
}, {
    cypriot: "απόπατος",
    turkish: "tuvalet",
    greek: "αποχωρητήριο",
    english: "toilet"
}, {
    cypriot: "άππαρος",
    turkish: "erkek at",
    greek: "αρσενικό άλογο",
    english: "stallion"
}, {
    cypriot: "αππηθκιά",
    turkish: "mesafe ölçü birimi",
    greek: "άτυπη μονάδα μέτρησης μήκους",
    english: "unit of distance"
}, {
    cypriot: "αππίδι",
    turkish: "armut",
    greek: "αχλάδι",
    english: "pear"
}, {
    cypriot: "αππιθκιά",
    turkish: "armut ağacı",
    greek: "αχλαδιά",
    english: "pear tree"
}, {
    cypriot: "αρκάτζιν",
    turkish: "dere",
    greek: "ρυάκι",
    english: "stream"
}, {
    cypriot: "αρκημός",
    turkish: "başlangıç",
    greek: "αρχή, ξεκίνημα",
    english: "beginning"
}, {
    cypriot: "άρκοψες",
    turkish: "yarın akşam",
    greek: "αύριο το βράδυ",
    english: "tomorrow evening"
}, {
    cypriot: "αρμαρόλα",
    turkish: "dolap",
    greek: "ντουλάπα",
    english: "wardrobe"
}, {
    cypriot: "αρφάλι",
    turkish: "göbek deliği",
    greek: "αφαλός",
    english: "belly button"
}, {
    cypriot: "αρφός",
    turkish: "erkek kardeş",
    greek: "αδερφός",
    english: "brother"
}, {
    cypriot: "ασσελιά",
    turkish: "adım mesafesi",
    greek: "μονάδα μέτρησης μήκους ίση με έναν διασκελισμό",
    english: "step distance"
}, {
    cypriot: "ατζία",
    turkish: "ekmeğin kabuğu",
    greek: "η κόρα",
    english: "bread crust"
}, {
    cypriot: "αυλάτζιν",
    turkish: "hendek",
    greek: "αυλάκι",
    english: "trench"
}, {
    cypriot: "αφτέννω",
    turkish: "ateş yakmak",
    greek: "ανάβω",
    english: "ignite"
}, {
    cypriot: "αψιουρίζουμαι",
    turkish: "hapşırmak",
    greek: "φταρνίζομαι",
    english: "sneeze"
}, {
    cypriot: "Βάκης",
    turkish: "Vakis (isim)",
    greek: "Βάκης",
    english: "Vakis (name)"
}, {
    cypriot: "βάκλα",
    turkish: "koyun kuyruğu",
    greek: "ουρά του προβάτου",
    english: "sheep tail"
}, {
    cypriot: "βαρκούμαι",
    turkish: "sıkılmak",
    greek: "βαριέμαι",
    english: "get bored"
}, {
    cypriot: "βαστώ",
    turkish: "tutmak",
    greek: "κρατώ",
    english: "hold"
}, {
    cypriot: "βιλλομούτσουνος",
    turkish: "çirkin",
    greek: "πολύ άσχημος άνθρωπος",
    english: "very ugly person"
}, {
    cypriot: "βίλλος",
    turkish: "erkeklik organı",
    greek: "αρσενικό γεννητικό όργανο",
    english: "male genitalia"
}, {
    cypriot: "βίτσα",
    turkish: "ince dal",
    greek: "βέργα",
    english: "twig"
}, {
    cypriot: "βλαντζί",
    turkish: "karaciğer",
    greek: "συκώτι",
    english: "liver"
}, {
    cypriot: "βολίτζι",
    turkish: "çatı kirişi",
    greek: "ξύλινο δοκάρι της στέγης",
    english: "roof beam"
}, {
    cypriot: "βολώ",
    turkish: "çukurda sıkışmak",
    greek: "κόλλησα στις λάσπες",
    english: "get stuck in mud"
}, {
    cypriot: "βόρτακος",
    turkish: "kurbağa",
    greek: "βάτραχος",
    english: "frog"
}, {
    cypriot: "βόρτος",
    turkish: "erkek öküz",
    greek: "αρσενικό βόδι",
    english: "bull"
}, {
    cypriot: "βούκκα",
    turkish: "yanak",
    greek: "μάγουλο",
    english: "cheek"
}, {
    cypriot: "βουκκαλλέτικον",
    turkish: "yanaklı çocuk",
    greek: "παιδί με παχουλά μάγουλα",
    english: "chubby-cheeked child"
}, {
    cypriot: "βούκκος",
    turkish: "lokma",
    greek: "μπουκιά",
    english: "bite"
}, {
    cypriot: "βουναλλούι",
    turkish: "tepecik",
    greek: "λοφάκι",
    english: "hillock"
}, {
    cypriot: "βουρβουλλάς",
    turkish: "sümüklü böcek",
    greek: "γυμνοσάλιαγκας",
    english: "slug"
}, {
    cypriot: "βούρνα",
    turkish: "lavabo",
    greek: "νεροχύτης",
    english: "sink"
}, {
    cypriot: "βουρνί",
    turkish: "hayvan yemliği",
    greek: "ταΐστρα",
    english: "trough"
}, {
    cypriot: "βούριστρα",
    turkish: "koşuşturma",
    greek: "τα τρεχάματα",
    english: "running around"
}, {
    cypriot: "βούρος",
    turkish: "koşmak",
    greek: "τρέξιμο",
    english: "running"
}, {
    cypriot: "βρίξε",
    turkish: "susmak",
    greek: "σώπα",
    english: "shut up"
}, {
    cypriot: "βυζοκούππι",
    turkish: "sütyen",
    greek: "στηθόδεσμος",
    english: "bra"
}, {
    cypriot: "γαίμα",
    turkish: "kan",
    greek: "αίμα",
    english: "blood"
}, {
    cypriot: "γαμίστρα",
    turkish: "yatak",
    greek: "κρεβάτι",
    english: "bed"
}, {
    cypriot: "γάρος",
    turkish: "eşek",
    greek: "γάιδαρος",
    english: "donkey"
}, {
    cypriot: "γιανίσκω",
    turkish: "iyileşmek",
    greek: "αναρρώνω",
    english: "recover"
}, {
    cypriot: "γιουτώ",
    turkish: "uygun olmak",
    greek: "συγκατανεύω",
    english: "agree"
}, {
    cypriot: "γρόσι",
    turkish: "kuruş",
    greek: "μικρό νόμισμα",
    english: "small coin"
}, {
    cypriot: "δισκοθήκη",
    turkish: "diskotek",
    greek: "ντισκοτέκ",
    english: "discotheque"
}, {
    cypriot: "δίχα",
    turkish: "olmadan",
    greek: "δίχως",
    english: "without"
}, {
    cypriot: "δόντι",
    turkish: "diş",
    greek: "δόντι",
    english: "tooth"
}, {
    cypriot: "δρώμα",
    turkish: "ter",
    greek: "ιδρώτας",
    english: "sweat"
}, {
    cypriot: "έρκουμαι",
    turkish: "gelmek",
    greek: "έρχομαι",
    english: "come"
}, {
    cypriot: "έσιει",
    turkish: "var",
    greek: "έχει",
    english: "has"
}, {
    cypriot: "εσσέξιξι!",
    turkish: "öfke ifadesi",
    greek: "εκφράζει αγανάκτηση",
    english: "expression of anger"
}, {
    cypriot: "έσσω",
    turkish: "evde",
    greek: "μέσα",
    english: "home"
}, {
    cypriot: "ζάβαλλι",
    turkish: "zavallı",
    greek: "ταλαιπωρία",
    english: "poor thing"
}, {
    cypriot: "ζαβός",
    turkish: "çarpık",
    greek: "στραβός",
    english: "crooked"
}, {
    cypriot: "ζαβώνω",
    turkish: "çarpıtmak",
    greek: "στραβώνω",
    english: "twist"
}, {
    cypriot: "ζάμπα",
    turkish: "bacak",
    greek: "γάμπα",
    english: "calf (leg)"
}, {
    cypriot: "ζίζιρος",
    turkish: "cırcır böceği",
    greek: "τζίτζικας",
    english: "cicada"
}, {
    cypriot: "ζίλικουρτι",
    turkish: "sus!",
    greek: "σκασμός",
    english: "shut up"
}, {
    cypriot: "ζώλος",
    turkish: "kötü koku",
    greek: "άσχημη μυρωδιά",
    english: "bad smell"
}, {
    cypriot: "ήντα",
    turkish: "ne",
    greek: "τι",
    english: "what"
}, {
    cypriot: "θαρκούμαι",
    turkish: "sanmak",
    greek: "νομίζω",
    english: "think"
}, {
    cypriot: "θερκό",
    turkish: "yılan",
    greek: "φίδι",
    english: "snake"
}, {
    cypriot: "θκιάλος",
    turkish: "şeytan",
    greek: "διάβολος",
    english: "devil"
}, {
    cypriot: "θωρκά",
    turkish: "görünüş",
    greek: "όψη",
    english: "appearance"
}, {
    cypriot: "θωρώ",
    turkish: "görmek",
    greek: "βλέπω",
    english: "see"
}, {
    cypriot: "καϊλώ",
    turkish: "kabul etmek",
    greek: "δέχομαι",
    english: "accept"
}, {
    cypriot: "κάκκαφα",
    turkish: "engebeli arazi",
    greek: "ανώμαλα εδάφη",
    english: "rough terrain"
}, {
    cypriot: "Κάκα",
    turkish: "Georgia'nın kısaltması",
    greek: "Γεωργία'nın takma adı",
    english: "short for Georgia"
}, {
    cypriot: "Κάκος",
    turkish: "Kyriakos'un kısaltması",
    greek: "Κυριάκος'un takma adı",
    english: "short for Kyriakos"
}, {
    cypriot: "καλό",
    turkish: "tabii",
    greek: "αμέ",
    english: "of course"
}, {
    cypriot: "καλοήρα",
    turkish: "sepet",
    greek: "πανέρι",
    english: "basket"
}, {
    cypriot: "καμμώ",
    turkish: "göz kapamak",
    greek: "κλείνω τα μάτια μου",
    english: "close my eyes"
}, {
    cypriot: "καραόλος",
    turkish: "salyangoz",
    greek: "σαλιγκάρι",
    english: "snail"
}, {
    cypriot: "καρκασαλλίκκι",
    turkish: "gürültü",
    greek: "φασαρία",
    english: "noise"
}, {
    cypriot: "καρκιά",
    turkish: "kalp",
    greek: "καρδιά",
    english: "heart"
}, {
    cypriot: "καρκόλα",
    turkish: "yatak",
    greek: "κρεβάτι",
    english: "bed"
}, {
    cypriot: "καρτζί",
    turkish: "karşı",
    greek: "απέναντι",
    english: "opposite"
}, {
    cypriot: "κάττος",
    turkish: "kedi",
    greek: "γάτος",
    english: "cat"
}, {
    cypriot: "κατρατζύλι",
    turkish: "kaydırak",
    greek: "τσουλήθρα",
    english: "slide"
}, {
    cypriot: "κατσιαρίζω",
    turkish: "gürültü yapmak",
    greek: "κάνω θόρυβο",
    english: "make noise"
}, {
    cypriot: "καύκω",
    turkish: "yakmak",
    greek: "καίω",
    english: "burn"
}, {
    cypriot: "κάφκα",
    turkish: "metres",
    greek: "ερωμένη",
    english: "mistress"
}, {
    cypriot: "Κίκα",
    turkish: "Kyriaki'nin kısaltması",
    greek: "Κυριακή'nin takma adı",
    english: "short for Kyriaki"
}, {
    cypriot: "Κίκης",
    turkish: "Kyriakos'un kısaltması",
    greek: "Κυριάκος'un takma adı",
    english: "short for Kyriakos"
}, {
    cypriot: "κιοφτές",
    turkish: "köfte",
    greek: "κεφτές",
    english: "meatball"
}, {
    cypriot: "κκελλέ",
    turkish: "kafa",
    greek: "κεφάλι",
    english: "head"
}, {
    cypriot: "κκελλετζής",
    turkish: "koca kafalı",
    greek: "μεγάλο κεφάλι",
    english: "big-headed"
}, {
    cypriot: "κκέλης",
    turkish: "kel",
    greek: "φαλακρός",
    english: "bald"
}, {
    cypriot: "κλάτσα",
    turkish: "çorap",
    greek: "κάλτσα",
    english: "sock"
}, {
    cypriot: "Κόκος",
    turkish: "Giorgos'un kısaltması",
    greek: "Γιώργος'un takma adı",
    english: "short for Giorgos"
}, {
    cypriot: "κόλλα",
    turkish: "kağıt sayfası",
    greek: "φύλλο χαρτιού",
    english: "sheet of paper"
}, {
    cypriot: "κομμόροτσος",
    turkish: "büyük taş",
    greek: "ακατέργαστη μεγάλη πέτρα",
    english: "large rough stone"
}, {
    cypriot: "κόρη",
    turkish: "kız",
    greek: "κορίτσι",
    english: "girl"
}, {
    cypriot: "κοτζιάκαρη",
    turkish: "yaşlı kadın",
    greek: "γριά",
    english: "old woman"
}, {
    cypriot: "κοτολέττα",
    turkish: "pirzola",
    greek: "μπριζόλα",
    english: "chop"
}, {
    cypriot: "κότσινος",
    turkish: "kırmızı",
    greek: "κόκκινος",
    english: "red"
}, {
    cypriot: "κότσιρος",
    turkish: "dışkı",
    greek: "κουράδα",
    english: "excrement"
}, {
    cypriot: "κουκκουφκιάος",
    turkish: "baykuş",
    greek: "κουκουβάγια",
    english: "owl"
}, {
    cypriot: "κούλλουφος",
    turkish: "bakımsız",
    greek: "ατημέλητος",
    english: "unkempt"
}, {
    cypriot: "κουπέπι",
    turkish: "sarma",
    greek: "ντολμάς",
    english: "stuffed grape leaves"
}, {
    cypriot: "κουφή",
    turkish: "yılan",
    greek: "φίδι",
    english: "snake"
}, {
    cypriot: "κραμπί",
    turkish: "lahana",
    greek: "λάχανο",
    english: "cabbage"
}, {
    cypriot: "κρούζω",
    turkish: "yakmak",
    greek: "καίω",
    english: "burn"
}, {
    cypriot: "κρώννουμαι",
    turkish: "duymak",
    greek: "ακούω",
    english: "hear"
}, {
    cypriot: "κωλοσύρνω",
    turkish: "çekmek",
    greek: "τραβώ",
    english: "pull"
}, {
    cypriot: "λαλώ",
    turkish: "söylemek",
    greek: "λέω",
    english: "say"
}, {
    cypriot: "λαμπρατζιά",
    turkish: "Paskalya ateşi",
    greek: "φωτιά της Ανάστασης",
    english: "Easter fire"
}, {
    cypriot: "λαομός",
    turkish: "korku",
    greek: "τρόμος",
    english: "fear"
}, {
    cypriot: "λαόνουμαι",
    turkish: "korkmak",
    greek: "φοβάμαι",
    english: "be afraid"
}, {
    cypriot: "λαόνω",
    turkish: "korkutmak",
    greek: "τρομάζω",
    english: "scare"
}, {
    cypriot: "λαός",
    turkish: "tavşan",
    greek: "λαγός",
    english: "hare"
}, {
    cypriot: "λάου λάου",
    turkish: "yavaş yavaş",
    greek: "σιγά σιγά",
    english: "slowly"
}, {
    cypriot: "λάσσω",
    turkish: "havlamak",
    greek: "γαυγίζω",
    english: "bark"
}, {
    cypriot: "λαφαζάνης",
    turkish: "lafazan",
    greek: "φαφλατάς",
    english: "blabbermouth"
}, {
    cypriot: "λαφαζανιά",
    turkish: "abartı",
    greek: "υπερβολή",
    english: "exaggeration"
}, {
    cypriot: "λιγκρίν",
    turkish: "bir oyun",
    greek: "παιχνίδι",
    english: "a game"
}, {
    cypriot: "λίξης",
    turkish: "tatlıyı seven",
    greek: "λιγούρης",
    english: "sweet-toothed"
}, {
    cypriot: "λογιάσματα",
    turkish: "nişan töreni",
    greek: "λογοδοσία",
    english: "engagement ceremony"
}, {
    cypriot: "λογιασμένος",
    turkish: "nişanlı",
    greek: "λογοδοσμένος",
    english: "engaged"
}, {
    cypriot: "λυσσιάρης",
    turkish: "aç gözlü",
    greek: "λιγούρης",
    english: "gluttonous"
}, {
    cypriot: "λυσσιοπινώ",
    turkish: "çok aç olmak",
    greek: "πεθαίνω της πείνας",
    english: "starving"
}, {
    cypriot: "λυσσιώ",
    turkish: "kızmak",
    greek: "θυμώνω",
    english: "get angry"
}, {
    cypriot: "λίω",
    turkish: "eritmek",
    greek: "λιώνω",
    english: "melt"
}, {
    cypriot: "λόττα",
    turkish: "domuz",
    greek: "θηλυκό γουρούνι",
    english: "female pig"
}, {
    cypriot: "λουβί",
    turkish: "kara göz fasulyesi",
    greek: "μαυρομάτικο φασόλι",
    english: "black-eyed pea"
}, {
    cypriot: "λουβούιν",
    turkish: "ufalanmış",
    greek: "θρύμμα",
    english: "crumb"
}, {
    cypriot: "λουβώ",
    turkish: "ufalamak",
    greek: "θρυμματίζω",
    english: "crumble"
}, {
    cypriot: "λούκκος",
    turkish: "çukur",
    greek: "λακάκι",
    english: "dimple"
}, {
    cypriot: "μαείρισσα",
    turkish: "tencere",
    greek: "κατσαρόλα",
    english: "pot"
}, {
    cypriot: "μαϊμούνα",
    turkish: "maymun",
    greek: "μαϊμού",
    english: "monkey"
}, {
    cypriot: "μαϊττάππι",
    turkish: "alay",
    greek: "κοροϊδεμα",
    english: "mockery"
}, {
    cypriot: "μαλαχτός",
    turkish: "yumuşak",
    greek: "μαλακός",
    english: "soft"
}, {
    cypriot: "μαννός",
    turkish: "aptal",
    greek: "ηλίθιος",
    english: "stupid"
}, {
    cypriot: "μαξιλαρόντυμα",
    turkish: "yastık kılıfı",
    greek: "μαξιλαροθήκη",
    english: "pillowcase"
}, {
    cypriot: "μάππα",
    turkish: "top",
    greek: "μπάλα",
    english: "ball"
}, {
    cypriot: "μάππουρος",
    turkish: "kozalak",
    greek: "κουκουνάρι",
    english: "pine cone"
}, {
    cypriot: "μαστραππάς",
    turkish: "metal kap",
    greek: "μεταλλικό δοχείο",
    english: "metal container"
}, {
    cypriot: "μεζετζής",
    turkish: "meze sever",
    greek: "αυτός που του αρέσουν οι μεζέδες",
    english: "one who loves meze"
}, {
    cypriot: "μεσοβυζιά",
    turkish: "göğüs arası",
    greek: "ο χώρος ανάμεσα στα στήθη",
    english: "cleavage"
}, {
    cypriot: "μηάλος",
    turkish: "büyük",
    greek: "μεγάλος",
    english: "big"
}, {
    cypriot: "μηαλιώνας",
    turkish: "başparmak",
    greek: "αντίχειρας",
    english: "thumb"
}, {
    cypriot: "μίλλα",
    turkish: "yağ",
    greek: "λίπος",
    english: "fat"
}, {
    cypriot: "μιτσής",
    turkish: "küçük",
    greek: "μικρός",
    english: "small"
}, {
    cypriot: "μμάτι",
    turkish: "göz",
    greek: "μάτι",
    english: "eye"
}, {
    cypriot: "μονή",
    turkish: "yatak",
    greek: "κρεβάτι",
    english: "bed"
}, {
    cypriot: "μοτόρα",
    turkish: "motosiklet",
    greek: "μοτοσυκλέτα",
    english: "motorcycle"
}, {
    cypriot: "μουβλούκα",
    turkish: "yastık",
    greek: "μαξιλάρι",
    english: "pillow"
}, {
    cypriot: "μούλος",
    turkish: "katır",
    greek: "μουλάρι",
    english: "mule"
}, {
    cypriot: "μουτταρκά",
    turkish: "dik arazi",
    greek: "απόκρυμνα έδαφη",
    english: "steep terrain"
}, {
    cypriot: "μουττάς",
    turkish: "büyük burunlu",
    greek: "μεγάλη μύτη",
    english: "big-nosed"
}, {
    cypriot: "μούττη",
    turkish: "burun",
    greek: "μύτη",
    english: "nose"
}, {
    cypriot: "μούχτιν",
    turkish: "bedava",
    greek: "δωρεάν",
    english: "free"
}, {
    cypriot: "μουχτιτζής",
    turkish: "beleşçi",
    greek: "αυτός που επιδιώκει να παίρνει πράγματα δωρεάν",
    english: "freeloader"
}, {
    cypriot: "μωρεύκουμαι",
    turkish: "çocuklaşmak",
    greek: "παλιμπαιδίζω",
    english: "act childishly"
}, {
    cypriot: "νεύκω",
    turkish: "başını sallamak",
    greek: "γνέφω",
    english: "nod"
}, {
    cypriot: "νησιάνι",
    turkish: "askeri rozet",
    greek: "στρατιωτικό διακριτικό",
    english: "military insignia"
}, {
    cypriot: "νίφκουμαι",
    turkish: "yüz yıkamak",
    greek: "νίβομαι",
    english: "wash face"
}, {
    cypriot: "ντζίζω",
    turkish: "dokunmak",
    greek: "αγγίζω",
    english: "touch"
}, {
    cypriot: "ξηφτερίζω",
    turkish: "tüy yolmak",
    greek: "ξεπουπουλιάζω",
    english: "pluck feathers"
}, {
    cypriot: "ξεροτήανο",
    turkish: "lokma tatlısı",
    greek: "λουκουμάς",
    english: "doughnut"
}, {
    cypriot: "ξιμαρισμένος",
    turkish: "kirli",
    greek: "λερωμένος",
    english: "dirty"
}, {
    cypriot: "όι",
    turkish: "hayır",
    greek: "όχι",
    english: "no"
}, {
    cypriot: "οξά",
    turkish: "veya",
    greek: "ή",
    english: "or"
}, {
    cypriot: "όξινο",
    turkish: "limon",
    greek: "λεμόνι",
    english: "lemon"
}, {
    cypriot: "όξυπνος",
    turkish: "zeki",
    greek: "έξυπνος",
    english: "smart"
}, {
    cypriot: "ορκά",
    turkish: "kol mesafesi",
    greek: "μονάδα μέτρησης μήκους",
    english: "unit of length"
}, {
    cypriot: "ούλλος",
    turkish: "tam",
    greek: "ολόκληρος",
    english: "whole"
}, {
    cypriot: "ούσσου",
    turkish: "sus!",
    greek: "σώπα!",
    english: "shut up!"
}, {
    cypriot: "ούτσιαλι",
    turkish: "aşırı yemek",
    greek: "πολύ φαΐ",
    english: "overeating"
}, {
    cypriot: "οφτός",
    turkish: "kızartılmış",
    greek: "ψητός",
    english: "roasted"
}, {
    cypriot: "παγκούι",
    turkish: "küçük bank",
    greek: "παγκάκι",
    english: "bench"
}, {
    cypriot: "παθκιά",
    turkish: "ayak izi",
    greek: "πάτημα",
    english: "footprint"
}, {
    cypriot: "παλάτι",
    turkish: "saray",
    greek: "παλάτι",
    english: "palace"
}, {
    cypriot: "παλιώνω",
    turkish: "güreşmek",
    greek: "παλεύω",
    english: "wrestle"
}, {
    cypriot: "Πάμπος",
    turkish: "Haralambos'un kısaltması",
    greek: "Χαράλαμπος'un takma adı",
    english: "short for Haralambos"
}, {
    cypriot: "πάννα",
    turkish: "iç zar",
    greek: "λεπτή μεμβράνη",
    english: "thin membrane"
}, {
    cypriot: "παννίζω",
    turkish: "ilk kez giymek",
    greek: "χρησιμοποιώ κάτι για πρώτη φορά",
    english: "wear something for the first time"
}, {
    cypriot: "παουρίζω",
    turkish: "bağırmak",
    greek: "φωνάζω",
    english: "shout"
}, {
    cypriot: "παπίλλαρος",
    turkish: "ilk incir",
    greek: "τα πρώτα σύκα",
    english: "first figs"
}, {
    cypriot: "παπίρα",
    turkish: "ördek",
    greek: "πάπια",
    english: "duck"
}, {
    cypriot: "πάππαλλα",
    turkish: "bitti",
    greek: "τέλος",
    english: "end"
}, {
    cypriot: "παραπόττης",
    turkish: "hain",
    greek: "αυτός που κάνει ατιμίες",
    english: "traitor"
}, {
    cypriot: "παρπέρης",
    turkish: "berber",
    greek: "κουρέας",
    english: "barber"
}, {
    cypriot: "πασιαμάς",
    turkish: "eğlence",
    greek: "χαβαλές",
    english: "fun"
}, {
    cypriot: "πασπίσκοπος",
    turkish: "başpiskopos",
    greek: "αρχιεπίσκοπος",
    english: "archbishop"
}, {
    cypriot: "πασσύς",
    turkish: "şişman",
    greek: "παχύς",
    english: "fat"
}, {
    cypriot: "πατανία",
    turkish: "battaniye",
    greek: "κουβέρτα",
    english: "blanket"
}, {
    cypriot: "πατί",
    turkish: "adım",
    greek: "βήμα",
    english: "step"
}, {
    cypriot: "πατσαρκά",
    turkish: "tokat",
    greek: "χαστούκι",
    english: "slap"
}, {
    cypriot: "πατσιαούρα",
    turkish: "bakımsız kadın",
    greek: "ατημέλητη γυναίκα",
    english: "unkempt woman"
}, {
    cypriot: "πατταλόνι",
    turkish: "pantolon",
    greek: "παντελόνι",
    english: "pants"
}, {
    cypriot: "παττίχα",
    turkish: "karpuz",
    greek: "καρπούζι",
    english: "watermelon"
}, {
    cypriot: "πεζούνι",
    turkish: "güvercin",
    greek: "περιστέρι",
    english: "pigeon"
}, {
    cypriot: "πελλαμός",
    turkish: "delilik",
    greek: "τρέλλα",
    english: "madness"
}, {
    cypriot: "πελλανίσκω",
    turkish: "delirmek",
    greek: "τρελλαίνομαι",
    english: "go mad"
}, {
    cypriot: "πελλάρα",
    turkish: "delilik",
    greek: "τρέλλα",
    english: "madness"
}, {
    cypriot: "πελλός",
    turkish: "deli",
    greek: "τρελλός",
    english: "crazy"
}, {
    cypriot: "πηλός",
    turkish: "çamur",
    greek: "λάσπη",
    english: "mud"
}, {
    cypriot: "πιθκιάυλι",
    turkish: "kaval",
    greek: "πνευστό μουσικό όργανο",
    english: "flute"
}, {
    cypriot: "πιθκιαβλοζάμπης",
    turkish: "ince bacaklı",
    greek: "λεπτά πόδια",
    english: "thin-legged"
}, {
    cypriot: "πιλέ",
    turkish: "zaten",
    greek: "ήδη",
    english: "already"
}, {
    cypriot: "πίσσα",
    turkish: "sakız",
    greek: "τσίχλα",
    english: "chewing gum"
}, {
    cypriot: "πιττώνω",
    turkish: "baskı yapmak",
    greek: "πλακώνω",
    english: "press down"
}, {
    cypriot: "πλυννίσκω",
    turkish: "yıkamak",
    greek: "πλένω",
    english: "wash"
}, {
    cypriot: "ποζαύλιν",
    turkish: "kül",
    greek: "αποκαΐδι",
    english: "ash"
}, {
    cypriot: "ποζουρτώ",
    turkish: "çok yorulmak",
    greek: "κουράζομαι πάρα πολύ",
    english: "get very tired"
}, {
    cypriot: "ποήνα",
    turkish: "çizme",
    greek: "μπότα",
    english: "boot"
}, {
    cypriot: "πόι",
    turkish: "ayak",
    greek: "πόδι",
    english: "foot"
}, {
    cypriot: "ποθκιά",
    turkish: "önlük",
    greek: "ποδιά",
    english: "apron"
}, {
    cypriot: "ποθκιάντροπος",
    turkish: "utanmaz",
    greek: "ξεδιάντροπος",
    english: "shameless"
}, {
    cypriot: "ποϊνάρι",
    turkish: "paça",
    greek: "μπατζάκι",
    english: "trouser leg"
}, {
    cypriot: "πολογιάζω",
    turkish: "kovmak",
    greek: "αποδιώχνω",
    english: "drive away"
}, {
    cypriot: "πομιλόρι",
    turkish: "domates",
    greek: "ντομάτα",
    english: "tomato"
}, {
    cypriot: "πόμπα",
    turkish: "bomba",
    greek: "βόμβα",
    english: "bomb"
}, {
    cypriot: "ποξαμάτι",
    turkish: "peksimet",
    greek: "παξιμάδι",
    english: "rusk"
}, {
    cypriot: "πορνόν πορνόν",
    turkish: "sabahın köründe",
    greek: "πρωί πρωί",
    english: "early morning"
}, {
    cypriot: "πότσα",
    turkish: "şişe",
    greek: "μπουκάλα",
    english: "bottle"
}, {
    cypriot: "'πο τζεί",
    turkish: "oradan",
    greek: "από εκεί",
    english: "from there"
}, {
    cypriot: "πούζα",
    turkish: "kasık fıtığı",
    greek: "κήλη",
    english: "hernia"
}, {
    cypriot: "πούκουππα",
    turkish: "ters",
    greek: "ανάποδα",
    english: "upside down"
}, {
    cypriot: "πουλλαόφωνος",
    turkish: "ince sesli",
    greek: "λεπτή φωνή",
    english: "high-pitched voice"
}, {
    cypriot: "πούλλες",
    turkish: "kızartılmış patlıcan dilimleri",
    greek: "τηγανιτές φέτες μελιτζάνας",
    english: "fried eggplant slices"
}, {
    cypriot: "πουπούξιος",
    turkish: "baykuş",
    greek: "κουκουβάγια",
    english: "owl"
}, {
    cypriot: "πουρέκκα",
    turkish: "tatlı kız",
    greek: "γλυκιά κοπέλα",
    english: "sweet girl"
}, {
    cypriot: "πουρέκκι",
    turkish: "börek",
    greek: "μπουρέκι",
    english: "borek"
}, {
    cypriot: "πουττεύκω",
    turkish: "korkmak",
    greek: "δειλιάζω",
    english: "be afraid"
}, {
    cypriot: "πούττος",
    turkish: "kadın cinsel organı",
    greek: "γυναικείο γεννητικό όργανο",
    english: "female genitalia"
}, {
    cypriot: "ποφκάλλω",
    turkish: "yormak",
    greek: "κουράζω",
    english: "tire out"
}, {
    cypriot: "ππάλα",
    turkish: "balta",
    greek: "μπαλτάς",
    english: "cleaver"
}, {
    cypriot: "ππαλουζές",
    turkish: "üzüm jölesi",
    greek: "μουσταλευριά",
    english: "grape jelly"
}, {
    cypriot: "ππαραόπιστος",
    turkish: "cimri",
    greek: "τσιγκούνης",
    english: "stingy"
}, {
    cypriot: "ππαράς",
    turkish: "para",
    greek: "χρήμα",
    english: "money"
}, {
    cypriot: "ππεζεβένγκης",
    turkish: "kerata",
    greek: "κερατάς",
    english: "cuckold"
}, {
    cypriot: "ππούλλι",
    turkish: "aptal",
    greek: "ηλίθιος",
    english: "idiot"
}, {
    cypriot: "ππουνιά",
    turkish: "yumruk",
    greek: "γροθιά",
    english: "punch"
}, {
    cypriot: "ππουρτού",
    turkish: "eşyalar",
    greek: "τα υπάρχοντα",
    english: "belongings"
}, {
    cypriot: "πρότσα",
    turkish: "çatal",
    greek: "πηρούνι",
    english: "fork"
}, {
    cypriot: "πυρά",
    turkish: "sıcaklık",
    greek: "ζέστη",
    english: "heat"
}, {
    cypriot: "πυρκολώ",
    turkish: "ateş yakmak",
    greek: "βάζω φωτιά",
    english: "set fire"
}, {
    cypriot: "ρα",
    turkish: "kızlar için hitap",
    greek: "αναφορά προς κοπέλα",
    english: "address to girls"
}, {
    cypriot: "ρέσσω",
    turkish: "geçmek",
    greek: "περνώ",
    english: "pass"
}, {
    cypriot: "ριάλια",
    turkish: "para",
    greek: "λεφτά",
    english: "money"
}, {
    cypriot: "ρότσος",
    turkish: "taş",
    greek: "πέτρα",
    english: "stone"
}, {
    cypriot: "σάζω",
    turkish: "düzenlemek",
    greek: "φτιάχνω",
    english: "fix"
}, {
    cypriot: "σάκκος",
    turkish: "palto",
    greek: "παλτό",
    english: "coat"
}, {
    cypriot: "σαντανωσιά",
    turkish: "kargaşa",
    greek: "ανακατοσούρα",
    english: "turmoil"
}, {
    cypriot: "σαρκά",
    turkish: "süpürge",
    greek: "σκούπα",
    english: "broom"
}, {
    cypriot: "σάτζη",
    turkish: "sığ tava",
    greek: "ρηχό μεταλλικό μαγειρικό σκεύος",
    english: "shallow pan"
}, {
    cypriot: "σβηστήρι",
    turkish: "silgi",
    greek: "γομολάστιχα",
    english: "eraser"
}, {
    cypriot: "σεντ",
    turkish: "kuruş",
    greek: "νόμισμα",
    english: "cent"
}, {
    cypriot: "σεφταλιά",
    turkish: "köfte",
    greek: "κρέας τυλιγμένο σε μεμβράνη",
    english: "meat wrapped in membrane"
}, {
    cypriot: "σιακατούρι",
    turkish: "yokuş aşağı",
    greek: "κατηφόρα",
    english: "downhill"
}, {
    cypriot: "σιεηττάνης",
    turkish: "yaramaz",
    greek: "άτακτος",
    english: "mischievous"
}, {
    cypriot: "σιεροκουτάλα",
    turkish: "meraklı kadın",
    greek: "περίεργη γυναίκα",
    english: "curious woman"
}, {
    cypriot: "σιέζω",
    turkish: "kaka yapmak",
    greek: "χέζω",
    english: "poop"
}, {
    cypriot: "σιέρι",
    turkish: "el",
    greek: "χέρι",
    english: "hand"
}, {
    cypriot: "σίερο",
    turkish: "demir",
    greek: "σίδερο",
    english: "iron"
}, {
    cypriot: "σιερώνω",
    turkish: "ütülemek",
    greek: "σιδερώνω",
    english: "iron (clothes)"
}, {
    cypriot: "σιερώστρα",
    turkish: "ütü masası",
    greek: "σιδερώστρα",
    english: "ironing board"
}, {
    cypriot: "σιέσης",
    turkish: "korkak",
    greek: "δειλός",
    english: "coward"
}, {
    cypriot: "σιονώνω",
    turkish: "dökmek",
    greek: "χύνομαι",
    english: "spill"
}, {
    cypriot: "σιόρ",
    turkish: "bey",
    greek: "κύριος",
    english: "mister"
}, {
    cypriot: "σιουσιούκκος",
    turkish: "geleneksel tatlı",
    greek: "παραδοσιακό κυπριακό γλυκό",
    english: "traditional sweet"
}, {
    cypriot: "σίστος",
    turkish: "kadın cinsel organı",
    greek: "γυναικείο γεννητικό όργανο",
    english: "female genitalia"
}, {
    cypriot: "σκαρπάρης",
    turkish: "kunduracı",
    greek: "τσαγκάρης",
    english: "cobbler"
}, {
    cypriot: "σκατούλλικα",
    turkish: "taşlarla oynanan oyun",
    greek: "παιχνίδι με πέτρες",
    english: "game with stones"
}, {
    cypriot: "σκεμπέ",
    turkish: "karın",
    greek: "κοιλιά",
    english: "belly"
}, {
    cypriot: "σκεμπετζής",
    turkish: "göbekli",
    greek: "κοιλαράς",
    english: "pot-bellied"
}, {
    cypriot: "σκλουβέρι",
    turkish: "işlemeli kumaş",
    greek: "κεντητό ύφασμα",
    english: "embroidered fabric"
}, {
    cypriot: "σκουλούτζι",
    turkish: "solucan",
    greek: "σκουλήκι",
    english: "worm"
}, {
    cypriot: "σμιλί",
    turkish: "ince iğne",
    greek: "μικρή μεταλλική βελόνα",
    english: "fine needle"
}, {
    cypriot: "σοίρος",
    turkish: "domuz",
    greek: "γουρούνι",
    english: "pig"
}, {
    cypriot: "σούζω",
    turkish: "sallamak",
    greek: "κουνώ",
    english: "shake"
}, {
    cypriot: "σούσα",
    turkish: "salıncak",
    greek: "κούνια",
    english: "swing"
}, {
    cypriot: "σπαρκώνω",
    turkish: "çiftleşme zamanı",
    greek: "περίοδος ζευγαρώματος",
    english: "mating season"
}, {
    cypriot: "σσιάζουμαι",
    turkish: "bakmak",
    greek: "βλέπω",
    english: "see"
}, {
    cypriot: "σσίζω",
    turkish: "yırtmak",
    greek: "σκίζω",
    english: "tear"
}, {
    cypriot: "σούζμα",
    turkish: "sallanma",
    greek: "κούνημα",
    english: "rocking"
}, {
    cypriot: "σσεπέττος",
    turkish: "tüfek",
    greek: "κυνηγετικό όπλο",
    english: "shotgun"
}, {
    cypriot: "σσυλλόπελλος",
    turkish: "çılgın",
    greek: "τρελός",
    english: "crazy"
}, {
    cypriot: "σσύλλος",
    turkish: "köpek",
    greek: "σκύλος",
    english: "dog"
}, {
    cypriot: "Στάλω",
    turkish: "Hristina'nın kısaltması",
    greek: "Χρυσή'nin takma adı",
    english: "short for Hristina"
}, {
    cypriot: "στετέ",
    turkish: "büyük anne",
    greek: "γιαγιά",
    english: "grandmother"
}, {
    cypriot: "στράτα",
    turkish: "yol",
    greek: "δρόμος",
    english: "road"
}, {
    cypriot: "συλάρι",
    turkish: "bulamaç",
    greek: "χυλός",
    english: "gruel"
}, {
    cypriot: "συνάω",
    turkish: "toplamak",
    greek: "μαζεύω",
    english: "gather"
}, {
    cypriot: "συνότζιαιρος",
    turkish: "akran",
    greek: "συνομήλικος",
    english: "peer"
}, {
    cypriot: "συντυχάνω",
    turkish: "sohbet etmek",
    greek: "συνομιλώ",
    english: "converse"
}, {
    cypriot: "σύξηλος",
    turkish: "şok olmak",
    greek: "άναυδος",
    english: "shocked"
}, {
    cypriot: "σύρνω",
    turkish: "atmak",
    greek: "ρίχνω",
    english: "throw"
}, {
    cypriot: "σωρόφκω",
    turkish: "toplamak",
    greek: "συγκεντρώνω",
    english: "collect"
}, {
    cypriot: "τάβλα",
    turkish: "masa",
    greek: "τραπέζι",
    english: "table"
}, {
    cypriot: "ταπέλλα",
    turkish: "tabela",
    greek: "πινακίδα",
    english: "sign"
}, {
    cypriot: "ττάππος",
    turkish: "tıkacı",
    greek: "φελλός",
    english: "cork"
}, {
    cypriot: "τατάς",
    turkish: "vaftiz babası",
    greek: "νονός",
    english: "godfather"
}, {
    cypriot: "τζαί",
    turkish: "ve",
    greek: "και",
    english: "and"
}, {
    cypriot: "τζιαμέ",
    turkish: "orada",
    greek: "εκεί",
    english: "there"
}, {
    cypriot: "τζυλώ",
    turkish: "yuvarlanmak",
    greek: "κυλώ",
    english: "roll"
}, {
    cypriot: "τζείνη",
    turkish: "o (dişi)",
    greek: "εκείνη",
    english: "she"
}, {
    cypriot: "τζείνος",
    turkish: "o (eril)",
    greek: "εκείνος",
    english: "he"
}, {
    cypriot: "τζισβές",
    turkish: "cezve",
    greek: "μπρίκι",
    english: "coffee pot"
}, {
    cypriot: "τζίτρινος",
    turkish: "sarı",
    greek: "κίτρινος",
    english: "yellow"
}, {
    cypriot: "τζοιμούμαι",
    turkish: "uyumak",
    greek: "κοιμάμαι",
    english: "sleep"
}, {
    cypriot: "τζυλώ",
    turkish: "yuvarlanmak",
    greek: "κυλώ",
    english: "roll"
}, {
    cypriot: "τηάνι",
    turkish: "tava",
    greek: "τηγάνι",
    english: "frying pan"
}, {
    cypriot: "τηανίζω",
    turkish: "kızartmak",
    greek: "τηγανίζω",
    english: "fry"
}, {
    cypriot: "τιτσίν",
    turkish: "parça",
    greek: "κομμάτι",
    english: "piece"
}, {
    cypriot: "τίτσιρος",
    turkish: "çıplak",
    greek: "γυμνός",
    english: "naked"
}, {
    cypriot: "τουρτουρώ",
    turkish: "titremek",
    greek: "τουρτουρίζω",
    english: "shiver"
}, {
    cypriot: "τράουλλος",
    turkish: "teke",
    greek: "τράγος",
    english: "goat"
}, {
    cypriot: "τρι",
    turkish: "ev yapımı makarna",
    greek: "χειροποίητα ζυμαρικά",
    english: "handmade pasta"
}, {
    cypriot: "τσαέρα",
    turkish: "sandalye",
    greek: "καρέκλα",
    english: "chair"
}, {
    cypriot: "τσανιάζω",
    turkish: "tırmalamak",
    greek: "γρατσουνώ",
    english: "scratch"
}, {
    cypriot: "τσεντί",
    turkish: "cüzdan",
    greek: "πορτοφόλι",
    english: "wallet"
}, {
    cypriot: "τσενγκένης",
    turkish: "çingene",
    greek: "γύφτος",
    english: "gypsy"
}, {
    cypriot: "τσιλλώ",
    turkish: "itmek",
    greek: "σπρώχνω",
    english: "push"
}, {
    cypriot: "τσιφτές",
    turkish: "bozuk para",
    greek: "μικρό νόμισμα",
    english: "small coin"
}, {
    cypriot: "τσούρα",
    turkish: "keçi",
    greek: "κατσίκα",
    english: "goat"
}, {
    cypriot: "τταλαττούρι",
    turkish: "cacık",
    greek: "τζατζίκι",
    english: "tzatziki"
}, {
    cypriot: "Τταλού",
    turkish: "Hristina'nın kısaltması",
    greek: "Χρυσή'nin takma adı",
    english: "short for Hristina"
}, {
    cypriot: "τταπουροκολού",
    turkish: "motosiklet",
    greek: "μοτοσυκλέτα",
    english: "motorcycle"
}, {
    cypriot: "φακκώ",
    turkish: "vurmak",
    greek: "χτυπώ",
    english: "hit"
}, {
    cypriot: "φάουσα",
    turkish: "sus",
    greek: "σκασμός",
    english: "shut up"
}, {
    cypriot: "φίνα",
    turkish: "küçük yılan",
    greek: "μικρό φίδι",
    english: "small snake"
}, {
    cypriot: "φκάλλω",
    turkish: "çıkarmak",
    greek: "βγάζω",
    english: "remove"
}, {
    cypriot: "φκιακάς",
    turkish: "büyük kulaklı",
    greek: "μεγάλα αυτιά",
    english: "big-eared"
}, {
    cypriot: "φκιολάρης",
    turkish: "kemanist",
    greek: "βιολιστής",
    english: "violinist"
}, {
    cypriot: "φκιολί",
    turkish: "keman",
    greek: "βιολί",
    english: "violin"
}, {
    cypriot: "φκιόρο",
    turkish: "çicek",
    greek: "λουλούδι",
    english: "flower"
}, {
    cypriot: "φλόκκος",
    turkish: "paspas",
    greek: "σφουγγαρίστρα",
    english: "mop"
}, {
    cypriot: "φόκος",
    turkish: "ateş",
    greek: "φωτιά",
    english: "fire"
}, {
    cypriot: "φουκού",
    turkish: "barbekü",
    greek: "μεταλλικό δοχείο",
    english: "barbecue"
}, {
    cypriot: "φουντάνα",
    turkish: "musluk",
    greek: "βρύση",
    english: "faucet"
}, {
    cypriot: "φρουτσίν",
    turkish: "fırça",
    greek: "πινέλο",
    english: "brush"
}, {
    cypriot: "φτείρα",
    turkish: "bit",
    greek: "ψείρα",
    english: "lice"
}, {
    cypriot: "φτιν",
    turkish: "kulak",
    greek: "αυτί",
    english: "ear"
}, {
    cypriot: "φωθκιά",
    turkish: "ateş",
    greek: "φωτιά",
    english: "fire"
}, {
    cypriot: "χάι χούι",
    turkish: "eğlence",
    greek: "χαβαλές",
    english: "fun"
}, {
    cypriot: "χαμαί",
    turkish: "yere",
    greek: "κάτω",
    english: "down"
}, {
    cypriot: "Χαμπής",
    turkish: "Haralambos'un kısaltması",
    greek: "Χαράλαμπος'un takma adı",
    english: "short for Haralambos"
}, {
    cypriot: "χαρτούτσα",
    turkish: "fişek",
    greek: "φυσίγγιο",
    english: "cartridge"
}, {
    cypriot: "χαρτωμένος",
    turkish: "nişanlı",
    greek: "αρραβωνιασμένος",
    english: "engaged"
}, {
    cypriot: "χογλώ",
    turkish: "kaynatmak",
    greek: "βράζω",
    english: "boil"
}, {
    cypriot: "χτηνό",
    turkish: "hayvan",
    greek: "κτήνος",
    english: "animal"
}, {
    cypriot: "χτίν",
    turkish: "havan",
    greek: "γουδί",
    english: "mortar"
}, {
    cypriot: "χτιτσιό",
    turkish: "pislik",
    greek: "βρωμιά",
    english: "filth"
}, {
    cypriot: "χτιτσιολοώ",
    turkish: "kötü kokmak",
    greek: "βρωμάω",
    english: "stink"
}, {
    cypriot: "χτοσιέριν",
    turkish: "havan tokmağı",
    greek: "γουδοχέρι",
    english: "pestle"
}, {
    cypriot: "ψατζή",
    turkish: "zehir",
    greek: "δηλητήριο",
    english: "poison"
}, {
    cypriot: "ψάρι",
    turkish: "balık",
    greek: "ψάρι",
    english: "fish"
}, {
    cypriot: "Adez",
    turkish: "Kırılmış mercimek",
    greek: "Σπασμένες φακές",
    english: "Broken lentils"
}, {
    cypriot: "Barbadusa",
    turkish: "Yürüteç",
    greek: "Περπατούρα",
    english: "Walker (baby walker)"
}, {
    cypriot: "Guruvulla",
    turkish: "Cehennem topuzu",
    greek: "Ρόπαλο της κόλασης",
    english: "Hell's mace"
}, {
    cypriot: "Gulumbra",
    turkish: "Cehennem topuzu",
    greek: "Ρόπαλο της κόλασης",
    english: "Hell's mace"
}, {
    cypriot: "Caket",
    turkish: "Ceket",
    greek: "Σακάκι",
    english: "Jacket"
}, {
    cypriot: "Açuçu",
    turkish: "Köpekleri çağırırken kullanılan ses, kuçu kuçu",
    greek: "Φωνή για να καλέσεις σκύλους, κούτσου κούτσου",
    english: "Sound used to call dogs, kootsoo kootsoo"
}, {
    cypriot: "Adiyo",
    turkish: "Papazaltadan",
    greek: "Πάτερ Νόστρουμ (παράδειγμα)",
    english: "From the priest's house"
}, {
    cypriot: "Açacak",
    turkish: "Anahtar, kilidi açıp kapatmak için kullanılan alet",
    greek: "Κλειδί, εργαλείο για άνοιγμα κλειδαριάς",
    english: "Key, tool used for opening and closing locks"
}, {
    cypriot: "Açgi",
    turkish: "Oklava",
    greek: "Πλάστης",
    english: "Rolling pin"
}, {
    cypriot: "Karnabit",
    turkish: "Çiçek Lahanası, Değirmenlik (Kytrea) bölgesinden yetiştirilmiş",
    greek: "Κουνουπίδι από την περιοχή Κιότρεα",
    english: "Cauliflower from the Kytrea region"
}, {
    cypriot: "Çilenmek",
    turkish: "Çile çekmek",
    greek: "Υποφέρω",
    english: "To suffer"
}, {
    cypriot: "Çilte",
    turkish: "Şilte",
    greek: "Στρώμα",
    english: "Mattress"
}, {
    cypriot: "Cimcik",
    turkish: "Çimcimlemek",
    greek: "Τσιμπήματα",
    english: "Pinch"
}, {
    cypriot: "Cimciklemek",
    turkish: "Çimcimlemek",
    greek: "Τσιμπώ",
    english: "To pinch"
}, {
    cypriot: "Cıngı",
    turkish: "Kıvılcım",
    greek: "Σπινθήρας",
    english: "Spark"
}, {
    cypriot: "Labicana",
    turkish: "Dabacana, su bidonu",
    greek: "Δοχείο νερού",
    english: "Water container"
}, {
    cypriot: "Daban",
    turkish: "Düz ayak, ayakkabının alt tabanı",
    greek: "Πατούσα, σόλα παπουτσιού",
    english: "Flat foot, shoe sole"
}, {
    cypriot: "Darbaz",
    turkish: "Kaba yapılı kişi",
    greek: "Χοντροκομμένος άνθρωπος",
    english: "Rough-built person"
}, {
    cypriot: "Dibelik",
    turkish: "Büsbütün, daima",
    greek: "Εντελώς, πάντα",
    english: "Completely, always"
}, {
    cypriot: "Ali Dayı",
    turkish: "Kaba",
    greek: "Χοντροκομμένος",
    english: "Rough"
}, {
    cypriot: "Dayday",
    turkish: "Çocuğun yavaş yavaş yürümesi, çocuğun yürümesini sağlayan alet",
    greek: "Περπάτημα αργά από το παιδί, εργαλείο για το περπάτημα",
    english: "Child walking slowly, walking aid for children"
}, {
    cypriot: "Daydaylamak",
    turkish: "Çocuk gibi yavaş yavaş yürümek",
    greek: "Περπατώ αργά σαν παιδί",
    english: "To walk slowly like a child"
}, {
    cypriot: "Debozito",
    turkish: "Teminat",
    greek: "Εγγύηση",
    english: "Guarantee"
}, {
    cypriot: "Depozito",
    turkish: "Teminat",
    greek: "Εγγύηση",
    english: "Guarantee"
}, {
    cypriot: "Dedirgin",
    turkish: "Tedirgin",
    greek: "Ανήσυχος",
    english: "Uneasy"
}, {
    cypriot: "Garulya",
    turkish: "Kıbrıs'a ait fincan işi",
    greek: "Κύπριος καφές",
    english: "Cyprus coffee"
}, {
    cypriot: "Carozza",
    turkish: "Fayton/payton",
    greek: "Αμαξάκι",
    english: "Carriage"
}, {
    cypriot: "Gastanya",
    turkish: "Kayıngillerden, kerestesi güzel bir orman ağacı",
    greek: "Κάστανο, δέντρο με καλής ποιότητας ξύλο",
    english: "Chestnut, a tree with good quality wood"
}, {
    cypriot: "Gaşer",
    turkish: "Kasiyer, kasada para almak için bekleyen kişi",
    greek: "Ταμίας",
    english: "Cashier"
}, {
    cypriot: "Gatsambroki",
    turkish: "Başsız, tahtadan kibrit yarısı",
    greek: "Ακέφαλος, ξύλινο μισό σπίρτο",
    english: "Headless, half wooden matchstick"
}, {
    cypriot: "Gatsavida",
    turkish: "Bükü",
    greek: "Βίδα",
    english: "Screw"
}, {
    cypriot: "Gatsignora",
    turkish: "Serçegillerden, kargaya benzeyen, uzun kuyruklu bir kuş. Pica Pica, Saksağan",
    greek: "Κίσσα, πουλί με μακριά ουρά που μοιάζει με κοράκι",
    english: "Magpie, long-tailed bird similar to a crow"
}, {
    cypriot: "Gavorgana",
    turkish: "Tanrı cezanı versin",
    greek: "Ο Θεός να σε τιμωρήσει",
    english: "May God punish you"
}, {
    cypriot: "Gavvorgane",
    turkish: "Tanrı cezanı versin",
    greek: "Ο Θεός να σε τιμωρήσει",
    english: "May God punish you"
}, {
    cypriot: "Gavuri",
    turkish: "Erkek eşek",
    greek: "Γάιδαρος (αρσενικός)",
    english: "Male donkey"
}, {
    cypriot: "Gavumades",
    turkish: "Kurumuş, tuzlanmış zeytin",
    greek: "Αποξηραμένες, αλατισμένες ελιές",
    english: "Dried, salted olives"
}, {
    cypriot: "Gavurinihtes",
    turkish: "Kurutulmuş, tuzlanmış zeytin",
    greek: "Αποξηραμένες, αλατισμένες ελιές",
    english: "Dried, salted olives"
}, {
    cypriot: "Gordon",
    turkish: "Kalın sicim, madolyan veya saat asmak için zincir",
    greek: "Παχύ σχοινί, αλυσίδα για μετάλλιο ή ρολόι",
    english: "Thick string, chain for a medal or watch"
}, {
    cypriot: "Gonnara",
    turkish: "Dikenli tülünbeye benzer",
    greek: "Μοιάζει με αγκαθωτό φυτό",
    english: "Resembles a thorny plant"
}, {
    cypriot: "Gonga",
    turkish: "İki top iskambil ile oynanan, en az iki kişinin oynadığı kağıt oyunu",
    greek: "Παιχνίδι με τράπουλα που παίζεται με δύο τράπουλες (συμπεριλαμβανομένων των τζόκερ) από δύο ή περισσότερα άτομα",
    english: "Card game played with two decks (including jokers) by two or more people"
}, {
    cypriot: "Griko",
    turkish: "Ağır bir şeyi kaldırmak için kullanılan alet, kriko",
    greek: "Γρύλος για την ανύψωση βαρέων αντικειμένων",
    english: "Jack for lifting heavy objects"
}, {
    cypriot: "Fışkı",
    turkish: "Gübre",
    greek: "Κοπριά",
    english: "Manure"
}, {
    cypriot: "Yiro",
    turkish: "Daire, çember, roundabout",
    greek: "Κύκλος, κυκλικός κόμβος",
    english: "Circle, roundabout"
}, {
    cypriot: "Yuro",
    turkish: "Daire, çember, roundabout",
    greek: "Κύκλος, κυκλικός κόμβος",
    english: "Circle, roundabout"
}, {
    cypriot: "Roundabout",
    turkish: "Daire, çember",
    greek: "Κύκλος, κυκλικός κόμβος",
    english: "Circle, roundabout"
}, {
    cypriot: "Zuk",
    turkish: "Kıbrıs rakısı",
    greek: "Κυπριακό ρακί",
    english: "Cypriot raki"
}, {
    cypriot: "Zivania",
    turkish: "Kıbrıs cibre brendisidir",
    greek: "Κυπριακό τσίπουρο",
    english: "Cypriot pomace brandy"
}, {
    cypriot: "Zivaniya",
    turkish: "Kıbrıs cibre brendisidir",
    greek: "Κυπριακό τσίπουρο",
    english: "Cypriot pomace brandy"
}, //790
{
    cypriot: "tabellacı",
    turkish: "tabella yazan kimse",
    greek: "πινακιστής",
    english: "sign writer"
}, {
    cypriot: "tahan",
    turkish: "tahın",
    greek: "ταχίνι",
    english: "tahini"
}, {
    cypriot: "tahanlı",
    turkish: "tahınlı",
    greek: "ταχινόπιτα",
    english: "tahini pie"
}, {
    cypriot: "tahınlı",
    turkish: "tahin kullanılarak yapılan spiral tatlı",
    greek: "ταχινόπιτα",
    english: "tahini roll"
}, {
    cypriot: "tahta tahta ben var",
    turkish: "Babi Düme oyununa benzer bir çocuk oyunu",
    greek: "ξύλινο παιχνίδι",
    english: "wooden game"
}, {
    cypriot: "takka",
    turkish: "kimi kuşların tepelerinde bulunan uzunca tüy, sorguç",
    greek: "φούντα",
    english: "plume"
}, {
    cypriot: "takkalı",
    turkish: "takkası olan",
    greek: "με φούντα",
    english: "with a plume"
}, {
    cypriot: "takkalı",
    turkish: "toprak renginde, takkalı, göçmen olmayan, yerli bir kuş",
    greek: "τοπικό πτηνό",
    english: "native bird"
}, {
    cypriot: "talar",
    turkish: "nora şekil vermede kullanılan, süpürge otundan veya ince dallardan yapılmış bir tür küçük sepet",
    greek: "καλάθι",
    english: "basket"
}, {
    cypriot: "talatur",
    turkish: "yoğurt, ayran içine hıyar doğranarak yapılan çok kez sarımsaklı soğukluk, cacık",
    greek: "τταλατούρι",
    english: "tzatziki"
}, {
    cypriot: "talya",
    turkish: "patates çiçeği",
    greek: "λουλούδι πατάτας",
    english: "potato flower"
}, {
    cypriot: "tamburça",
    turkish: "deriden yapılmış, deliksiz, evsemekte kullanılan elek",
    greek: "σουρωτήρι",
    english: "sieve"
}, {
    cypriot: "tatari",
    turkish: "tat olan",
    greek: "γευστικός",
    english: "tasty"
}, {
    cypriot: "tatari",
    turkish: "dengesiz kişi",
    greek: "άστατος",
    english: "unstable person"
}, {
    cypriot: "tatlı leymon",
    turkish: "yuvarlak, düz kabuklu, içi tatlı bir limon türü",
    greek: "γλυκό λεμόνι",
    english: "sweet lemon"
}, {
    cypriot: "tavatır",
    turkish: "ağızlarda dolaşan ve doğruluğu belli olmayan haber, söylenti",
    greek: "φήμη",
    english: "rumor"
}, {
    cypriot: "tayfalmak/tayfalanmak",
    turkish: "fazla acıkmak",
    greek: "πεινάω πολύ",
    english: "to be very hungry"
}, {
    cypriot: "tayfalmak/tayfalanmak",
    turkish: "bayılmak(bilincin kapanması anlamında)",
    greek: "λιποθυμώ",
    english: "to faint"
}, {
    cypriot: "tebareki",
    turkish: "ölünün gömüldüğü gece Kuran’dan ayet okunması",
    greek: "τεμπαρέκι",
    english: "reading Quran verses"
}, {
    cypriot: "tehel",
    turkish: "makineyle yapılan dikiş, teyel",
    greek: "γαζί",
    english: "stitch"
}, {
    cypriot: "tehellemek",
    turkish: "tehelle tutturmak ya da tehel vurmak, teyellemek",
    greek: "γαζώνω",
    english: "to stitch"
}, {
    cypriot: "tehelli",
    turkish: "tehelle tutturulmuş ya da tehel vurulmuş, teyelli",
    greek: "ραμμένος",
    english: "stitched"
}, {
    cypriot: "tekeç/tekeş",
    turkish: "eşi kaybolmuş hayvan",
    greek: "χήρα ζώο",
    english: "widowed animal"
}, {
    cypriot: "tekerlek oyunu",
    turkish: "çember oyunu",
    greek: "παιχνίδι με στεφάνι",
    english: "hoop game"
}, {
    cypriot: "tele",
    turkish: "Kumaşla astar arasına konularak giysinin dik durmasını sağlayan kolalı bez, tela",
    greek: "διπλή",
    english: "interfacing"
}, {
    cypriot: "tele",
    turkish: "dikiş ipliği",
    greek: "κλωστή",
    english: "sewing thread"
}, {
    cypriot: "tele almak",
    turkish: "alay etmek",
    greek: "κοροϊδεύω",
    english: "to mock"
}, {
    cypriot: "telli karga",
    turkish: "uzun kuyruklu, siyah, göğüs kısımları yeşilimsi bir karga türü",
    greek: "καρακάξα",
    english: "magpie"
}, {
    cypriot: "temre",
    turkish: "deride yer yer küme durumundaki birtakım karartılarla kendini gösteren hastalık, temreği",
    greek: "έκζεμα",
    english: "eczema"
}, {
    cypriot: "temreyi",
    turkish: "deride yer yer küme durumundaki birtakım karartılarla kendini gösteren hastalık, temreği",
    greek: "έκζεμα",
    english: "eczema"
}, {
    cypriot: "tenbel",
    turkish: "tembel",
    greek: "τεμπέλης",
    english: "lazy"
}, {
    cypriot: "tente",
    turkish: "her türlü iplikle örülen ya da kumaşın kenraına işlenen türlü biçimde ince ve ağımsı örgü",
    greek: "κρόσι",
    english: "fringe"
}, {
    cypriot: "tepreşmek",
    turkish: "yeniden ortaya çıkmak, nüksetmek",
    greek: "ανακάμπτω",
    english: "to relapse"
}, {
    cypriot: "tepreşmek",
    turkish: "kımıldamak, oynamak",
    greek: "κινώ",
    english: "to move"
}, {
    cypriot: "tepsermek",
    turkish: "ıslak bir şeyin az biraz suyunu çekmesi, kurumaya yüz tutması",
    greek: "στεγνώνω",
    english: "to start drying"
}, {
    cypriot: "tepsermek",
    turkish: "nemlenmek",
    greek: "υγραίνομαι",
    english: "to get damp"
}, {
    cypriot: "terb/terf",
    turkish: "küçük baş hayvanların iç organlarını kaplayan ince zar",
    greek: "μεμβράνη",
    english: "membrane"
}, {
    cypriot: "terb/terf",
    turkish: "gömlek",
    greek: "πουκάμισο",
    english: "shirt"
}, {
    cypriot: "terhunotu",
    turkish: "yerdenbahar",
    greek: "στρουθιονικό",
    english: "tarragon"
}, {
    cypriot: "terpiz",
    turkish: "ortalığın birbirine düşüp karışması, karışıklık, kargaşalık",
    greek: "αναταραχή",
    english: "chaos"
}, {
    cypriot: "terpiz",
    turkish: "her şeyi fenaya almak huyunda olan, kötüye yorucu",
    greek: "αρνητικός",
    english: "negative"
}, {
    cypriot: "terpiz",
    turkish: "karıştırıcı, arabozucu",
    greek: "ανακατεύω",
    english: "troublemaker"
}, {
    cypriot: "terpizlik",
    turkish: "karıştırıcılık, arabozuculuk, fesatlık",
    greek: "αταξία",
    english: "mischief"
}, {
    cypriot: "tey",
    turkish: "asma filizi",
    greek: "κλήματα",
    english: "vine shoot"
}, {
    cypriot: "tey",
    turkish: "kavun ya da karpuz sürgünü",
    greek: "σπόρος πεπονιού",
    english: "melon sprout"
}, {
    cypriot: "tezek",
    turkish: "sabanın veya belin kaldırdığı iri toprak",
    greek: "χώμα",
    english: "clod"
}, {
    cypriot: "tıbık",
    turkish: "kuş tutmada kullanılan üzerine okşa veya süpürge darısından yapılan yapışkan madde sürülmüş değnek",
    greek: "ραβδί παγίδευσης",
    english: "bird trapping stick"
}, {
    cypriot: "tımbırdama",
    turkish: "tımbır tımbır ötme, ses çıkarma",
    greek: "θορυβώ",
    english: "to buzz"
}, {
    cypriot: "tımbırdamak",
    turkish: "tambura gibi ince, kuru ve çınlama ses çıkarma, tıngırdatmak",
    greek: "τριγυρίζω",
    english: "to ring"
}, {
    cypriot: "tıpılamak",
    turkish: "ince ince yağmak, çiselemek",
    greek: "ψιχαλίζει",
    english: "to drizzle"
}, {
    cypriot: "tırahoma",
    turkish: "dırahoma, Hristiyan ve Yahudilerde gelinin damada verdiği mal/mülk, para",
    greek: "προίκα",
    english: "dowry"
}, {
    cypriot: "trahoma",
    turkish: "dırahoma, Hristiyan ve Yahudilerde gelinin damada verdiği mal/mülk, para",
    greek: "προίκα",
    english: "dowry"
}, {
    cypriot: "tile",
    turkish: "pamuk iplik, tire",
    greek: "νήμα",
    english: "thread"
}, {
    cypriot: "tingo tingo",
    turkish: "sessiz, patırtısız, tin tin",
    greek: "αθόρυβα",
    english: "quietly"
}, {
    cypriot: "tingoz",
    turkish: "çok asabi, huysuz ve titiz kimse",
    greek: "εκνευριστικός",
    english: "irritable person"
}, {
    cypriot: "tinyoz",
    turkish: "çok asabi, huysuz ve titiz kimse",
    greek: "εκνευριστικός",
    english: "irritable person"
}, {
    cypriot: "tingozlanmak",
    turkish: "övünmek, böbürlenmek",
    greek: "καυχιέμαι",
    english: "to boast"
}, {
    cypriot: "tinyozlanmak",
    turkish: "övünmek, böbürlenmek",
    greek: "καυχιέμαι",
    english: "to boast"
}, {
    cypriot: "tipilemek",
    turkish: "(hava) tipiye çevirmek, (yağmur) ince ince yağmak, çiselemek",
    greek: "χιονοθύελλα",
    english: "to snowstorm"
}, {
    cypriot: "tiringoz",
    turkish: "açıkgöz",
    greek: "πονηρός",
    english: "sly"
}, {
    cypriot: "tirifil",
    turkish: "hayvan yemi olarak yetiştirilen bir tür bitki, Tirfil",
    greek: "τροφή για ζώα",
    english: "animal feed"
}, {
    cypriot: "dirifil",
    turkish: "hayvan yemi olarak yetiştirilen bir tür bitki, Tirfil",
    greek: "τροφή για ζώα",
    english: "animal feed"
}, {
    cypriot: "tiriyoni",
    turkish: "korularda yaşayan, eti için avlanan, güvercini andırır bir kuş, Üveyik, bilimsel adıyla streptopelia Turtur",
    greek: "τυρίγιον",
    english: "dove-like bird"
}, {
    cypriot: "tokuç",
    turkish: "iri çekiç",
    greek: "σφυρί",
    english: "hammer"
}, {
    cypriot: "tokuç",
    turkish: "çamaşır tokası",
    greek: "μανταλάκι",
    english: "clothespin"
}, {
    cypriot: "tombola",
    turkish: "tombala",
    greek: "τόμπολα",
    english: "tombola"
}, {
    cypriot: "tombolacı",
    turkish: "tombalacının işi",
    greek: "τόμπολας",
    english: "tombola player"
}, {
    cypriot: "tombulacı",
    turkish: "kandırıkçı, dolandırıcı",
    greek: "απατεώνας",
    english: "swindler"
}, {
    cypriot: "dombulacı",
    turkish: "kandırıkçı, dolandırıcı",
    greek: "απατεώνας",
    english: "swindler"
}, {
    cypriot: "tongar",
    turkish: "başında takkası olan bir tür kuş",
    greek: "χρυσαετός",
    english: "golden eagle"
}, {
    cypriot: "topaç oyunu",
    turkish: "yere çizilen daire içerisinde topaç ya da topaçları çıkarmaya ve atılan topacın bu daire kalmaması genel ilkesine dayalı bir çocuk oyunu",
    greek: "παιχνίδι σβούρας",
    english: "spinning top game"
}, {
    cypriot: "topak",
    turkish: "kütle, külçe",
    greek: "μπάλα",
    english: "lump"
}, {
    cypriot: "tor",
    turkish: "hamam havlusu",
    greek: "πετσέτα μπάνιου",
    english: "bath towel"
}, {
    cypriot: "tor",
    turkish: "havlumsu çocuk bezi",
    greek: "πάντα",
    english: "cloth diaper"
}, {
    cypriot: "tos",
    turkish: "çizmenin topuk kısmı",
    greek: "τακούνι",
    english: "heel"
}, {
    cypriot: "tosbağı",
    turkish: "tosbağa, kaplumbağa",
    greek: "χελώνα",
    english: "turtle"
}, {
    cypriot: "tozartmak",
    turkish: "toz çıkarmak",
    greek: "σηκώνω σκόνη",
    english: "to make dust"
}, {
    cypriot: "trolli",
    turkish: "el arabası",
    greek: "καροτσάκι",
    english: "wheelbarrow"
}, {
    cypriot: "drolli",
    turkish: "el arabası",
    greek: "καροτσάκι",
    english: "wheelbarrow"
}, {
    cypriot: "tumbalamak",
    turkish: "devirmek, devrilmek",
    greek: "αναποδογυρίζω",
    english: "to topple"
}, {
    cypriot: "tumbalabaş",
    turkish: "baş tarafından devrilmiş, tepetaklak",
    greek: "ανάποδα",
    english: "upside down"
}, {
    cypriot: "dumbalabaş",
    turkish: "baş tarafından devrilmiş, tepetaklak",
    greek: "ανάποδα",
    english: "upside down"
}, {
    cypriot: "turkobullo",
    turkish: "rumlar destebana turkobullo, yani genç Türk, delikanlı demektedirler",
    greek: "τουρκόπουλο",
    english: "young Turk"
}, {
    cypriot: "tuz beleği",
    turkish: "eskiden yeni doğan çocuğun başı hariç, tuz, biraz şeker ve zeytinyağı karışımının vücuduna sürdükten sonra ilk belekle, ilk gömleğe verilen ad",
    greek: "αλμυρό κάλυμμα",
    english: "salt swaddle"
}, {
    cypriot: "tuz gömleği",
    turkish: "eskiden yeni doğan çocuğun başı hariç, tuz, biraz şeker ve zeytinyağı karışımının vücuduna sürdükten sonra ilk belekle, ilk gömleğe verilen ad",
    greek: "αλμυρό ρούχο",
    english: "salt garment"
}, {
    cypriot: "tülümbe",
    turkish: "meydan süpürgesi yapmakta kullanılan çalı",
    greek: "σκούπα",
    english: "broom"
}, {
    cypriot: "tülemek",
    turkish: "kuşlar ve evcil kanatlıların, uyumak için bir dala veya çubuğa konup sinmek",
    greek: "κουρνιάζω",
    english: "to roost"
}, {
    cypriot: "tünemek",
    turkish: "kuşlar ve evcil kanatlıların, uyumak için bir dala veya çubuğa konup sinmek",
    greek: "κουρνιάζω",
    english: "to roost"
}, {
    cypriot: "tülemek",
    turkish: "erkenden uykuya yatmak",
    greek: "κοιμάμαι νωρίς",
    english: "to sleep early"
}, {
    cypriot: "tünemek",
    turkish: "erkenden uykuya yatmak",
    greek: "κοιμάμαι νωρίς",
    english: "to sleep early"
}, {
    cypriot: "tüpürmek",
    turkish: "ağzındakileri dudakları arasına getirip dışarı vermek, tükürmek",
    greek: "φτύνω",
    english: "to spit"
}, {
    cypriot: "tüpürdüğünü yalamak",
    turkish: "tükürdüğünü yalamak, verdiği karardan benliğini küçülterek geri dönmek",
    greek: "αλλάζω γνώμη",
    english: "to eat one's words"
}, {
    cypriot: "tüpürük",
    turkish: "tükürük",
    greek: "σάλιο",
    english: "saliva"
}, {
    cypriot: "tüpürüklemek",
    turkish: "tüpürükle ıslatmak",
    greek: "σαλιώνω",
    english: "to wet with saliva"
}, {
    cypriot: "tüpürüklenmek",
    turkish: "tüpürükleme işine konu olmak",
    greek: "γίνομαι σαλιωμένος",
    english: "to be spit on"
}, {
    cypriot: "tütmek",
    turkish: "güzel kokmak, güzel koku yaymak",
    greek: "μοσχοβολώ",
    english: "to smell nice"
}, {
    cypriot: "tütmek",
    turkish: "duman çıkarmak",
    greek: "καπνίζω",
    english: "to smoke"
}, {
    cypriot: "tütmek",
    turkish: "dumanı geri vermek",
    greek: "αναδύω καπνό",
    english: "to emit smoke"
}, {
    cypriot: "tütülemek",
    turkish: "kokusunu duymak için bir şeyi burnuna yaklaştırıp havasını çekmek",
    greek: "μυρίζω",
    english: "to smell"
}, {
    cypriot: "tütülenmek",
    turkish: "tütüleme işine konu olmak",
    greek: "μυρίζομαι",
    english: "to be smelled"
}, {
    cypriot: "tütütmek",
    turkish: "nazardan korunmak için zeytin dalının yakılıp sevdiklerinin çevresinde gezdirilmesi, inaç. “gözü olanın gözü çıksın/götüne” gibi sözler sarfedilmektedir.",
    greek: "καπνίζω",
    english: "to smoke against evil eye"
}, {
    cypriot: "tüylemek",
    turkish: "kaçmak, sıvışmak",
    greek: "το σκάω",
    english: "to flee"
}, {
    cypriot: "ucumak",
    turkish: "bir şeyden soğumak, usanmak",
    greek: "κουράζομαι",
    english: "to tire of"
}, {
    cypriot: "ucundan",
    turkish: "devamlı, sürekli",
    greek: "συνεχώς",
    english: "constantly"
}, {
    cypriot: "ucundan",
    turkish: "bir işe hiç yorulmadan devam etmek",
    greek: "ακούραστα",
    english: "tirelessly"
}, {
    cypriot: "ucunmak",
    turkish: "bir şeyden nefret etmek, soğumak, bırakmak",
    greek: "αποφεύγω",
    english: "to avoid"
}, {
    cypriot: "uçurgan",
    turkish: "uçurtma",
    greek: "χαρταετός",
    english: "kite"
}, {
    cypriot: "uğunmak",
    turkish: "ovunmak",
    greek: "τρίβομαι",
    english: "to rub oneself"
}, {
    cypriot: "umbu",
    turkish: "su",
    greek: "νερό",
    english: "water"
}, {
    cypriot: "uruba",
    turkish: "giysi",
    greek: "ένδυμα",
    english: "garment"
}, {
    cypriot: "uşana",
    turkish: "keçinin doğurmasından sonra arkada çıkan toprağa denir",
    greek: "τοκτοπάς",
    english: "afterbirth"
}, {
    cypriot: "uşo",
    turkish: "eşeği durdurmada kullanılan sözcük",
    greek: "στοπ για γάιδαρο",
    english: "stop for donkey"
}, {
    cypriot: "uşşi",
    turkish: "eşek",
    greek: "γαϊδούρι",
    english: "donkey"
}, {
    cypriot: "utancak",
    turkish: "utangaç",
    greek: "ντροπαλός",
    english: "shy"
}, {
    cypriot: "utaşmak",
    turkish: "yetişmek, ulaşmak",
    greek: "φθάνω",
    english: "to reach"
}, {
    cypriot: "uyan",
    turkish: "sürücünün tutması için ipin bağlı olduğu hayvanların ağızlarına konulan demir ya da tahta, oyan",
    greek: "πετάλωμα",
    english: "bridle"
}, {
    cypriot: "oyan",
    turkish: "sürücünün tutması için ipin bağlı olduğu hayvanların ağızlarına konulan demir ya da tahta, uyan",
    greek: "πετάλωμα",
    english: "bridle"
}, {
    cypriot: "uzun işik oyunu",
    turkish: "giggirigi ve Ne Lazım diye bilinen iki çocuk oyununun genel adı",
    greek: "μακρύ φως παιχνίδι",
    english: "long light game"
}, {
    cypriot: "uzunhacı",
    turkish: "elin orta parmağı",
    greek: "μακρύ δάχτυλο",
    english: "middle finger"
}, {
    cypriot: "üçayak",
    turkish: "ayakkabıları onarmada, çakmakta kunduracıların kullandığı üç ayaklı araç",
    greek: "τρίποδο",
    english: "tripod"
}, {
    cypriot: "üçtaş oyunu",
    turkish: "ingiliz bayrağı şeklinde çizilen bir alanda iki oyuncunun üçer taşla oynadıkları oyun. Oyuncular teker teker taş koyarlar. Taşların aynı sıraya gelmesine özen gösterilir ya da diğer oyuncunun bu sırayı yapmamasına çalışılır. Bütün taşlar yerleştirilince ilk oynayan, herhangi bir taşı, taş atlatmadan en yakın noktalardan birine hareket ettirerek konar. Üçleme durumunda kazanır, üçleyemezse öteki oynar. Kararlaştırılan oyun sayısında oyun yapan kazamış olur. Dokuz Taş ya da On İki Taş bu oyunun gelişmiş versiyonudur.",
    greek: "τρίλιζα",
    english: "tic-tac-toe"
}, {
    cypriot: "üfelemek",
    turkish: "başparmağı ile işaret parmağı arasında bir şeyi (mesela nane) ezip inceltmek, toz haline getirmek, ufalamak",
    greek: "τρίβω",
    english: "to crush"
}, {
    cypriot: "üfürüntü",
    turkish: "ince toz",
    greek: "σκόνη",
    english: "fine dust"
}, {
    cypriot: "ülemek",
    turkish: "bölmek, taksim etmek",
    greek: "μοιράζω",
    english: "to divide"
}, {
    cypriot: "ülemek",
    turkish: "koyun ya da keçi sesi, bağırması, melemek",
    greek: "βελάζω",
    english: "to bleat"
}, {
    cypriot: "üleme",
    turkish: "ölmezotu",
    greek: "αμάρανθος",
    english: "everlasting flower"
}, {
    cypriot: "ülük",
    turkish: "testi, ibrik, çaydanlık gibi şeylerin su dökülen ağız kısımları",
    greek: "στόμιο",
    english: "spout"
}, {
    cypriot: "vada",
    turkish: "gülgillerden, bahçe çitlerinde yol kenarlarında kendiliğinden yetişen, dikenli bir çalı(rubus fruticosus), Dikendudu",
    greek: "βατόμουρο",
    english: "blackberry"
}, {
    cypriot: "vado",
    turkish: "Vadanın küçük türü",
    greek: "μικρό βατόμουρο",
    english: "small blackberry"
}, {
    cypriot: "vakla",
    turkish: "harup silkelemede kullanılan üste doğru incelen uzunca değnek",
    greek: "καλάμι",
    english: "cane"
}, {
    cypriot: "vali masası",
    turkish: "konukların ağırlanması için kullanılan genişçe yemek masası",
    greek: "τραπέζι επισκεπτών",
    english: "guest table"
}, {
    cypriot: "valvida",
    turkish: "akışkan bir maddenin geçmesine yol verdiği gibi çıkmasına da vidamsı bir parçanın yardımıyla yer veren bisiklet veya benzer parçalarda olan parça",
    greek: "βαλβίδα",
    english: "valve"
}, {
    cypriot: "vıngıldamak",
    turkish: "çok gürültü çıkarmak",
    greek: "βουίζω",
    english: "to buzz loudly"
}, {
    cypriot: "varara",
    turkish: "(kaba) “Ne sorarsın?”, “Nene gerek?”, “Seni ilgilendirmez.” Anlamında öfkelice söylenen söz",
    greek: "τί σε νοιάζει;",
    english: "what do you care?"
}, {
    cypriot: "vardakosta",
    turkish: "eskiden kıyıları koruyan gemilere verilen ad",
    greek: "ακτοπλοϊκό",
    english: "coast guard"
}, {
    cypriot: "vardakosta",
    turkish: "iri yarı ve gösterişli(kadın)",
    greek: "εντυπωσιακή γυναίκα",
    english: "impressive woman"
}, {
    cypriot: "vardakosta dinlememek",
    turkish: "önündekini, karşısındakini hesaba katmadan yürümek, ilerlemek ya da bir iş yapmak",
    greek: "προχωρώ χωρίς να λαμβάνω υπόψη",
    english: "to move forward without consideration"
}, {
    cypriot: "varga",
    turkish: "üç okkalı, saplı, taş kırmada kullanılan araç",
    greek: "βαριά",
    english: "heavy hammer"
}, {
    cypriot: "vatta",
    turkish: "testi",
    greek: "κανάτα",
    english: "jug"
}, {
    cypriot: "vavatsino",
    turkish: "vadanın yemişi",
    greek: "βατόμουρο",
    english: "bramble"
}, {
    cypriot: "velesbit",
    turkish: "bisiklet",
    greek: "ποδήλατο",
    english: "bicycle"
}, {
    cypriot: "verigo",
    turkish: "asma biçiminde yetişen, iri taneli, çekirdekli, uzun süre dayanan bir üzüm türü",
    greek: "σταφύλι",
    english: "grape"
}, {
    cypriot: "verga",
    turkish: "çubuk",
    greek: "ράβδος",
    english: "rod"
}, {
    cypriot: "vezirpaşa",
    turkish: "aşık oyunu, vezirovasilo",
    greek: "παιχνίδι με κόκαλα",
    english: "bone game"
}, {
    cypriot: "vezirovasilo",
    turkish: "aşık oyunu, vezirpaşa",
    greek: "παιχνίδι με κόκαλα",
    english: "bone game"
}, {
    cypriot: "vıngıldamak",
    turkish: "çınlamak, çın çın etmek",
    greek: "βουίζω",
    english: "to ring"
}, {
    cypriot: "vidadez",
    turkish: "kunduraların altına gönün yenmemesi için çakılan bir tür başlı çivi",
    greek: "καρφί",
    english: "nail"
}, {
    cypriot: "vira",
    turkish: "bidüziye, arasız",
    greek: "αδιάλειπτα",
    english: "unceasingly"
}, {
    cypriot: "vira",
    turkish: "yap, et gibi verilen komut",
    greek: "προχώρα",
    english: "command to move"
}, {
    cypriot: "vira",
    turkish: "devamlı çekmek",
    greek: "τραβώ συνεχώς",
    english: "to pull continuously"
}, {
    cypriot: "vitsa",
    turkish: "ince, uzun, yaş, uç kısmı yapraklı ağaç dalı",
    greek: "κλαδί",
    english: "branch"
}, {
    cypriot: "vizilemek",
    turkish: "hastalık veya zayıflıktan dolayı ince ve cansız ses çıkarmak",
    greek: "παραπονιέμαι",
    english: "to whine"
}, {
    cypriot: "vomi",
    turkish: "iki tarla arasındaki toprak yığını",
    greek: "αναχώματα",
    english: "embankment"
}, {
    cypriot: "vomi",
    turkish: "sınır",
    greek: "όριο",
    english: "boundary"
}, {
    cypriot: "yahudi yesin seni",
    turkish: "(birinin) kötü durumlara düşmesini istemek",
    greek: "κατάρα",
    english: "curse"
}, {
    cypriot: "yalandırmak",
    turkish: "kandırmak, aldatmak",
    greek: "εξαπατώ",
    english: "to deceive"
}, {
    cypriot: "yalbırdamak",
    turkish: "parlamak",
    greek: "λάμπω",
    english: "shine"
}, {
    cypriot: "yalburdamak",
    turkish: "parlamak",
    greek: "λάμπω",
    english: "shine"
}, {
    cypriot: "yalpırdamak",
    turkish: "parlamak",
    greek: "λάμπω",
    english: "shine"
}, {
    cypriot: "yalbur yalbur",
    turkish: "parıl parıl, pırıl pırıl",
    greek: "αστραφτερός",
    english: "sparkling"
}, {
    cypriot: "yalçı",
    turkish: "cam gibi parlayan taş",
    greek: "λαμπερή πέτρα",
    english: "a stone which is shining like a glass"
}, {
    cypriot: "yalli",
    turkish: "ayna",
    greek: "καθρέφτης",
    english: "mirror"
}, {
    cypriot: "yanpürü",
    turkish: "eğri, büğrü, çarpık",
    greek: "στραβός",
    english: "crooked"
}, {
    cypriot: "yarıbuçuk",
    turkish: "yarım bırakılmış, bitirilmemiş, tamamlanmamış",
    greek: "ημιτελής",
    english: "unfinished"
}, {
    cypriot: "yataksandalyesi",
    turkish: "uzanabilecek şekilde yapılan, döşeme yerine bez gerilen bir tğür portatif koltuk, şezlong",
    greek: "ξαπλώστρα",
    english: "lounger"
}, {
    cypriot: "yatıevi",
    turkish: "yolcu evi, otel",
    greek: "ξενοδοχείο",
    english: "hotel"
}, {
    cypriot: "yayılgan",
    turkish: "yayılma özelliği olan",
    greek: "επεκτατικός",
    english: "expansive"
}, {
    cypriot: "yaymaç",
    turkish: "radyo",
    greek: "ραδιόφωνο",
    english: "radio"
}, {
    cypriot: "yaz girişi",
    turkish: "ilkbahar, ilkyaz",
    greek: "άνοιξη",
    english: "spring"
}, {
    cypriot: "yenir ağrısı",
    turkish: "gittikçe derinleşip oyularak genişleyen yara",
    greek: "έλκος",
    english: "ulcer"
}, {
    cypriot: "yennar",
    turkish: "ocak ayı",
    greek: "Ιανουάριος",
    english: "January"
}, {
    cypriot: "yerdenbahar",
    turkish: "dereotu",
    greek: "μάραθος",
    english: "dill"
}, {
    cypriot: "yergastro",
    turkish: "ayrıkotu",
    greek: "αγριάδα",
    english: "quackgrass"
}, {
    cypriot: "yerinmek",
    turkish: "kederlenmek, maraz etmek",
    greek: "στεναχωριέμαι",
    english: "to grieve"
}, {
    cypriot: "yerinmek",
    turkish: "gücenmek",
    greek: "παραπονούμαι",
    english: "to complain"
}, {
    cypriot: "yerimo",
    turkish: "beytambal",
    greek: "μπεϊμπαλ",
    english: "bay tamal"
}, {
    cypriot: "yeyinti",
    turkish: "yiyecek şeyler",
    greek: "φαγητό",
    english: "food"
}, {
    cypriot: "yıkışmak",
    turkish: "hoşa gitmeyecek şekilde sataşmak",
    greek: "πειράζω",
    english: "to tease"
}, {
    cypriot: "yılgar",
    turkish: "İlgar, dizginleri koyuverilmiş atın dörtnala koşması",
    greek: "κάλπαζα",
    english: "galloping"
}, {
    cypriot: "yiro",
    turkish: "daire, değirmi, yuro",
    greek: "κύκλος",
    english: "circle"
}, {
    cypriot: "yiro",
    turkish: "çevre, yuro",
    greek: "περίμετρος",
    english: "perimeter"
}, {
    cypriot: "yuro",
    turkish: "daire, değirmi, yiro",
    greek: "κύκλος",
    english: "circle"
}, {
    cypriot: "yuro",
    turkish: "çevre, yiro",
    greek: "περίμετρος",
    english: "perimeter"
}, {
    cypriot: "yom",
    turkish: "uğur",
    greek: "ευλογία",
    english: "blessing"
}, {
    cypriot: "yunak",
    turkish: "davarın yıkanıldığı sulak yer",
    greek: "πλύσιμο",
    english: "washing place"
}, {
    cypriot: "yusufu",
    turkish: "mandarin",
    greek: "μανταρίνι",
    english: "mandarin"
}, {
    cypriot: "yuvarlaktaş",
    turkish: "yollarda, toprak damlarda yeri bastırmak, toprakları ezmek için gzedirilen taş silindir",
    greek: "κύλινδρος",
    english: "roller"
}, {
    cypriot: "yürülmek",
    turkish: "gebe kalmak, döl turmak",
    greek: "μείνω έγκυος",
    english: "to get pregnant"
}, {
    cypriot: "yürülmek",
    turkish: "hayvanların çiftleşmesi",
    greek: "ζευγαρώνω",
    english: "to mate"
}, {
    cypriot: "yütmek",
    turkish: "(oyunda) yenmek, kazanmak, ütmek",
    greek: "νικώ",
    english: "to win"
}, {
    cypriot: "yütülmek",
    turkish: "(oyunda) kaybetmek, ütülmek",
    greek: "χάνω",
    english: "to lose"
}, {
    cypriot: "zahar",
    turkish: "zağar, bir tür av köpeği",
    greek: "κυνηγόσκυλο",
    english: "hunting dog"
}, {
    cypriot: "zal",
    turkish: "deli",
    greek: "τρελός",
    english: "crazy"
}, {
    cypriot: "zangadak",
    turkish: "birdenbire ve sarsıntıyla(durmak, oturmak, düşmek vb)",
    greek: "βίαια",
    english: "abruptly"
}, {
    cypriot: "zarıncamak",
    turkish: "ızdırap içinde yaşamak",
    greek: "υποφέρω",
    english: "to suffer"
}, {
    cypriot: "zırıncamak",
    turkish: "ızdırap içine yaşamak",
    greek: "υποφέρω",
    english: "to suffer"
}, {
    cypriot: "zarta atmak",
    turkish: "atıp tutmak",
    greek: "λαλούν",
    english: "to boast"
}, {
    cypriot: "zarta atmak",
    turkish: "yellenmek",
    greek: "πέρδομαι",
    english: "to fart"
}, {
    cypriot: "zayip olmak",
    turkish: "zannetmek",
    greek: "υποθέτω",
    english: "to suppose"
}, {
    cypriot: "zebelleş",
    turkish: "musallat, tebelleş",
    greek: "παρεμβατικός",
    english: "meddlesome"
}, {
    cypriot: "zebelleş olmak",
    turkish: "musallat olmak, tebelleş olmak",
    greek: "παρεμβαίνω",
    english: "to meddle"
}, {
    cypriot: "zebil",
    turkish: "acınacak durumda olan, bozgun, ezgin, perişan",
    greek: "ατυχής",
    english: "pitiful"
}, {
    cypriot: "zebil olmak",
    turkish: "acınacak duruma gelmek, bozguna uğramak, perişan olmak",
    greek: "έχω κακή τύχη",
    english: "to be pitiful"
}, {
    cypriot: "zebillik",
    turkish: "acınacak durum, bozgunluk, ezginlik, perişanlık",
    greek: "ατυχία",
    english: "pitiful state"
}, {
    cypriot: "zehir ağacı",
    turkish: "karşılıklı küçük yapraklı, tohumları çitlenbik büyüklüğünde, bir tür ağaç",
    greek: "δηλητηριώδες δέντρο",
    english: "poison tree"
}, {
    cypriot: "zehir çıkarmak",
    turkish: "haspa çıkar, konuşma! sus! Anlamında “zehir çıkar!” biçiminde kullanılan argo",
    greek: "σκάσε",
    english: "shut up"
}, {
    cypriot: "zerzemin",
    turkish: "savaş durumlarında toprak altında açılan ve düşman içlerine girmek için kullanılan tünel",
    greek: "υπόγειο τούνελ",
    english: "subterranean tunnel"
}, {
    cypriot: "zesto",
    turkish: "etsiz pişirilen makarna, pilav gibi yemekler",
    greek: "χορτοφαγικό",
    english: "vegetarian"
}, {
    cypriot: "zevla",
    turkish: "her çift hayvanın boynunu tutan, boyunduruğun iki ucunda birer çift değnektir",
    greek: "ζεύγη",
    english: "yoke"
}, {
    cypriot: "zıbandık",
    turkish: "görünüşü ve davranışlarıyla korku iri yarı adam, ızbandut",
    greek: "τρομακτικός",
    english: "frightening"
}, {
    cypriot: "zıppır",
    turkish: "deli dolu, delişmen, zıpır",
    greek: "ζιπ",
    english: "zippy"
}, {
    cypriot: "zırdagolo",
    turkish: "yerdeki bir kütük üzerine, dönebilen uzun bir tahtanın çakılarak iki ucuna çocukların oturup oynadıkları oyuncak",
    greek: "ξυλόβαθρο",
    english: "wooden see-saw"
}, {
    cypriot: "zibillik",
    turkish: "çöplük",
    greek: "χωματερή",
    english: "dump"
}, {
    cypriot: "zillidayre",
    turkish: "tef",
    greek: "ντέφι",
    english: "tambourine"
}, {
    cypriot: "zincir çiçeği",
    turkish: "kalın et yapraklı, çeşitli renklerde çiçekleri olan, yayılgan bir süs bitkί",
    greek: "χαλινό",
    english: "bridal flower"
}, {
    cypriot: "zip",
    turkish: "fermuar",
    greek: "φερμουάρ",
    english: "zipper"
}, {
    cypriot: "zirziro",
    turkish: "ağustos böceği",
    greek: "τζιτζίκι",
    english: "cicada"
}, {
    cypriot: "zirziro",
    turkish: "delidolu kimse",
    greek: "τρελός",
    english: "crazy person"
}, {
    cypriot: "zivaniya",
    turkish: "kıbrısın yerel içkisi",
    greek: "ζιβανία",
    english: "zivania"
}, {
    cypriot: "zonguldamak",
    turkish: "zonklamak",
    greek: "χτυπώ",
    english: "to throb"
}, {
    cypriot: "zobba",
    turkish: "dayak, kötek, sopa",
    greek: "ξύλο",
    english: "stick"
}, {
    cypriot: "zuhli",
    turkish: "katı birşeyleri dikerken iğne geçirilecek yeri delmek için kullanılan çelikten yapılmış sivri uçlu ve ağaç saplı aygıt",
    greek: "τρυπάνι",
    english: "awl"
}, {
    cypriot: "zuk",
    turkish: "kıbrıs rakısı",
    greek: "ζιβανία",
    english: "zivania"
}, {
    cypriot: "zulumen",
    turkish: "bir yiyeceğin çok acılığını belitmek için “zehir zıkkım” biçiminde kullanılır",
    greek: "καυτερός",
    english: "very spicy"
}, {
    cypriot: "zehir zulumen",
    turkish: "zehir zıkkım",
    greek: "καυτερό φαγητό",
    english: "very spicy food"
}, {
    cypriot: "Gakgalli",
    turkish: "Sümük",
    greek: "",
    english: "Snot,"
}, {
    cypriot: "Babavura",
    turkish: "Uğur Böceği",
    greek: "Πασχαλίτσα",
    english: "Ladybug"
}, {
    cypriot: "Babuç/Babiç",
    turkish: "Pabuç",
    greek: "Παπούτσι",
    english: "Shoe"
}, {
    cypriot: "Bango",
    turkish: "Tezgah",
    greek: "Πάγκος",
    english: "Bench"
}, {
    cypriot: "Bandofla",
    turkish: "Terlik",
    greek: "Παντόφλα",
    english: "Slipper"
}, {
    cypriot: "Badadez",
    turkish: "Patates",
    greek: "Πατάτες",
    english: "Potatoes"
}, {
    cypriot: "Barra",
    turkish: "Tahta direk veya birini defetmek için kullanılan argo",
    greek: "Στύλος ή αργκό για να διώξεις κάποιον",
    english: "Wooden pole or slang for dismissing someone"
}, {
    cypriot: "Basadembo",
    turkish: "Tuzlu kabak çekirdeği",
    greek: "Αλατισμένοι κολοκυθόσποροι",
    english: "Salted pumpkin seeds"
}, {
    cypriot: "Bandabulya",
    turkish: "Belediye pazarı",
    greek: "Δημοτική αγορά",
    english: "Municipal market"
}, {
    cypriot: "Basbalya",
    turkish: "Tokat",
    greek: "Χαστούκι",
    english: "Slap"
}, {
    cypriot: "Basdiş",
    turkish: "Acı badem kurabiyesi",
    greek: "Πικρό αμυγδαλωτό",
    english: "Bitter almond biscuit"
}, {
    cypriot: "Batsali",
    turkish: "Bir tür zehirli yılan çeşidi",
    greek: "Είδος δηλητηριώδους φιδιού",
    english: "Type of venomous snake"
}, {
    cypriot: "Bas",
    turkish: "Otobüs",
    greek: "Λεωφορείο",
    english: "Bus"
}, {
    cypriot: "Bariya",
    turkish: "Arkadaş grubu",
    greek: "Ομάδα φίλων",
    english: "Group of friends"
}, {
    cypriot: "Bavuri",
    turkish: "Bidon",
    greek: "Δοχείο",
    english: "Container"
}, {
    cypriot: "Belesbit",
    turkish: "Bisiklet",
    greek: "Ποδήλατο",
    english: "Bicycle"
}, {
    cypriot: "Belo",
    turkish: "Kırma köpek",
    greek: "Διασταύρωση σκύλου",
    english: "Mixed-breed dog"
}, {
    cypriot: "Beytambal galsın",
    turkish: "Eksik kalsın",
    greek: "Ας λείπει",
    english: "Let it be (leave it out)"
}, {
    cypriot: "Betsi",
    turkish: "Yassı sünger veya emici bez",
    greek: "Σφουγγάρι ή απορροφητικό ύφασμα",
    english: "Flat sponge or absorbent cloth"
}, {
    cypriot: "Bitda",
    turkish: "Börek",
    greek: "Πίτα",
    english: "Pastry"
}, {
    cypriot: "Birceğez",
    turkish: "Bir tane",
    greek: "Ένα",
    english: "One"
}, {
    cypriot: "Boru",
    turkish: "Korna",
    greek: "Κόρνα",
    english: "Horn"
}, {
    cypriot: "Bodiri",
    turkish: "Küçük bardak (veya kısa boylu kişi)",
    greek: "Μικρό ποτήρι (ή κοντός άνθρωπος)",
    english: "Small glass or short person"
}, {
    cypriot: "Bondoboksi",
    turkish: "Kısa boylu kimse",
    greek: "Κοντός άνθρωπος",
    english: "Short person"
}, {
    cypriot: "Bögün",
    turkish: "Bugün",
    greek: "Σήμερα",
    english: "Today"
}, {
    cypriot: "Bögüce",
    turkish: "Bu gece",
    greek: "Απόψε",
    english: "Tonight"
}, {
    cypriot: "Buncaçcık",
    turkish: "Minicik",
    greek: "Μικροσκοπικό",
    english: "Tiny"
}, {
    cypriot: "Bullez",
    turkish: "Yer elması",
    greek: "Αγγινάρα Ιερουσαλήμ",
    english: "Jerusalem artichoke"
}, {
    cypriot: "Bulli",
    turkish: "Piliç",
    greek: "Κοτοπουλάκι",
    english: "Chick"
}, {
    cypriot: "Bullim",
    turkish: "Canım anlamında da kullanılır",
    greek: "Αγαπημένος",
    english: "My dear"
}, {
    cypriot: "Bullo",
    turkish: "Kuş, genel anlamda",
    greek: "Πουλί",
    english: "Bird"
}, {
    cypriot: "Buraşda",
    turkish: "Burada",
    greek: "Εδώ",
    english: "Here"
}, {
    cypriot: "Cirilenmek",
    turkish: "Yuvarlanmak",
    greek: "Κυλίομαι",
    english: "To roll"
}, {
    cypriot: "Cigla",
    turkish: "Ardıçkuşu",
    greek: "Τσίχλα",
    english: "Thrush (bird)"
}, {
    cypriot: "Cizro (Zirziro)",
    turkish: "Ağustos Böceği",
    greek: "Τζιτζίκι",
    english: "Cicada"
}, {
    cypriot: "Çakizdez",
    turkish: "Kıbrıs’a özgü tuzlu kırılmış ve kurulan Yeşil zeytin",
    greek: "Πράσινη ελιά Κύπρου",
    english: "Salted and cracked Cypriot green olives"
}, {
    cypriot: "Dari",
    turkish: "Mısır",
    greek: "Καλαμπόκι",
    english: "Corn"
}, {
    cypriot: "Deplek",
    turkish: "Darbuka",
    greek: "Νταρμπούκα",
    english: "Goblet drum"
}, {
    cypriot: "Della",
    turkish: "Kalın ve renkli genellikle kargoda paketlemede kullanılan seloteyp",
    greek: "Χοντρή ταινία συσκευασίας",
    english: "Thick packing tape"
}, {
    cypriot: "Ditsiro",
    turkish: "Zavallı, zayıf",
    greek: "Αδύναμος, αξιολύπητος",
    english: "Weak, pitiful"
}, {
    cypriot: "Domadez",
    turkish: "Domates",
    greek: "Ντομάτες",
    english: "Tomatoes"
}, {
    cypriot: "Dümen",
    turkish: "Direksiyon",
    greek: "Τιμόνι",
    english: "Steering wheel"
}, {
    cypriot: "Fanella",
    turkish: "Fanila",
    greek: "Φανέλα",
    english: "Undershirt"
}, {
    cypriot: "Fago",
    turkish: "İleri derecede görme sorunu olan",
    greek: "Τυφλός",
    english: "Blind (severe visual impairment)"
}, {
    cypriot: "Fasariya",
    turkish: "Gereksiz",
    greek: "Άχρηστο",
    english: "Unnecessary"
}, {
    cypriot: "Fica",
    turkish: "Yosun",
    greek: "Φύκια",
    english: "Seaweed"
}, {
    cypriot: "Fortigo",
    turkish: "Kamyon",
    greek: "Φορτηγό",
    english: "Truck"
}, {
    cypriot: "Gargara yapmak",
    turkish: "Ağızda çalkalamak",
    greek: "Κάνω γαργάρα",
    english: "To gargle"
}, {
    cypriot: "Garyola",
    turkish: "Yatak",
    greek: "Κρεβάτι",
    english: "Bed"
}, {
    cypriot: "Galles",
    turkish: "Kalleş",
    greek: "Προδότης",
    english: "Traitor"
}, {
    cypriot: "Galif",
    turkish: "Genellikle evlerin damına kurulan baraka",
    greek: "Στέγαστρο στις στέγες",
    english: "Roof shelter"
}, {
    cypriot: "Gabbar",
    turkish: "Kapari",
    greek: "Κάπαρη",
    english: "Caper"
}, {
    cypriot: "Gancelli",
    turkish: "Bahçe kapısı",
    greek: "Πόρτα κήπου",
    english: "Garden gate"
}, {
    cypriot: "Gavvolem",
    turkish: "Allah kahretsin",
    greek: "Θεέ μου καταράσου",
    english: "Damn it"
}, {
    cypriot: "Gabira",
    turkish: "Kızarmış ekmek",
    greek: "Φρυγανιά",
    english: "Toast"
}, {
    cypriot: "Gadef",
    turkish: "Kadeh",
    greek: "Ποτήρι κρασιού",
    english: "Wine glass"
}, {
    cypriot: "Gave",
    turkish: "Kahve",
    greek: "Καφές",
    english: "Coffee"
}, {
    cypriot: "Gavro",
    turkish: "Yengeç veya karga burnu şeklinde İngiliz anahtarı",
    greek: "Καβούρι ή κλειδί γαλλικό",
    english: "Crab or spanner"
}, {
    cypriot: "Gabal",
    turkish: "Durmaksızın",
    greek: "Συνεχώς",
    english: "Constantly"
}, {
    cypriot: "Garavulli",
    turkish: "Salyangoz",
    greek: "Σαλιγκάρι",
    english: "Snail"
}, {
    cypriot: "Gatsavida",
    turkish: "Tornavida",
    greek: "Κατσαβίδι",
    english: "Screwdriver"
}, {
    cypriot: "Gapbella",
    turkish: "Bere",
    greek: "Σκουφάκι",
    english: "Beanie"
}, {
    cypriot: "Gatsot",
    turkish: "Cimri",
    greek: "Τσιγκούνης",
    english: "Stingy"
}, {
    cypriot: "Glaç",
    turkish: "Debriyaj",
    greek: "Συμπλέκτης",
    english: "Clutch"
}, {
    cypriot: "Gorniz",
    turkish: "Korniş",
    greek: "Κουρτινόξυλο",
    english: "Curtain rod"
}, {
    cypriot: "Goncoloz",
    turkish: "Canavar",
    greek: "Τέρας",
    english: "Monster"
}, {
    cypriot: "Golo",
    turkish: "Kıç",
    greek: "Κώλος",
    english: "Buttocks"
}, {
    cypriot: "Gologas",
    turkish: "Kökü pişirilip yenen bir bitki",
    greek: "Ρίζα που μαγειρεύεται",
    english: "Root vegetable"
}, {
    cypriot: "Golla",
    turkish: "Tutkal",
    greek: "Κόλλα",
    english: "Glue"
}, {
    cypriot: "Gollifa",
    turkish: "Susam, badem, kuru üzüm ve nar taneleriyle karıştırılmış haşlanmış buğday",
    greek: "Σιτάρι με σουσάμι, αμύγδαλα, σταφίδες και ρόδι",
    english: "Boiled wheat with sesame, almonds, raisins, and pomegranate"
}, {
    cypriot: "Golyandro",
    turkish: "Kişniş",
    greek: "Κόλιανδρος",
    english: "Coriander"
}, {
    cypriot: "Gonga",
    turkish: "Konken",
    greek: "Κονκέν",
    english: "Conk (game)"
}, {
    cypriot: "Govcalamak",
    turkish: "Kovalamak",
    greek: "Κυνηγώ",
    english: "To chase"
}, {
    cypriot: "Golifa zannetding galiba",
    turkish: "Kolay sandın galiba",
    greek: "Νόμισες ότι είναι εύκολο",
    english: "You thought it was easy"
}, {
    cypriot: "Göyver",
    turkish: "Koy ver",
    greek: "Άστο",
    english: "Let it go"
}, {
    cypriot: "Gocagari",
    turkish: "Yaşlı kadın",
    greek: "Γριά",
    english: "Old woman"
}, {
    cypriot: "Gindirik",
    turkish: "Aralık bırakmak",
    greek: "Αφήνω μισάνοιχτο",
    english: "To leave ajar"
}, {
    cypriot: "Girmizilik",
    turkish: "Ruj",
    greek: "Κραγιόν",
    english: "Lipstick"
}, {
    cypriot: "Gilli",
    turkish: "Erkek eşek",
    greek: "Αρσενικό γαϊδούρι",
    english: "Male donkey"
}, {
    cypriot: "Giksi",
    turkish: "Yırtıcı bir kuş, Atmaca",
    greek: "Γεράκι",
    english: "Hawk"
}, {
    cypriot: "Gıccatcık",
    turkish: "Kızcağız",
    greek: "Κοριτσάκι",
    english: "Little girl"
}, {
    cypriot: "Gel be bura",
    turkish: "Buraya gel",
    greek: "Έλα εδώ",
    english: "Come here"
}, {
    cypriot: "Guduru",
    turkish: "Ezbere, sıradan",
    greek: "Μηχανικά, πρόχειρα",
    english: "By rote, casually"
}, {
    cypriot: "Guduru",
    turkish: "Kontrolsüz, rastgele",
    greek: "Ανεξέλεγκτα",
    english: "Uncontrolled, randomly"
}, {
    cypriot: "Guello",
    turkish: "Aptal, ahmak",
    greek: "Χαζός",
    english: "Foolish"
}, {
    cypriot: "Gulliri",
    turkish: "Yuvarlak çörek veya dairesel olan şeyler",
    greek: "Κυκλικό ψωμάκι",
    english: "Round bread or circular items"
}, {
    cypriot: "Guno",
    turkish: "Aptal, beyinsiz",
    greek: "Ανόητος",
    english: "Foolish"
}, {
    cypriot: "Gurkuda",
    turkish: "Büyük duvar kertenkelesi veya korkunç yaşlı kişi",
    greek: "Μεγάλη σαύρα τοίχου ή τρομακτικός ηλικιωμένος",
    english: "Large wall lizard or frightening old person"
}, {
    cypriot: "Hasba çıkar",
    turkish: "Kes sesini",
    greek: "Σταμάτα",
    english: "Shut up"
}, {
    cypriot: "Harnip",
    turkish: "Keçiboynuzu",
    greek: "Χαρούπι",
    english: "Carob"
}, {
    cypriot: "Hade",
    turkish: "Hadi",
    greek: "Πάμε",
    english: "Come on"
}, {
    cypriot: "Haçan da",
    turkish: "Ne kadar çabuk!",
    greek: "Πόσο γρήγορα!",
    english: "How quickly!"
}, {
    cypriot: "Haçana be?",
    turkish: "Kaç kere?",
    greek: "Πόσες φορές;",
    english: "How many times?"
}, {
    cypriot: "Haksilo",
    turkish: "Kes sesini",
    greek: "Σταμάτα",
    english: "Shut up"
}, {
    cypriot: "Hacina",
    turkish: "Aracı",
    greek: "Μεσάζων",
    english: "Mediator"
}, {
    cypriot: "Hollo",
    turkish: "Hayalet veya ahmak",
    greek: "Φάντασμα ή ανόητος",
    english: "Ghost or fool"
}, {
    cypriot: "Ispaho",
    turkish: "İnce ip",
    greek: "Λεπτό σχοινί",
    english: "Thin rope"
}, {
    cypriot: "Isbano",
    turkish: "Köşe",
    greek: "Γωνία",
    english: "Corner"
}, {
    cypriot: "Isbasdra",
    turkish: "İskambil kâğıdı veya oyunu",
    greek: "Τράπουλα ή παιχνίδι",
    english: "Playing cards or game"
}, {
    cypriot: "Isgonto",
    turkish: "Ucuzluk",
    greek: "Ευκαιρία",
    english: "Bargain"
}, {
    cypriot: "Isbirto",
    turkish: "Kibrit veya saf alkol",
    greek: "Σπίρτα ή καθαρό οινόπνευμα",
    english: "Matches or pure alcohol"
}, {
    cypriot: "Isdavroz",
    turkish: "Haç (cross)",
    greek: "Σταυρός",
    english: "Cross"
}, {
    cypriot: "Kakdirmak",
    turkish: "İtmek",
    greek: "Σπρώχνω",
    english: "To push"
}, {
    cypriot: "Kakma",
    turkish: "Tekme",
    greek: "Κλωτσιά",
    english: "Kick"
}, {
    cypriot: "Kerata",
    turkish: "Yaramaz çocuk",
    greek: "Άτακτο παιδί",
    english: "Mischievous child"
}, {
    cypriot: "Küllüm",
    turkish: "Topluca",
    greek: "Όλα μαζί",
    english: "All together"
}, {
    cypriot: "Lapsana",
    turkish: "Yabani fakat yenilebilen çiçekli bir ot",
    greek: "Άγριο εδώδιμο φυτό",
    english: "Wild edible herb"
}, {
    cypriot: "Laşga",
    turkish: "Gevşek",
    greek: "Χαλαρός",
    english: "Loose"
}, {
    cypriot: "Lamarina",
    turkish: "Saç",
    greek: "Λαμαρίνα",
    english: "Sheet metal"
}, {
    cypriot: "Lamicana",
    turkish: "Su şişesi",
    greek: "Μπουκάλι νερού",
    english: "Water bottle"
}, {
    cypriot: "Lera",
    turkish: "Pis",
    greek: "Βρώμικο",
    english: "Dirty"
}, {
    cypriot: "Leymonatda",
    turkish: "Limonata",
    greek: "Λεμονάδα",
    english: "Lemonade"
}, {
    cypriot: "Letsa",
    turkish: "İnsan vücudunda istenmeyen yağ",
    greek: "Ανεπιθύμητο λίπος",
    english: "Unwanted body fat"
}, {
    cypriot: "Lingiri",
    turkish: "Değneklerle oynanan bir tür oyun",
    greek: "Παιχνίδι με μπαστούνια",
    english: "Game with sticks"
}, {
    cypriot: "Loddo",
    turkish: "Aşırı şişman kişi",
    greek: "Υπερβολικά παχύσαρκο άτομο",
    english: "Extremely obese person"
}, {
    cypriot: "Lollo",
    turkish: "Şaklaban",
    greek: "Γελωτοποιός",
    english: "Clown"
}, {
    cypriot: "Lollo",
    turkish: "Ahmak, aptal",
    greek: "Ηλίθιος",
    english: "Foolish"
}, {
    cypriot: "Luks",
    turkish: "Gazlı veya elektrikli ışıldak",
    greek: "Λάμπα υγραερίου ή ηλεκτρική",
    english: "Gas or electric lamp"
}, {
    cypriot: "Maksıl",
    turkish: "Mahsül",
    greek: "Προϊόν",
    english: "Produce"
}, {
    cypriot: "Ma",
    turkish: "Cümleye veya soruya başlangıç sözü, bu arada, aslında",
    greek: "Στην αρχή πρότασης, στην πραγματικότητα",
    english: "At the start of a sentence, actually"
}, {
    cypriot: "Managül",
    turkish: "Oje",
    greek: "Βερνίκι νυχιών",
    english: "Nail polish"
}, {
    cypriot: "Mandıra",
    turkish: "Üstü kapalı ahır",
    greek: "Στάβλος",
    english: "Barn"
}, {
    cypriot: "Mangos",
    turkish: "Hiddetli",
    greek: "Οργισμένος",
    english: "Furious"
}, {
    cypriot: "Magarına bulli",
    turkish: "Makarna & tavuk",
    greek: "Μακαρόνια με κοτόπουλο",
    english: "Pasta with chicken"
}, {
    cypriot: "Macun",
    turkish: "Reçel",
    greek: "Γλυκό του κουταλιού",
    english: "Jam"
}, {
    cypriot: "Marmaragi",
    turkish: "Mermer",
    greek: "Μάρμαρο",
    english: "Marble"
}, {
    cypriot: "Mısmıl",
    turkish: "Kaliteli/Sağlam",
    greek: "Ποιοτικό/Σταθερό",
    english: "High-quality/solid"
}, {
    cypriot: "Mişaro",
    turkish: "Kertenkele",
    greek: "Σαύρα",
    english: "Lizard"
}, {
    cypriot: "Manamu",
    turkish: "Acıma belirtir, zavallım",
    greek: "Λυπάμαι, καημένος",
    english: "Poor thing, my pity"
}, {
    cypriot: "Mücendra",
    turkish: "Yeşil mercimekli bir tür pilav",
    greek: "Ρύζι με φακές",
    english: "Rice with lentils"
}, {
    cypriot: "Napang?",
    turkish: "Nasılsın?",
    greek: "Τι κάνεις;",
    english: "How are you?"
}, {
    cypriot: "Oraşda",
    turkish: "Orada",
    greek: "Εκεί",
    english: "There"
}, {
    cypriot: "Osdo yüro",
    turkish: "Hiç durmadan dönmek, bir obje etrafında",
    greek: "Γυρίζω ασταμάτητα γύρω από ένα αντικείμενο",
    english: "To spin continuously around an object"
}, {
    cypriot: "Ötegü gün",
    turkish: "Önceki gün",
    greek: "Την προηγούμενη ημέρα",
    english: "The day before"
}, {
    cypriot: "Pasedembo",
    turkish: "Kabak çekirdeği",
    greek: "Κολοκυθόσπορος",
    english: "Pumpkin seeds"
}, {
    cypriot: "Paneri",
    turkish: "Hasırdan yapılmış yerel tepsi",
    greek: "Καλάθι από ψάθα",
    english: "Wicker basket"
}, {
    cypriot: "Pasdelli",
    turkish: "Susamlı ve ballı kuru bir yemiş/tatlı",
    greek: "Ξηροί καρποί με σουσάμι και μέλι",
    english: "Sesame and honey sweet"
}, {
    cypriot: "Patariya",
    turkish: "Pil veya araba aküsü",
    greek: "Μπαταρία ή μπαταρία αυτοκινήτου",
    english: "Battery or car battery"
}, {
    cypriot: "Penna",
    turkish: "Tükenmez kalem",
    greek: "Στυλό διαρκείας",
    english: "Ballpoint pen"
}, {
    cypriot: "Perisgan",
    turkish: "Suyla karıştırılıp içilen sodalı toz",
    greek: "Αναβράζουσα σκόνη αναμεμειγμένη με νερό",
    english: "Fizzing powder mixed with water"
}, {
    cypriot: "Pilavuna",
    turkish: "Peynir ve kuru üzümle yapılan börek",
    greek: "Πίτα με τυρί και σταφίδες",
    english: "Pie with cheese and raisins"
}, {
    cypriot: "Pirilli",
    turkish: "Misket, bilye",
    greek: "Γυάλινη μπίλια",
    english: "Marble"
}, {
    cypriot: "Pirohu",
    turkish: "Bir tür börek",
    greek: "Ένα είδος πίτας",
    english: "A type of pie"
}, {
    cypriot: "Piron",
    turkish: "Çatal",
    greek: "Πιρούνι",
    english: "Fork"
}, {
    cypriot: "Piskot",
    turkish: "Bisküvi",
    greek: "Μπισκότο",
    english: "Biscuit"
}, {
    cypriot: "Pesgir/Tor",
    turkish: "Havlu",
    greek: "Πετσέτα",
    english: "Towel"
}, {
    cypriot: "Potin",
    turkish: "Ayakkabı",
    greek: "Παπούτσι",
    english: "Shoe"
}, {
    cypriot: "Pisgot",
    turkish: "Bisküvi",
    greek: "Μπισκότο",
    english: "Biscuit"
}, {
    cypriot: "Pirili",
    turkish: "Misket",
    greek: "Γυάλινη μπίλια",
    english: "Marble"
}, {
    cypriot: "Pensa",
    turkish: "Kerpeten",
    greek: "Πένσα",
    english: "Pliers"
}, {
    cypriot: "Renga",
    turkish: "Kokulu Herring balığı",
    greek: "Ρέγγα",
    english: "Herring fish"
}, {
    cypriot: "Sakgulli",
    turkish: "Torba",
    greek: "Σακούλα",
    english: "Bag"
}, {
    cypriot: "Sakgo",
    turkish: "Mont/Ceket",
    greek: "Μπουφάν",
    english: "Jacket"
}, {
    cypriot: "Solina",
    turkish: "Boru",
    greek: "Σωλήνας",
    english: "Pipe"
}, {
    cypriot: "Susta",
    turkish: "Yay",
    greek: "Ελατήριο",
    english: "Spring"
}, {
    cypriot: "Siribilla",
    turkish: "Tavuk dışkısı",
    greek: "Κοτόπουλο κόπρανα",
    english: "Chicken droppings"
}, {
    cypriot: "Stekka",
    turkish: "Bilardo sopası",
    greek: "Μπαστούνι μπιλιάρδου",
    english: "Billiard stick"
}, {
    cypriot: "Stokko",
    turkish: "Cam çerçevelerinde kullanılan yapışkan macun",
    greek: "Στόκος για πλαίσια παραθύρων",
    english: "Putty for window frames"
}, {
    cypriot: "Şafk",
    turkish: "Işık",
    greek: "Φως",
    english: "Light"
}, {
    cypriot: "Şiro",
    turkish: "Kepçeli buldozer",
    greek: "Μπουλντόζα με κουτάλα",
    english: "Bulldozer with scoop"
}, {
    cypriot: "Tapba lamarina",
    turkish: "Çok hızlı giden aracı anlatmak için kullanılır",
    greek: "Πολύ γρήγορο όχημα",
    english: "Very fast vehicle"
}, {
    cypriot: "Tayka",
    turkish: "Dakika",
    greek: "Λεπτό",
    english: "Minute"
}, {
    cypriot: "Trabez",
    turkish: "Yemek masası",
    greek: "Τραπέζι φαγητού",
    english: "Dining table"
}, {
    cypriot: "Van",
    turkish: "Kamyonet",
    greek: "Φορτηγάκι",
    english: "Van"
}, {
    cypriot: "Vordo Vosgo Guello",
    turkish: "Aptal",
    greek: "Ηλίθιος",
    english: "Stupid"
}, {
    cypriot: "Valvid",
    turkish: "Valf veya subap, kapak",
    greek: "Βαλβίδα",
    english: "Valve or cap"
}, {
    cypriot: "Virra",
    turkish: "Devamlı, duraksız",
    greek: "Συνεχώς",
    english: "Continuously"
}, {
    cypriot: "Yusufcuk",
    turkish: "Mandalina",
    greek: "Μανταρίνι",
    english: "Tangerine"
}, {
    cypriot: "Yüro",
    turkish: "Dairesel tur atmak, dönmek",
    greek: "Κάνω κύκλο, περιστρέφομαι",
    english: "To rotate, to spin in circles"
}, {
    cypriot: "Zeflemek",
    turkish: "Alay etmek",
    greek: "Κοροϊδεύω",
    english: "To mock"
}, {
    cypriot: "Zivaniya",
    turkish: "Kıbrıs’a has, üzümden yapılan çok yüksek alkol oranı olan bir içki",
    greek: "Κυπριακό απόσταγμα σταφυλιών",
    english: "Cypriot grape spirit"
}, {
    cypriot: "Zıbandık ",
    turkish: " İzbandut, görünüşü ve davranışı ile korku veren(iri yarı adam)",
    greek: "ο τρομακτικός (μεγάλος, δυνατός τύπος) που τρομάζει τους ανθρώπους με την όψη και τη συμπεριφορά του",
    english: " the frightening(big, strong guy) who scares people with his sight and behaviours"
}, {
    cypriot: "Birceğez",
    turkish: "Birazcık",
    greek: "Λίγο",
    english: "A little bit, less"
}, {
    cypriot: "falan feslikan",
    turkish: "falan filan",
    greek: "μπλα μπλα μπλα μπλα",
    english: "and so on, bla bla; more or less, it happened like that"
}, {
    cypriot: "Puşt pezevenk",
    turkish: "Samimi bir ortamda argo, veya herhangi bir ortamda küfür/hakaret olarak kullanılır",
    greek: "Puşt σημαίνει αναξιόπιστος, προδότης, ομοφυλόφιλος ως προσβολή ή απλά μια ανούσια προσβολή- Pezevenk σημαίνει νταβατζής- όταν συνδυάζονται χρησιμοποιείται ως προσβολή ή αργκό σε ένα ειλικρινές περιβάλλον",
    english: "Puşt means untrustworthy, traitor, gay as an insult or just a meaningless insult; Pezevenk means pimp; when they are combined it is used as an insult or slang in a sincere setting"
}, {
    cypriot: "garabina",
    turkish: "kilitli kanca",
    greek: "καραμπίνερ",
    english: "carabiner"
}, {
    cypriot: "marka megapse",
    turkish: "ne idüğü belirsiz marka",
    greek: " άγνωστη και αναξιόπιστη μάρκα ",
    english: "unknown and untrustable brand"
}, {
    cypriot: "bendolira",
    turkish: "beşibiyerde",
    greek: " πέντε χρυσά νομίσματα",
    english: "five pieces of gold"
}, {
    cypriot: "Ispirto Rakısı",
    turkish: "Saf Alkol",
    greek: "Καθαρό αλκοόλ ",
    english: "Pure Alcohol"
}, {
    cypriot: "Lamba Suyu",
    turkish: "Gaz yağı",
    greek: "Πετρέλαιο εσωτερικής καύσης",
    english: "Gas oil"
}, {
    cypriot: "hiçbir şey",
    turkish: "ne demek, lafı olmaz",
    greek: "Παρακαλώ",
    english: "no problem, youa are welcome"
}, {
    cypriot: "beki",
    turkish: "belki",
    greek: "maybe",
    english: "ίσως"
}, {
    cypriot: "Αλιζάβρα",
    turkish: "iri kertenkele",
    greek: "μεγάλη σαύρα",
    english: "large lizard"
}, {
    cypriot: "Paluzade",
    turkish: "Üzüm suyu tatlısı",
    greek: "μουσταλευριά",
    english: "Grape pudding"
}, {
    cypriot: "Gamaşa",
    turkish: "Aptal",
    greek: "χαζός",
    english: "Stupid"
}, {
    cypriot: "Golimba",
    turkish: "Su birikintisi",
    greek: "λακούβα",
    english: "Puddle"
}, {
    cypriot: "Gutsulli",
    turkish: "İzmarit",
    greek: "γόπα",
    english: "Cigarette butt"
}, {
    cypriot: "Sıyrılmak",
    turkish: "Kaymak",
    greek: "γλιστράω",
    english: "To slip"
}, {
    cypriot: "Dırbalamak",
    turkish: "Asılsız şekilde atıp tutmak",
    greek: "λέω αρλούμπες",
    english: "To talk nonsense"
}, {
    cypriot: "γαλίνα",
    turkish: "Sükunet",
    greek: "γαλίνα",
    english: "Calm, Serenity"
}, {
    cypriot: "böyümek",
    turkish: "büyümek",
    greek: "μεγαλώνουν",
    english: "growing up"
}, {
    cypriot: "böyütmek",
    turkish: "büyütmek",
    greek: "αύξηση/μεγέθυνση",
    english: "raising/enlarging"
}, {
    cypriot: "bizimila/biziminan",
    turkish: "bizimle",
    greek: "μαζί μας",
    english: "with us"
}, {
    cypriot: "varel",
    turkish: "varil",
    greek: "βαρέλι",
    english: "barrel"
}, {
    cypriot: "topçuk",
    turkish: "langırt topu",
    greek: "μπάλα επιτραπέζιου ποδοσφαίρου",
    english: "table football ball"
}, {
    cypriot: "bullavugya",
    turkish: "bir yiyeceğin lokma kıvamında olması",
    greek: "η συνεκτικότητα ενός τροφίμου στο δάγκωμα",
    english: "the bite consistency of a food"
}, {
    cypriot: "şiribil",
    turkish: "az akışkan sıvı. Örnek, şurup",
    greek: "λιγότερο ιξώδες υγρό. Παράδειγμα, σιρόπι",
    english: "less viscous liquid. Example, syrup"
}, {
    cypriot: "biddaga",
    turkish: "yassı",
    greek: "επίπεδη",
    english: "flat"
}, {
    cypriot: "litra ceni",
    turkish: "mayasız hamur",
    greek: "αζύμωτη ζύμη",
    english: "unleavened dough"
}, {
    cypriot: "gurtella",
    turkish: "kesmeyen bıçak, tereyağ bıçağı",
    greek: "μη κοπτικό μαχαίρι, μαχαίρι βουτύρου",
    english: "non-cutting knife, butter knife"
}, {
    cypriot: "melada",
    turkish: "cıvık yumurta",
    greek: "αυγό που τρέχει",
    english: "runny egg"
}, {
    cypriot: "Μελαδα",
    turkish: "cıvık yumurtalar",
    greek: "αυγά που τρέχουν",
    english: "runny eggs"
}, {
    cypriot: "Μελαδον",
    turkish: "cıvık yumurta",
    greek: "αυγό που τρέχει",
    english: "runny egg"
}, {
    cypriot: "andilla",
    turkish: "şapkanın önündeki siper",
    greek: "γείσο μπροστά από το καπέλο",
    english: "visor in front of the hat"
}, {
    cypriot: "Gamodin jerado sou mesa",
    turkish: "boynuzlarını sikeyim",
    greek: "Γάμα τα κέρατά σου",
    english: "fuck your horns"
}, {
    cypriot: "ston golo sou rebani",
    turkish: "götüne turp girsin",
    greek: "μπορείς να βάλεις ένα ραπανάκι στον κώλο σου.",
    english: "you shall stick a radish up your arse."
}, {
    cypriot: "balaris gider",
    turkish: "aldı yolu gidiyor, hızlıca gidiyor",
    greek: "Είναι στο δρόμο του, πηγαίνει γρήγορα. Έχει μεταφορική σημασία.",
    english: "(s)He is/they are on his/her/their way. (s)he/they is/are going fast. It has a metaphoric meaning"
}, {
    cypriot: "gadaşimmu",
    turkish: "vay başıma gelenler",
    greek: "αλίμονό μου",
    english: "poor me"
}, {
    cypriot: "Κατιχι μου",
    turkish: "vay başıma gelenler",
    greek: "αλίμονό μου",
    english: "poor me"
}, {
    cypriot: "andilla goydu da bakar",
    turkish: "elini şapka yaptı uzağa bakar",
    greek: "χειροποίητο καπέλο, κοιτάζει στο βάθος",
    english: "hand made a hat, looks into the distance"
}, {
    cypriot: "diritmek",
    turkish: "ısrar etmek, direnmek",
    greek: "επιμένω, αντιστέκομαι",
    english: "insisting, resisting"
}, {
    cypriot: "vazgeşmek",
    turkish: "vazgeçmek",
    greek: "παραιτούμαι",
    english: "to give up/to decide not to do…"
}, {
    cypriot: "böyüg/böyük",
    turkish: "büyük",
    greek: "μεγάλο",
    english: "big"
}, {
    cypriot: "tokunmak",
    turkish: "dokunmak",
    greek: "αγγίξτε",
    english: "to touch"
}, {
    cypriot: "gaybedmek",
    turkish: "kaybetmek",
    greek: "χάσει",
    english: "to lose"
}, {
    cypriot: "deyişmek",
    turkish: "değişmek",
    greek: "αλλαγή",
    english: "to change"
}, {
    cypriot: "eşgermek",
    turkish: "belirmek",
    greek: "εμφανίζονται",
    english: "to appear"
}, {
    cypriot: "Διποδε",
    turkish: "hiçbirşey, rica ederim",
    greek: "Τίποτα, παρακαλώ.",
    english: "nothing, you are welcome"
}, {
    cypriot: "Πηρα",
    turkish: "sıcak(hava)",
    greek: "ζεστό(καιρός)",
    english: "hot(for weather)"
}, {
    cypriot: "Ουλλα μεζα",
    turkish: "hepsi bir arada/hepsi içinde",
    greek: "όλα σε ένα",
    english: "all in one/all inside"
}, {
    cypriot: "Ade deionne/Αντε δειοννε",
    turkish: "hade,çabuk çabuk",
    greek: "Έλα, βιάσου",
    english: "hurry up, quikly"
}, {
    cypriot: "silecek",
    turkish: "havlu",
    greek: "πετσέτα",
    english: "towel"
}, {
    cypriot: "κούσπος",
    turkish: "kazma",
    greek: "αξίνα",
    english: "pickaxe"
}, {
    cypriot: "Κοντοπότσης",
    turkish: "kısa insan",
    greek: "μικρός άνθρωπος",
    english: "short person"
}, {
    cypriot: "Σουσάμιν",
    turkish: "karasusam",
    greek: "μαύρο σουσάμι",
    english: "black sesame"
}, {
    cypriot: "Παούριν",
    turkish: "bidon",
    greek: "τύμπανο",
    english: "canister"
}, {
    cypriot: "Αγγόνιν",
    turkish: "torun",
    greek: "εγγόνι",
    english: "grandchil"
}, {
    cypriot: "Φάουσα",
    turkish: "zehir,kızamık",
    greek: "δηλητήριο/μέσα",
    english: "poison, measles"
}, {
    cypriot: "haspa",
    turkish: "zehir,kızamık",
    greek: "δηλητήριο/μέσα",
    english: "poison, measles"
},
{
    cypriot: "Cırlavık",
    turkish: "Ağustos Böceği",
    greek: "Τζιτζίκι",
    english: "Cicada"
}, {
    cypriot: "Gamini",
    turkish: "Tütsülenmiş",
    greek: "Καπνιστό",
    english: "Smoked"
}, {
    cypriot: "Canım asıldı",
    turkish: "Canım çekti",
    greek: "Λαχτάρησα",
    english: "I craved (something)"
}, {
    cypriot: "Gırgır",
    turkish: "Süpürge",
    greek: "Σκούπα",
    english: "Vacuum cleaner"
}, {
    cypriot: "Uçak alanı",
    turkish: "Havalimanı",
    greek: "Αεροδρόμιο",
    english: "Airport"
}, {
    cypriot: "Basılmak",
    turkish: "Araba çarpması",
    greek: "Παρασύρθηκε από αυτοκίνητο",
    english: "To be run over by a car"
}, {
    cypriot: "Amiyondo",
    turkish: "Spor ayakkabı",
    greek: "Αθλητικό παπούτσι",
    english: "Sneaker (Polemidya usage)"
}, {
    cypriot: "Kurdela",
    turkish: "Kurdele",
    greek: "Κορδέλα",
    english: "Ribbon"
}, {
    cypriot: "Bullik",
    turkish: "Argo terim",
    greek: "Προσβλητικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Yemiş",
    turkish: "Atıştırmalık",
    greek: "Σνακ",
    english: "Snacks"
}, {
    cypriot: "Cuva",
    turkish: "Conta seti",
    greek: "Σετ παρεμβυσμάτων",
    english: "Gasket set"
}, {
    cypriot: "Raundabaout / Raundabaunt",
    turkish: "Çember",
    greek: "Κυκλικός κόμβος",
    english: "Roundabout"
}, {
    cypriot: "Tomofil",
    turkish: "Otomobil",
    greek: "Αυτοκίνητο",
    english: "Car"
}, {
    cypriot: "Gatsara",
    turkish: "Bayatladı",
    greek: "Μπαγιάτεψε",
    english: "It went stale"
}, {
    cypriot: "Skattaro / Iskatoro",
    turkish: "Deri hastalığı",
    greek: "Δερματική πάθηση",
    english: "Skin condition with a bump"
}, {
    cypriot: "Drabano",
    turkish: "Matkap",
    greek: "Τρυπάνι",
    english: "Drill"
}, {
    cypriot: "Miyafon",
    turkish: "Mikrofon",
    greek: "Μικρόφωνο",
    english: "Microphone"
}, {
    cypriot: "Gakgadi",
    turkish: "Sümük",
    greek: "Βλέννα",
    english: "Mucus"
}, {
    cypriot: "Zerdali ağacı",
    turkish: "Kayısı ağacı",
    greek: "Βερικοκιά",
    english: "Apricot tree"
}, {
    cypriot: "Zerdali (Gayısı)",
    turkish: "Kayısı",
    greek: "Βερίκοκο",
    english: "Apricot"
}, {
    cypriot: "Karpız",
    turkish: "Karpuz",
    greek: "Καρπούζι",
    english: "Watermelon"
}, {
    cypriot: "Dumadez",
    turkish: "Domates",
    greek: "Ντομάτα",
    english: "Tomato"
}, {
    cypriot: "Hartdadak",
    turkish: "Aniden",
    greek: "Ξαφνικά",
    english: "Suddenly"
}, {
    cypriot: "Menemurla",
    turkish: "Zayıf / cılız",
    greek: "Αδύναμος / εύθραυστος",
    english: "Weak / frail"
}, {
    cypriot: "Golan",
    turkish: "Kemer",
    greek: "Ζώνη",
    english: "Belt"
}, {
    cypriot: "Dringa",
    turkish: "Ağzına kadar dolu",
    greek: "Γεμάτο μέχρι πάνω",
    english: "Filled to the brim"
}, {
    cypriot: "Yampuri",
    turkish: "Eğri",
    greek: "Στραβό",
    english: "Crooked"
}, {
    cypriot: "Bulli suyu",
    turkish: "Tavuk suyu",
    greek: "Ζωμός κοτόπουλου",
    english: "Chicken broth"
}, {
    cypriot: "Magi",
    turkish: "Tavuk bulyon",
    greek: "Κύβος κοτόπουλου",
    english: "Chicken stock cube"
}, {
    cypriot: "Hover / Huver",
    turkish: "Elektrikli süpürge",
    greek: "Ηλεκτρική σκούπα",
    english: "Vacuum cleaner"
}, {
    cypriot: "Yağmır",
    turkish: "Yağmur",
    greek: "Βροχή",
    english: "Rain"
}, {
    cypriot: "Hamır",
    turkish: "Hamur",
    greek: "Ζύμη",
    english: "Dough"
}, {
    cypriot: "Mamır",
    turkish: "Bakımlı / tertipli",
    greek: "Περιποιημένο",
    english: "Well-kept / neat"
}, {
    cypriot: "Gavır(mak)",
    turkish: "Kavurmak",
    greek: "Καβουρδίζω",
    english: "To roast"
}, {
    cypriot: "Öğlen",
    turkish: "Öğle vakti",
    greek: "Μεσημέρι",
    english: "Noon"
}, {
    cypriot: "Gibin",
    turkish: "Gibi",
    greek: "Όπως",
    english: "Like / as"
}, {
    cypriot: "Urum",
    turkish: "Rum",
    greek: "Έλληνας",
    english: "Greek (person)"
}, {
    cypriot: "Triforoz",
    turkish: "Mızmız",
    greek: "Ιδιότροπος",
    english: "Whiny / fussy"
}, {
    cypriot: "Bale gudalya bale gudalya",
    turkish: "Yine kaşık yine kaşık",
    greek: "Πάλι κουτάλι πάλι κουτάλι",
    english: "Again spoon, again spoon (repetitively)"
}, {
    cypriot: "Patarya",
    turkish: "Batarya",
    greek: "Μπαταρία",
    english: "Battery"
}, {
    cypriot: "Patariya",
    turkish: "Batarya",
    greek: "Μπαταρία",
    english: "Battery"
}, {
    cypriot: "Yediğin bullez",
    turkish: "Saçmalıyorsun",
    greek: "Λες ανοησίες",
    english: "You’re talking nonsense"
}, {
    cypriot: "ASFALYALARI ATMAK",
    turkish: "Tepesi atmak",
    greek: "Έχασα την υπομονή μου",
    english: "I lost my temper"
}, {
    cypriot: "ASFALYA",
    turkish: "Sigorta",
    greek: "Ασφάλεια",
    english: "Fuse"
}, {
    cypriot: "Appudiri gibi gezmek",
    turkish: "Evsiz gibi gezmek",
    greek: "Περιπλανιέμαι σαν άστεγος",
    english: "Wander around like a homeless person"
}, {
    cypriot: "Gurdislemek",
    turkish: "Kurcalamak",
    greek: "Σκαλίζω",
    english: "Means ‘to rummage / poke around’"
}, {
    cypriot: "Uhanam",
    turkish: "Vay canına",
    greek: "Πω πω",
    english: "Wow"
}, {
    cypriot: "Evrodo",
    turkish: "Argo terim",
    greek: "Προσβλητικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Gabudi",
    turkish: "Kalkanlı köyü",
    greek: "Χωριό Καλκανλί",
    english: "Kalkanlı village"
}, {
    cypriot: "Gara fatma",
    turkish: "Kara fatma",
    greek: "Σκαθάρι",
    english: "Dung beetle"
}, {
    cypriot: "Gabare",
    turkish: "Genelev",
    greek: "Οίκος ανοχής",
    english: "Brothel"
}, {
    cypriot: "Aş evi",
    turkish: "Mutfak",
    greek: "Κουζίνα",
    english: "Kitchen"
}, {
    cypriot: "Mappro",
    turkish: "Küçük selvi kozalağı",
    greek: "Μικρά κουκουνάρια κυπαρισσιού",
    english: "Small cypress cones/balls"
}, {
    cypriot: "Garnı",
    turkish: "Soy / sülale",
    greek: "Καταγωγή / οικογένεια",
    english: "Lineage / family"
}, {
    cypriot: "Orsobu garnılı",
    turkish: "Argo terim",
    greek: "Προσβλητικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Sallama",
    turkish: "Yalan söyleme",
    greek: "Μην λες ψέματα",
    english: "Don’t lie"
}, {
    cypriot: "Muccos",
    turkish: "Mastürbasyon",
    greek: "Αυνανισμός",
    english: "Masturbation"
}, {
    cypriot: "Bunamak",
    turkish: "Yaşlanmak",
    greek: "Γερνάω",
    english: "To grow old (senility)"
}, {
    cypriot: "Gurkuncello",
    turkish: "Argo terim",
    greek: "Προσβλητικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Gurkuda",
    turkish: "Argo terim",
    greek: "Προσβλητικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Ananın gurkuncellosu",
    turkish: "Argo terim",
    greek: "Προσβλητικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Şeher",
    turkish: "Şehir",
    greek: "Πόλη",
    english: "City"
}, {
    cypriot: "Banukla",
    turkish: "Zıkkımın kökü",
    greek: "Να δηλητηριαστείς (κατάρα)",
    english: "May you be poisoned (curse)"
}, {
    cypriot: "Peki",
    turkish: "Kapı kilidi",
    greek: "Κλειδαριά πόρτας",
    english: "Door lock"
}, {
    cypriot: "Pekilemek",
    turkish: "Kapıyı kilitlemek",
    greek: "Κλειδώνω την πόρτα",
    english: "To lock the door"
}, {
    cypriot: "Minalayalar",
    turkish: "Geleneksel hava tahmin yöntemi",
    greek: "Παραδοσιακή μέθοδος παρατήρησης καιρού",
    english: "Traditional 12-month weather observing method"
}, {
    cypriot: "Guzguni",
    turkish: "Simsiyah",
    greek: "Κατάμαυρο",
    english: "Pitch-black"
}, {
    cypriot: "Cıncırak",
    turkish: "Tahterevalli / Salıncak",
    greek: "Κούνια παιδικής χαράς",
    english: "Playground swing"
}, {
    cypriot: "Καρτζ̌ίν",
    turkish: "Karşısında",
    greek: "Απέναντι",
    english: "In front / opposite"
}, {
    cypriot: "Gendro",
    turkish: "Merkez",
    greek: "Κέντρο",
    english: "Center"
}, {
    cypriot: "Cırlavuk (böceği)",
    turkish: "Çok konuşan kimse",
    greek: "Πολυλογάς",
    english: "Very talkative person"
}, {
    cypriot: "Hıyarto",
    turkish: "Şaka yollu hitap",
    greek: "Παιχνιδιάρικη προσφώνηση",
    english: "Playful teasing address (‘cucumber/idiot’)"
}, {
    cypriot: "Yerro / Yero",
    turkish: "Yaşlı adam",
    greek: "Γέρος",
    english: "Old man"
}, {
    cypriot: "Dartalli",
    turkish: "Argo terim",
    greek: "Προσβλητικός όρος",
    english: "Offensive term"
}, {
    cypriot: "Gımıldanmış",
    turkish: "Deli",
    greek: "Τρελός",
    english: "Crazy"
}, {
    cypriot: "Gurkuda (kertenkele çeşiti)",
    turkish: "Bir tür kertenkele",
    greek: "Είδος σαύρας",
    english: "A kind of lizard"
}, {
    cypriot: "Abacı",
    turkish: "Aba yapıp satan kimse",
    greek: "Αυτός που κατασκευάζει και πουλάει μακριά ρούχα",
    english: "One who makes and sells long garments"
}, {
    cypriot: "Aba kebe",
    turkish: "Giyim Kuşam",
    greek: "Ενδυμασία",
    english: "Dressing, attire"
}, {
    cypriot: "Abani",
    turkish: "Üzeri turuncu işlikle işlenmiş sarık, bohça, kundak, ve yorgan yüzü yapılan sarımtırak bir tür kumaş",
    greek: "Ένα είδος υφάσματος με πορτοκαλί κεντήματα, που χρησιμοποιείται για την κατασκευή μαντηλιών κεφαλής, δεμάτων, παιδικών προϊόντων, και κουβερτών",
    english: "A kind of fabric with orange embroidery, used for making headscarves, bundles, swaddling clothes, and quilt covers"
}, {
    cypriot: "Aba",
    turkish: "Kalın kumaştan yapılan uzun üstlük",
    greek: "greek",
    english: "Long garment made of thick fabric"
}, {
    cypriot: "Abla",
    turkish: "Büyük kız kardeş",
    greek: "Greek translation",
    english: "Elder sister"
}, {
    cypriot: "Abosafi et-",
    turkish: "Karar vermek",
    greek: "Greek translation",
    english: "To make a decision"
}, {
    cypriot: "Acaba",
    turkish: "Merak, Şüphe, Hayret bildiren soru zarfı",
    greek: "Greek translation",
    english: "Question particle indicating curiosity, doubt, or wonder"
}, {
    cypriot: "Acamılık",
    turkish: "Acemilik, Tecrübesizlik",
    greek: "Greek translation",
    english: "Inexperience"
}, {
    cypriot: "Accıbaşı/Aşçıbaşı",
    turkish: "Aşçıbaşı, Baş aşçı",
    greek: "Greek translation",
    english: "Head chef"
}, {
    cypriot: "Aferim",
    turkish: "Beğenme, Övme, Aferin",
    greek: "Greek translation",
    english: "Well done, praise"
}, {
    cypriot: "Ağa",
    turkish: "Köy ve kasabalarda sözü geçen nüfuslu kişi",
    greek: "Greek translation",
    english: "Influential person in villages"
}, {
    cypriot: "Aheng",
    turkish: "kulağa hoş gelen, uyum",
    greek: "Greek translation",
    english: "Harmony"
}, {
    cypriot: "Ahmak",
    turkish: "Akılsız, bön, anlayışsız, kalın kafalı",
    greek: "Greek translation",
    english: "Foolish, dumb"
}, {
    cypriot: "Alaca",
    turkish: "Pamuk ve yün ipliğinden dokunan kumaş",
    greek: "Greek translation",
    english: "Fabric woven from cotton and wool yarn"
}, {
    cypriot: "Ala",
    turkish: "Siyah, beyaz iplikten dokunan ve çobanlar tarafından kullanılan üstlük",
    greek: "Greek translation",
    english: "Shepherd's garment made from black and white yarn"
}, {
    cypriot: "Babuc",
    turkish: "Terlik/Sandal",
    greek: "Greek Translation",
    english: "Slippers/Sandals"
}, {
    cypriot: "Babutsa/Babudsa",
    turkish: "Kaktüs, Mısır inciri, kaktüs ve meyvesi",
    greek: "Greek translation",
    english: "Cactus, prickly pear"
}, {
    cypriot: "Bahça/Başça",
    turkish: "Bahçe",
    greek: "Greek translation",
    english: "Garden"
}, {
    cypriot: "Bakır",
    turkish: "Kuruş, Kıbrıs'ta 1955 tarihine kadar kullanılan para birimi",
    greek: "Greek translation",
    english: "Penny, the currency used in Cyprus until 1955"
}, {
    cypriot: "Bala",
    turkish: "Saman balyası",
    greek: "Greek translation",
    english: "Straw bale"
}, {
    cypriot: "Bandofla/Bandohla",
    turkish: "Kalın kumaştan yapılmış terlik",
    greek: "Greek translation",
    english: "Slippers made of thick fabric"
}, {
    cypriot: "Basbalya",
    turkish: "Tokat, şamar",
    greek: "Greek translation",
    english: "Slap"
}, {
    cypriot: "bumburislenme",
    turkish: "karıncalanma",
    greek: "φαγούρα",
    english: "tingle"
}, {
    cypriot: "Catoz",
    turkish: "Serdarli",
    greek: "Greek Translation",
    english: "Serdarli (a place)"
}, {
    cypriot: "gazafana",
    turkish: "Ozan Koy",
    greek: "Greek Translation",
    english: "Ozan Village"
}, {
    cypriot: "gologo",
    turkish: "Popo",
    greek: "Greek Translation",
    english: "Bottom"
}, {
    cypriot: "Gullirika",
    turkish: "Pekmeznan yapılan yerel tatlı",
    greek: "Greek Translation",
    english: "Local dessert made with molasses"
}, {
    cypriot: "ime kala",
    turkish: "İyiyim",
    greek: "Καλά",
    english: "I'm Good"
}, {
    cypriot: "Isbaho",
    turkish: "ip",
    greek: "Greek Translation",
    english: "Rope"
}, {
    cypriot: "Isvic",
    turkish: "araba anahtari",
    greek: "Greek translation",
    english: "Car key"
}, {
    cypriot: "Isvic",
    turkish: "Kontak anahtari",
    greek: "Greek Translation",
    english: "Ignition key"
}, {
    cypriot: "kalos irthate",
    turkish: "Hoş geldiniz",
    greek: "Καλώς ορίσατε",
    english: "Welcome"
}, {
    cypriot: "Kis",
    turkish: "kes/kapat",
    greek: "Greek Translation",
    english: "Cut/Close"
}, {
    cypriot: "Langirt",
    turkish: "Masa futbolu",
    greek: "Greek Translation",
    english: "Table football"
}, {
    cypriot: "nambo kamins?/ inda pou ginete?",
    turkish: "Nasılsın?",
    greek: "Πώς είσαι; (inf) / Πώς είστε;(frm)",
    english: "How are you?"
}, {
    cypriot: "oğraş/ovraş",
    turkish: "uğraşmak",
    greek: "to strive,",
    english: "να ασχολείσαι"
}, {
    cypriot: "oğra",
    turkish: "uğramak, arayıp sormak",
    greek: "να επισκεφθώ, να ρωτήσω",
    english: "to drop in, to call and ask"
}, {
    cypriot: "Osdo yuro",
    turkish: "Hic durmadan donmek",
    greek: "Greek Translation",
    english: "Spin continuously"
}, {
    cypriot: "Safvk",
    turkish: "Isik",
    greek: "Greek Translation",
    english: "Light"
}, {
    cypriot: "Sasurdis",
    turkish: "akli karisik",
    greek: "Greek Translation",
    english: "Confused"
}, {
    cypriot: "Sasurdi",
    turkish: "akli karisik",
    greek: "Greek Translation",
    english: "Confused"
}, {
    cypriot: "Verigo",
    turkish: "Uzum turu",
    greek: "Greek Translation",
    english: "Grape type"
}, {
    cypriot: "yeia",
    turkish: "Merhaba",
    greek: "Γεια σας (frm) / Γεια σου (inf) / Γεια (inf)",
    english: "Hello"
}, {
    cypriot: "Αάπη (aapi)",
    turkish: "Aşk",
    greek: "Αγάπη (agapi)",
    english: "Love"
}, {
    cypriot: "γάλος",
    turkish: "Horoz",
    greek: "γάλος",
    english: "Rooster"
},
// Turkish Cypriot headwords from the September 2026 dialect-list import
{
    cypriot: "Abbos etmek",
    turkish: "Şaşırmak",
    greek: "ξαφνιάζομαι",
    english: "to be surprised"
}, {
    cypriot: "ahrisdo",
    turkish: "Kullanılmaz halde",
    greek: "σε μη χρησιμοποιήσιμη κατάσταση",
    english: "in an unusable condition"
}, {
    cypriot: "Alizavra/Mişaro",
    turkish: "Gökyeşil",
    greek: "γαλαζοπράσινο",
    english: "blue-green"
}, {
    cypriot: "ampül",
    turkish: "Lamba",
    greek: "λάμπα",
    english: "lamp"
}, {
    cypriot: "badarislemek",
    turkish: "Gaza basmak",
    greek: "πατάω το γκάζι",
    english: "to step on the gas"
}, {
    cypriot: "Bambulya",
    turkish: "Şişik",
    greek: "πρησμένο",
    english: "swollen"
}, {
    cypriot: "barbarutsa",
    turkish: "Çocuk yürüteci",
    greek: "περπατούρα μωρού",
    english: "baby walker"
}, {
    cypriot: "bardon gancelli",
    turkish: "Çok şaşırmak",
    greek: "εκπλήσσομαι πολύ",
    english: "to be very surprised"
}, {
    cypriot: "Basbartu",
    turkish: "Yapışkan bant",
    greek: "κολλητική ταινία",
    english: "adhesive tape"
}, {
    cypriot: "basdarda",
    turkish: "Evlilik dışı çocuk",
    greek: "παιδί γεννημένο εκτός γάμου",
    english: "child born outside marriage"
}, {
    cypriot: "Basdiç",
    turkish: "Acı badem kurabiyesi",
    greek: "μπισκότο από πικραμύγδαλο",
    english: "bitter-almond cookie"
}, {
    cypriot: "el verir",
    turkish: "Yeter",
    greek: "αρκεί",
    english: "enough"
}, {
    cypriot: "embesil",
    turkish: "Beyinsiz, gerizekâlı (aşağılayıcı ifade)",
    greek: "ανόητος, ηλίθιος (υποτιμητική έκφραση)",
    english: "brainless; imbecilic (derogatory)"
}, {
    cypriot: "emismek",
    turkish: "Yapışmak",
    greek: "κολλάω",
    english: "to stick"
}, {
    cypriot: "enek",
    turkish: "İri bilye",
    greek: "μεγάλος γυάλινος βόλος",
    english: "large marble"
}, {
    cypriot: "engebe",
    turkish: "Yokuş aşağı",
    greek: "κατηφόρα",
    english: "downhill slope"
}, {
    cypriot: "eselemek",
    turkish: "Kazıyıp karıştırmak",
    greek: "ξύνω και ανακατεύω",
    english: "to scrape and stir"
}, {
    cypriot: "esgirtmek",
    turkish: "Koşmak, seyirtmek",
    greek: "τρέχω, ορμώ",
    english: "to run; to dash"
}, {
    cypriot: "Ferik",
    turkish: "Yumurtlamamış tavuk",
    greek: "κότα που δεν έχει γεννήσει ακόμη",
    english: "hen that has not yet laid an egg"
}, {
    cypriot: "feslikan",
    turkish: "Fesleğen",
    greek: "βασιλικός",
    english: "basil"
}, {
    cypriot: "Fikirdak",
    turkish: "Cilveli, oynak kadın",
    greek: "νάζιαρα, παιχνιδιάρα γυναίκα",
    english: "coquettish, playful woman"
}, {
    cypriot: "fiks",
    turkish: "Belirli",
    greek: "καθορισμένος, συγκεκριμένος",
    english: "fixed; definite"
}, {
    cypriot: "filcan",
    turkish: "Fincan",
    greek: "φλιτζάνι",
    english: "cup"
}, {
    cypriot: "fildirik",
    turkish: "Oynak kız",
    greek: "παιχνιδιάρα κοπέλα",
    english: "playful girl"
}, {
    cypriot: "filigo",
    turkish: "İnterseks",
    greek: "ίντερσεξ",
    english: "intersex"
}, {
    cypriot: "finda etmek",
    turkish: "Atmak",
    greek: "πετώ",
    english: "to throw"
}, {
    cypriot: "fingirdemek",
    turkish: "Yılışmak, hopalık etmek",
    greek: "κάνω νάζια, φέρομαι παιχνιδιάρικα",
    english: "to flirt; to act coquettishly"
}, {
    cypriot: "firfiri",
    turkish: "Yerinde duramayan",
    greek: "ανήσυχος, που δεν μπορεί να μείνει ακίνητος",
    english: "restless; unable to sit still"
}, {
    cypriot: "firlama",
    turkish: "Yerinde duramayan",
    greek: "ανήσυχος, που δεν μπορεί να μείνει ακίνητος",
    english: "restless; unable to sit still"
}, {
    cypriot: "Fisgi",
    turkish: "Taze gübre",
    greek: "φρέσκια κοπριά",
    english: "fresh manure"
}, {
    cypriot: "fislik",
    turkish: "Islık",
    greek: "σφύριγμα",
    english: "whistle"
}, {
    cypriot: "fiyonk",
    turkish: "Kurdele",
    greek: "φιόγκος, κορδέλα",
    english: "bow; ribbon"
}, {
    cypriot: "foni",
    turkish: "Huni",
    greek: "χωνί",
    english: "funnel"
}, {
    cypriot: "fotigo",
    turkish: "Kamyon",
    greek: "φορτηγό",
    english: "truck"
}, {
    cypriot: "Gamıç",
    turkish: "Kamış",
    greek: "καλάμι",
    english: "reed"
}, {
    cypriot: "ganca",
    turkish: "Çengelli iğne",
    greek: "παραμάνα",
    english: "safety pin"
}, {
    cypriot: "ganneppa",
    turkish: "Kanepe",
    greek: "καναπές",
    english: "sofa"
}, {
    cypriot: "gannileme",
    turkish: "El koyma",
    greek: "κατάσχεση",
    english: "seizure; confiscation"
}, {
    cypriot: "garagatsa",
    turkish: "Saksağan",
    greek: "καρακάξα",
    english: "magpie"
}, {
    cypriot: "garamuza",
    turkish: "Kapkara",
    greek: "κατάμαυρος",
    english: "pitch-black"
}, {
    cypriot: "GARAVA",
    turkish: "Alsancak (Karavas)",
    greek: "Καραβάς (Άλσαντζακ)",
    english: "Karavas (Alsancak)"
}, {
    cypriot: "Garbayıt",
    turkish: "Karpit",
    greek: "καρβίδιο",
    english: "carbide"
}, {
    cypriot: "Gardamilla",
    turkish: "Nane gibi bir ot",
    greek: "βότανο σαν τη μέντα",
    english: "an herb like mint"
}, {
    cypriot: "Gargariya",
    turkish: "Otlakçı; başkalarının hesabından geçinen kimse",
    greek: "τζαμπατζής, παράσιτο",
    english: "freeloader; moocher"
}, {
    cypriot: "Gargilik",
    turkish: "Fişeklik",
    greek: "φυσιγγιοθήκη",
    english: "cartridge holder"
}, {
    cypriot: "Gulurutkya",
    turkish: "Pekmezli hamur tatlısı",
    greek: "γλυκό από ζύμη με πετιμέζι",
    english: "pastry dessert with grape molasses"
}, {
    cypriot: "gumri",
    turkish: "Beton",
    greek: "σκυρόδεμα",
    english: "concrete"
}, {
    cypriot: "gundiri",
    turkish: "Kuyruksuz, kısa",
    greek: "χωρίς ουρά, κοντός",
    english: "tailless; short"
}, {
    cypriot: "gunnamak",
    turkish: "Çoğalmak",
    greek: "πολλαπλασιάζομαι",
    english: "to multiply; to increase"
}, {
    cypriot: "gurdalamak",
    turkish: "Kurcalamak",
    greek: "σκαλίζω, πειράζω",
    english: "to fiddle with; to meddle with"
}, {
    cypriot: "Gurrada",
    turkish: "Eski araba, külüstür",
    greek: "παλιό αυτοκίνητο, σαράβαλο",
    english: "old car; wreck"
}, {
    cypriot: "Guru",
    turkish: "Kurumuş",
    greek: "ξεραμένος",
    english: "dried-up"
}, {
    cypriot: "gurva",
    turkish: "Viraj",
    greek: "στροφή",
    english: "bend; curve"
}, {
    cypriot: "gutsilli",
    turkish: "İzmarit",
    greek: "αποτσίγαρο",
    english: "cigarette butt"
}, {
    cypriot: "ısbastra",
    turkish: "İskambil kâğıdı",
    greek: "τραπουλόχαρτο",
    english: "playing card"
}, {
    cypriot: "Isparg",
    turkish: "Buji",
    greek: "μπουζί",
    english: "spark plug"
}, {
    cypriot: "Ispoyler",
    turkish: "Marşpiyel",
    greek: "μαρσπιέ",
    english: "rocker panel"
}, {
    cypriot: "Istop",
    turkish: "Fren",
    greek: "φρένο",
    english: "brake"
}, {
    cypriot: "IZbandut",
    turkish: "Korkutucu kimse",
    greek: "τρομακτικός άνθρωπος",
    english: "intimidating person"
}, {
    cypriot: "İsgaloşa",
    turkish: "İnşaat iskelesi",
    greek: "σκαλωσιά οικοδομής",
    english: "construction scaffolding"
}, {
    cypriot: "isgemle",
    turkish: "Sandalye",
    greek: "καρέκλα",
    english: "chair"
}, {
    cypriot: "isketdo",
    turkish: "Sade",
    greek: "απλό",
    english: "plain; simple"
}, {
    cypriot: "iskonto",
    turkish: "İndirim",
    greek: "έκπτωση",
    english: "discount"
}, {
    cypriot: "ispasdira",
    turkish: "İskambil oyunu",
    greek: "παιχνίδι με τραπουλόχαρτα",
    english: "card game"
}, {
    cypriot: "ispeyar",
    turkish: "Yedek",
    greek: "εφεδρικό",
    english: "spare"
}, {
    cypriot: "istarter",
    turkish: "Marş motoru",
    greek: "μίζα",
    english: "starter motor"
}, {
    cypriot: "istrongolo",
    turkish: "Turunçlu (Strongylos)",
    greek: "Στρογγυλός (Τουρούντζλου)",
    english: "Strongylos (Turunçlu)"
}, {
    cypriot: "isviş",
    turkish: "Anahtar",
    greek: "κλειδί",
    english: "key"
}, {
    cypriot: "işenmek",
    turkish: "Çişi gelmek",
    greek: "μου έρχεται να κατουρήσω",
    english: "to need to pee"
}, {
    cypriot: "İXERO",
    turkish: "Denizli (Xeros)",
    greek: "Ξερός (Ντενιζλί)",
    english: "Xeros (Denizli)"
}, {
    cypriot: "jelatin",
    turkish: "Jelatin",
    greek: "ζελατίνη",
    english: "gelatin"
}, {
    cypriot: "kakuletta",
    turkish: "Şapka",
    greek: "καπέλο",
    english: "hat"
}, {
    cypriot: "kakvole",
    turkish: "Allah Allah",
    greek: "μα τι λες!",
    english: "good grief!"
}, {
    cypriot: "Kapisari etmek",
    turkish: "Kapışmak, aceleyle almak",
    greek: "αρπάζω βιαστικά",
    english: "to scramble to grab something"
}, {
    cypriot: "kapu",
    turkish: "Kapı",
    greek: "πόρτα",
    english: "door"
}, {
    cypriot: "katakulli okumak",
    turkish: "Gereksiz sözler söylemek",
    greek: "λέω περιττά λόγια",
    english: "to say unnecessary things"
}, {
    cypriot: "kaytarmak",
    turkish: "Verilen sözden dönmek",
    greek: "αθετώ την υπόσχεσή μου",
    english: "to go back on one's word"
}, {
    cypriot: "kenef",
    turkish: "Tuvalet",
    greek: "τουαλέτα",
    english: "toilet"
}, {
    cypriot: "kile",
    turkish: "Roman kadın",
    greek: "γυναίκα Ρομά",
    english: "Romani woman"
}, {
    cypriot: "kilim",
    turkish: "Halı",
    greek: "κιλίμι",
    english: "kilim rug"
}, {
    cypriot: "koççan",
    turkish: "Tapu",
    greek: "τίτλος ιδιοκτησίας",
    english: "title deed"
}, {
    cypriot: "Konti atmak",
    turkish: "Kazıklamak",
    greek: "κοροϊδεύω και χρεώνω υπερβολικά",
    english: "to rip someone off"
}, {
    cypriot: "mıh",
    turkish: "Çivi",
    greek: "καρφί",
    english: "nail"
}, {
    cypriot: "mıhsıçdı",
    turkish: "Pinti",
    greek: "τσιγκούνης",
    english: "stingy person"
}, {
    cypriot: "monari",
    turkish: "Tekli av tüfeği",
    greek: "μονόκαννο κυνηγετικό όπλο",
    english: "single-barrel shotgun"
}, {
    cypriot: "monobadi",
    turkish: "Patika",
    greek: "μονοπάτι",
    english: "path"
}, {
    cypriot: "morina",
    turkish: "Mertek",
    greek: "δοκάρι στέγης",
    english: "roof beam"
}, {
    cypriot: "muz",
    turkish: "Muz",
    greek: "μπανάνα",
    english: "banana"
}, {
    cypriot: "mücendra pilavı",
    turkish: "Mercimek pilavı",
    greek: "πιλάφι με φακές",
    english: "lentil pilaf"
}, {
    cypriot: "mühim",
    turkish: "Önemli",
    greek: "σημαντικός",
    english: "important"
}, {
    cypriot: "Nereşde",
    turkish: "Nerede",
    greek: "πού",
    english: "where"
}, {
    cypriot: "neyisa",
    turkish: "Neyse",
    greek: "τέλος πάντων",
    english: "anyway"
}, {
    cypriot: "nifitsa",
    turkish: "Gelincik (hayvan)",
    greek: "νυφίτσα",
    english: "weasel"
}, {
    cypriot: "nonni",
    turkish: "Efemine eşcinsel erkek için aşağılayıcı ifade",
    greek: "υποτιμητικός όρος για θηλυπρεπή ομοφυλόφιλο άντρα",
    english: "derogatory term for an effeminate gay man"
}, {
    cypriot: "Nor",
    turkish: "Lor peyniri",
    greek: "ανάλατη μυζήθρα",
    english: "unsalted whey cheese"
}, {
    cypriot: "Nusubet",
    turkish: "Tembel, uyuşuk",
    greek: "τεμπέλης, νωθρός",
    english: "lazy; sluggish"
}, {
    cypriot: "nümoro",
    turkish: "Numara",
    greek: "αριθμός",
    english: "number"
}, {
    cypriot: "Omorfo",
    turkish: "Güzelyurt (Morphou)",
    greek: "Μόρφου (Γκιουζελιούρτ)",
    english: "Morphou (Güzelyurt)"
}, {
    cypriot: "ölünün goca körü",
    turkish: "Yok artık, abartma",
    greek: "έλεος πια, μην υπερβάλλεις",
    english: "come on, do not exaggerate"
}, {
    cypriot: "ört kapıyı",
    turkish: "Kapat kapıyı",
    greek: "κλείσε την πόρτα",
    english: "close the door"
}, {
    cypriot: "sbano",
    turkish: "Tüysüz",
    greek: "χωρίς τρίχες",
    english: "hairless"
}, {
    cypriot: "sgattaro",
    turkish: "Sivilce çeşidi",
    greek: "είδος σπυριού",
    english: "type of pimple"
}, {
    cypriot: "skarta",
    turkish: "İşe yaramaz",
    greek: "άχρηστος",
    english: "useless"
}, {
    cypriot: "şehirge",
    turkish: "Şehriye",
    greek: "κριθαράκι",
    english: "vermicelli"
}, {
    cypriot: "şinya",
    turkish: "Ot",
    greek: "χόρτο",
    english: "grass; herb"
}, {
    cypriot: "şinya/çaltı",
    turkish: "Çalılık",
    greek: "θαμνώδης έκταση",
    english: "thicket"
}, {
    cypriot: "Yusuf",
    turkish: "Mandalina",
    greek: "μανταρίνι",
    english: "mandarin"
}, {
    cypriot: "zere gollifadir",
    turkish: "Sanki çok kolaydır",
    greek: "λες και είναι πολύ εύκολο",
    english: "as if it were very easy"
}, {
    cypriot: "zerre da...",
    turkish: "Sanki de...",
    greek: "λες και...",
    english: "as if..."
}, {
    cypriot: "zerzele",
    turkish: "Deprem",
    greek: "σεισμός",
    english: "earthquake"
}, {
    cypriot: "Zevlemek",
    turkish: "Alay etmek",
    greek: "κοροϊδεύω",
    english: "to mock; to tease"
}, {
    cypriot: "Zıbandırık",
    turkish: "Uzun boylu",
    greek: "ψηλός",
    english: "tall"
}, {
    cypriot: "Zodya",
    turkish: "Bostancı (Zodeia)",
    greek: "Ζώδεια (Μποστάντζι)",
    english: "Zodeia (Bostancı)"
}, {
    cypriot: "χαλεπιανόν",
    turkish: "Antep fıstığı; Kıbrıs Rumcasında Antep fıstığı için kullanılan geleneksel sözcük",
    greek: "Φιστίκια",
    english: "Traditional Cypriot Greek word for pistachios"
}, {
    cypriot: "βέρικον",
    turkish: "Kıbrıs'ta yaygın olan tatlı bir üzüm çeşidi",
    greek: "Κυπριακή ποικιλία γλυκού σταφυλιού",
    english: "A popular sweet grape variety in Cyprus"
}, {
    cypriot: "ρωμανίσιν",
    turkish: "Geleneksel Kıbrıs evlerinde kullanılan bir tür sürgülü kapı kilidi",
    greek: "Είδος σύρτη ή μαντάλου σε παραδοσιακά κυπριακά σπίτια",
    english: "A type of bolt lock used in traditional Cypriot houses"
}, {
    cypriot: "αθάσιν",
    turkish: "Badem; Kıbrıs Rumcasında badem için kullanılan geleneksel sözcük",
    greek: "Αμύγδαλα",
    english: "Traditional Cypriot Greek word for almonds"
}, {
    cypriot: "βένετος",
    turkish: "Açık mavi veya mavi-yeşil tonu ifade eden eski bir sözcük",
    greek: "Παλαιότερη λέξη για ανοιχτό γαλάζιο ή κυανοπράσινο χρώμα",
    english: "An old-fashioned word for a light blue or blue-green hue"
}, {
    cypriot: "σκλαβούνικον",
    turkish: "Bir tür kruvaze yelek",
    greek: "Είδος σταυρωτού γιλέκου",
    english: "A kind of double-breasted vest"
}, {
    cypriot: "καμπρίν",
    turkish: "Bir tür beyaz pamuklu veya keten kumaş",
    greek: "Είδος λευκού βαμβακερού ή λινού υφάσματος",
    english: "A particular type of white cotton or linen fabric"
}, ];

//import { words } from './dictionary.js';

let score = 0;

//FUNCTIONS
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function selectCard(cardID) {
    let card = document.getElementById(cardID);
    if (card.style.backgroundColor === "lightgray") {
        card.style.backgroundColor = "white";
    } else if (card.style.backgroundColor === "lightgreen") {
        //do nothing
    } else {
        card.style.backgroundColor = "lightgray";
    }
}

function changeCardColor(cardID, color) {
    let card = document.getElementById(cardID);
    card.style.backgroundColor = color;
}

function checkIfTwoSelected() {
    const cards = [1,2,3,4,5,6,7,8];
    let num_lightgray = 0;
    for (const cardNumber of cards) {
        let card = document.getElementById(cardNumber);
        if (card.style.backgroundColor === "lightgray") {
            num_lightgray += 1;
        }
    }
    if (num_lightgray === 2) {
        return true;
    }   
}

function arrangeWords(words) {
    //creating random indexes
    let randomIndexes = [];
    while (randomIndexes.length < 4) {
        let randomIndex = Math.floor(Math.random() * words.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }
    //selecting eight words based on random indexes
    let eightWords = [];
    for (const index of randomIndexes) {
        let entry = words[index];
        eightWords.push(entry.cypriot);
        eightWords.push(entry.english);
    }
    //shuffling eightWords
    shuffle(eightWords);

    //arranging eightWords onto cards
    const cards = [1,2,3,4,5,6,7,8];
    for (const card of cards) {
        let cardElement = document.getElementById(card);
        cardElement.children[0].innerHTML = eightWords[card - 1];
        cardElement.style.backgroundColor = "white";
        cardElement.style.visibility = "visible";
    }
}

async function checkPair() {
    score = 0;
    while (true) {
        if (checkIfTwoSelected()) {
            let selectedCards = [];
            const cards = [1,2,3,4,5,6,7,8];
            for (const cardNumber of cards) {
                let card = document.getElementById(cardNumber);
                if (card.style.backgroundColor === "lightgray") {
                    selectedCards.push(cardNumber);
                }
            }
            // check if correct pair
            let text0 = document.getElementById(selectedCards[0]).children[0].innerHTML;
            let text1 = document.getElementById(selectedCards[1]).children[0].innerHTML;

            if (words.some(entry =>
                (entry.cypriot === text0 && entry.english === text1) ||
                (entry.cypriot === text1 && entry.english === text0)
            )) {
                for (const cardID of selectedCards) {
                    changeCardColor(cardID, "lightgreen");
                }
                await new Promise(r => setTimeout(r, 500));
                //hide cards
                for (const cardID of selectedCards) {
                    let card = document.getElementById(cardID);
                    card.style.visibility = "hidden";
                }

            //check if incorrect pair
            } else {
                for (const cardID of selectedCards) {
                    changeCardColor(cardID, "lightcoral");
                }
                await new Promise(r => setTimeout(r, 500));
                for (const cardID of selectedCards) {
                    changeCardColor(cardID, "white");
                }

            }
        } 
        //check if all cards are hidden
        let allHidden = true;
        const cards = [1,2,3,4,5,6,7,8];
        for (const cardNumber of cards) {
            let card = document.getElementById(cardNumber);
            if (card.style.visibility !== "hidden") {
                allHidden = false;
            }
        }
        // if all cards are hidden, rearrange words
        if (allHidden) {
            arrangeWords(words);
            score += 1;
            document.querySelector("h2").innerHTML = "Score: " + score;
        }
        await new Promise(r => setTimeout(r, 1));
    }  
}
