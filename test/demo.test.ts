import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const baseURL = 'http://localhost:8005';

// Purpose: Run this when you want to populate the web front-end with sample data, e.g. for demo screenshots
test.skip('send emails for demo', async () => {
  const ses = new SESv2Client({
    endpoint: baseURL,
    credentials: { accessKeyId: 'ANY_STRING', secretAccessKey: 'ANY_STRING' },
  });

  await ses.send(new SendEmailCommand({
    FromEmailAddress: 'you@yourapp.com',
    Destination: {
      ToAddresses: ['someone@example.com'],
      BccAddresses: ['internal-distro@yourapp.com'],
    },
    Content: {
      Simple: {
        Subject: { Data: 'Test email sent to aws-ses-v2-local!' },
        Body: {
          Text: { Data: 'Dear Potential User of aws-ses-v2-local,\n\nThanks for your interest in this library! Check out the README to learn how to get up and running in minutes.\n\nThanks,\nAdam' },
        },
      },
    },
  }));

  await ses.send(new SendEmailCommand({
    FromEmailAddress: 'you@yourapp.com',
    Destination: {
      ToAddresses: ['someone@example.com'],
    },
    Content: {
      Simple: {
        Subject: { Data: 'There\'s support for HTML emails, attachments and more' },
        Body: {
          Text: { Data: 'And of course, HTML works!\n\nLorem ipsum dolor sit amet.\n\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.' },
          Html: { Data: '<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table, td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:13px 0;}</style><!--[if mso]> <noscript> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> </noscript><![endif]--><!--[if lte mso 11]> <style type="text/css"> .mj-outlook-group-fix{width:100% !important;}</style><![endif]--><link href="https://fonts.googleapis.com/css?family=Poppins:normal,italic,bold&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Oswald:normal,italic,bold&display=swap" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Poppins:normal,italic,bold&display=swap);@import url(https://fonts.googleapis.com/css?family=Oswald:normal,italic,bold&display=swap);</style><style type="text/css">@media only screen and (min-width:480px){.mj-column-per-100{width:100% !important; max-width: 100%;}}</style><style media="screen and (min-width:480px)">.moz-text-html .mj-column-per-100{width:100% !important; max-width: 100%;}</style><style type="text/css">@media only screen and (max-width:480px){table.mj-full-width-mobile{width: 100% !important;}td.mj-full-width-mobile{width: auto !important;}}</style></head><body style="word-spacing:normal;background-color:#eeeeee;"><div style="background-color:#eeeeee;"><div style="background:#5625F1;background-color:#5625F1;margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#5625F1;background-color:#5625F1;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:30px;padding-bottom:40px;padding-left:30px;padding-right:30px;padding-top:30px;text-align:center;"><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px;word-break:break-word;"><div style="font-family:\'Oswald\', \'Helvetica\', \'Arial\', sans-serif;font-size:24px;line-height:1.375;text-align:left;color:#ffffff;">Your App</div></td></tr><tr><td style="font-size:0px;word-break:break-word;"><div style="height:60px;line-height:60px;">&#8202;</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px;padding-top:10px;padding-right:60px;padding-bottom:30px;padding-left:10px;word-break:break-word;"><div style="font-family:\'Poppins\', \'Helvetica\', \'Arial\', sans-serif;font-size:58px;line-height:1.25;text-align:left;color:#ffffff;"><strong>And of course, HTML works!</strong></div></td></tr><tr><td align="left" style="font-size:0px;padding:10px;word-break:break-word;"><div style="font-family:\'Poppins\', \'Helvetica\', \'Arial\', sans-serif;font-size:24px;line-height:1.5;text-align:left;color:#ffffff;">Lorem ipsum dolor sit amet.<br><br>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</div></td></tr><tr><td style="font-size:0px;word-break:break-word;"><div style="height:30px;line-height:30px;">&#8202;</div></td></tr><tr><td align="center" vertical-align="middle" style="font-size:0px;padding:10px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:100%;line-height:100%;"><tr><td align="center" bgcolor="#ffffff" role="presentation" style="border:none;border-radius:100px;cursor:auto;mso-padding-alt:10px 25px;background:#ffffff;" valign="middle"><p style="display:inline-block;background:#ffffff;color:#3B1D9C;font-family:\'Poppins\', \'Helvetica\', \'Arial\', sans-serif;font-size:24px;font-weight:normal;line-height:1.75;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:100px;"><strong>CLICK ME</strong></p></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div><div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px;padding-bottom:0px;padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;"><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" class="mj-full-width-mobile"><tbody><tr><td style="width:560px;" class="mj-full-width-mobile"><img height="auto" src="https://getvero.s3.amazonaws.com/uploads%2F6f361cb8c6e0b33c89cae59a1d3f944a%2Ffullsize%2F7b72034c-ab13-47aa-b3dd-f24939f3aef9-abstract.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="560"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div><div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:30px;padding-bottom:40px;padding-left:30px;padding-right:30px;padding-top:0px;text-align:center;"><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px;word-break:break-word;"><div style="font-family:\'Poppins\', \'Helvetica\', \'Arial\', sans-serif;font-size:20px;line-height:1.5;text-align:left;color:#3B1D9C;">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.<br><br>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div><div style="background:#09001f;background-color:#09001f;margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#09001f;background-color:#09001f;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px;padding-bottom:0px;padding-left:30px;padding-right:30px;padding-top:0px;text-align:center;"><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:10px 0;padding-top:0px;padding-right:0;padding-bottom:0px;padding-left:0;word-break:break-word;"><p style="border-top:solid 1px #5e5e5e;font-size:1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #5e5e5e;font-size:1px;margin:0px auto;width:540px;" role="presentation" width="540px" ><tr><td style="height:0;line-height:0;"> &nbsp;</td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div><div style="background:#09001f;background-color:#09001f;margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#09001f;background-color:#09001f;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px;padding-bottom:10px;padding-left:30px;padding-right:30px;padding-top:10px;text-align:center;"><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px;word-break:break-word;"><div style="font-family:\'Poppins\', \'Helvetica\', \'Arial\', sans-serif;font-size:14px;line-height:1.5;text-align:left;color:#ffffff;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Proident, sunt in culpa unsubscribe</div></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div><div style="background:#211e1e;background-color:#211e1e;margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#211e1e;background-color:#211e1e;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px;padding-bottom:10px;padding-left:30px;padding-right:30px;padding-top:10px;text-align:center;"><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px;word-break:break-word;"><div style="font-family:\'Poppins\', \'Helvetica\', \'Arial\', sans-serif;font-size:14px;line-height:1.5;text-align:left;color:#ffffff;">Sunt in culpa qui officia deserunt mollit anim id est laborum.</div></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div></div></body></html>' },
        },
      },
    },
  }));
});