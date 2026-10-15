export type SyllabusItem={id:string;subject:'Hindi Course B'|'Information Technology';code:string;unit:string;chapter:string;topic:string;sourceStatus:'verified-unit'|'provisional-topic';source:string};
const itSource='https://cbseacademic.nic.in/web_material/Curriculum27/Sec/402-IT-X.pdf'; const hindiSource='https://cbseacademic.nic.in/curriculum_2027.html';
export const syllabus:SyllabusItem[]=[
{id:'h-read',subject:'Hindi Course B',code:'085',unit:'कौशल',chapter:'अपठित बोध',topic:'अपठित गद्यांश और पद्यांश',sourceStatus:'provisional-topic',source:hindiSource},
{id:'h-grammar',subject:'Hindi Course B',code:'085',unit:'व्याकरण',chapter:'व्यावहारिक व्याकरण',topic:'व्याकरण अभ्यास — आधिकारिक 2026–27 पाठ्यक्रम से पुष्टि करें',sourceStatus:'provisional-topic',source:hindiSource},
{id:'h-writing',subject:'Hindi Course B',code:'085',unit:'लेखन',chapter:'रचनात्मक लेखन',topic:'लेखन कौशल — आधिकारिक 2026–27 पाठ्यक्रम से पुष्टि करें',sourceStatus:'provisional-topic',source:hindiSource},
{id:'h-sparsh',subject:'Hindi Course B',code:'085',unit:'पाठ्यपुस्तक',chapter:'स्पर्श भाग 2',topic:'निर्धारित गद्य एवं काव्य पाठ (पाठ सूची सत्यापन लंबित)',sourceStatus:'provisional-topic',source:hindiSource},
{id:'h-sanchayan',subject:'Hindi Course B',code:'085',unit:'पूरक पाठ्यपुस्तक',chapter:'संचयन भाग 2',topic:'निर्धारित पाठ (पाठ सूची सत्यापन लंबित)',sourceStatus:'provisional-topic',source:hindiSource},
{id:'it-comm',subject:'Information Technology',code:'402',unit:'Part A · Employability Skills',chapter:'Communication Skills-II',topic:'Communication Skills-II',sourceStatus:'verified-unit',source:itSource},
{id:'it-self',subject:'Information Technology',code:'402',unit:'Part A · Employability Skills',chapter:'Self-Management Skills-II',topic:'Self-Management Skills-II',sourceStatus:'verified-unit',source:itSource},
{id:'it-ict',subject:'Information Technology',code:'402',unit:'Part A · Employability Skills',chapter:'ICT Skills-II',topic:'ICT Skills-II',sourceStatus:'verified-unit',source:itSource},
{id:'it-entre',subject:'Information Technology',code:'402',unit:'Part A · Employability Skills',chapter:'Entrepreneurial Skills-II',topic:'Entrepreneurial Skills-II',sourceStatus:'verified-unit',source:itSource},
{id:'it-green',subject:'Information Technology',code:'402',unit:'Part A · Employability Skills',chapter:'Green Skills-II',topic:'Green Skills-II',sourceStatus:'verified-unit',source:itSource},
{id:'it-writer',subject:'Information Technology',code:'402',unit:'Part B · Subject-Specific Skills',chapter:'Digital Documentation (Advanced)',topic:'LibreOffice Writer',sourceStatus:'verified-unit',source:itSource},
{id:'it-calc',subject:'Information Technology',code:'402',unit:'Part B · Subject-Specific Skills',chapter:'Electronic Spreadsheet (Advanced)',topic:'LibreOffice Calc, formulas and cell references',sourceStatus:'verified-unit',source:itSource},
{id:'it-db',subject:'Information Technology',code:'402',unit:'Part B · Subject-Specific Skills',chapter:'Database Management System',topic:'LibreOffice Base and database concepts',sourceStatus:'verified-unit',source:itSource},
{id:'it-safety',subject:'Information Technology',code:'402',unit:'Part B · Subject-Specific Skills',chapter:'Maintain Healthy, Safe and Secure Working Environment',topic:'Workplace health, safety and security',sourceStatus:'verified-unit',source:itSource}
];
