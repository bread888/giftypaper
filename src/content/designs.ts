export type DesignKit = {
    id: string;
    title: string;
    description: string;
    detail: string;
    pdf: string;
    previewImage?: string;
    previewVisible?: boolean;
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
        id: 'fdp',
        title: 'Festa del Papà 2026',
        description: 'Dal blu elettrico dell’alba al riflesso azzurro del tramonto: una collezione dedicata al papà che pensa oltre il regalo.',
        tag: 'Festa del Papà',
        tagVariant: 'alt',
        kits: [
            {
                id: 'super-dad-kit',
                title: 'SUPER DAD',
                description:
                    'Questa carta da regalo celebra la forza e il coraggio con un design dinamico e impattante. Una scelta perfetta per chi desidera trasformare un semplice dono in un tributo speciale per una persona straordinaria.',
                pdf: '',
                previewImage: '/desing-previews/superdad.png',
                previewVisible: true,
                password: 'design2026',
            },
            {
                id: 'best-dad-kit',
                title: 'BEST DAD',
                description:
                    'Questa grafica simbolezza la paternità: il momento in cui una mano più grande stringe una più piccola, promettendo protezione e amore eterno.',
                pdf: '',
                previewImage: '/desing-previews/valigetta.png',
                previewVisible: true,
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
            {
                id: 'ciligiesenzapuntini',
                title: 'cherry crush',
                description:
                    'Porta una ventata di dolcezza ai regali con un pattern che mixa rosso e rosa per creare vibrazioni gioiose.',
                detail: '',
                pdf: '/ciligiesenzapuntini.pdf',
                previewImage: '/desing-previews/ciliegie.png',
                previewVisible: true,
                password: 'design2026',
            },
            {
                id: 'doppiocuore',
                title: 'lovely cloud',
                description: 'Rossi profondi e rosa accesi si incontrano in un design che celebra l’amore in tutte le sue sfumature.',
                detail: '',
                pdf: '/doppiocuore.pdf',
                previewImage: '/desing-previews/doppiocuore.png',
                previewVisible: true,
                password: 'design2026',
            },
            {
                id: 'lollipopgrafica',
                title: 'lolly-love',
                description:
                    'Dolce come una caramella e vivace come una festa: il cuore diventa un lecca-lecca bubblegum.',
                detail: '',
                pdf: '/lollipopgrafica-1.pdf',
                previewImage: '/desing-previews/lollipop.png',
                previewVisible: true,
                password: 'design2026',
            },
        ],
    },
];
