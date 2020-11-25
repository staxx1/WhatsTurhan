/* Copyright (C) 2020 Staxx.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsTurhan - Staxx
*/

const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./whatsturhan/');
const fs = require('fs');

async function whatsTurhan () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Turhan')}
${chalk.white.italic('TurhanString Kodu Alıcı')}

${chalk.blue.italic('ℹ️  WhatsApp\'a bağlanılıyor... Lütfen bekleyin.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Turhan String Kodunuz: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `
Turhan_SESSION="${st}"
            `);
        }

        console.log(
            chalk.blue.bold('Locale kuruyorsanız node bot.js ile botu başlatabilirsiniz.')
        );
        process.exit(0);
    });

    await conn.connect();
}

whatsTurhan()