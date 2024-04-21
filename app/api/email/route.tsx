import { render } from '@react-email/render'
import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

import { ReactEmail } from '@/components/shared/ReactEmail'

export async function POST(request: NextRequest) {
  const { email, fullName, message } = await request.json()

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:

      host: "smtp.gmail.com",
      port: 465,
      secure: true

      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `[contact] ${fullName}`,
    html: render(
      <ReactEmail fullName={fullName} email={email} message={message} />,
    ),
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent')
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    return NextResponse.json(
      { error: err, message: 'Email failed to send' },
      { status: 500 },
    )
  }
}
