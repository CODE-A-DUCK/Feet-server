//for this captcha code by reconlx❤
//reconlx captcha system video: www.youtube.com/watch?v=P5raycFpdcU
//docs by captcha-canvas.js.org


const { Captcha } = require("captcha-canvas");
const { MessageAttachment , MessageEmbed } = require("discord.js");

module.exports = {
    name: "captcha",
    run: async (client, message, args) => {
        const captcha = new Captcha();
        captcha.async = true;
        captcha.addDecoy();
        captcha.drawTrace();
        captcha.drawCaptcha();

        const captchaAttachment = new MessageAttachment(
            await captcha.png, 
            'captcha.png'
            );

            message.channel.send({ 
                files: [captchaAttachment], 
                content: `Captcha Code: ${captcha.text}` });
    },
};
