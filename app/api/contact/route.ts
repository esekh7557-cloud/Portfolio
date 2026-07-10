import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'esekh7557@gmail.com';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey === 're_xxxxxxxxx') {
    return NextResponse.json(
      {
        error:
          'Replace re_xxxxxxxxx in .env.local with your real Resend API key.',
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  if (
    !isNonEmptyString(payload.name) ||
    !isNonEmptyString(payload.email) ||
    !isNonEmptyString(payload.message)
  ) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();

  if (name.length > 120 || email.length > 320 || message.length > 5000) {
    return NextResponse.json(
      { error: 'Your message is too long. Please shorten it and try again.' },
      { status: 400 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div>
          <h2>New portfolio contact message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend contact email failed:', error);
      return NextResponse.json(
        { error: 'Resend could not send the message. Check your API key.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Resend contact email failed:', error);
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again.' },
      { status: 502 }
    );
  }
}
