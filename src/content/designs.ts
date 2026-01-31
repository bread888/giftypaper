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
        'Fiori stilizzati, scritte incise con foil rosa e texture vellutate: un design romantico pensato per messaggi dolci e diretti.',			
        previewImg: '/desing-previews/xoxo.png',
        password: 'xoxosvc26',
    },
    {
        id: 'ciligiesenzapuntini',
        title: 'cherry crush',
        description: 'Linee morbide e sfumature di rosso ciliegia creano la cornice perfetta per regali sofisticati.',
        previewImg: '/desing-previews/ciliegie.png',
        password: 'xoxosvc26',
    },
    {
        id: 'doppiocuore',
        title: 'lovely cloud',
        description: 'Cuori intrecciati in contrasto matt/lucido e dettagli dorati disegnano un’idea di lusso avvolgente.',
        previewImg: '/desing-previews/doppiocuore.png',
        password: 'xoxosvc26',
    },
    {
        id: 'lollipopgrafica',
        title: 'lolly-love',
        description: 'Contrasti pop e linee vintage ispirate ai lollipop anni ’70, per regali colorati e memorizzabili.',
        previewImg: '/desing-previews/lollipop.png',
        password: 'xoxosvc26',
    },
];
