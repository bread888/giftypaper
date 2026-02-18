export type DesignKit = {
    id: string;
    title: string;
    description: string;
    detail: string;
    pdf: string;
    previewImg: string;
    password: string;
};

export type DesignCollection = {
    id: string;
    title: string;
    description: string;
    tag: string;
    tagVariant?: string;
    style?: 'love' | 'default';
    kits: DesignKit[];
};

export const designCollections: DesignCollection[] = [
    {
        id: 'fdd',
        title: 'Festa della Donna 2026',
        description: 'Nuove grafiche dedicate alla mimosa e al potere femminile, guardate ma protette dal watermark.',
        tag: 'Nuovi design',
        kits: [
            {
                id: 'kit-mimosa',
                title: 'mimosa',
                description:
                    'Questa grafica celebra la Festa della Donna con raffinatezza. Ideale per chi desidera confezionare un dono con eleganza, puntando sulla tradizione.',
                detail: '',
                pdf: '',
                previewImg: '/desing-previews/mimosa.png',
                password: 'design2026',
            },
            {
                id: 'kit-girl-power',
                title: 'girl pwr',
                description:
                    'Questa grafica rompe gli schemi tradizionali per celebrare la Donna, un manifesto di empowerment che trasforma ogni regalo in un messaggio di orgoglio e determinazione.',
                detail: '',
                pdf: '',
                previewImg: '/desing-previews/girl-power.png',
                password: 'design2026',
            },
        ],
    },
    {
        id: 'love',
        title: 'Collezione Love',
        description: 'La collezione San Valentino vive ora come Love: romantica, intensa e disponibile come secondo livello.',
        tag: 'Collezione Love',
        tagVariant: 'alt',
        style: 'love',
        kits: [
            /*
            {
                id: 'xoxo',
                title: 'xoxo vibes',
                description:
                    'Raffinata ed essenziale. Il fondo rosa antico fa da palcoscenico a un delicato pattern di "XOXO" scritti in corsivo.',
                detail: 'Spazio negativo e lettere sinuose raccontano un amore fatto di silenzi e sussurri.',
                pdf: '/xoxo.pdf',
                previewImg: '/desing-previews/xoxo.png',
                password: 'design2026',
            },
            */
            {
                id: 'ciligiesenzapuntini',
                title: 'cherry crush',
                description:
                    'Porta una ventata di dolcezza ai tuoi regali! Questo pattern gioca con la vivacità del rosso e la morbidezza del rosa per dare una sensazione gioiosa e solare.',
                detail: '',
                pdf: '/ciligiesenzapuntini.pdf',
                previewImg: '/desing-previews/ciliegie.png',
                password: 'design2026',
            },
            {
                id: 'doppiocuore',
                title: 'lovely cloud',
                description:
                    'Rossi profondi e rosa accesi si incontrano in un design che celebra amore in tutte le sue sfumature.',
                detail: '',
                pdf: '/doppiocuore.pdf',
                previewImg: '/desing-previews/doppiocuore.png',
                password: 'design2026',
            },
            {
                id: 'lollipopgrafica',
                title: 'lolly-love',
                description:
                    'Dolce come una caramella e vivace come una festa! Questa grafica trasforma il classico simbolo del cuore in un goloso leccalecca.',
                detail: '',
                pdf: '/lollipopgrafica-1.pdf',
                previewImg: '/desing-previews/lollipop.png',
                password: 'design2026',
            },
        ],
    },
];
