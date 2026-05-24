interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

export const contactEmailTemplate = ({
  name,
  email,
  phone,
  businessType,
  message,
}: ContactEmailProps): string => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Request</title>
    </head>

    <body
      style="margin:0;padding:20px;background-color:#f8f9fa;font-family:Arial,sans-serif;"
    >

      <table
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
      >
        <tr>
          <td align="center">

            <table
              width="600"
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="background:#ffffff;border-radius:8px;overflow:hidden;"
            >

              <!-- Header -->
              <tr>
                <td
                  align="center"
                  style="padding:30px 20px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;"
                >
                  <h1
                    style="margin:0;font-size:28px;font-weight:bold;line-height:36px;"
                  >
                    New Contact Request
                  </h1>

                  <p
                    style="margin:10px 0 0;font-size:14px;opacity:0.9;"
                  >
                    From your Protonity website
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td
                  style="background:#f8f9fa;padding:30px 20px;"
                >

                  <p
                    style="font-size:16px;color:#333333;margin:0 0 20px;"
                  >
                    You have received a new contact enquiry:
                  </p>

                  <!-- User Details -->
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background:#ffffff;border:1px solid #e0e0e0;border-radius:6px;padding:20px;margin-bottom:20px;"
                  >

                    <tr>
                      <td style="padding:0 0 12px;color:#555555;">
                        <strong style="color:#667eea;">Name:</strong>
                        ${name}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 0 12px;color:#555555;">
                        <strong style="color:#667eea;">Email:</strong>
                        <a
                          href="mailto:${email}"
                          style="color:#667eea;text-decoration:none;"
                        >
                          ${email}
                        </a>
                      </td>
                    </tr>

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
                        <strong style="color:#667eea;">Business Type:</strong>
                        ${businessType}
                      </td>
                    </tr>

                  </table>

                  <!-- Message -->
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background:#f0f4ff;border:1px solid #d4deff;border-radius:6px;padding:15px;margin-bottom:20px;"
                  >

                    <tr>
                      <td>

                        <p
                          style="margin:0 0 10px;color:#333333;"
                        >
                          <strong style="color:#667eea;">
                            Message:
                          </strong>
                        </p>

                        <p
                          style="margin:0;color:#555555;line-height:1.6;white-space:pre-wrap;word-break:break-word;"
                        >
                          ${message}
                        </p>

                      </td>
                    </tr>

                  </table>

                  <!-- Alert -->
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background:#fff3cd;border:1px solid #ffc107;border-radius:6px;padding:15px;margin-bottom:20px;"
                  >

                    <tr>
                      <td
                        style="color:#856404;font-size:14px;"
                      >
                        💡 <strong>Action Required:</strong>
                        Please respond to this inquiry within 2 hours.
                      </td>
                    </tr>

                  </table>

                  <!-- Footer -->
                  <p
                    style="font-size:12px;color:#999999;text-align:center;margin-top:30px;border-top:1px solid #e0e0e0;padding-top:20px;"
                  >
                    This email was sent from your Protonity website contact form.
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