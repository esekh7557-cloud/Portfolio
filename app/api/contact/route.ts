export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Integrate with a service like SendGrid, Mailgun, etc.

    // For now, just log it (in production, implement proper email sending)
    console.log('Contact form submission:', data);

    // You can integrate with email services like:
    // - SendGrid
    // - Mailgun
    // - Resend
    // - NodeMailer

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit form' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
