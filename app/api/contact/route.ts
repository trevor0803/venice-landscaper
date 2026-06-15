import { NextRequest, NextResponse } from "next/server";

// Lead intake endpoint.
// TODO: wire to a CRM / email service (e.g. GoHighLevel webhook, Resend, Zapier).
// For now it validates and logs the lead server-side so nothing is lost.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body ?? {};

    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (!emailOk) {
      return NextResponse.json(
        { ok: false, error: "Invalid email." },
        { status: 400 }
      );
    }

    // eslint-disable-next-line no-console
    console.log("[venice-landscape] new lead:", {
      name,
      email,
      phone,
      service: service ?? "(unspecified)",
      message: message ?? "",
      at: new Date().toISOString(),
    });

    // const webhook = process.env.LEAD_WEBHOOK_URL;
    // if (webhook) await fetch(webhook, { method: "POST", body: JSON.stringify(body) });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Bad request." },
      { status: 400 }
    );
  }
}
