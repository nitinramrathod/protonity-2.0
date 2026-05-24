interface CallbackEmailProps {
  name?: string;
  phone: string;
  reason: string;
}

export const callbackEmailTemplate = ({
  name,
  phone,
  reason,
}: CallbackEmailProps): string => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Callback Request</title>
    </head>

    <body style="margin:0;padding:0;background-color:#f8f9fa;font-family:Arial,sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f8f9fa;padding:20px;">
        <tr>
          <td align="center">

            <table width="600" border="0" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 0 10px rgba(0,0,0,0.05);">

              <!-- Header -->
              <tr>
                <td
                  align="center"
                  style="padding:30px 20px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;"
                >
                  <h1 style="margin:0;font-size:28px;line-height:36px;">
                    📞 Callback Request Received
                  </h1>

                  <p style="margin:10px 0 0;font-size:14px;opacity:0.9;">
                    From your Protonity website
                  </p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding:30px 20px;">

                  <p style="margin:0 0 20px;font-size:16px;color:#333333;">
                    Thank you for requesting a callback. We will contact you shortly.
                  </p>

                  <!-- Details -->
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="border:1px solid #e0e0e0;border-radius:6px;padding:20px;background:#ffffff;"
                  >

                    ${
                      name
                        ? `
                      <tr>
                        <td style="padding:0 0 12px;color:#555555;">
                          <strong style="color:#667eea;">Name:</strong> ${name}
                        </td>
                      </tr>
                    `
                        : ""
                    }

                    <tr>
                      <td style="padding:0 0 12px;color:#555555;">
                        <strong style="color:#667eea;">Phone:</strong>
                        <a
                          href="tel:${phone}"
                          style="color:#667eea;text-decoration:none;"
                        >
                          ${phone}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td style="color:#555555;">
                        <strong style="color:#667eea;">
                          Service Interested In:
                        </strong>
                        ${reason}
                      </td>
                    </tr>

                  </table>

                  <!-- Next Steps -->
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="margin-top:20px;"
                  >
                    <tr>
                      <td
                        style="background:#e8f5e9;border:1px solid #4caf50;border-radius:6px;padding:15px;color:#2e7d32;font-size:14px;"
                      >
                        ✅ <strong>What happens next:</strong>
                        Our sales team will call you within 30 minutes during business hours.
                      </td>
                    </tr>
                  </table>

                  <!-- Tips -->
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="margin-top:20px;"
                  >
                    <tr>
                      <td
                        style="background:#f3e5f5;border:1px solid #9c27b0;border-radius:6px;padding:15px;color:#6a1b9a;font-size:14px;"
                      >
                        <p style="margin:0 0 10px;">
                          <strong>💡 Quick Tips:</strong>
                        </p>

                        <ul style="margin:0;padding-left:20px;">
                          <li>Keep your phone reachable</li>
                          <li>We’ll discuss your requirements</li>
                          <li>Get a personalized solution</li>
                        </ul>
                      </td>
                    </tr>
                  </table>

                  <!-- Contact -->
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="margin-top:20px;"
                  >
                    <tr>
                      <td
                        style="background:#e3f2fd;border:1px solid #2196f3;border-radius:6px;padding:15px;color:#1565c0;font-size:14px;"
                      >
                        <p style="margin:0 0 10px;">
                          <strong>Need help? Contact us anytime:</strong>
                        </p>

                        <p style="margin:0;">
                          📧 Email:
                          <a
                            href="mailto:info@protonity.com"
                            style="color:#1565c0;text-decoration:none;"
                          >
                            info@protonity.com
                          </a>
                          <br />

                          🌐 Website:
                          <a
                            href="https://protonity.com"
                            style="color:#1565c0;text-decoration:none;"
                          >
                            protonity.com
                          </a>
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Footer -->
                  <p
                    style="font-size:12px;color:#999999;text-align:center;margin-top:30px;border-top:1px solid #e0e0e0;padding-top:20px;"
                  >
                    This is an automated email response to your callback request.
                    <br />
                    © 2026 Protonity. All rights reserved.
                  </p>

                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};