// FOR TESTING
function displayText(text){
    const para = document.createElement("p");
    para.innerHTML = text;
    document.getElementById("results").appendChild(para);
}

// LIST OF WORD PAIRS
//words = [["apple", "elma"], ["book", "kitap"], ["car", "araba"], ["dog", "köpek"], ["house", "ev"], ["water", "su"], ["food", "yemek"], ["school", "okul"]];

words = [['Allah', 'Allah'], ['doğru', 'true'], ['Tanrı', 'God'], ['abla', 'older sister'], ['acaba', 'I wonder?'], ['acı', 'pain'], ['ad', 'name'], ['adam', 'man'], ['aday', 'applicant'], ['adet', 'piece'], ['adres', 'address'], ['adım', 'step'], ['aile', 'family'], ['ait', 'belonging to'], ['akmak', 'flow'], ['akıl', 'mind'], ['akşam', 'evening'], ['alan', 'area'], ['almak', 'to take  '], ['alt', 'lower'], ['altın', 'gold'], ['alınmak', 'be offended'], ['alışveriş', 'shopping'], ['ama', 'but'], ['amaç', 'aim'], ['an', 'moment'], ['ana', 'main'], ['ancak', 'however'], ['anlam', 'meaning'], ['anlamak', 'to understand'], ['anlatmak', 'to explain'], ['anlayış', 'understanding'], ['anlaşılmak', 'be understood'], ['anne', 'mother'], ['ara', 'call'], ['araba', 'car '], ['aramak', 'to call'], ['araç', 'vehicle'], ['araştırma', 'research'], ['arka', 'back'], ['arkadaş', 'friend'], ['art', 'art'], ['artmak', 'increase'], ['artık', 'no longer'], ['artırmak', 'increase'], ['artış', 'increase'], ['asker', 'soldier'], ['asla', 'never'], ['aslında', 'actually'], ['asıl', 'actual'], ['at', 'horse'], ['ateş', 'fire    '], ['atmak', 'to throw'], ['atılmak', 'to embark'], ['ay', 'month'], ['ayak', 'foot'], ['aynı', 'same'], ['ayrı', 'separate'], ['ayrıca', 'moreover'], ['ayrılmak', 'to leave'], ['ayırmak', 'to separate'], ['az', 'little'], ['azalmak', 'decrease'], ['açmak', 'open'], ['açı', 'angle'], ['açık', 'open '], ['açıklamak', 'to explain'], ['açılmak', 'open'], ['ağabey', 'elder brother'], ['ağaç', 'tree'], ['ağlamak', 'to cry'], ['ağır', 'heavy'], ['ağırlık', 'weight'], ['ağız', 'mouth'], ['aşama', 'stage'], ['aşağı', 'down'], ['aşk', 'love'], ['aşmak', 'exceed'], ['aşırı', 'extreme'], ['baba', 'father'], ['bacak', 'leg'], ['bahçe', 'garden'], ['bakan', 'minister'], ['bakanlık', 'ministry'], ['bakmak', 'to look '], ['bakış', 'view'], ['balık', 'fish'], ['banka', 'bank'], ['basit', 'simple'], ['baskı', 'oppression'], ['basmak', 'print'], ['basın', 'press'], ['batı', 'west'], ['bazen', 'sometimes'], ['bazı', 'some'], ['bağlamak', 'to connect'], ['bağlanmak', 'connect'], ['bağlı', 'connected'], ['bağırmak', 'to shout'], ['baş', 'head'], ['başarı', 'success'], ['başarılı', 'successful'], ['başka', 'another'], ['başkan', 'minister'], ['başlamak', 'to start'], ['bebek', 'baby'], ['beden', 'body'], ['beklemek', 'to wait'], ['belediye', 'council'], ['belge', 'document'], ['belirlemek', 'to specify'], ['belirlenmek', 'to be determined'], ['belirtilmek', 'to be stated'], ['belirtmek', 'to indicate'], ['belki', 'maybe'], ['belli', 'clear'], ['ben', 'I'], ['benzemek', 'to resemble'], ['benzer', 'similar'], ['beraber', 'together'], ['beri', 'since'], ['besin', 'food'], ['bey', 'gentleman'], ['beyan', 'declaration'], ['beyaz', 'white'], ['beyin', 'brain'], ['beş', 'five'], ['bile', 'even    '], ['bilgi', 'information'], ['bilgisayar', 'computer'], ['bilim', 'science'], ['bilinmek', 'to be known'], ['bilinç', 'consciousness'], ['bilmek', 'to know'], ['bina', 'building'], ['binmek', 'to get on'], ['bir şey', 'something'], ['bir', 'one'], ['biraz', 'a little'], ['birbiri', 'each other'], ['birden', 'suddenly'], ['birer', 'one each'], ['birey', 'individual'], ['biri', 'someone'], ['birim', 'unit'], ['birinci', 'first'], ['birisi', 'someone'], ['birkaç', 'a few '], ['birlik', 'unity'], ['birlikte', 'together'], ['birçok', 'a lot'], ['bitirmek', 'finish'], ['bitki', 'herb'], ['bitmek', 'to end'], ['biz', 'we'], ['biçim', 'format'], ['boy', 'size'], ['boyun', 'neck'], ['boyunca', 'during'], ['boyut', 'dimension'], ['bozulmak', 'to break down'], ['boş', 'empty'], ['bu', 'this '], ['bugün', 'today'], ['bulmak', 'to find'], ['bulunmak', 'to have'], ['buna', 'to this'], ['bundan', 'from this'], ['bunlar', 'these'], ['bunu', 'this'], ['bunun', 'this'], ['bura', 'here'], ['burada', 'here'], ['burun', 'nose'], ['bölge', 'area'], ['bölüm', 'section'], ['böyle', 'like this'], ['böylece', 'like this'], ['bütün', 'all'], ['büyük', 'big'], ['büyümek', 'grow'], ['bırakmak', 'to leave'], ['cadde', 'street'], ['cam', 'pine'], ['cami', 'mosque'], ['can', 'life'], ['canlı', 'live'], ['cep telefonu', 'mobile phone'], ['cevap', 'reply'], ['ceza', 'punishment'], ['ciddi', 'serious'], ['cihaz', 'device'], ['cilt', 'skin'], ['cumhuriyet', 'republic'], ['cümle', 'sentence'], ['daha', 'more'], ['daire', 'apartment'], ['dakika', 'minute'], ['davranmak', 'to behave'], ['davranış', 'behaviour'], ['dayanmak', 'to resist'], ['dağ', 'mountain'], ['defa', 'times'], ['demek', 'means'], ['demokrasi', 'democracy'], ['denge', 'balance'], ['denilmek', 'to be called'], ['deniz', 'sea'], ['denmek', 'to be called'], ['derece', 'degree'], ['dergi', 'magazine'], ['deri', 'skin'], ['derin', 'deep'], ['ders', 'lesson'], ['destek', 'support'], ['devam etmek', 'to continue'], ['devlet', 'state'], ['değer', 'value'], ['değerlendirmek', 'to evaluate'], ['değil', 'not'], ['değişik', 'different'], ['değişiklik', 'change '], ['değişim', 'change'], ['değişmek', 'change'], ['değiştirmek', 'to change'], ['dikkat etmek', 'pay attention'], ['dikkat', 'attention'], ['dil', 'language'], ['dilemek', 'wish'], ['din', 'religion'], ['dinlemek', 'to listen'], ['diye', 'saying'], ['diğer', 'other'], ['doktor', 'doctor'], ['dolayı', 'because'], ['dolayısıyla', 'therefore'], ['dolaşmak', 'to wander'], ['doldurmak', 'to fill'], ['dolu', 'full'], ['dost', 'friend'], ['doğa', 'nature'], ['doğal', 'natural'], ['doğmak', 'be born'], ['durmak', 'stop'], ['durum', 'situation'], ['duvar', 'wall'], ['duygu', 'feeling'], ['duymak', 'to listen'], ['dönem', 'period'], ['dönmek', 'return'], ['dönüşmek', 'turn into'], ['dört', 'four'], ['dükkan', 'shop'], ['dün', 'yesterday'], ['dünya', 'world'], ['düzen', 'order'], ['düzenlemek', 'to organise'], ['düzey', 'level'], ['düşmek', 'to fall'], ['düşük', 'low'], ['düşünce', 'thought'], ['düşünmek', 'to think'], ['düşünülmek', 'to be considered'], ['dış', 'external'], ['dışarı', 'outside'], ['edilmek', 'to be'], ['ek', 'additional'], ['eklemek', 'to add'], ['ekmek', 'bread'], ['ekonomi', 'economy'], ['ekonomik', 'economic'], ['el', 'hand'], ['elbette', 'certainly'], ['elektrik', 'electric'], ['eleman', 'element'], ['en', 'most'], ['enerji', 'energy'], ['enflasyon', 'inflation'], ['erkek', 'male'], ['eser', 'work'], ['eski', 'old'], ['et', 'meat'], ['etki', 'effect'], ['etkilemek', 'to influence'], ['etmek', 'to do'], ['etraf', 'surroundings'], ['ev', 'house'], ['evet', 'yes'], ['evlenmek', 'to marry'], ['eylem', 'action'], ['eğer', 'if'], ['eğitim', 'education'], ['eş', 'spouse'], ['eşya', 'furniture'], ['faaliyet', 'activity'], ['faiz', 'interest'], ['fakat', 'but'], ['fark etmek', 'to notice'], ['fark', 'difference'], ['farklı', 'different'], ['fazla', 'more'], ['fikir', 'idea'], ['film', 'film'], ['firma', 'firm'], ['fiyat', 'price'], ['fotoğraf', 'photograph'], ['fırsat', 'opportunity'], ['gaz', 'gas'], ['gazete', 'newspaper'], ['gazeteci', 'journalist'], ['gece', 'night'], ['gelecek', 'future'], ['gelen', 'incoming'], ['gelir', 'income'], ['gelişme', 'development'], ['gelişmek', 'to develop'], ['geliştirmek', 'to develop'], ['gelmek', 'to come'], ['gene', 'again'], ['genel', 'general'], ['genellikle', 'generally'], ['geniş', 'wide'], ['genç', 'youth'], ['gerek', 'necessary'], ['gerekli', 'necessary'], ['gerekmek', 'need'], ['geri', 'back'], ['gerçek', 'real'], ['gerçekleşmek', 'come true'], ['gerçekten', 'really'], ['getirilmek', 'to be brought'], ['getirmek', 'to bring'], ['geç', 'late'], ['geçen', 'last'], ['geçirmek', 'spend'], ['geçmek', 'to go past'], ['geçmiş', 'past'], ['gibi', 'like'], ['gider', 'expense'], ['giderek', 'increasingly'], ['giriş', 'entrance'], ['girmek', 'to enter'], ['gitmek', 'to go'], ['giymek', 'to wear'], ['gizli', 'hidden'], ['grup', 'group'], ['göndermek', 'to send'], ['gönül', 'heart'], ['göre', 'according to'], ['görev', 'duty'], ['görmek', 'to see'], ['görülmek', 'to be seen'], ['görünmek', 'appear'], ['görüntü', 'image'], ['görüş', 'opinion'], ['görüşmek', 'to meet '], ['göstermek', 'to show'], ['götürmek', 'take away'], ['göz', 'eye'], ['gülmek', 'to laugh'], ['gün', 'day'], ['güneş', 'sun '], ['günlük', 'daily'], ['güven', 'trust'], ['güvenlik', 'security'], ['güzel', 'beautiful'], ['güç', 'strength'], ['güçlü', 'strong'], ['haber', 'news'], ['hafif', 'light'], ['hafta', 'week'], ['hak', 'right'], ['hakkında', 'about'], ['hal', 'status'], ['halk', 'people'], ['hangi', 'which'], ['hanım', 'woman'], ['hareket etmek', 'act'], ['hareket', 'movement'], ['hasta', 'sick'], ['hastahane', 'hospital'], ['hastalık', 'illness'], ['hata', 'mistake'], ['hatta', 'even'], ['hatırlamak', 'to remember'], ['hava', 'weather'], ['hayal', 'dream'], ['hayat', 'life'], ['hayvan', 'animal'], ['hayır', 'no'], ['hazır', 'ready'], ['hazırlamak', 'to prepare'], ['hazırlanmak', 'get ready'], ['hedef', 'aim'], ['hele', 'especially'], ['hem', 'both'], ['hemen', 'immediately'], ['henüz', 'yet'], ['hep', 'always'], ['hepsi', 'all'], ['her gün', 'every day'], ['her zaman', 'always'], ['her şey', 'everything'], ['her', 'each'], ['herhangi bir', 'any'], ['herkes', 'everyone'], ['hesap', 'bill'], ['hikaye', 'story'], ['hissetmek', 'to feel'], ['hizmet', 'service'], ['hiç', 'none'], ['hiçbir', 'no'], ['hoca', 'teacher'], ['hoş', 'pleasant'], ['hukuk', 'law'], ['hâlâ', 'still'], ['hücre', 'cell'], ['hükümet', 'government'], ['hız', 'speed'], ['hızla', 'quickly'], ['hızlı', 'fast'], ['idi', 'was'], ['ifade etmek', 'to state'], ['ifade', 'expression'], ['ihtiyaç', 'need'], ['iki', 'two'], ['ikinci', 'second'], ['ilaç', 'medicine'], ['ile', 'with'], ['ileri', 'forward'], ['ilerlemek', 'to go forward'], ['iletişim', 'communication'], ['ilgi', 'interest'], ['ilgilenmek', 'to take care of'], ['ilgili', 'relating to'], ['ilginç', 'interesting'], ['ilişki', 'relationship'], ['ilk', 'first'], ['ilke', 'principle'], ['imkan', 'opportunity'], ['inanmak', 'to believe'], ['inanç', 'belief'], ['ince', 'thin'], ['incelemek', 'to examine'], ['inmek', 'to get down'], ['insan', 'person '], ['internet', 'internet'], ['ise', 'whereas'], ['isim', 'name'], ['istek', 'request'], ['istemek', 'to want'], ['istenmek', 'to be wanted'], ['iyi', 'good'], ['iyice', 'thoroughly'], ['izin', 'permission'], ['izlemek', 'to watch'], ['iç', 'drink'], ['içeri', 'in'], ['içerisi', 'inside'], ['içermek', 'to contain'], ['için', 'for  '], ['içinde', 'inside'], ['içmek', 'to drink'], ['iş', 'work'], ['işlem', 'process'], ['işlemek', 'handle'], ['işletme', 'business'], ['işte', 'at work'], ['işçi', 'employee'], ['kabul etmek', 'to accept'], ['kadar', 'much'], ['kadın', 'woman'], ['kafa', 'head'], ['kahve', 'coffee'], ['kalan', 'remainder'], ['kaldırmak', 'to pick up'], ['kalite', 'quality'], ['kalkmak', 'to get up'], ['kalmak', 'to stay'], ['kalp', 'heart'], ['kamu', 'public'], ['kan', 'blood'], ['kanal', 'channel'], ['kanun', 'law'], ['kapanmak', 'close up'], ['kapatmak', 'to close'], ['kapı', 'door'], ['karanlık', 'darkness'], ['karar', 'decision'], ['kardeş', 'brother'], ['karı', 'wife'], ['karışmak', 'interfere'], ['karıştırmak', 'to mix up'], ['karşı', 'opposite'], ['karşılamak', 'to meet'], ['karşılaşmak', 'to encounter'], ['karşılık', 'opposite'], ['kas', 'muscle'], ['kat', 'floor'], ['katkı', 'contribution'], ['katılmak', 'to join'], ['kavram', 'concept'], ['kaybetmek', 'to lose'], ['kaynak', 'source'], ['kaza', 'accident'], ['kazanmak', 'to win'], ['kaç', 'how much'], ['kaçmak', 'to escape'], ['kağıt', 'paper'], ['kelime', 'word'], ['kenar', 'edge'], ['kendi', 'own'], ['kent', 'city'], ['kere', 'times'], ['kesilmek', 'to be cut off'], ['kesim', 'cut'], ['kesin', 'definite'], ['kesmek', 'to cut'], ['kez', 'times'], ['ki', 'that'], ['kilo', 'kilo'], ['kim', 'who'], ['kimi', 'who'], ['kimlik', 'identity'], ['kimse', 'no-one'], ['kitap', 'book'], ['kişi', 'person'], ['koca', 'husband'], ['koku', 'smell'], ['kol', 'arm'], ['kolay', 'easy'], ['koltuk', 'armchair'], ['kontrol', 'control'], ['konu', 'subject'], ['konuşmak', 'to talk'], ['korkmak', 'to be scared'], ['korku', 'fear'], ['korumak', 'to protect'], ['koymak', 'to put'], ['koşmak', 'to run'], ['koşul', 'condition'], ['kredi', 'credit'], ['kriz', 'crisis'], ['kulak', 'ear'], ['kullanmak', 'to use'], ['kullanılmak', 'to be used'], ['kullanım', 'use'], ['kural', 'rule'], ['kurmak', 'to create'], ['kurtarmak', 'to save'], ['kurtulmak', 'to be saved'], ['kurulmak', 'to be established'], ['kuruluş', 'establishment'], ['kurum', 'organisation'], ['köpek', 'dog'], ['kötü', 'bad'], ['köy', 'village'], ['köşe', 'corner'], ['kültür', 'culture'], ['küçük', 'small'], ['kılmak', 'make'], ['kırmızı', 'red'], ['kısa', 'short'], ['kısaca', 'briefly'], ['kısım', 'part'], ['kız', 'girl'], ['laf', 'word'], ['lazım', 'required'], ['lira', 'lira'], ['madde', 'article'], ['mahalle', 'neighbourhood'], ['makine', 'machine'], ['mal', 'goods'], ['malzeme', 'material'], ['marka', 'brand'], ['masa', 'table'], ['maç', 'match'], ['mağaza', 'shopping centre'], ['meclis', 'council'], ['medya', 'media'], ['mektup', 'letter'], ['mekân', 'space'], ['merkez', 'centre'], ['mesela', 'for example'], ['mesele', 'issue'], ['meslek', 'job'], ['metre', 'metre'], ['mevcut', 'available'], ['meydan', 'square '], ['meyve', 'fruit'], ['miktar', 'amount'], ['millet', 'people'], ['milyar', 'billion'], ['milyon', 'million'], ['model', 'model'], ['modern', 'modern'], ['mutfak', 'kitchen'], ['mutlaka', 'definitely'], ['mücadele', 'struggle'], ['müdür', 'manager'], ['mümkün', 'possible'], ['müzik', 'music'], ['müşteri', 'customer'], ['nasıl', 'how'], ['ne', 'what'], ['neden', 'why'], ['nerede', 'where'], ['neredeyse', 'almost'], ['nitelik', 'qualification'], ['niye', 'why'], ['nokta', 'point'], ['normal', 'normal'], ['numara', 'number'], ['o', 'he'], ['oda', 'room'], ['okul', 'school'], ['okumak', 'to read'], ['okur', 'reader'], ['olanak', 'opportunity'], ['olay', 'event'], ['oldukça', 'increasingly'], ['olma', 'being'], ['olmak', 'to be'], ['oluşmak', 'to consist of'], ['oluşturmak', 'to create'], ['on', ' ten'], ['onlar', 'them'], ['onun', 'his'], ['ora', 'there'], ['orada', 'there'], ['oran', 'ratio'], ['organ', 'organ'], ['orman', 'forest'], ['orta', 'middle'], ['ortak', 'partner'], ['ortam', 'environment'], ['otel', 'hotel'], ['otobüs', 'bus'], ['otomobil', 'car'], ['oturmak', 'to sit'], ['oynamak', 'play'], ['oysa', 'whereas'], ['oyun', 'game'], ['oğul', 'son'], ['para', 'money'], ['parmak', 'finger'], ['parti', 'party'], ['parça', 'piece'], ['paylaşmak', 'to share'], ['pazar', 'Sunday'], ['paşa', 'pasha'], ['pek', 'much'], ['peki', 'alright'], ['pencere', 'window'], ['piyasa', 'market'], ['plan', 'plan'], ['polis', 'police'], ['politika', 'policy'], ['problem', 'problem'], ['program', 'program'], ['proje', 'project'], ['rahat', 'comfortable'], ['rağmen', 'despite'], ['reklam', 'advert'], ['renk', 'colour'], ['resim', 'picture'], ['risk', 'risk'], ['rol', 'role'], ['roman', 'novel'], ['ruh', 'soul'], ['rüzgar', 'wind'], ['saat', 'hour'], ['sabah', 'morning'], ['sadece', 'only'], ['sahip olmak', 'to have'], ['sahip', 'owner'], ['sahne', 'scene'], ['salon', 'lounge'], ['sana', 'to you'], ['sanat', 'art'], ['sanatçı', 'artist'], ['sanayi', 'industry'], ['sanki', 'as if'], ['sanmak', 'to think'], ['satmak', 'to sell'], ['satın almak', 'to buy'], ['satış', 'sales'], ['savaş', 'war'], ['saye', 'thanks to'], ['sayfa', 'page'], ['saygı', 'respect'], ['saymak', 'to count'], ['sayı', 'number'], ['sayılmak', 'to be counted'], ['saç', 'hair'], ['sağ', 'right'], ['sağlamak', 'to ensure'], ['sağlanmak', 'to be provided'], ['sağlık', 'health'], ['sağlıklı', 'healthy'], ['sebep', 'reason'], ['sektör', 'sector'], ['sen', 'you'], ['sene', 'year'], ['sert', 'hard'], ['servis', 'service'], ['ses', 'sound'], ['sevgi', 'love'], ['sevgili', 'beloved'], ['sevmek', 'to love'], ['seyretmek', 'to watch'], ['seçim', 'vote'], ['seçmek', 'to choose'], ['sigara', 'cigarette'], ['sigorta', 'insurance'], ['silah', 'weapon'], ['sinema', 'cinema'], ['sistem', 'system'], ['site', 'site'], ['siz', 'you'], ['sokak', 'street'], ['sokmak', 'sting'], ['sol', 'left'], ['son derece', 'extremely'], ['son', 'last'], ['sonra', 'later'], ['sonunda', 'finally'], ['sonuç', 'conclusion'], ['sormak', 'to ask'], ['soru', 'question'], ['sorumluluk', 'responsibility'], ['sorun', 'problem'], ['sosyal', 'social'], ['soğuk', 'cold'], ['spor', 'sport'], ['su', ' water'], ['sunmak', 'to present'], ['sunulmak', 'to be presented'], ['suç', 'crime'], ['söylemek', 'to say'], ['söylenmek', 'to grumble'], ['söz etmek', 'speak of'], ['söz', 'promise'], ['sözcük', 'word'], ['sürdürmek', 'to continue'], ['süre', 'duration'], ['sürekli', 'continually'], ['süreç', 'period'], ['sürmek', 'to spread'], ['sürücü', 'driver'], ['süt', 'milk'], ['sıcak', 'hot'], ['sıcaklık', 'heat'], ['sıkıntı', 'problem'], ['sınıf', 'class'], ['sınır', 'border'], ['sıra', 'order '], ['sırt', 'back'], ['tabi', 'subject to'], ['takılmak', 'to hang around'], ['takım', 'team'], ['talep', 'request'], ['tam', 'full'], ['tamam', 'ok'], ['tamamen', 'completely'], ['tane', 'unit'], ['tanımak', 'to recognise'], ['taraf', 'side'], ['tarih', 'history'], ['tarz', 'style'], ['tatlı', 'sweet'], ['tavır', 'attitude'], ['taş', 'stone'], ['taşımak', 'to carry'], ['tedavi', 'treatment'], ['tehlike', 'danger'], ['tek', 'only'], ['teknik', 'technical'], ['teknoloji', 'technology'], ['tekrar', 'again'], ['telefon', 'telephone'], ['televizyon', 'television'], ['temel', 'basis'], ['temiz', 'clean'], ['tepki', 'reaction'], ['tercih etmek', 'to prefer'], ['ticaret', 'trade'], ['tip', 'type'], ['top', 'ball'], ['toplam', 'total'], ['toplamak', 'to collect'], ['toplanmak', 'collect'], ['toplantı', 'meeting'], ['toplum', 'society'], ['toplumsal', 'social'], ['toprak', 'soil'], ['trafik', 'traffic'], ['tutmak', 'to hold'], ['tutulmak', 'to be held'], ['tuz', 'salt'], ['tüketici', 'consumer'], ['tüm', 'all'], ['tür', 'type'], ['türlü', 'kinds'], ['ulaşmak', 'to reach'], ['uluslararası', 'international'], ['unutmak', 'to forget'], ['uygulama', 'application'], ['uygulamak', 'to apply'], ['uygulanmak', 'to be implemented'], ['uygun', 'suitable'], ['uymak', 'to suit'], ['uyumak', 'to sleep'], ['uzak', 'far'], ['uzanmak', 'to lie down'], ['uzatmak', 'to lengthen'], ['uzman', 'expert'], ['uzun', 'long'], ['uç', 'fly'], ['uçak', 'aeroplane'], ['uğraşmak', 'to strive'], ['vakit', 'time'], ['var', 'there is'], ['varlık', 'presence'], ['varmak', 'to arrive'], ['vatandaş', 'citizen'], ['ve', 'and'], ['vergi', 'tax'], ['verilmek', 'to be given'], ['vermek', 'to give'], ['veya', 'or '], ['vitamin', 'vitamin'], ['vurmak', 'hit'], ['vücut', 'body'], ['ya', 'either'], ['yabancı', 'foreign'], ['yakalamak', 'to capture'], ['yaklaşmak', 'approach'], ['yaklaşık', 'approximately'], ['yakmak', 'burn'], ['yakın', 'close'], ['yalnız', 'only'], ['yalnızca', 'just'], ['yan', 'side'], ['yani', 'well'], ['yanlış', 'wrong'], ['yanmak', 'burn'], ['yanı sıra', 'as well as'], ['yanıt', 'response'], ['yapmak', 'to do'], ['yaprak', 'leaf'], ['yaptırmak', 'to have done'], ['yapı', 'structure'], ['yapılmak', 'be done'], ['yarar', 'benefit'], ['yararlanmak', 'benefit'], ['yaratmak', 'create'], ['yardım', 'help'], ['yardımcı olmak', 'help'], ['yarı', 'half'], ['yasa', 'law'], ['yatak', 'bed '], ['yatmak', 'to lie down'], ['yatırım', 'investment'], ['yavaş', 'slow'], ['yayılmak', 'spread'], ['yayımlanmak', 'to be published'], ['yayın', 'broadcasting'], ['yaz', 'summer'], ['yazar', 'writer'], ['yazmak', 'to write'], ['yazı', 'writing'], ['yazılmak', 'to be written'], ['yağ', 'oil'], ['yaş', 'age'], ['yaşam', 'life'], ['yaşamak', 'to live'], ['yaşanmak', 'to be experienced'], ['yaşlı', 'old'], ['yedi', 'seven'], ['yemek', 'food'], ['yeni', 'new'], ['yeniden', 'again  '], ['yer', 'place'], ['yerine', 'in its place'], ['yetenek', 'talent'], ['yeterli', 'sufficient'], ['yetmek', 'be enough'], ['yeşil', 'green'], ['yine', 'again'], ['yok', 'no'], ['yoksa', 'or?'], ['yol', 'path'], ['yoğun', 'busy'], ['yukarıda', 'above'], ['yumurta', 'egg'], ['yön', 'direction'], ['yönelik', 'aimed at'], ['yönetici', 'executive'], ['yönetim', 'management'], ['yöntem', 'method'], ['yüksek', 'high'], ['yükselmek', 'rise'], ['yürek', 'heart'], ['yürümek', 'to walk'], ['yüz', 'face'], ['yüzde', 'percentage'], ['yüzden', "that's why"], ['yüzyıl', 'century'], ['yüzünden', 'because'], ['yıl', 'year'], ['yıldız', 'star'], ['yıllık', 'annual'], ['zaman', 'time'], ['zarar', 'damage'], ['zaten', 'already'], ['zengin', 'rich'], ['zevk', 'pleasure'], ['zor', 'difficult'], ['Çok', 'a lot'], ['çaba', 'effort'], ['çalmak', 'to play'], ['çalışma', 'study'], ['çalışmak', 'to work'], ['çay', 'tea'], ['çağ', 'era'], ['çekilmek', 'withdraw'], ['çekmek', 'to pull'], ['çerçeve', 'frame'], ['çevirmek', 'turn'], ['çevre', 'environment'], ['çeşit', 'sort'], ['çeşitli', 'various'], ['çizgi', 'line'], ['çizmek', 'to draw'], ['çiçek', 'flower'], ['çocuk', 'child'], ['çoğu', 'most'], ['çözüm', 'solution'], ['çünkü', 'because'], ['çıkar', 'interest'], ['çıkarmak', 'subtract'], ['çıkarılmak', 'be removed'], ['çıkmak', 'to leave'], ['ödemek', 'pay'], ['öldürmek', 'kill'], ['ölmek', 'to die'], ['ölçü', 'measurement'], ['ölüm', 'death'], ['ön', 'front'], ['önce', 'before'], ['önem', 'importance'], ['önemli', 'important'], ['örgüt', 'organization'], ['örnek', 'example'], ['örneğin', 'for example'], ['öte', 'beyond'], ['öteki', 'other'], ['öykü', 'story'], ['öyle', 'like that'], ['özel', 'special'], ['özellik', 'feature'], ['özellikle', 'especially'], ['özgürlük', 'freedom'], ['öğrenci', 'student'], ['öğrenmek', 'to learn'], ['öğretmen', 'teacher'], ['ücret', 'fee'], ['ülke', 'country'], ['üniversite', 'university'], ['ünlü', 'famous'], ['üretilmek', 'to be produced'], ['üretim', 'production'], ['üretmek', 'to produce'], ['ürün', 'product'], ['üst', 'top'], ['üstelik', 'besides'], ['üstünde', 'above'], ['üstüne', 'over'], ['üye', 'member'], ['üzere', 'about'], ['üzeri', 'above'], ['üzerinde', 'on'], ['üzerine', 'over'], ['üç', 'fly'], ['üçüncü', 'third'], ['ışık', 'light'], ['şarap', 'wine'], ['şarkı', 'song'], ['şart', 'condition'], ['şehir', 'city'], ['şekil', 'shape'], ['şey', 'thing'], ['şiir', 'poem'], ['şimdi', 'now'], ['şirket', 'company '], ['şu', 'this'], ['şöyle', 'like this']]

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
    for (index of randomIndexes) {
        let wordPair = words[index];
        eightWords.push(wordPair[0]);
        eightWords.push(wordPair[1]);
    }
    //shuffling eightWords
    shuffle(eightWords);

    //arranging eightWords onto cards
    const cards = [1,2,3,4,5,6,7,8];
    for (card of cards) {
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
            if ((words.some(pair => (pair[0] === document.getElementById(selectedCards[0]).children[0].innerHTML && pair[1] === document.getElementById(selectedCards[1]).children[0].innerHTML) || (pair[1] === document.getElementById(selectedCards[0]).children[0].innerHTML && pair[0] === document.getElementById(selectedCards[1]).children[0].innerHTML)))) {
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
