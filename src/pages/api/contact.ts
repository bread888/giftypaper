import type { APIRoute } from 'astro';

type ContactPayload = {
    email?: string | null;
    message?: string | null;
    kitCode?: string | null;
};

const SENDGRID_API_KEY = process.env.CONTACT_SENDGRID_API_KEY;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'info@giftypaper.it';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'giftypaper@gmail.com';

const buildRequestBody = (email: string, message: string, kitCode: string) => {
    const kitLine = kitCode ? `Kit richiesto: ${kitCode}` : 'Kit richiesto: non specificato';
    const text = ['Richiesta inviata da:', email, kitLine, '', 'Messaggio:', message].join('\n');

    return {
        personalizations: [
            {
                to: [{ email: TO_EMAIL }],
            },
        ],
        from: {
            email: FROM_EMAIL,
            name: 'Giftypaper',
        },
        reply_to: {
            email,
        },
        subject: 'Nuova richiesta San Valentino',
        content: [
            {
                type: 'text/plain',
                value: text,
            },
        ],
    };
};

const respond = (status: number, body: string) =>
    new Response(body, {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    });

const handlePost: APIRoute = async ({ request }) => {
    if (!SENDGRID_API_KEY) {
        return respond(
            500,
            JSON.stringify({
                error: 'Servizio email non configurato (imposta CONTACT_SENDGRID_API_KEY).',
            })
        );
    }

    let payload: ContactPayload;
    try {
        payload = (await request.json()) as ContactPayload;
    } catch {
        payload = {};
    }

    const email = (payload.email ?? '').trim();
    const message = (payload.message ?? '').trim();
    const kitCode = (payload.kitCode ?? '').trim();

    if (!email || !message) {
        return respond(
            400,
            JSON.stringify({
                error: 'Email e messaggio sono obbligatori.',
            })
        );
    }

    const requestBody = buildRequestBody(email, message, kitCode);

    const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    if (!sendgridResponse.ok) {
        const errorText = await sendgridResponse.text().catch(() => '');
        return respond(
            sendgridResponse.status,
            JSON.stringify({
                error: errorText || 'Errore nella consegna della mail.',
            })
        );
    }

    return respond(
        200,
        JSON.stringify({
            status: 'sent',
        })
    );
};

export const POST: APIRoute = handlePost;
export const post: APIRoute = handlePost;

const handleGet: APIRoute = async () =>
    respond(
        405,
        JSON.stringify({
            error: 'Solo POST è permesso per questo endpoint.',
        })
    );

export const GET: APIRoute = handleGet;
export const get: APIRoute = handleGet;
