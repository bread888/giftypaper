/**
 * Aggiorna i testi sotto con le descrizioni che recupererai da `public/Catalogo.jpeg` appena disponibile.
 * Mantieni i PDF nello stesso percorso per evitare rotture nei riferimenti.
 */
export type DesignKit = {
    id: string;
    title: string;
    description: string;
    detail: string;
    pdf: string;
};

export const designKits: DesignKit[] = [
    {
        id: 'rituale-rosa',
        title: 'Rituale Rosa',
        description:
            'Carta vellutata con rilievi metallici, pensata per collezioni romantiche e rituali serali.',
        detail: 'Scarica il PDF protetto per il kit completo e contattaci per abilitare la stampa in tiratura limitata.',
        pdf: '/designs/kit-rituale-rosa.pdf',
    },
    {
        id: 'luce-di-borgo',
        title: 'Luce di Borgo',
        description:
            'Due tonalità di rosa tenue si intrecciano con accenti provenienti dal catalogo invernale per raccontare una storia urbana.',
        detail: 'Il PDF include le varianti di piegatura e suggerimenti di packaging, tutti con watermark GiftyPaper.',
        pdf: '/designs/kit-luce-di-borgo.pdf',
    },
    {
        id: 'ombre-dinchiostro',
        title: 'Ombre d’Inchiostro',
        description:
            'Composizioni grafiche che si declinano su carta certificata FSC, ideali per proposte gifting d’impatto.',
        detail:
            'I file PDF pubblicati restano protetti da watermark e accessibili solo per consultazione: scrivici per ricevere il file completo.',
        pdf: '/designs/kit-ombre-dinchiostro.pdf',
    },
];
