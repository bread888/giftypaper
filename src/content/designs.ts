export type DesignKit = {
    id: string;
    title: string;
    description: string;
    detail: string;
    pdf: string;
    previewImg: string;
    password: string;
};

export const designKits: DesignKit[] = [
    {
        id: 'xoxo',
        title: 'xoxo vibes',
        description:
		
        'Raffinata ed essenziale. Il fondo rosa antico fa da palcoscenico a un delicato pattern di "XOXO" scritti in un corsivo leggero e sinuoso. È la scelta perfetta per chi vuole dire "ti voglio bene" con uno stile pulito, dolce ma mai scontato',			
        previewImg: '/desing-previews/xoxo.png',
        password: 'xoxosvc26',
    },
    {
        id: 'ciligiesenzapuntini',
        title: 'cherry crush',
        description: 'Porta una ventata di dolcezza ai tuoi regali! Questo pattern gioca con la vivacità del rosso e la morbidezza del rosa per dare una sensazione gioiosa e solare. La grafica con ciliegie e fiocchetti aggiunge quel tocco di allegria e cura che rende ogni dono indimenticabile',
        previewImg: '/desing-previews/ciliegie.png',
        password: 'xoxosvc26',
    },
    {
        id: 'doppiocuore',
        title: 'lovely cloud',
        description: 'Rossi profondi e rosa accesi si incontrano in un design che celebra amore in tutte le sue sfumature. Questa carta regalo rompe gli schemi classici grazie a una fascia diagonale ondulata che crea movimento e un gioco cromatico "inverted". È la scelta ideale per un regalo di San Valentino che vuole essere audace, moderno e pieno di passione.',
        previewImg: '/desing-previews/doppiocuore.png',
        password: 'xoxosvc26',
    },
    {
        id: 'lollipopgrafica',
        title: 'lolly-love',
        description: 'Dolce come una caramella e vivace come una festa! Questa grafica trasforma il classico simbolo del cuore in un goloso lecca-lecca, sparpagliato in modo giocoso su un fondo rosa bubblegum.',
        previewImg: '/desing-previews/lollipop.png',
        password: 'xoxosvc26',
    },
];
